// components/CoreCapabilities.tsx
"use client";

import { useState, useRef, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Wifi, Orbit, Zap, Server, Settings, ShoppingBag } from 'lucide-react';

const capabilities = [
  { title: 'BTS & WIRELESS NETWORK ROLLOUT', description: 'Tower erection, RF feeder line configuration, RRU deployment, and complete wireless network rollout services.', tag: 'TURNKEY', icon: Wifi },
  { title: 'FIBER OPTIC DEPLOYMENT', description: 'Backbone and metro ring infrastructure. Duct installation, cable blowing, splicing, and termination services.', tag: '320 KM DEPLOYED', icon: Orbit },
  { title: 'CRITICAL POWER SYSTEMS', description: 'Rectifier setups, DC power installations, backup battery strings, and comprehensive power system solutions.', tag: 'ZERO DOWNTIME', icon: Zap },
  { title: 'ENTERPRISE IT INFRASTRUCTURE', description: 'LAN/WAN design, server room fit-out, virtualisation, and complete enterprise IT infrastructure solutions.', tag: 'MANAGED SERVICES', icon: Server },
  { title: 'FIXED NETWORK MAINTENANCE', description: 'OSP/ISP loop maintenance, FTTH passive network rollout, and comprehensive fixed network maintenance services.', tag: '24/7 SUPPORT', icon: Settings },
  { title: 'IT SOLUTION & SERVICE SUPPLY', description: 'Sourcing of servers, networking equipment, accessories, and end-to-end IT solution supply services.', tag: 'END-TO-END', icon: ShoppingBag }
];

export function CoreCapabilities() {
  const [activeIndex, setActiveIndex] = useState(0);
  const scrollContainerRef = useRef<HTMLDivElement>(null);

  // Handle scroll to update active dot
  const handleScroll = () => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const scrollLeft = container.scrollLeft;
    const cardWidth = container.offsetWidth;
    const newIndex = Math.round(scrollLeft / cardWidth);
    
    if (newIndex !== activeIndex && newIndex < capabilities.length) {
      setActiveIndex(newIndex);
    }
  };

  // Scroll to specific card when dot is clicked
  const scrollToCard = (index: number) => {
    if (!scrollContainerRef.current) return;
    
    const container = scrollContainerRef.current;
    const cardWidth = container.offsetWidth;
    container.scrollTo({
      left: index * cardWidth,
      behavior: 'smooth'
    });
    setActiveIndex(index);
  };

  useEffect(() => {
    const container = scrollContainerRef.current;
    if (container) {
      container.addEventListener('scroll', handleScroll);
      return () => container.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section className="bg-[#0f1115] py-6 sm:py-10 md:py-14 px-3 sm:px-6">
      <div className="max-w-6xl mx-auto">
        {/* Header Section - Compact */}
        <div className="mb-3 sm:mb-5 md:mb-8">
          <h3 className="text-amber-500 font-bold tracking-widest text-[9px] sm:text-xs md:text-sm mb-0.5 sm:mb-1">
            WHAT WE DELIVER
          </h3>
          <h2 className="text-white text-xl sm:text-2xl md:text-4xl font-extrabold">
            CORE CAPABILITIES
          </h2>
        </div>

        {/* Mobile: Horizontal Scroll - One Card Per Screen */}
        <div className="md:hidden relative">
          <div
            ref={scrollContainerRef}
            className="overflow-x-auto snap-x snap-mandatory scroll-smooth pb-3 -mx-3 px-3 scrollbar-hide"
            style={{ scrollSnapType: 'x mandatory' }}
          >
            <div className="flex gap-0">
              {capabilities.map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={index}
                    className="w-[85%] sm:w-[80%] flex-shrink-0 snap-center px-1.5"
                    style={{ scrollSnapAlign: 'center' }}
                  >
                    <div className="h-auto min-h-[240px] p-3.5 sm:p-5 border border-gray-800 rounded-xl bg-[#14181f] hover:bg-[#1a1f26] transition-colors duration-300 group cursor-pointer flex flex-col">
                      <div className="mb-2.5 text-amber-500 transition-colors duration-300">
                        <Icon size={20} strokeWidth={1.5} />
                      </div>
                      <h4 className="text-white font-bold mb-1 text-xs sm:text-sm leading-tight line-clamp-1">
                        {item.title}
                      </h4>
                      <p className="text-gray-300 text-[10px] sm:text-xs mb-3 leading-relaxed flex-1 line-clamp-3">
                        {item.description}
                      </p>
                      <span className="inline-block self-start px-2.5 py-0.5 border border-teal-800 text-teal-400 text-[9px] sm:text-[10px] font-bold tracking-wider rounded">
                        {item.tag}
                      </span>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>

          {/* Dot Indicators - Compact */}
          <div className="flex justify-center gap-1 mt-2.5">
            {capabilities.map((_, index) => (
              <button
                key={index}
                onClick={() => scrollToCard(index)}
                className={`transition-all duration-300 rounded-full ${
                  activeIndex === index
                    ? 'w-5 h-1.5 bg-amber-500'
                    : 'w-1.5 h-1.5 bg-gray-600 hover:bg-gray-400'
                }`}
                aria-label={`Go to card ${index + 1}`}
              />
            ))}
          </div>
        </div>

        {/* Desktop: Grid Layout - Compact */}
        <div className="hidden md:grid grid-cols-3 lg:grid-cols-6 border-t border-gray-800">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ backgroundColor: '#1a1f26', borderBottomColor: '#f59e0b' }}
                className="p-4 border-r border-b border-gray-800 transition-colors duration-300 group cursor-pointer bg-transparent border-b-transparent"
              >
                <div className="mb-3 text-amber-500 transition-colors duration-300">
                  <Icon size={20} strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold mb-1.5 text-[10px] leading-tight line-clamp-2">{item.title}</h4>
                <p className="text-gray-500 text-[9px] mb-3 leading-relaxed line-clamp-3">{item.description}</p>
                <span className="inline-block px-2 py-0.5 border border-teal-800 text-teal-400 text-[8px] font-bold tracking-wider">
                  {item.tag}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Custom scrollbar hide styles */}
      <style jsx>{`
        .scrollbar-hide::-webkit-scrollbar {
          display: none;
        }
        .scrollbar-hide {
          -ms-overflow-style: none;
          scrollbar-width: none;
        }
      `}</style>
    </section>
  );
}