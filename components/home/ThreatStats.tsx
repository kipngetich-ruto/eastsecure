'use client';

import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import { TrendingUp, Shield, AlertTriangle, Users } from 'lucide-react';

const stats = [
  {
    icon: AlertTriangle,
    value: '26M+',
    label: 'Cyber Attacks in Kenya',
    period: 'Quarterly',
    trend: '+15%',
    color: 'text-red-400',
    bgColor: 'bg-red-500/10',
    borderColor: 'border-red-500/20'
  },
  {
    icon: Shield,
    value: '89%',
    label: 'Attacks Prevented',
    period: 'Success Rate',
    trend: '+5%',
    color: 'text-green-400',
    bgColor: 'bg-green-500/10',
    borderColor: 'border-green-500/20'
  },
  {
    icon: TrendingUp,
    value: '$2.1B',
    label: 'Regional Cyber Losses',
    period: 'Annual',
    trend: '+23%',
    color: 'text-orange-400',
    bgColor: 'bg-orange-500/10',
    borderColor: 'border-orange-500/20'
  },
  {
    icon: Users,
    value: '500+',
    label: 'Organizations Protected',
    period: 'Across East Africa',
    trend: '+12%',
    color: 'text-cyan-400',
    bgColor: 'bg-cyan-500/10',
    borderColor: 'border-cyan-500/20'
  }
];

export default function ThreatStats() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1
  });

  const [counters, setCounters] = useState(stats.map(() => 0));

  useEffect(() => {
    if (inView) {
      stats.forEach((stat, index) => {
        const target = parseInt(stat.value.replace(/[^\d]/g, ''));
        let current = 0;
        const increment = target / 50;
        
        const timer = setInterval(() => {
          current += increment;
          if (current >= target) {
            current = target;
            clearInterval(timer);
          }
          
          setCounters(prev => {
            const newCounters = [...prev];
            newCounters[index] = Math.floor(current);
            return newCounters;
          });
        }, 30);
      });
    }
  }, [inView]);

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-slate-900/50">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8 }}
          className="text-center mb-12 lg:mb-16"
        >
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-4">
            East Africa&apos;s Cyber Threat Landscape
          </h2>
          <p className="text-lg sm:text-xl text-slate-300 max-w-3xl mx-auto">
            Real-time insights into the cybersecurity challenges facing our region, 
            and how EastSecure is making a difference.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                whileHover={{ y: -5, scale: 1.02 }}
                className={`relative group ${stat.bgColor} ${stat.borderColor} border backdrop-blur-sm rounded-2xl p-6 hover:shadow-2xl transition-all duration-300`}
              >
                {/* Background Glow */}
                <div className={`absolute inset-0 ${stat.bgColor} rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 blur-xl`} />
                
                <div className="relative z-10">
                  {/* Icon */}
                  <div className="flex items-center justify-between mb-4">
                    <div className={`p-3 ${stat.bgColor} rounded-xl`}>
                      <Icon className={`w-6 h-6 ${stat.color}`} />
                    </div>
                    <div className={`text-sm font-medium ${stat.color} flex items-center gap-1`}>
                      <TrendingUp className="w-4 h-4" />
                      {stat.trend}
                    </div>
                  </div>

                  {/* Value */}
                  <div className="mb-2">
                    <div className="text-3xl sm:text-4xl font-bold text-white">
                      {inView ? (
                        stat.value.includes('M') ? `${counters[index]}M+` :
                        stat.value.includes('B') ? `$${(counters[index] / 1000).toFixed(1)}B` :
                        stat.value.includes('%') ? `${counters[index]}%` :
                        `${counters[index]}+`
                      ) : '0'}
                    </div>
                  </div>

                  {/* Label */}
                  <div className="text-slate-300 font-medium mb-1">
                    {stat.label}
                  </div>
                  <div className="text-slate-400 text-sm">
                    {stat.period}
                  </div>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Additional Context */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.8, delay: 0.6 }}
          className="mt-12 lg:mt-16 text-center"
        >
          <div className="bg-slate-800/30 backdrop-blur-sm border border-slate-700 rounded-2xl p-6 sm:p-8 max-w-4xl mx-auto">
            <h3 className="text-xl sm:text-2xl font-bold text-white mb-4">
              Why East Africa Needs Specialized Cybersecurity
            </h3>
            <div className="grid sm:grid-cols-3 gap-6 text-left">
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Mobile Money Threats</h4>
                <p className="text-slate-300 text-sm">
                  M-Pesa and mobile banking platforms face unique security challenges requiring specialized protection.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Regulatory Compliance</h4>
                <p className="text-slate-300 text-sm">
                  Navigate Kenya&apos;s Data Protection Act and AU cybersecurity frameworks with expert guidance.
                </p>
              </div>
              <div>
                <h4 className="font-semibold text-cyan-400 mb-2">Regional Expertise</h4>
                <p className="text-slate-300 text-sm">
                  Deep understanding of local threat actors, attack patterns, and business environments.
                </p>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}