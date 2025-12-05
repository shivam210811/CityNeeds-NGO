// components/ThreeJS/InteractiveEarth.jsx
import { useRef, useEffect } from 'react';
import * as THREE from 'three';
import { OrbitControls } from 'three/examples/jsm/controls/OrbitControls';
import gsap from 'gsap';

const InteractiveEarth = () => {
  const containerRef = useRef(null);
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    if (!containerRef.current || !canvasRef.current) return;

    // Scene setup
    const scene = new THREE.Scene();
    const camera = new THREE.PerspectiveCamera(
      45,
      containerRef.current.clientWidth / containerRef.current.clientHeight,
      0.1,
      1000
    );
    
    const renderer = new THREE.WebGLRenderer({ 
      canvas: canvasRef.current,
      alpha: true,
      antialias: true 
    });

    renderer.setSize(
      containerRef.current.clientWidth,
      containerRef.current.clientHeight
    );
    renderer.setPixelRatio(Math.min(window.devicePixelRatio, 2));

    // Orbit controls
    const controls = new OrbitControls(camera, renderer.domElement);
    controls.enableDamping = true;
    controls.dampingFactor = 0.05;
    controls.enableZoom = true;
    controls.autoRotate = true;
    controls.autoRotateSpeed = 0.5;
    controls.minDistance = 3;
    controls.maxDistance = 10;

    // Create Earth sphere
    const geometry = new THREE.SphereGeometry(1.5, 64, 64);
    
    // Create custom material with gradient
    const material = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        color1: { value: new THREE.Color('#0ea5e9') },
        color2: { value: new THREE.Color('#8b5cf6') }
      },
      vertexShader: `
        varying vec2 vUv;
        varying vec3 vNormal;
        void main() {
          vUv = uv;
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 color1;
        uniform vec3 color2;
        varying vec2 vUv;
        varying vec3 vNormal;
        
        void main() {
          float gradient = vUv.y;
          vec3 color = mix(color1, color2, gradient);
          
          // Add some noise for texture
          float noise = sin(vUv.x * 10.0 + time) * 0.1;
          color += noise;
          
          // Add lighting effect
          float light = dot(vNormal, vec3(0.0, 0.0, 1.0));
          color *= 0.7 + 0.3 * light;
          
          gl_FragColor = vec4(color, 1.0);
        }
      `
    });

    const earth = new THREE.Mesh(geometry, material);
    scene.add(earth);

    // Add atmospheric glow
    const glowGeometry = new THREE.SphereGeometry(1.6, 64, 64);
    const glowMaterial = new THREE.ShaderMaterial({
      uniforms: {
        time: { value: 0 },
        glowColor: { value: new THREE.Color('#0ea5e9') }
      },
      vertexShader: `
        varying vec3 vNormal;
        void main() {
          vNormal = normalize(normalMatrix * normal);
          gl_Position = projectionMatrix * modelViewMatrix * vec4(position, 1.0);
        }
      `,
      fragmentShader: `
        uniform float time;
        uniform vec3 glowColor;
        varying vec3 vNormal;
        
        void main() {
          float intensity = pow(1.5 - dot(vNormal, vec3(0.0, 0.0, 1.0)), 2.0);
          float pulse = sin(time * 2.0) * 0.1 + 0.9;
          gl_FragColor = vec4(glowColor, intensity * 0.3 * pulse);
        }
      `,
      transparent: true,
      side: THREE.BackSide
    });

    const glow = new THREE.Mesh(glowGeometry, glowMaterial);
    scene.add(glow);

    // Add points for cities/NGO locations
    const pointsGeometry = new THREE.BufferGeometry();
    const pointsCount = 50;
    const pointsPositions = new Float32Array(pointsCount * 3);

    for (let i = 0; i < pointsCount * 3; i += 3) {
      const phi = Math.acos(-1 + (2 * i) / pointsCount);
      const theta = Math.sqrt(pointsCount * Math.PI) * phi;
      
      pointsPositions[i] = 1.7 * Math.sin(phi) * Math.cos(theta);
      pointsPositions[i + 1] = 1.7 * Math.sin(phi) * Math.sin(theta);
      pointsPositions[i + 2] = 1.7 * Math.cos(phi);
    }

    pointsGeometry.setAttribute('position', new THREE.BufferAttribute(pointsPositions, 3));
    
    const pointsMaterial = new THREE.PointsMaterial({
      color: '#ffffff',
      size: 0.05,
      transparent: true,
      opacity: 0.8,
      blending: THREE.AdditiveBlending
    });

    const points = new THREE.Points(pointsGeometry, pointsMaterial);
    scene.add(points);

    // Lighting
    const ambientLight = new THREE.AmbientLight(0xffffff, 0.5);
    scene.add(ambientLight);

    const directionalLight = new THREE.DirectionalLight(0xffffff, 1);
    directionalLight.position.set(5, 3, 5);
    scene.add(directionalLight);

    camera.position.z = 6;

    // GSAP animations
    const tl = gsap.timeline({ paused: true });
    tl.to(earth.rotation, {
      y: Math.PI * 2,
      duration: 20,
      ease: "none",
      repeat: -1
    });

    tl.play();

    // Mouse interaction
    let isHovered = false;

    const handleMouseEnter = () => {
      isHovered = true;
      gsap.to(controls, {
        autoRotateSpeed: 2,
        duration: 0.5
      });
      gsap.to(earth.scale, {
        x: 1.1,
        y: 1.1,
        z: 1.1,
        duration: 0.5,
        ease: "back.out(1.7)"
      });
    };

    const handleMouseLeave = () => {
      isHovered = false;
      gsap.to(controls, {
        autoRotateSpeed: 0.5,
        duration: 0.5
      });
      gsap.to(earth.scale, {
        x: 1,
        y: 1,
        z: 1,
        duration: 0.5
      });
    };

    containerRef.current.addEventListener('mouseenter', handleMouseEnter);
    containerRef.current.addEventListener('mouseleave', handleMouseLeave);

    // Animation loop
    const clock = new THREE.Clock();
    
    const animate = () => {
      const elapsedTime = clock.getElapsedTime();
      
      material.uniforms.time.value = elapsedTime;
      glowMaterial.uniforms.time.value = elapsedTime;
      
      if (!isHovered) {
        earth.rotation.y += 0.001;
      }
      
      glow.rotation.y = earth.rotation.y;
      points.rotation.y = earth.rotation.y;
      
      controls.update();
      renderer.render(scene, camera);
      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Handle resize
    const handleResize = () => {
      if (!containerRef.current) return;
      
      camera.aspect = containerRef.current.clientWidth / containerRef.current.clientHeight;
      camera.updateProjectionMatrix();
      renderer.setSize(
        containerRef.current.clientWidth,
        containerRef.current.clientHeight
      );
    };

    window.addEventListener('resize', handleResize);

    return () => {
      window.removeEventListener('resize', handleResize);
      containerRef.current?.removeEventListener('mouseenter', handleMouseEnter);
      containerRef.current?.removeEventListener('mouseleave', handleMouseLeave);
      
      cancelAnimationFrame(animationRef.current);
      controls.dispose();
      renderer.dispose();
      geometry.dispose();
      material.dispose();
      glowGeometry.dispose();
      glowMaterial.dispose();
      pointsGeometry.dispose();
      pointsMaterial.dispose();
    };
  }, []);

  return (
    <div 
      ref={containerRef} 
      className="relative w-full h-full cursor-grab active:cursor-grabbing"
      style={{ minHeight: '400px' }}
    >
      <canvas ref={canvasRef} className="w-full h-full" />
    </div>
  );
};

export default InteractiveEarth;