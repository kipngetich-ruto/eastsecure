import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Shield, Globe, Award, ArrowRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';

const team = [
  {
    name: "Dr. Michael Wanjiku",
    position: "CEO & Founder",
    education: "PhD Cybersecurity, University of Nairobi",
    experience: "15+ years in East African cybersecurity",
    specialties: ["Regional Threat Intelligence", "Financial Services Security", "Government Cybersecurity"],
    image: "https://images.pexels.com/photos/2182970/pexels-photo-2182970.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  },
  {
    name: "Sarah Nakato",
    position: "CTO & Head of Operations",
    education: "MSc Information Security, Makerere University",
    experience: "12+ years in incident response and forensics",
    specialties: ["Digital Forensics", "Incident Response", "Cloud Security"],
    image: "https://images.pexels.com/photos/3184306/pexels-photo-3184306.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  },
  {
    name: "Ahmed Hassan",
    position: "Head of Consulting",
    education: "MSc Cybersecurity, University of Dar es Salaam",
    experience: "10+ years in risk management and compliance",
    specialties: ["Risk Assessment", "Compliance", "Security Strategy"],
    image: "https://images.pexels.com/photos/2379004/pexels-photo-2379004.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  },
  {
    name: "Grace Mutua",
    position: "Head of Training & Awareness",
    education: "MSc Psychology, Kenyatta University",
    experience: "8+ years in security awareness and training",
    specialties: ["Security Awareness", "Training Programs", "Behavioral Security"],
    image: "https://images.pexels.com/photos/3184302/pexels-photo-3184302.jpeg?auto=compress&cs=tinysrgb&w=300&h=300&fit=crop"
  }
];

const partnerships = [
  { name: "SANS Institute", type: "Training Partner" },
  { name: "ISACA East Africa", type: "Professional Member" },
  { name: "CISA Kenya", type: "Government Partner" },
  { name: "East African Community", type: "Regional Partner" },
  { name: "African Union", type: "Compliance Partner" },
  { name: "Kenya Bankers Association", type: "Industry Partner" }
];

export default function AboutPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900/20 via-teal-900/20 to-orange-900/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                About
                <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  EastSecure
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                East Africa&apos;s premier cybersecurity firm, dedicated to protecting the region&apos;s 
                digital transformation with world-class expertise and local knowledge.
              </p>
            </div>
          </div>
        </section>

        {/* Mission & Vision */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
              <Card className="border-primary/20 bg-primary/5">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl">
                    <Shield className="h-6 w-6 text-primary" />
                    <span>Our Mission</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">
                    To empower East African organizations with cutting-edge cybersecurity solutions 
                    that understand and address the unique challenges of our region&apos;s digital landscape. 
                    We bridge global security expertise with local knowledge to protect what matters most.
                  </p>
                </CardContent>
              </Card>

              <Card className="border-teal-500/20 bg-teal-500/5">
                <CardHeader>
                  <CardTitle className="flex items-center space-x-2 text-2xl">
                    <Globe className="h-6 w-6 text-teal-500" />
                    <span>Our Vision</span>
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <p className="text-lg leading-relaxed">
                    To be the leading cybersecurity provider in East Africa, enabling secure digital 
                    transformation across Kenya, Uganda, Tanzania, Rwanda, and Ethiopia while fostering 
                    regional cooperation in cybersecurity excellence.
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Team Section */}
        <section className="py-20 bg-muted/50">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Meet Our Expert Team
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Cybersecurity professionals with deep regional expertise and international certifications
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              {team.map((member, index) => (
                <Card key={index} className="overflow-hidden">
                  <CardContent className="p-6">
                    <div className="flex flex-col sm:flex-row items-center sm:items-start space-y-4 sm:space-y-0 sm:space-x-6">
                      <Image
                        src={member.image}
                        alt={member.name}
                        width={96}
                        height={96}
                        className="w-24 h-24 rounded-full object-cover"
                      />
                      <div className="flex-1 text-center sm:text-left">
                        <h3 className="text-xl font-bold mb-1">{member.name}</h3>
                        <p className="text-primary font-medium mb-2">{member.position}</p>
                        <p className="text-sm text-muted-foreground mb-3">{member.education}</p>
                        <p className="text-sm text-muted-foreground mb-4">{member.experience}</p>
                        <div className="flex flex-wrap gap-2 justify-center sm:justify-start">
                          {member.specialties.map((specialty, specIndex) => (
                            <Badge key={specIndex} variant="secondary" className="text-xs">
                              {specialty}
                            </Badge>
                          ))}
                        </div>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Partnerships */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-4">
                Strategic Partnerships
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
                Collaborating with leading organizations to enhance cybersecurity across East Africa
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              {partnerships.map((partnership, index) => (
                <Card key={index} className="text-center">
                  <CardHeader>
                    <CardTitle className="text-lg">{partnership.name}</CardTitle>
                    <CardDescription>{partnership.type}</CardDescription>
                  </CardHeader>
                </Card>
              ))}
            </div>
          </div>
        </section>

        {/* Compliance Commitment */}
        <section className="py-20 bg-card">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-4xl mx-auto text-center">
              <div className="flex justify-center mb-6">
                <Award className="h-12 w-12 text-primary" />
              </div>
              <h2 className="text-3xl font-bold tracking-tight sm:text-4xl mb-6">
                Commitment to AU Malabo Convention
              </h2>
              <p className="text-lg text-muted-foreground leading-relaxed mb-8">
                EastSecure is committed to supporting the African Union&apos;s Malabo Convention on Cyber Security 
                and Personal Data Protection. We help organizations across East Africa achieve compliance with 
                regional cybersecurity frameworks while maintaining the highest international standards.
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                <div className="text-center space-y-2">
                  <Shield className="h-8 w-8 text-primary mx-auto" />
                  <h3 className="font-semibold">Data Protection</h3>
                  <p className="text-sm text-muted-foreground">Kenya DPA compliance</p>
                </div>
                <div className="text-center space-y-2">
                  <Globe className="h-8 w-8 text-teal-500 mx-auto" />
                  <h3 className="font-semibold">Regional Cooperation</h3>
                  <p className="text-sm text-muted-foreground">Cross-border threat intelligence</p>
                </div>
                <div className="text-center space-y-2">
                  <Award className="h-8 w-8 text-orange-500 mx-auto" />
                  <h3 className="font-semibold">International Standards</h3>
                  <p className="text-sm text-muted-foreground">ISO 27001 & NIST frameworks</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Partner with EastSecure Today</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Join hundreds of East African organizations that trust us with their cybersecurity needs.
            </p>
            <Link href="/contact">
              <Button size="lg">
                Start Your Security Journey
                <ArrowRight className="ml-2 h-4 w-4" />
              </Button>
            </Link>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}