import { motion } from 'framer-motion';
import { Wifi, Orbit, Zap, Server, Settings, ShoppingBag } from 'lucide-react';

const capabilities = [
  { title: 'BTS & WIRELESS NETWORK ROLLOUT', description: 'Tower erection, RF feeder line configuration, RRU deployment...', tag: 'TURNKEY', icon: Wifi },
  { title: 'FIBER OPTIC DEPLOYMENT', description: 'Backbone and metro ring infrastructure. Duct installation...', tag: '320 KM DEPLOYED', icon: Orbit },
  { title: 'CRITICAL POWER SYSTEMS', description: 'Rectifier setups, DC power installations, backup battery strings...', tag: 'ZERO DOWNTIME', icon: Zap },
  { title: 'ENTERPRISE IT INFRASTRUCTURE', description: 'LAN/WAN design, server room fit-out, virtualisation...', tag: 'MANAGED SERVICES', icon: Server },
  { title: 'FIXED NETWORK MAINTENANCE', description: 'OSP/ISP loop maintenance, FTTH passive network rollout...', tag: '24/7 SUPPORT', icon: Settings },
  { title: 'IT PROCUREMENT & SUPPLY', description: 'Sourcing of servers, networking equipment, and accessories...', tag: 'END-TO-END', icon: ShoppingBag }
];

export function CoreCapabilities() {
  return (
    <section className="bg-[#0f1115] py-20 px-6">
      <div className="max-w-7xl mx-auto">
        <h3 className="text-amber-500 font-bold tracking-widest text-sm mb-4">WHAT WE DELIVER</h3>
        <h2 className="text-white text-5xl font-extrabold mb-16">CORE CAPABILITIES</h2>

        <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-6 border-t border-gray-800">
          {capabilities.map((item, index) => {
            const Icon = item.icon;
            return (
              <motion.div
                key={index}
                whileHover={{ backgroundColor: '#1a1f26', borderBottomColor: '#f59e0b' }}
                className="p-8 border-r border-b border-gray-800 transition-colors duration-300 group cursor-pointer bg-transparent border-b-transparent"
              >
                <div className="mb-6 text-amber-500 transition-colors duration-300">
                  <Icon size={28} strokeWidth={1.5} />
                </div>
                <h4 className="text-white font-bold mb-4 text-sm">{item.title}</h4>
                <p className="text-gray-500 text-xs mb-6 leading-relaxed">{item.description}</p>
                
                <span className="inline-block px-3 py-1 border border-teal-800 text-teal-400 text-[10px] font-bold tracking-wider">
                  {item.tag}
                </span>
              </motion.div>
            );
          })}
        </div>
      </div>
    </section>
  );
}