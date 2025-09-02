import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { 
  Search, 
  ShieldCheck, 
  Users, 
  AlertCircle, 
  Cloud, 
  Fingerprint,
  GraduationCap,
  CheckCircle,
  ArrowRight 
} from 'lucide-react';
import Link from 'next/link';

const services = [
  {
    id: 'penetration-testing',
    icon: Search,
    title: "Penetration Testing",
    description: "Comprehensive security assessments designed for East African infrastructure",
    fullDescription: "Our penetration testing services are specifically tailored for the East African market, with deep expertise in mobile money platforms, banking systems, and government infrastructure. We understand the unique threat landscape and regulatory requirements of Kenya, Uganda, Tanzania, Rwanda, and Ethiopia.",
    features: [
      "M-Pesa and mobile money security testing",
      "Banking application penetration testing",
      "Government portal security assessments",
      "Web application security testing",
      "Network infrastructure testing",
      "Wireless security assessments"
    ],
    caseStudy: {
      client: "Leading Kenyan Bank",
      challenge: "Securing mobile banking platform against regional threats",
      solution: "Comprehensive penetration testing revealed 12 critical vulnerabilities",
      result: "100% vulnerability remediation, zero security incidents post-implementation"
    }
  },
  {
    id: 'risk-assessment',
    icon: ShieldCheck,
    title: "Cybersecurity Risk Assessment",
    description: "Detailed risk evaluations aligned with regional compliance frameworks",
    fullDescription: "Our risk assessment methodology incorporates Kenya's Data Protection Act, AU Malabo Convention requirements, and industry best practices to provide comprehensive cybersecurity risk evaluations.",
    features: [
      "Kenya Data Protection Act compliance assessment",
      "AU cybersecurity framework alignment",
      "Business impact analysis",
      "Threat landscape mapping",
      "Control effectiveness evaluation",
      "Risk mitigation roadmap"
    ],
    caseStudy: {
      client: "Uganda Government Ministry",
      challenge: "Achieving compliance with AU cybersecurity frameworks",
      solution: "Comprehensive risk assessment and compliance roadmap",
      result: "Full compliance achieved within 6 months, enhanced security posture"
    }
  },
  {
    id: 'consulting',
    icon: Users,
    title: "Security Consulting",
    description: "Strategic cybersecurity guidance from regional experts",
    fullDescription: "Our consulting team brings deep understanding of East African business environments, regulatory landscapes, and threat ecosystems to help organizations build robust cybersecurity programs.",
    features: [
      "Cybersecurity strategy development",
      "Regulatory compliance consulting",
      "Security architecture design",
      "Vendor risk management",
      "Security program maturity assessment",
      "Executive advisory services"
    ],
    caseStudy: {
      client: "Tanzanian Telecom Provider",
      challenge: "Developing comprehensive cybersecurity strategy",
      solution: "End-to-end security program design and implementation",
      result: "40% reduction in security incidents, improved regulatory compliance"
    }
  },
  {
    id: 'training',
    icon: GraduationCap,
    title: "Employee Training",
    description: "Cybersecurity awareness programs tailored for East African threats",
    fullDescription: "Our training programs address the specific cybersecurity challenges facing East African organizations, including BEC fraud, mobile money scams, and social engineering attacks common in the region.",
    features: [
      "Phishing awareness and simulation",
      "Mobile money security training",
      "Social engineering defense",
      "Incident reporting procedures",
      "Password security best practices",
      "Remote work security"
    ],
    caseStudy: {
      client: "Rwandan Financial Institution",
      challenge: "High susceptibility to phishing and BEC attacks",
      solution: "Comprehensive employee training and awareness program",
      result: "85% reduction in successful phishing attempts, improved security culture"
    }
  },
  {
    id: 'incident-response',
    icon: AlertCircle,
    title: "Incident Response",
    description: "24/7 rapid response team with regional threat intelligence",
    fullDescription: "Our incident response team combines international best practices with deep knowledge of East African threat actors, attack vectors, and infrastructure challenges to provide rapid, effective incident containment and recovery.",
    features: [
      "24/7 emergency response hotline",
      "Rapid threat containment",
      "Digital forensics and evidence collection",
      "Malware analysis and reverse engineering",
      "Recovery and remediation planning",
      "Post-incident security improvements"
    ],
    caseStudy: {
      client: "Ethiopian Government Agency",
      challenge: "Ransomware attack on critical infrastructure",
      solution: "Emergency response team deployed within 2 hours",
      result: "Complete system recovery within 24 hours, zero data loss"
    }
  },
  {
    id: 'cloud-security',
    icon: Cloud,
    title: "Cloud Security",
    description: "Secure cloud strategies optimized for East African infrastructure",
    fullDescription: "Our cloud security services help organizations leverage cloud technologies while maintaining security, compliance, and data sovereignty requirements specific to East African regulations and infrastructure.",
    features: [
      "AWS/Azure/GCP security configuration",
      "Multi-cloud security architecture",
      "Data sovereignty compliance",
      "Cloud migration security planning",
      "Container and serverless security",
      "Cloud monitoring and threat detection"
    ],
    caseStudy: {
      client: "Kenyan FinTech Startup",
      challenge: "Secure cloud architecture for mobile banking app",
      solution: "End-to-end cloud security design and implementation",
      result: "Successful launch with zero security incidents, 99.9% uptime"
    }
  },
  {
    id: 'forensics',
    icon: Fingerprint,
    title: "Digital Forensics",
    description: "Advanced forensic capabilities for incident investigation",
    fullDescription: "Our digital forensics team provides comprehensive investigation services to help organizations understand security incidents, preserve evidence, and prevent future attacks.",
    features: [
      "Incident investigation and analysis",
      "Digital evidence collection and preservation",
      "Malware analysis and attribution",
      "Network traffic analysis",
      "Mobile device forensics",
      "Legal testimony and expert witness services"
    ],
    caseStudy: {
      client: "Ugandan Manufacturing Company",
      challenge: "Investigating suspected insider threat",
      solution: "Comprehensive digital forensics investigation",
      result: "Identified threat actor, strengthened internal controls, legal action taken"
    }
  }
];

export default function ServicesPage() {
  return (
    <div className="min-h-screen">
      <Header />
      <main>
        {/* Hero Section */}
        <section className="py-20 bg-gradient-to-br from-blue-900/20 via-teal-900/20 to-orange-900/20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="text-center max-w-4xl mx-auto">
              <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold tracking-tight mb-6">
                Cybersecurity Services for
                <span className="block bg-gradient-to-r from-blue-400 to-teal-400 bg-clip-text text-transparent">
                  East Africa
                </span>
              </h1>
              <p className="text-xl text-muted-foreground leading-relaxed">
                Comprehensive security solutions designed specifically for the unique challenges and opportunities 
                of Kenya, Uganda, Tanzania, Rwanda, and Ethiopia's digital ecosystems.
              </p>
            </div>
          </div>
        </section>

        {/* Services Grid */}
        <section className="py-20">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <div className="space-y-16">
              {services.map((service, index) => {
                const IconComponent = service.icon;
                return (
                  <div key={service.id} id={service.id} className={`flex flex-col ${index % 2 === 0 ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-12 items-center`}>
                    <div className="flex-1 space-y-6">
                      <div className="flex items-center space-x-3">
                        <div className="p-3 bg-primary/10 rounded-lg">
                          <IconComponent className="h-8 w-8 text-primary" />
                        </div>
                        <h2 className="text-3xl font-bold">{service.title}</h2>
                      </div>
                      
                      <p className="text-lg text-muted-foreground leading-relaxed">
                        {service.fullDescription}
                      </p>

                      <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                        {service.features.map((feature, featureIndex) => (
                          <div key={featureIndex} className="flex items-center space-x-2">
                            <CheckCircle className="h-4 w-4 text-green-500 flex-shrink-0" />
                            <span className="text-sm">{feature}</span>
                          </div>
                        ))}
                      </div>

                      <Link href="/contact">
                        <Button className="group">
                          Get Started
                          <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
                        </Button>
                      </Link>
                    </div>

                    <div className="flex-1">
                      <Card className="bg-muted/50 border-primary/20">
                        <CardHeader>
                          <CardTitle className="flex items-center space-x-2">
                            <Badge variant="secondary">Case Study</Badge>
                          </CardTitle>
                        </CardHeader>
                        <CardContent className="space-y-4">
                          <div>
                            <h4 className="font-semibold mb-2">Client: {service.caseStudy.client}</h4>
                            <p className="text-sm text-muted-foreground">{service.caseStudy.challenge}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Solution:</h4>
                            <p className="text-sm text-muted-foreground">{service.caseStudy.solution}</p>
                          </div>
                          <div>
                            <h4 className="font-semibold mb-2">Result:</h4>
                            <p className="text-sm text-green-600">{service.caseStudy.result}</p>
                          </div>
                        </CardContent>
                      </Card>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-primary/5">
          <div className="container mx-auto px-4 sm:px-6 lg:px-8 text-center">
            <h2 className="text-3xl font-bold mb-4">Ready to Secure Your Organization?</h2>
            <p className="text-lg text-muted-foreground mb-8 max-w-2xl mx-auto">
              Get started with a free cybersecurity consultation tailored to your specific needs and regional requirements.
            </p>
            <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
              <Link href="/contact">
                <Button size="lg">
                  Schedule Free Consultation
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </Link>
              <Link href="/portal">
                <Button variant="outline" size="lg">
                  Access Client Portal
                </Button>
              </Link>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </div>
  );
}