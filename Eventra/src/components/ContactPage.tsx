import React, { useState } from 'react';
import { MapPin, Phone, Mail, Clock, Send, MessageCircle } from 'lucide-react';

const ContactPage: React.FC = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    eventType: '',
    message: ''
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    alert('Thank you for your message! We\'ll get back to you within 24 hours.');
    setFormData({ name: '', email: '', phone: '', eventType: '', message: '' });
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const contactInfo = [
    {
      icon: MapPin,
      title: 'Visit Us',
      details: ['123 Event Street', 'New York, NY 10001', 'United States']
    },
    {
      icon: Phone,
      title: 'Call Us',
      details: ['+1 (555) 123-4567', '+1 (555) 123-4568', 'Mon-Fri 9AM-6PM EST']
    },
    {
      icon: Mail,
      title: 'Email Us',
      details: ['hello@eventra.com', 'support@eventra.com', 'partnerships@eventra.com']
    },
    {
      icon: Clock,
      title: 'Business Hours',
      details: ['Monday - Friday: 9AM - 6PM', 'Saturday: 10AM - 4PM', 'Sunday: Closed']
    }
  ];

  const faqs = [
    {
      question: 'How far in advance should I book vendors?',
      answer: 'We recommend booking vendors 3-6 months in advance for most events, and 6-12 months for weddings or large corporate events.'
    },
    {
      question: 'Do you charge fees for using the platform?',
      answer: 'Eventra is free for clients to use. We earn a small commission from vendors when bookings are completed.'
    },
    {
      question: 'What if I need to cancel or reschedule?',
      answer: 'Cancellation policies vary by vendor. We help facilitate communication and work to find solutions that work for everyone.'
    },
    {
      question: 'How do you verify your vendors?',
      answer: 'All vendors undergo a thorough verification process including background checks, insurance verification, and portfolio reviews.'
    }
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 via-[#C084FC]/3 to-[#FF6F61]/5">
      {/* Hero Section */}
      <section className="relative bg-gradient-to-br from-[#1B263B] via-[#1B263B]/90 to-[#C084FC]/20 py-20">
        <div className="absolute inset-0">
          <img
            src="https://images.pexels.com/photos/3184465/pexels-photo-3184465.jpeg?auto=compress&cs=tinysrgb&w=1920"
            alt="Contact background"
            className="w-full h-full object-cover opacity-20"
          />
          <div className="absolute top-20 left-20 w-72 h-72 bg-[#C084FC]/20 rounded-full blur-3xl"></div>
          <div className="absolute bottom-20 right-20 w-96 h-96 bg-[#FF6F61]/15 rounded-full blur-3xl"></div>
        </div>
        
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-4xl lg:text-6xl font-bold text-white mb-6">
            Get In Touch
          </h1>
          <p className="text-xl text-gray-300 mb-8 max-w-3xl mx-auto">
            Have questions? We're here to help you plan the perfect event
          </p>
        </div>
      </section>

      {/* Contact Form & Info Section */}
      <section className="py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16">
            {/* Contact Form */}
            <div className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-xl p-8 border border-[#FF6F61]/10">
              <div className="flex items-center mb-6">
                <MessageCircle className="w-6 h-6 text-[#FF6F61] mr-3" />
                <h2 className="text-2xl font-bold text-[#1B263B]">Send us a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1B263B] mb-2">
                      Full Name *
                    </label>
                    <input
                      type="text"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent transition-all duration-200 bg-white/90"
                      placeholder="Your full name"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1B263B] mb-2">
                      Email Address *
                    </label>
                    <input
                      type="email"
                      name="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent transition-all duration-200 bg-white/90"
                      placeholder="your@email.com"
                    />
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-[#1B263B] mb-2">
                      Phone Number
                    </label>
                    <input
                      type="tel"
                      name="phone"
                      value={formData.phone}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent transition-all duration-200 bg-white/90"
                      placeholder="+1 (555) 123-4567"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-[#1B263B] mb-2">
                      Event Type
                    </label>
                    <select
                      name="eventType"
                      value={formData.eventType}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent transition-all duration-200 bg-white/90"
                    >
                      <option value="">Select event type</option>
                      <option value="wedding">Wedding</option>
                      <option value="corporate">Corporate Event</option>
                      <option value="birthday">Birthday Party</option>
                      <option value="festival">Festival</option>
                      <option value="anniversary">Anniversary</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                </div>

                <div>
                  <label className="block text-sm font-medium text-[#1B263B] mb-2">
                    Message *
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    required
                    rows={6}
                    className="w-full px-4 py-3 border border-gray-300 rounded-lg focus:ring-2 focus:ring-[#FF6F61] focus:border-transparent transition-all duration-200 resize-none bg-white/90"
                    placeholder="Tell us about your event and how we can help..."
                  />
                </div>

                <button
                  type="submit"
                  className="w-full bg-gradient-to-r from-[#FF6F61] to-[#C084FC] text-white py-4 rounded-xl font-semibold text-lg hover:shadow-xl hover:shadow-[#FF6F61]/25 transition-all duration-300 flex items-center justify-center space-x-2"
                >
                  <Send className="w-5 h-5" />
                  <span>Send Message</span>
                </button>
              </form>
            </div>

            {/* Contact Information */}
            <div className="space-y-8">
              <div>
                <h2 className="text-2xl font-bold text-[#1B263B] mb-6">Contact Information</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                  {contactInfo.map((info, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-2xl shadow-md p-6 hover:shadow-lg transition-all duration-300 border border-[#FF6F61]/10">
                      <div className="flex items-center mb-4">
                        <div className="w-12 h-12 bg-gradient-to-r from-[#FF6F61] to-[#C084FC] rounded-lg flex items-center justify-center mr-4">
                          <info.icon className="w-6 h-6 text-white" />
                        </div>
                        <h3 className="font-semibold text-[#1B263B]">{info.title}</h3>
                      </div>
                      <div className="space-y-1">
                        {info.details.map((detail, idx) => (
                          <p key={idx} className="text-gray-600 text-sm">{detail}</p>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* FAQ Section */}
              <div>
                <h3 className="text-xl font-bold text-[#1B263B] mb-6">Frequently Asked Questions</h3>
                <div className="space-y-4">
                  {faqs.map((faq, index) => (
                    <div key={index} className="bg-white/80 backdrop-blur-sm rounded-xl shadow-md p-6 border border-[#FF6F61]/10">
                      <h4 className="font-semibold text-[#1B263B] mb-2">{faq.question}</h4>
                      <p className="text-gray-600 text-sm leading-relaxed">{faq.answer}</p>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="py-16 bg-white/80 backdrop-blur-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="text-3xl font-bold text-[#1B263B] mb-4">Find Us</h2>
            <p className="text-gray-600 text-lg">Visit our office in the heart of New York City</p>
          </div>
          
          <div className="bg-gradient-to-br from-[#FF6F61]/10 to-[#C084FC]/10 rounded-2xl h-96 flex items-center justify-center border border-[#FF6F61]/20">
            <div className="text-center">
              <MapPin className="w-16 h-16 text-[#FF6F61] mx-auto mb-4" />
              <h3 className="text-xl font-semibold text-[#1B263B] mb-2">Interactive Map</h3>
              <p className="text-gray-600">123 Event Street, New York, NY 10001</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default ContactPage;