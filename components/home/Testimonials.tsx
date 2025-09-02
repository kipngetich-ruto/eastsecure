'use client';

import { useState, useEffect } from 'react';
import { Card, CardContent } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';

const testimonials = [
  {
    id: 1,
    name: "Sarah Mwangi",
    position: "CISO",
    company: "Kenya Commercial Bank",
    content: "EastSecure's penetration testing revealed critical vulnerabilities in our mobile banking platform. Their expertise in M-Pesa integration security is unmatched in the region. The team's understanding of local threat actors and attack vectors saved us from potential millions in losses.",
    rating: 5,
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    companyLogo: "KCB"
  },
  {
    id: 2,
    name: "James Kiprotich",
    position: "IT Director",
    company: "Uganda Revenue Authority",
    content: "The incident response team at EastSecure helped us contain a ransomware attack within hours. Their understanding of AU cybersecurity frameworks and rapid deployment across borders made all the difference. Exceptional service and expertise.",
    rating: 5,
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    companyLogo: "URA"
  },
  {
    id: 3,
    name: "Amina Hassan",
    position: "CEO",
    company: "TechStart Rwanda",
    content: "Their employee training program transformed our security culture. The focus on East African threat landscape was exactly what we needed for our fintech startup. Our phishing susceptibility dropped by 85% after their comprehensive training program.",
    rating: 5,
    image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    companyLogo: "TS"
  },
  {
    id: 4,
    name: "David Mwangi",
    position: "Security Manager",
    company: "Equity Bank Group",
    content: "EastSecure's cloud security assessment helped us migrate our core banking systems to AWS while maintaining compliance with Kenya's Data Protection Act. Their regional expertise in financial services security is outstanding.",
    rating: 5,
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=150&h=150&fit=crop",
    companyLogo: "EBG"
  }
];

export default function Testimonials() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isAutoPlaying, setIsAutoPlaying] = useState(true);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.2,
  });

  useEffect(() => {
    if (!isAutoPlaying) return;

    const timer = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    }, 6000);

    return () => clearInterval(timer);
  }, [isAutoPlaying]);

  const nextTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const prevTestimonial = () => {
    setIsAutoPlaying(false);
    setCurrentIndex((prevIndex) => (prevIndex - 1 + testimonials.length) % testimonials.length);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  const goToTestimonial = (index: number) => {
    setIsAutoPlaying(false);
    setCurrentIndex(index);
    setTimeout(() => setIsAutoPlaying(true), 10000);
  };

  return (
    <section className="py-16 sm:py-20 lg:py-24 bg-card/30 relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 bg-gradient-to-br from-teal-950/20 to-blue-950/20" />
      <div className="absolute top-1/2 left-0 w-96 h-96 bg-teal-500/5 rounded-full blur-3xl" />
      <div className="absolute top-1/4 right-0 w-96 h-96 bg-blue-500/5 rounded-full blur-3xl" />

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <motion.div
          ref={ref}
          initial={{ opacity: 0, y: 50 }}
          animate={inView ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12 sm:mb-16"
        >
          <h2 className="text-2xl sm:text-3xl lg:text-4xl xl:text-5xl font-bold tracking-tight mb-4 sm:mb-6">
            Trusted by East Africa&apos;s
            <span className="block bg-gradient-to-r from-teal-400 to-blue-400 bg-clip-text text-transparent">
              Leading Organizations
            </span>
          </h2>
          <p className="text-base sm:text-lg lg:text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            See what our clients say about our cybersecurity expertise and regional focus
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          animate={inView ? { opacity: 1, scale: 1 } : { opacity: 0, scale: 0.95 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className="relative max-w-5xl mx-auto"
        >
          <Card className="bg-card/80 backdrop-blur-md border-border/50 shadow-2xl overflow-hidden">
            <CardContent className="p-6 sm:p-8 lg:p-12">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, x: 50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.5, ease: "easeInOut" }}
                  className="space-y-6 sm:space-y-8"
                >
                  {/* Quote icon */}
                  <div className="flex justify-center">
                    <Quote className="h-8 w-8 sm:h-10 sm:w-10 text-primary/50" />
                  </div>

                  {/* Rating */}
                  <div className="flex justify-center space-x-1">
                    {[...Array(testimonials[currentIndex].rating)].map((_, i) => (
                      <motion.div
                        key={i}
                        initial={{ opacity: 0, scale: 0 }}
                        animate={{ opacity: 1, scale: 1 }}
                        transition={{ duration: 0.3, delay: i * 0.1 }}
                      >
                        <Star className="w-5 h-5 sm:w-6 sm:h-6 fill-yellow-400 text-yellow-400" />
                      </motion.div>
                    ))}
                  </div>

                  {/* Testimonial content */}
                  <blockquote className="text-base sm:text-lg lg:text-xl text-center italic leading-relaxed max-w-4xl mx-auto">
                    `{testimonials[currentIndex].content}`
                  </blockquote>

                  {/* Author info */}
                  <div className="flex flex-col sm:flex-row items-center justify-center space-y-4 sm:space-y-0 sm:space-x-6">
                    <motion.img
                      whileHover={{ scale: 1.1 }}
                      src={testimonials[currentIndex].image}
                      alt={testimonials[currentIndex].name}
                      className="w-16 h-16 sm:w-20 sm:h-20 rounded-full object-cover border-2 border-primary/20"
                    />
                    
                    <div className="text-center sm:text-left">
                      <div className="font-bold text-lg sm:text-xl">
                        {testimonials[currentIndex].name}
                      </div>
                      <div className="text-primary font-medium">
                        {testimonials[currentIndex].position}
                      </div>
                      <div className="text-muted-foreground text-sm sm:text-base">
                        {testimonials[currentIndex].company}
                      </div>
                    </div>

                    {/* Company logo placeholder */}
                    <div className="hidden sm:block">
                      <div className="w-12 h-12 bg-muted/50 rounded-lg flex items-center justify-center text-xs font-bold text-muted-foreground">
                        {testimonials[currentIndex].companyLogo}
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </CardContent>
          </Card>

          {/* Enhanced navigation */}
          <div className="flex flex-col sm:flex-row justify-center items-center space-y-4 sm:space-y-0 sm:space-x-6 mt-8">
            {/* Navigation buttons */}
            <div className="flex items-center space-x-4">
              <Button
                variant="outline"
                size="icon"
                onClick={prevTestimonial}
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <ChevronLeft className="h-4 w-4" />
              </Button>
              
              <Button
                variant="outline"
                size="icon"
                onClick={nextTestimonial}
                className="rounded-full hover:bg-primary hover:text-primary-foreground transition-all duration-300 hover:scale-110"
              >
                <ChevronRight className="h-4 w-4" />
              </Button>
            </div>

            {/* Dots indicator */}
            <div className="flex space-x-2">
              {testimonials.map((_, index) => (
                <motion.button
                  key={index}
                  onClick={() => goToTestimonial(index)}
                  whileHover={{ scale: 1.2 }}
                  whileTap={{ scale: 0.9 }}
                  className={`w-3 h-3 rounded-full transition-all duration-300 ${
                    index === currentIndex 
                      ? 'bg-primary shadow-lg shadow-primary/50' 
                      : 'bg-muted-foreground/30 hover:bg-muted-foreground/50'
                  }`}
                />
              ))}
            </div>

            {/* Auto-play indicator */}
            <div className="hidden sm:flex items-center space-x-2 text-xs text-muted-foreground">
              <div className={`w-2 h-2 rounded-full ${isAutoPlaying ? 'bg-green-400 animate-pulse' : 'bg-muted-foreground/50'}`} />
              <span>{isAutoPlaying ? 'Auto-playing' : 'Paused'}</span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}