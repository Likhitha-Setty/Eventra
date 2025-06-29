import React from 'react';
import { Award, Users, Clock, Shield, Heart, Star } from 'lucide-react';

const AboutPage: React.FC = () => {
  const stats = [
    { icon: Users, label: 'Happy Clients', value: '10,000+' },
    { icon: Award, label: 'Trusted Vendors', value: '500+' },
    { icon: Clock, label: 'Events Planned', value: '2,000+' },
    { icon: Star, label: 'Average Rating', value: '4.9' }
  ];

  const values = [
    {
      icon: Heart,
      title: 'Passion for Perfection',
      description: 'We believe every event should be extraordinary. Our passion drives us to deliver exceptional experiences that exceed expectations.'
    },
    {
      icon: Shield,
      title: 'Trust & Reliability',
      description: 'All our vendors are thoroughly vetted and verified. We ensure quality, reliability, and professionalism in every partnership.'
    },
    {
      icon: Users,
      title: 'Client-Centric Approach',
      description: 'Your vision is our mission. We listen, understand, and work tirelessly to bring your dream event to life.'
    }
  ];

  const team = [
    {
      name: 'Sarah Johnson',
      role: 'Founder & CEO',
      image: 'https://images.pexels.com/photos/774909/pexels-photo-774909.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'With 15 years in event planning, Sarah founded Eventra to revolutionize how people plan their special moments.'
    },
    {
      name: 'Michael Chen',
      role: 'Head of Vendor Relations',
      image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Michael ensures we partner with only the best vendors, maintaining our high standards of quality and service.'
    },
    {
      name: 'Emily Rodriguez',
      role: 'Customer Experience Director',
      image: 'https://images.pexels.com/photos/1239291/pexels-photo-1239291.jpeg?auto=compress&cs=tinysrgb&w=400',
      description: 'Emily leads our customer success team, ensuring every client receives personalized attention and support.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-[#FF6F61]/3 to-[#C084FC]/8">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B263B] via-[#1B263B]/90 to-[#C084FC]/20 py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="About background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#C084FC]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF6F61]/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            About Eventra
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            We're passionate about turning your event dreams into unforgettable realities
          </p>
        </div>
      </section>

      {/* Story Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div>
              <h2 className="text-3xl lg:text-4xl font-bold text-[#1B263B] mb-6">
                Our Story
              </h2>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                Founded in 2020, Eventra was born from a simple belief: planning an event should be exciting, not stressful. Our founder, Sarah Johnson, experienced firsthand the challenges of coordinating vendors, managing timelines, and ensuring every detail was perfect for her own wedding.
              </p>
              <p className="text-gray-600 text-lg mb-6 leading-relaxed">
                That experience inspired her to create a platform that would connect event planners with trusted, verified vendors while providing the tools and support needed to create extraordinary celebrations.
              </p>
              <p className="text-gray-600 text-lg leading-relaxed">
                Today, Eventra has helped thousands of clients create memorable events, from intimate gatherings to grand celebrations, all while maintaining our commitment to quality, reliability, and exceptional service.
              </p>
            </div>
            <div className="relative">
              <img
                src="https://images.pexels.com/photos/3184418/pexels-photo-3184418.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Event planning team"
                className="rounded-2xl shadow-xl"
              />
              <div className="absolute -bottom-6 -left-6 bg-gradient-to-r from-[#FF6F61] to-[#C084FC] p-6 rounded-2xl text-white">
                <div className="text-2xl font-bold">2000+</div>
                <div className="text-sm">Events Planned</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Stats Section */}
      <section className="py-16 bg-gradient-to-r from-[#FF6F61]/5 via-white to-[#C084FC]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B263B] mb-4">
              Our Impact
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              Numbers that reflect our commitment to excellence and client satisfaction
            </p>
          </div>
          
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF6F61] to-[#C084FC] rounded-2xl flex items-center justify-center mx-auto mb-4">
                  <stat.icon className="w-8 h-8 text-white" />
                </div>
                <div className="text-3xl font-bold text-[#1B263B] mb-2">{stat.value}</div>
                <div className="text-gray-600">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-20 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B263B] mb-4">
              Our Values
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The principles that guide everything we do
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((value, index) => (
              <div key={index} className="text-center p-8 rounded-2xl bg-gradient-to-br from-[#FF6F61]/5 to-[#C084FC]/5 hover:shadow-lg transition-all duration-300 border border-[#FF6F61]/10">
                <div className="w-16 h-16 bg-gradient-to-r from-[#FF6F61] to-[#C084FC] rounded-2xl flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-white" />
                </div>
                <h3 className="text-xl font-semibold text-[#1B263B] mb-4">{value.title}</h3>
                <p className="text-gray-600 leading-relaxed">{value.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="py-20 bg-gradient-to-r from-[#C084FC]/5 via-white to-[#FF6F61]/5">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl lg:text-4xl font-bold text-[#1B263B] mb-4">
              Meet Our Team
            </h2>
            <p className="text-gray-600 text-lg max-w-2xl mx-auto">
              The passionate professionals behind Eventra's success
            </p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {team.map((member, index) => (
              <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md hover:shadow-xl transition-all duration-300 overflow-hidden border border-[#FF6F61]/10">
                <img
                  src={member.image}
                  alt={member.name}
                  className="w-full h-64 object-cover"
                />
                <div className="p-6">
                  <h3 className="text-xl font-semibold text-[#1B263B] mb-2">{member.name}</h3>
                  <p className="text-[#FF6F61] font-medium mb-4">{member.role}</p>
                  <p className="text-gray-600 leading-relaxed">{member.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-20 bg-gradient-to-r from-[#FF6F61] to-[#C084FC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold text-white mb-6">
            Ready to Plan Your Perfect Event?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Join thousands of satisfied clients who trusted Eventra with their special moments
          </p>
          <button className="bg-white text-[#FF6F61] px-8 py-4 rounded-xl font-semibold text-lg hover:shadow-xl transition-all duration-300">
            Start Planning Today
          </button>
        </div>
      </section>
    </div>
  );
};

export default AboutPage;