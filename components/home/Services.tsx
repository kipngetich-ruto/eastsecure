'use client';

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { 
  Search, 
  ShieldCheck, 
  Users, 
  AlertCircle, 
  Cloud, 
  Fingerprint,
  GraduationCap,
  ArrowRight,
  CheckCircle
} from 'lucide-react';
import { motion } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import Link from 'next/link';

const services = [
  {
    icon: Search,
    title: "Penetration Testing",
    description: "Comprehensive security assessments tailored for East African banking systems, mobile money platforms, and government infrastructure.",
    features: ["M-Pesa Security Testing", "Banking Application Security", "Government Portal Testing"],
    highlight: "Most Popular"
  },
  {
    icon: ShieldCheck,
    title: "Risk Assessment",
    description: "Detailed cybersecurity risk evaluations aligned with Kenya's Data Protection Act and AU cybersecurity frameworks.",
    features: ["Compliance Assessment", "Threat Modeling", "Risk Mitigation Strategy"]
  },
  {
    icon: Users,
    title: "Security Consulting",
    description: "Strategic cybersecurity guidance from experts who understand the unique challenges of East African businesses.",
    features: ["Security Strategy", "Compliance Roadmap", "Technology Selection"]
  },
  {
    icon: GraduationCap,
    title: "Employee Training",
    description: "Cybersecurity awareness programs focused on regional threats like BEC fraud, phishing, and social engineering.",
    features: ["Phishing Simulation", "Security Awareness", "Incident Response Training"],
    highlight: "New"
  },
  {
    icon: AlertCircle,
    title: "Incident Response",
    description: "24/7 rapid response team with deep knowledge of East African threat actors and attack patterns.",
    features: ["24/7 Monitoring", "Forensic Analysis", "Recovery Planning"]
  },
  {
    icon: Cloud,
    title: "Cloud Security",
    description: "Secure cloud migrations and configurations optimized for East African infrastructure and connectivity.",
    features: ["AWS/Azure Security", "Multi-Cloud Strategy", "Data Sovereignty"]
  }
];

export default function Services() {
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.6,
        ease: "easeOut",
      },
    },
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-muted/50 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-blue-500/5" />
      <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
            Comprehensive Cybersecurity
            <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
              Services
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Protecting East African organizations with specialized security solutions designed for our unique threat landscape
          </p>
        </motion.div>

        <motion.div
          variants={containerVariants}
          initial="hidden"
          animate={inView ? "visible" : "hidden"}
          className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 sm:gap-8"
        >
          {services.map((service, index) => {
            const IconComponent = service.icon;
            return (
              <motion.div
                key={index}
                variants={itemVariants}
                whileHover={{ y: -8, scale: 1.02 }}
                className="group h-full"
              >
                <Card className="h-full bg-card/50 backdrop-blur-sm border-border/50 hover:border-primary/30 hover:shadow-2xl transition-all duration-300 overflow-hidden relative">
                  {/* Highlight badge */}
                  {service.highlight && (
                    <div className="absolute top-4 right-4 z-10">
                      <Badge 
                        variant="secondary" 
                        className={`text-xs font-medium ${
                          service.highlight === 'Most Popular' 
                            ? 'bg-primary/20 text-primary border-primary/30' 
                            : 'bg-teal-500/20 text-teal-400 border-teal-500/30'
                        }`}
                      >
                        {service.highlight}
                      </Badge>
                    </div>
                  )}

                  {/* Gradient overlay on hover */}
                  <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-teal-500/5 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />

                  <CardHeader className="relative z-10 pb-4">
                    <div className="flex items-center space-x-3 mb-3">
                      <motion.div 
                        whileHover={{ rotate: 360, scale: 1.1 }}
                        transition={{ duration: 0.5 }}
                        className="p-3 bg-primary/10 rounded-xl group-hover:bg-primary/20 transition-colors duration-300"
                      >
                        <IconComponent className="h-6 w-6 sm:h-7 sm:w-7 text-primary group-hover:text-blue-400 transition-colors duration-300" />
                      </motion.div>
                      <CardTitle className="text-lg sm:text-xl font-bold group-hover:text-primary transition-colors duration-300">
                        {service.title}
                      </CardTitle>
                    </div>
                    <CardDescription className="text-sm sm:text-base text-muted-foreground leading-relaxed">
                      {service.description}
                    </CardDescription>
                  </CardHeader>
                  
                  <CardContent className="relative z-10 space-y-6">
                    <ul className="space-y-3">
                      {service.features.map((feature, featureIndex) => (
                        <motion.li 
                          key={featureIndex} 
                          initial={{ opacity: 0, x: -20 }}
                          animate={inView ? { opacity: 1, x: 0 } : { opacity: 0, x: -20 }}
                          transition={{ duration: 0.4, delay: (index * 0.1) + (featureIndex * 0.05) }}
                          className="flex items-center space-x-3 text-sm sm:text-base"
                        >
                          <CheckCircle className="h-4 w-4 text-teal-400 flex-shrink-0" />
                          <span className="text-muted-foreground group-hover:text-foreground transition-colors duration-300">
                            {feature}
                          </span>
                        </motion.li>
                      ))}
                    </ul>
                    
                    <Link href="/services" className="block">
                      <Button 
                        variant="outline" 
                        className="w-full group-hover:bg-primary group-hover:text-primary-foreground group-hover:border-primary transition-all duration-300 hover:shadow-lg"
                      >
                        Learn More
                        <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform duration-300" />
                      </Button>
                    </Link>
                  </CardContent>
                </Card>
              </motion.div>
            );
          })}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
          transition={{ duration: 0.6, delay: 0.8 }}
          className="text-center mt-12 sm:mt-16"
        >
          <Link href="/services">
            <motion.div
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
            >
              <Button 
                size="lg" 
                className="bg-gradient-to-r from-primary to-blue-500 hover:from-primary/90 hover:to-blue-500/90 shadow-xl hover:shadow-primary/25 text-base sm:text-lg px-6 sm:px-8 py-3 sm:py-4"
              >
                View All Services
                <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
              </Button>
            </motion.div>
          </Link>
        </motion.div>
      </div>
    </section>
  );
}