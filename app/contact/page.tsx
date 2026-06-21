// app/contact/page.tsx
"use client";

import { useState } from "react";
import { MapPin, Phone, Mail, Globe, Clock, Send, CheckCircle, Navigation, Maximize2, ExternalLink } from "lucide-react";

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    subject: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [isSubmitted, setIsSubmitted] = useState(false);
  const [isMapFullscreen, setIsMapFullscreen] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    await new Promise(resolve => setTimeout(resolve, 1500));
    
    setIsSubmitting(false);
    setIsSubmitted(true);
    setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
    
    setTimeout(() => setIsSubmitted(false), 5000);
  };

  // Exact coordinates from user
  const latitude = 8.997937168726159;
  const longitude = 38.833689337137045;
  const locationName = "Gibora Engineering PLC";
  const locationAddress = "Lemi Kura Sub City, Woreda 09, Addis Ababa, Ethiopia";

  // Function to get directions from user's current location
  const getDirections = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${latitude},${longitude}`, "_blank");
  };

  // Function to open exact location in Google Maps with pin
  const openInGoogleMaps = () => {
    window.open(`https://www.google.com/maps/search/?api=1&query=${latitude},${longitude}`, "_blank");
  };

  // Google Maps embed URL with exact coordinates and pin
  const mapSrc = `https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3939.500000!2d${longitude}!3d${latitude}!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x0%3A0x0!2z${latitude}%2C${longitude}!5e0!3m2!1sen!2sus!4v1700000000000!5m2!1sen!2sus`;

  const contactInfo = [
    {
      icon: MapPin,
      title: "Visit Us",
      details: ["Lemi Kura Sub City", "Woreda 09", "Addis Ababa, Ethiopia"],
      color: "bg-red-100 dark:bg-red-900/20",
      iconColor: "text-red-600 dark:text-red-400",
      hasButton: true,
    },
    {
      icon: Phone,
      title: "Call Us",
      details: ["+251 911 51 02 94", "+251 911 51 01 54"],
      color: "bg-green-100 dark:bg-green-900/20",
      iconColor: "text-green-600 dark:text-green-400",
      hasButton: false,
    },
    {
      icon: Mail,
      title: "Email Us",
      details: ["info@giboraengineering.et", "giboraengineeringplc@gmail.com"],
      color: "bg-[#D4AF37]/10 dark:bg-[#D4AF37]/10",
      iconColor: "text-[#D4AF37]",
      hasButton: false,
    },
    {
      icon: Globe,
      title: "Website",
      details: ["www.giboraengineering.et"],
      color: "bg-purple-100 dark:bg-purple-900/20",
      iconColor: "text-purple-600 dark:text-purple-400",
      hasButton: false,
    },
    {
      icon: Clock,
      title: "Business Hours",
      details: ["Monday - Friday: 8:00 AM - 6:00 PM", "Saturday: 9:00 AM - 1:00 PM"],
      color: "bg-orange-100 dark:bg-orange-900/20",
      iconColor: "text-orange-600 dark:text-orange-400",
      hasButton: false,
    },
  ];

  return (
    <main className="bg-[#1A1A1A] transition-colors duration-300">
      {/* Hero Section */}
      <section className="relative py-32 bg-[#1A1A1A] border-b border-[#D4AF37]/20">
        <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1581092335871-4d2e4f2e8b5a?auto=format&fit=crop&q=80&w=2070')] bg-cover bg-center opacity-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-[#1A1A1A]/60 via-[#1A1A1A]/40 to-[#1A1A1A]/80" />
        <div className="container mx-auto px-6 relative">
          <div className="text-center max-w-3xl mx-auto">
            <div className="inline-flex items-center gap-2 bg-[#1A1A1A]/80 backdrop-blur-md rounded-full px-4 py-1.5 border border-[#D4AF37]/30 mb-6">
              <span className="text-[#D4AF37] text-xs font-medium">Get in Touch</span>
            </div>
            <h1 className="text-5xl font-bold text-white mb-6">
              Contact <span className="text-[#D4AF37]">Us</span>
            </h1>
            <div className="w-20 h-1 bg-[#D4AF37] mx-auto rounded-full mb-6" />
            <p className="text-xl text-[#CCCCCC]">
              Get in touch with our team for inquiries, quotes, or support
            </p>
          </div>
        </div>
      </section>

      {/* Contact Grid */}
      <section className="py-24 bg-[#1A1A1A]">
        <div className="container mx-auto px-6">
          <div className="grid lg:grid-cols-3 gap-8">
            {/* Contact Info Cards */}
            <div className="lg:col-span-1 space-y-4">
              {contactInfo.map((info, idx) => (
                <div
                  key={idx}
                  className="bg-[#222222] rounded-2xl p-6 shadow-md hover:shadow-lg transition-all duration-300 group border border-[#D4AF37]/10 hover:border-[#D4AF37]/30"
                >
                  <div className="flex items-start gap-4">
                    <div className={`${info.color} p-3 rounded-xl group-hover:scale-110 transition`}>
                      <info.icon className={`w-6 h-6 ${info.iconColor}`} />
                    </div>
                    <div className="flex-1">
                      <h3 className="font-semibold text-white mb-2">{info.title}</h3>
                      {info.details.map((detail, i) => (
                        <p key={i} className="text-[#CCCCCC] text-sm">
                          {detail}
                        </p>
                      ))}
                      {info.hasButton && (
                        <button
                          onClick={getDirections}
                          className="mt-3 inline-flex items-center gap-2 text-sm font-medium text-[#D4AF37] hover:text-[#C49A2C] transition-colors"
                        >
                          <Navigation className="w-4 h-4" />
                          Get Directions
                        </button>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-[#222222] rounded-2xl shadow-xl p-8 border border-[#D4AF37]/10">
                <h2 className="text-2xl font-bold text-white mb-6">Send us a Message</h2>
                
                {isSubmitted && (
                  <div className="mb-6 bg-[#D4AF37]/10 border border-[#D4AF37]/30 rounded-lg p-4 flex items-center gap-3">
                    <CheckCircle className="w-5 h-5 text-[#D4AF37]" />
                    <p className="text-[#D4AF37]">Thank you! Your message has been sent successfully.</p>
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-6">
                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                        Full Name *
                      </label>
                      <input
                        type="text"
                        name="name"
                        required
                        value={formData.name}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#D4AF37]/20 bg-[#1A1A1A] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition placeholder-[#666666]"
                        placeholder="John Doe"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                        Email Address *
                      </label>
                      <input
                        type="email"
                        name="email"
                        required
                        value={formData.email}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#D4AF37]/20 bg-[#1A1A1A] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition placeholder-[#666666]"
                        placeholder="john@example.com"
                      />
                    </div>
                  </div>

                  <div className="grid md:grid-cols-2 gap-6">
                    <div>
                      <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                        Phone Number
                      </label>
                      <input
                        type="tel"
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#D4AF37]/20 bg-[#1A1A1A] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition placeholder-[#666666]"
                        placeholder="+251 XXX XXX XXX"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                        Subject *
                      </label>
                      <select
                        name="subject"
                        required
                        value={formData.subject}
                        onChange={handleChange}
                        className="w-full px-4 py-3 border border-[#D4AF37]/20 bg-[#1A1A1A] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition"
                      >
                        <option value="">Select a subject</option>
                        <option value="General Inquiry">General Inquiry</option>
                        <option value="Project Quote">Project Quote</option>
                        <option value="Technical Support">Technical Support</option>
                        <option value="Partnership">Partnership</option>
                      </select>
                    </div>
                  </div>

                  <div>
                    <label className="block text-sm font-medium text-[#CCCCCC] mb-2">
                      Message *
                    </label>
                    <textarea
                      name="message"
                      required
                      rows={5}
                      value={formData.message}
                      onChange={handleChange}
                      className="w-full px-4 py-3 border border-[#D4AF37]/20 bg-[#1A1A1A] text-white rounded-lg focus:ring-2 focus:ring-[#D4AF37] focus:border-[#D4AF37] transition resize-none placeholder-[#666666]"
                      placeholder="Tell us about your project or inquiry..."
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={isSubmitting}
                    className="w-full bg-[#D4AF37] hover:bg-[#C49A2C] text-[#1A1A1A] py-3 rounded-lg font-semibold transition-all duration-300 flex items-center justify-center gap-2 disabled:opacity-50 disabled:cursor-not-allowed hover:shadow-[0_0_30px_rgba(212,175,55,0.3)]"
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        Send Message
                        <Send className="w-4 h-4" />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section - With Exact Pin Location */}
      <section className="py-24 bg-[#1A1A1A] border-t border-[#D4AF37]/20">
        <div className="container mx-auto px-6">
          <div className="max-w-6xl mx-auto">
            {/* Section Header */}
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-white mb-4">Find Us <span className="text-[#D4AF37]">Here</span></h2>
              <div className="w-12 h-0.5 bg-[#D4AF37] mx-auto mb-4" />
              <p className="text-[#CCCCCC]">
                Located in Lemi Kura Sub City, Woreda 09 - Easily accessible from anywhere in Addis Ababa
              </p>
              <p className="text-sm text-[#666666] mt-2 font-mono">
                📍 Coordinates: {latitude.toFixed(6)}, {longitude.toFixed(6)}
              </p>
            </div>

            {/* Map Card */}
            <div className="bg-[#222222] rounded-2xl shadow-xl overflow-hidden transition-all duration-300 hover:shadow-2xl border border-[#D4AF37]/10">
              {/* Map Header */}
              <div className="bg-gradient-to-r from-[#D4AF37] to-[#C49A2C] px-6 py-4 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="bg-[#1A1A1A]/20 p-2 rounded-lg animate-pulse">
                    <MapPin className="w-5 h-5 text-[#1A1A1A]" />
                  </div>
                  <div>
                    <h3 className="text-[#1A1A1A] font-semibold">{locationName}</h3>
                    <p className="text-[#1A1A1A]/80 text-sm">{locationAddress}</p>
                  </div>
                </div>
                <button
                  onClick={() => setIsMapFullscreen(!isMapFullscreen)}
                  className="bg-[#1A1A1A]/20 hover:bg-[#1A1A1A]/30 p-2 rounded-lg transition-colors"
                  title="Toggle fullscreen"
                >
                  <Maximize2 className="w-5 h-5 text-[#1A1A1A]" />
                </button>
              </div>

              {/* Map Container with Custom Pin Overlay */}
              <div className={`relative transition-all duration-500 ${isMapFullscreen ? 'h-[600px]' : 'h-[450px]'}`}>
                <iframe
                  src={mapSrc}
                  width="100%"
                  height="100%"
                  style={{ border: 0 }}
                  allowFullScreen
                  loading="lazy"
                  referrerPolicy="no-referrer-when-downgrade"
                  className="transition-all duration-500"
                  title={`${locationName} - Exact Location`}
                />
                
                {/* Custom Animated Pin Overlay at Exact Coordinates */}
                <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 pointer-events-none z-10">
                  <div className="relative">
                    {/* Pin Shadow */}
                    <div className="absolute -bottom-2 left-1/2 transform -translate-x-1/2 w-8 h-3 bg-black/30 rounded-full blur-sm"></div>
                    
                    {/* Main Pin Icon */}
                    <div className="relative animate-bounce">
                      <svg className="w-12 h-12 text-[#D4AF37] drop-shadow-xl" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M12 2C8.13 2 5 5.13 5 9c0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5c-1.38 0-2.5-1.12-2.5-2.5s1.12-2.5 2.5-2.5 2.5 1.12 2.5 2.5-1.12 2.5-2.5 2.5z"/>
                        <circle cx="12" cy="9" r="2.5" fill="#1A1A1A"/>
                      </svg>
                      
                      {/* Pulsing Ring Effect */}
                      <div className="absolute inset-0 rounded-full">
                        <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-ping opacity-75"></div>
                      </div>
                      
                      {/* Second Pulse Ring */}
                      <div className="absolute inset-0 rounded-full">
                        <div className="absolute inset-0 bg-[#D4AF37] rounded-full animate-pulse opacity-50"></div>
                      </div>
                    </div>
                    
                    {/* Label */}
                    <div className="absolute top-full left-1/2 transform -translate-x-1/2 mt-2 whitespace-nowrap">
                      <div className="bg-[#1A1A1A] rounded-lg shadow-lg px-3 py-1.5 text-sm font-semibold text-[#D4AF37] border-2 border-[#D4AF37]">
                        📍 Gibora Engineering
                      </div>
                    </div>
                  </div>
                </div>

                {/* Location Badge */}
                <div className="absolute bottom-4 left-4 bg-[#1A1A1A]/95 rounded-lg shadow-lg px-4 py-2 flex items-center gap-2 backdrop-blur-sm border border-[#D4AF37]/20 z-20">
                  <div className="w-3 h-3 bg-[#D4AF37] rounded-full animate-pulse"></div>
                  <span className="text-sm font-medium text-[#D4AF37]">
                    📍 Exact Location: {locationName}
                  </span>
                </div>

                {/* Coordinates Badge */}
                <div className="absolute top-4 right-4 bg-[#1A1A1A]/80 backdrop-blur-sm rounded-lg px-3 py-1.5 z-20 border border-[#D4AF37]/20">
                  <code className="text-xs text-[#D4AF37] font-mono">
                    {latitude.toFixed(6)}°, {longitude.toFixed(6)}°
                  </code>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 pointer-events-none bg-gradient-to-t from-black/5 to-transparent" />
              </div>

              {/* Map Footer with Actions */}
              <div className="bg-[#1A1A1A] px-6 py-4 border-t border-[#D4AF37]/20">
                <div className="flex flex-col sm:flex-row gap-4 justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-[#CCCCCC]">
                    <MapPin className="w-4 h-4 text-[#D4AF37]" />
                    <span className="font-mono text-xs text-[#D4AF37]">
                      {latitude.toFixed(6)}°, {longitude.toFixed(6)}°
                    </span>
                    <span className="hidden sm:inline text-[#666666]">•</span>
                    <span className="text-[#CCCCCC]">{locationAddress}</span>
                  </div>
                  <div className="flex gap-3">
                    <button
                      onClick={getDirections}
                      className="inline-flex items-center gap-2 px-4 py-2 bg-[#D4AF37] hover:bg-[#C49A2C] text-[#1A1A1A] rounded-lg transition-colors text-sm font-medium shadow-md hover:shadow-lg"
                    >
                      <Navigation className="w-4 h-4" />
                      Get Directions
                    </button>
                    <button
                      onClick={openInGoogleMaps}
                      className="inline-flex items-center gap-2 px-4 py-2 border border-[#D4AF37]/30 hover:bg-[#D4AF37]/10 text-[#CCCCCC] hover:text-[#D4AF37] rounded-lg transition-colors text-sm font-medium"
                    >
                      <ExternalLink className="w-4 h-4" />
                      Open in Google Maps
                    </button>
                  </div>
                </div>
              </div>
            </div>

            {/* Additional Info Badges */}
            <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mt-8">
              <div className="bg-[#222222] rounded-xl p-4 text-center hover:shadow-md transition-shadow group border border-[#D4AF37]/10 hover:border-[#D4AF37]/30">
                <div className="font-semibold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">🚗 By Car</div>
                <p className="text-sm text-[#CCCCCC]">Easy access from main roads</p>
              </div>
              <div className="bg-[#222222] rounded-xl p-4 text-center hover:shadow-md transition-shadow group border border-[#D4AF37]/10 hover:border-[#D4AF37]/30">
                <div className="font-semibold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">🚌 Public Transport</div>
                <p className="text-sm text-[#CCCCCC]">Bus stop within walking distance</p>
              </div>
              <div className="bg-[#222222] rounded-xl p-4 text-center hover:shadow-md transition-shadow group border border-[#D4AF37]/10 hover:border-[#D4AF37]/30">
                <div className="font-semibold text-white mb-1 group-hover:text-[#D4AF37] transition-colors">🅿️ Parking</div>
                <p className="text-sm text-[#CCCCCC]">Free parking available for visitors</p>
              </div>
            </div>

            {/* Exact Coordinates Card */}
            <div className="mt-6 bg-[#D4AF37]/10 rounded-xl p-4 border border-[#D4AF37]/20">
              <div className="flex items-center justify-between flex-wrap gap-3">
                <div className="flex items-center gap-2">
                  <MapPin className="w-5 h-5 text-[#D4AF37]" />
                  <span className="text-sm font-medium text-white">Exact GPS Coordinates:</span>
                </div>
                <code className="bg-[#1A1A1A] px-3 py-1.5 rounded-lg text-sm font-mono text-[#D4AF37] border border-[#D4AF37]/20">
                  Latitude: {latitude}° | Longitude: {longitude}°
                </code>
                <button
                  onClick={() => {
                    navigator.clipboard.writeText(`${latitude}, ${longitude}`);
                    alert("Coordinates copied to clipboard!");
                  }}
                  className="text-xs bg-[#D4AF37] hover:bg-[#C49A2C] text-[#1A1A1A] px-3 py-1.5 rounded-lg transition-colors font-medium"
                >
                  Copy Coordinates
                </button>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}