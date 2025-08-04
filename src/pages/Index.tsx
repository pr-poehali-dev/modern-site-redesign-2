import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b border-primary/20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Stethoscope" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">MAY-DANN Group</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors font-medium">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors font-medium">About Us</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors font-medium">Services</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors font-medium">Contact</a>
            </div>
            <Button className="hidden md:block bg-primary hover:bg-primary/90">Contact Us</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-background via-primary/5 to-secondary/10">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center min-h-[80vh]">
            <div className="space-y-8">
              <div className="space-y-6">
                <h1 className="text-5xl md:text-7xl font-bold leading-tight">
                  CHANGING
                  <span className="text-primary block">HEALTHCARE</span>
                  <span className="text-secondary block">ACCESS</span>
                  FOR RURAL COMMUNITIES
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg leading-relaxed">
                  We seek to change the lives of one million rural patients and their families through mobile telemedicine technology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-6 bg-primary hover:bg-primary/90 shadow-lg">
                  <Icon name="Phone" size={20} className="mr-2" />
                  Contact Us Today
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-6 border-primary text-primary hover:bg-primary/10">
                  <Icon name="ArrowRight" size={20} className="mr-2" />
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl transform rotate-3 hover:rotate-0 transition-transform duration-500">
                <img 
                  src="/img/a0e0d3e0-f242-448a-b75f-b8addadb7c3c.jpg" 
                  alt="Modern telemedicine technology"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-secondary/20 backdrop-blur-sm rounded-2xl p-6">
                <div className="flex items-center space-x-3">
                  <div className="w-4 h-4 bg-secondary rounded-full animate-pulse"></div>
                  <span className="text-sm font-semibold">Connecting 1M+ Patients</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Icon name="Users" size={16} className="text-primary" />
              <span className="text-sm font-semibold text-primary">About MAY-DANN Group</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-6">Transforming Rural Healthcare</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              A rural healthcare services firm focused on acquisitions and expanding market potential through telemedicine integration.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-20">
            <Card className="border-primary/20 bg-gradient-to-br from-primary/5 to-secondary/5 shadow-xl">
              <CardHeader className="text-center pb-8">
                <div className="mx-auto mb-4 p-4 bg-primary/20 rounded-full w-fit">
                  <Icon name="Target" size={40} className="text-primary" />
                </div>
                <CardTitle className="text-3xl md:text-4xl text-primary mb-4">Mission Statement</CardTitle>
              </CardHeader>
              <CardContent className="text-center px-8 pb-8">
                <p className="text-lg md:text-xl text-muted-foreground leading-relaxed max-w-4xl mx-auto">
                  The mission of MAY-DANN Group is seeking to become the largest provider of home healthcare services 
                  to rural communities in the southeastern US. We seek to change the lives of one million rural patients 
                  and their families for the better, by augmenting the standards of care with mobile telemedicine technology.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Guiding Principles */}
          <div className="mb-20">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Guiding Principles</h3>
              <p className="text-lg text-muted-foreground">Four core values that drive our mission forward</p>
            </div>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
              {[
                {
                  icon: "Shield",
                  title: "Highest Ethics",
                  description: "Ensuring the highest standards of ethics in providing equitable and quality home healthcare services."
                },
                {
                  icon: "Heart",
                  title: "Expanding Access",
                  description: "Expanding access to quality healthcare in our target markets."
                },
                {
                  icon: "Building2",
                  title: "Community Investment",
                  description: "Investing in communities through innovation and strategic relationships."
                },
                {
                  icon: "TrendingUp",
                  title: "Market Consolidation",
                  description: "Creating rational market consolidation to remediate fragmented rural healthcare."
                }
              ].map((principle, index) => (
                <Card key={index} className="text-center hover:shadow-xl transition-all duration-300 hover:-translate-y-2 border-primary/10">
                  <CardHeader className="pb-4">
                    <div className="mx-auto mb-4 p-4 bg-primary/10 rounded-full w-fit">
                      <Icon name={principle.icon} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground leading-relaxed">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business Model */}
          <div className="mb-16">
            <div className="text-center mb-12">
              <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Business Model</h3>
              <p className="text-lg text-muted-foreground">A three-step approach to transforming rural healthcare</p>
            </div>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Consolidate/Centralize",
                  subtitle: "Administration & Sales",
                  description: "Acquire existing home healthcare services operating in fragmented markets.",
                  icon: "Building"
                },
                {
                  step: "2", 
                  title: "Augment with",
                  subtitle: "Telemedicine",
                  description: "Integrate telemedicine technology to meet provider and patient demands.",
                  icon: "Smartphone"
                },
                {
                  step: "3",
                  title: "Increase Service",
                  subtitle: "Agreements", 
                  description: "Expand market presence through expansion of service agreements.",
                  icon: "TrendingUp"
                }
              ].map((model, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-xl transition-all duration-300 hover:-translate-y-2 bg-gradient-to-br from-card to-primary/5">
                    <CardHeader className="text-center pb-6">
                      <div className="mx-auto mb-4 w-16 h-16 bg-gradient-to-br from-primary to-secondary text-white rounded-full flex items-center justify-center text-2xl font-bold shadow-lg">
                        {model.step}
                      </div>
                      <div className="mb-3">
                        <Icon name={model.icon} size={28} className="text-primary mx-auto mb-2" />
                      </div>
                      <CardTitle className="text-xl mb-2">{model.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-secondary">{model.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground leading-relaxed">{model.description}</p>  
                    </CardContent>
                  </Card>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2 z-10">
                      <div className="bg-secondary rounded-full p-2 shadow-lg">
                        <Icon name="ArrowRight" size={20} className="text-white" />
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-24 bg-gradient-to-br from-primary/5 via-background to-secondary/5">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-secondary/20 rounded-full px-4 py-2 mb-4">
              <Icon name="Stethoscope" size={16} className="text-secondary" />
              <span className="text-sm font-semibold text-secondary">Our Services</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Services</h2>
            <p className="text-2xl md:text-3xl text-primary font-bold mb-8">WE CONNECT THE PATIENT TO THEIR DOCTORS</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-16 items-center mb-16">
            <div className="space-y-8">
              <div className="grid gap-6">
                {[
                  {
                    icon: "Home",
                    title: "Rural Home Healthcare Agency",
                    description: "Comprehensive home healthcare services specifically designed for rural communities, bringing quality care directly to patients' homes."
                  },
                  {
                    icon: "Smartphone",
                    title: "Mobile Telemedicine Technology",
                    description: "Cutting-edge real-time interface between patients and healthcare providers through advanced telemedicine platforms."
                  },
                  {
                    icon: "Users",
                    title: "Trained Healthcare Aides",  
                    description: "Specially trained traveling healthcare aides equipped with state-of-the-art telemedicine units for on-site care delivery."
                  }
                ].map((service, index) => (
                  <Card key={index} className="hover:shadow-xl transition-all duration-300 hover:-translate-y-1 border-primary/20">
                    <CardContent className="flex items-start space-x-6 p-8">
                      <div className="p-4 bg-primary/10 rounded-2xl">
                        <Icon name={service.icon} size={32} className="text-primary" />
                      </div>
                      <div className="flex-1">
                        <h4 className="text-xl font-bold mb-3 text-foreground">{service.title}</h4>
                        <p className="text-muted-foreground leading-relaxed">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>

            <div className="relative">
              <div className="rounded-3xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/a9504220-c307-4b89-ad79-84c40a4e11b4.jpg" 
                  alt="Rural healthcare services"
                  className="w-full h-auto"
                />
              </div>
              <div className="absolute -top-6 -right-6 bg-primary/90 backdrop-blur-sm rounded-2xl p-6 text-white">
                <div className="text-center">
                  <div className="text-3xl font-bold">1M+</div>
                  <div className="text-sm">Target Patients</div>
                </div>
              </div>
            </div>
          </div>

          <Card className="bg-gradient-to-r from-primary/10 via-secondary/10 to-primary/10 border-primary/20 p-8">
            <CardContent className="text-center">
              <Icon name="Target" size={48} className="text-primary mx-auto mb-6" />
              <p className="text-lg md:text-xl leading-relaxed max-w-4xl mx-auto text-muted-foreground">
                By facilitating direct access between the patient and the provider, The MAY-DANN Group seeks to 
                eliminate the barriers of both the lack of transportation and technology that prevent access to 
                quality healthcare for the rural community.
              </p>
            </CardContent>
          </Card>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-24 bg-card">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <div className="inline-flex items-center space-x-2 bg-primary/10 rounded-full px-4 py-2 mb-4">
              <Icon name="MessageCircle" size={16} className="text-primary" />
              <span className="text-sm font-semibold text-primary">Get In Touch</span>
            </div>
            <h2 className="text-4xl md:text-5xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-muted-foreground">Ready to transform healthcare in your rural community?</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 max-w-6xl mx-auto">
            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-card to-primary/5 border-primary/20">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-primary/20 rounded-full">
                    <Icon name="User" size={24} className="text-primary" />
                  </div>
                  <CardTitle className="text-2xl">Leadership Contact</CardTitle>
                </div>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="p-6 bg-background/80 rounded-xl">
                  <h4 className="font-bold text-lg mb-2 text-primary">Timothy Carvana</h4>
                  <p className="text-muted-foreground mb-1">Founder & CEO</p>
                  <p className="text-sm text-muted-foreground">The MAY-DANN Group Incorporated</p>
                </div>
                
                <div className="space-y-4">
                  <div className="flex items-start space-x-4 p-4 bg-background/60 rounded-lg hover:bg-background/80 transition-colors">
                    <Icon name="MapPin" size={20} className="text-secondary mt-1" />
                    <div>
                      <p className="font-medium">628 W. Fourth Street</p>
                      <p className="text-muted-foreground">Winston-Salem NC 27101</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-background/60 rounded-lg hover:bg-background/80 transition-colors">
                    <Icon name="Phone" size={20} className="text-secondary" />
                    <p className="font-medium">404-324-8412</p>
                  </div>
                  
                  <div className="flex items-center space-x-4 p-4 bg-background/60 rounded-lg hover:bg-background/80 transition-colors">
                    <Icon name="Mail" size={20} className="text-secondary" />
                    <p className="font-medium">timcarvana@may-dann.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-xl transition-shadow bg-gradient-to-br from-secondary/5 to-primary/5 border-secondary/20">
              <CardHeader className="pb-6">
                <div className="flex items-center space-x-3 mb-4">
                  <div className="p-3 bg-secondary/20 rounded-full">
                    <Icon name="Rocket" size={24} className="text-secondary" />
                  </div>
                  <CardTitle className="text-2xl">Get Started Today</CardTitle>
                </div>
                <CardDescription className="text-base">Transform rural healthcare in your community with our innovative solutions.</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid gap-4">
                  <div className="p-6 bg-background/80 rounded-xl text-center">
                    <Icon name="Users" size={40} className="text-primary mx-auto mb-3" />
                    <h5 className="font-semibold mb-2">1M+ Patients</h5>
                    <p className="text-sm text-muted-foreground">Our target to impact rural communities</p>
                  </div>
                  
                  <div className="p-6 bg-background/80 rounded-xl text-center">
                    <Icon name="Smartphone" size={40} className="text-secondary mx-auto mb-3" />
                    <h5 className="font-semibold mb-2">Advanced Technology</h5>
                    <p className="text-sm text-muted-foreground">Mobile telemedicine solutions</p>
                  </div>
                </div>
                
                <div className="space-y-3">
                  <Button size="lg" className="w-full bg-primary hover:bg-primary/90 shadow-lg">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Call Now: 404-324-8412
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full border-secondary text-secondary hover:bg-secondary/10">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Send Email
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full border-primary text-primary hover:bg-primary/10">
                    <Icon name="Calendar" size={20} className="mr-2" />
                    Schedule Consultation
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>

          {/* Call to Action */}
          <div className="mt-16 text-center">
            <Card className="bg-gradient-to-r from-primary to-secondary text-white border-0 shadow-2xl max-w-4xl mx-auto">
              <CardContent className="p-12">
                <h3 className="text-3xl md:text-4xl font-bold mb-4">Ready to Transform Rural Healthcare?</h3>
                <p className="text-xl mb-8 opacity-90">
                  Join us in our mission to bring quality healthcare to one million rural patients and their families.
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Button size="lg" variant="secondary" className="text-lg px-8 py-4 bg-white text-primary hover:bg-white/90">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Contact Us Today
                  </Button>
                  <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-white text-white hover:bg-white/10">
                    <Icon name="Download" size={20} className="mr-2" />
                    Download Brochure
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-foreground text-background py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-6">
            <div className="flex items-center justify-center space-x-3">
              <Icon name="Stethoscope" size={32} className="text-primary" />
              <span className="text-2xl font-bold">MAY-DANN Group</span>
            </div>
            <div className="max-w-2xl mx-auto">
              <p className="text-background/80 mb-2">
                The MAY-DANN Group Incorporated
              </p>
              <p className="text-background/70">
                628 W. Fourth Street, Winston-Salem NC 27101
              </p>
              <p className="text-background/70">
                Phone: 404-324-8412 | Email: timcarvana@may-dann.com
              </p>
            </div>
            <div className="border-t border-background/20 pt-6">
              <p className="text-sm text-background/60">
                © 2021 The MAY-DANN Group Incorporated. All rights reserved.
              </p>
            </div>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;