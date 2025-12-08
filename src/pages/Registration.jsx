// src/pages/Registration.jsx
import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { toast } from 'react-hot-toast';
import { 
  Users, 
  User, 
  Heart, 
  Building, 
  Mail, 
  Phone, 
  Calendar, 
  Clock, 
  MapPin, 
  ChevronRight,
  BookOpen,
  Briefcase,
  GraduationCap,
  CheckCircle,
  Globe,
  FileText
} from 'lucide-react';

const Registration = () => {
  const [activeTab, setActiveTab] = useState('visitor');
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [registrationCount, setRegistrationCount] = useState({
    ngos: 142,
    visitors: 8567,
    volunteers: 324
  });

  const { register, handleSubmit, reset, watch, formState: { errors } } = useForm();
  const watchRegistrationType = watch('registrationType', 'visitor');

  useEffect(() => {
    // Update active tab when registration type changes
    if (watchRegistrationType) {
      setActiveTab(watchRegistrationType);
    }
  }, [watchRegistrationType]);

  const tabs = [
    { id: 'visitor', label: 'Visitor/Donor', icon: User, color: 'from-blue-500 to-blue-600' },
    { id: 'ngo', label: 'NGO Participation', icon: Building, color: 'from-purple-500 to-purple-600' },
    { id: 'volunteer', label: 'Volunteer/Student', icon: Heart, color: 'from-green-500 to-green-600' },
  ];

  const focusAreas = [
    'Education',
    'Healthcare',
    'Environment',
    'Women Empowerment',
    'Child Welfare',
    'Rural Development',
    'Disability Support',
    'Animal Welfare',
    'Skill Development',
    'Other'
  ];

  const volunteerRoles = [
    'Registration Desk',
    'Information Booth',
    'Event Coordination',
    'Speaker Support',
    'Technical Support',
    'Logistics & Setup',
    'Crowd Management',
    'Photography/Videography',
    'Social Media',
    'First Aid Support'
  ];

  const timeSlots = [
    '9:00 AM - 12:00 PM',
    '12:00 PM - 3:00 PM',
    '3:00 PM - 6:00 PM',
    'Full Day (9:00 AM - 6:00 PM)',
    'Multiple Days'
  ];

  const handleFormSubmit = async (data) => {
    setIsSubmitting(true);
    
    try {
      // Simulate API call
      await new Promise(resolve => setTimeout(resolve, 1500));
      
      // Update registration counts
      setRegistrationCount(prev => ({
        ...prev,
        [data.registrationType]: prev[data.registrationType] + 1
      }));

      toast.success(
        <div className="flex items-center gap-3">
          <CheckCircle className="w-6 h-6 text-green-500" />
          <div>
            <p className="font-semibold">Registration Successful!</p>
            <p className="text-sm opacity-90">We've sent a confirmation email to {data.email}</p>
          </div>
        </div>,
        { duration: 5000 }
      );
      
      reset();
      
      // Log registration data (In real app, send to backend)
      console.log('Registration Data:', data);
      
    } catch (error) {
      toast.error('Registration failed. Please try again.');
    } finally {
      setIsSubmitting(false);
    }
  };

  const RegistrationStats = () => (
    <div className="bg-gradient-to-r from-blue-50 to-purple-50 rounded-2xl p-6 mb-8">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Live Registration Stats</h3>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-blue-100 rounded-lg flex items-center justify-center">
              <Building className="w-5 h-5 text-blue-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{registrationCount.ngos}+</div>
              <div className="text-sm text-gray-600">NGOs Registered</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-purple-100 rounded-lg flex items-center justify-center">
              <Users className="w-5 h-5 text-purple-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{registrationCount.visitors}+</div>
              <div className="text-sm text-gray-600">Visitors Registered</div>
            </div>
          </div>
        </div>
        
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-center gap-3 mb-2">
            <div className="w-10 h-10 bg-green-100 rounded-lg flex items-center justify-center">
              <Heart className="w-5 h-5 text-green-600" />
            </div>
            <div>
              <div className="text-2xl font-bold text-gray-900">{registrationCount.volunteers}+</div>
              <div className="text-sm text-gray-600">Volunteers Joined</div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <div className="pt-20 min-h-screen bg-gradient-to-b from-blue-50/30 to-white">
      <div className="container px-4 py-12">
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto mb-12">
          <h1 className="text-4xl md:text-5xl font-bold text-gray-900 mb-6">
            Register for <span className="bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">CityNeeds Help Locally</span>
          </h1>
          <p className="text-xl text-gray-600">
            Join India's largest gathering of NGOs, donors, and changemakers. 
            Choose your category and register below.
          </p>
        </div>

        {/* Registration Stats */}
        <RegistrationStats />

        <div className="max-w-6xl mx-auto">
          {/* Tabs */}
          <div className="flex flex-col md:flex-row gap-4 mb-8">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => {
                  setActiveTab(tab.id);
                  reset({ registrationType: tab.id });
                }}
                className={`flex items-center gap-3 px-6 py-4 rounded-xl transition-all duration-300 ${
                  activeTab === tab.id
                    ? `bg-gradient-to-r ${tab.color} text-white shadow-lg`
                    : 'bg-white text-gray-700 hover:bg-gray-50 shadow-sm'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                <span className="font-semibold">{tab.label}</span>
              </button>
            ))}
          </div>

          {/* Form Container */}
          <div className="bg-white rounded-2xl shadow-xl p-6 md:p-8 border border-gray-100">
            <form onSubmit={handleSubmit(handleFormSubmit)}>
              {/* Hidden field for registration type */}
              <input
                type="hidden"
                {...register('registrationType')}
                value={activeTab}
              />

              {/* Common Fields */}
              <div className="mb-8">
                <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                  <User className="w-5 h-5" />
                  Personal Information
                </h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      {...register('fullName', { required: 'Full name is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your full name"
                    />
                    {errors.fullName && (
                      <p className="mt-1 text-sm text-red-600">{errors.fullName.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      {...register('email', { 
                        required: 'Email is required',
                        pattern: {
                          value: /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i,
                          message: 'Invalid email address'
                        }
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="you@example.com"
                    />
                    {errors.email && (
                      <p className="mt-1 text-sm text-red-600">{errors.email.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      Phone Number *
                    </label>
                    <input
                      type="tel"
                      {...register('phone', { 
                        required: 'Phone number is required',
                        pattern: {
                          value: /^[0-9]{10}$/,
                          message: 'Enter a valid 10-digit phone number'
                        }
                      })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="9876543210"
                    />
                    {errors.phone && (
                      <p className="mt-1 text-sm text-red-600">{errors.phone.message}</p>
                    )}
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-gray-700 mb-2">
                      City *
                    </label>
                    <input
                      type="text"
                      {...register('city', { required: 'City is required' })}
                      className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      placeholder="Enter your city"
                    />
                    {errors.city && (
                      <p className="mt-1 text-sm text-red-600">{errors.city.message}</p>
                    )}
                  </div>
                </div>
              </div>

              {/* NGO Specific Fields */}
              {activeTab === 'ngo' && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Building className="w-5 h-5" />
                    Organization Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        NGO/Organization Name *
                      </label>
                      <input
                        type="text"
                        {...register('organizationName', { required: 'Organization name is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Enter organization name"
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Registration Number (if any)
                      </label>
                      <input
                        type="text"
                        {...register('registrationNumber')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="12A/80G/etc."
                      />
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Your Designation *
                      </label>
                      <input
                        type="text"
                        {...register('designation', { required: 'Designation is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Director/Coordinator/etc."
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Focus Areas *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {focusAreas.map((area) => (
                          <label key={area} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              value={area}
                              {...register('focusAreas')}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{area}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization Website
                      </label>
                      <input
                        type="url"
                        {...register('website')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="https://www.example.org"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Brief Description of Your Work *
                      </label>
                      <textarea
                        {...register('description', { required: 'Description is required' })}
                        rows="3"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Describe your organization's mission and work..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Volunteer Specific Fields */}
              {activeTab === 'volunteer' && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Heart className="w-5 h-5" />
                    Volunteer Details
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Age *
                      </label>
                      <input
                        type="number"
                        {...register('age', { 
                          required: 'Age is required',
                          min: { value: 18, message: 'Must be at least 18 years old' }
                        })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="18"
                        min="18"
                      />
                      {errors.age && (
                        <p className="mt-1 text-sm text-red-600">{errors.age.message}</p>
                      )}
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Student/Professional *
                      </label>
                      <select
                        {...register('occupation', { required: 'Occupation is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select...</option>
                        <option value="student">Student</option>
                        <option value="professional">Working Professional</option>
                        <option value="freelancer">Freelancer</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Preferred Volunteer Roles *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-3 gap-3">
                        {volunteerRoles.map((role) => (
                          <label key={role} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              value={role}
                              {...register('volunteerRoles')}
                              className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                            />
                            <span className="text-sm text-gray-700">{role}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Availability *
                      </label>
                      <div className="grid grid-cols-1 md:grid-cols-2 gap-3">
                        {timeSlots.map((slot) => (
                          <label key={slot} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              value={slot}
                              {...register('availability')}
                              className="rounded border-gray-300 text-green-600 focus:ring-green-500"
                            />
                            <span className="text-sm text-gray-700">{slot}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Previous Volunteer Experience (if any)
                      </label>
                      <textarea
                        {...register('experience')}
                        rows="3"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Describe your previous volunteer experience..."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Visitor Specific Fields */}
              {activeTab === 'visitor' && (
                <div className="mb-8">
                  <h3 className="text-xl font-semibold text-gray-900 mb-6 flex items-center gap-2">
                    <Users className="w-5 h-5" />
                    Visitor Preferences
                  </h3>
                  
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Visitor Type *
                      </label>
                      <select
                        {...register('visitorType', { required: 'Visitor type is required' })}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                      >
                        <option value="">Select...</option>
                        <option value="individual">Individual Donor</option>
                        <option value="corporate">Corporate Representative</option>
                        <option value="researcher">Researcher/Academic</option>
                        <option value="student">Student</option>
                        <option value="ngo_staff">NGO Staff</option>
                        <option value="government">Government Official</option>
                        <option value="media">Media Personnel</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Organization (if applicable)
                      </label>
                      <input
                        type="text"
                        {...register('visitorOrganization')}
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Company/Institution name"
                      />
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        Areas of Interest *
                      </label>
                      <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                        {focusAreas.map((area) => (
                          <label key={area} className="flex items-center gap-2">
                            <input
                              type="checkbox"
                              value={area}
                              {...register('visitorInterests')}
                              className="rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                            />
                            <span className="text-sm text-gray-700">{area}</span>
                          </label>
                        ))}
                      </div>
                    </div>

                    <div className="md:col-span-2">
                      <label className="block text-sm font-medium text-gray-700 mb-2">
                        What are you looking for at the expo?
                      </label>
                      <textarea
                        {...register('visitorGoals')}
                        rows="3"
                        className="w-full px-4 py-3 rounded-lg border border-gray-300 focus:ring-2 focus:ring-blue-500 focus:border-transparent transition-all"
                        placeholder="Partnership opportunities, funding, volunteering, etc."
                      />
                    </div>
                  </div>
                </div>
              )}

              {/* Terms and Conditions */}
              <div className="mb-8 p-6 bg-blue-50 rounded-xl">
                <div className="flex items-start gap-3">
                  <input
                    type="checkbox"
                    id="terms"
                    {...register('terms', { required: 'You must accept the terms and conditions' })}
                    className="mt-1 rounded border-gray-300 text-blue-600 focus:ring-blue-500"
                  />
                  <label htmlFor="terms" className="text-sm text-gray-700">
                    I agree to the Terms and Conditions and Privacy Policy. 
                    I understand that my information will be used for event purposes only 
                    and I may receive updates about the CityNeeds Help Locally.
                  </label>
                </div>
                {errors.terms && (
                  <p className="mt-2 text-sm text-red-600">{errors.terms.message}</p>
                )}
              </div>

              {/* Submit Button */}
              <div className="flex flex-col sm:flex-row items-center justify-between gap-6">
                <div className="text-sm text-gray-600">
                  <p className="flex items-center gap-2">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Free registration for all categories
                  </p>
                  <p className="flex items-center gap-2 mt-1">
                    <CheckCircle className="w-4 h-4 text-green-500" />
                    Confirmation email will be sent immediately
                  </p>
                </div>
                
                <button
                  type="submit"
                  disabled={isSubmitting}
                  className="group px-10 py-4 bg-gradient-to-r from-blue-600 to-purple-600 text-white rounded-full font-semibold text-lg hover:shadow-xl transition-all duration-300 hover:scale-105 transform flex items-center gap-3 disabled:opacity-70 disabled:cursor-not-allowed"
                >
                  {isSubmitting ? (
                    <>
                      <div className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></div>
                      Processing...
                    </>
                  ) : (
                    <>
                      Complete Registration
                      <ChevronRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                    </>
                  )}
                </button>
              </div>
            </form>
          </div>

          {/* Additional Information */}
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-6">
            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-blue-100 rounded-lg flex items-center justify-center">
                  <Calendar className="w-6 h-6 text-blue-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Event Dates</h4>
              </div>
              <p className="text-gray-600">March 15-17, 2024</p>
              <p className="text-sm text-gray-500 mt-2">9:00 AM - 6:00 PM Daily</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-purple-100 rounded-lg flex items-center justify-center">
                  <MapPin className="w-6 h-6 text-purple-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Venue</h4>
              </div>
              <p className="text-gray-600">New Delhi Convention Center</p>
              <p className="text-sm text-gray-500 mt-2">Pragati Maidan, New Delhi</p>
            </div>

            <div className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
              <div className="flex items-center gap-3 mb-4">
                <div className="w-12 h-12 bg-green-100 rounded-lg flex items-center justify-center">
                  <FileText className="w-6 h-6 text-green-600" />
                </div>
                <h4 className="font-semibold text-gray-900">Need Help?</h4>
              </div>
              <p className="text-gray-600">Contact our support team</p>
              <a 
                href="mailto:info@cityneeds.info" 
                className="text-sm text-blue-600 hover:underline mt-2 block"
              >
                info@cityneeds.info
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Registration;