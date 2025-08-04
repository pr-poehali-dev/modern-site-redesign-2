import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import Icon from "@/components/ui/icon";

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      {/* Navigation */}
      <nav className="fixed top-0 w-full bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 z-50 border-b">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center py-4">
            <div className="flex items-center space-x-2">
              <Icon name="Stethoscope" size={32} className="text-primary" />
              <span className="text-2xl font-bold text-foreground">MAY-DANN Group</span>
            </div>
            <div className="hidden md:flex space-x-8">
              <a href="#home" className="text-muted-foreground hover:text-primary transition-colors">Home</a>
              <a href="#about" className="text-muted-foreground hover:text-primary transition-colors">About Us</a>
              <a href="#services" className="text-muted-foreground hover:text-primary transition-colors">Services</a>
              <a href="#contact" className="text-muted-foreground hover:text-primary transition-colors">Contact</a>
            </div>
            <Button className="hidden md:block">Contact Us</Button>
          </div>
        </div>
      </nav>

      {/* Hero Section */}
      <section id="home" className="pt-20 pb-16 bg-gradient-to-br from-background via-muted/50 to-background">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-6xl font-bold leading-tight">
                  CHANGING HEALTHCARE ACCESS FOR
                  <span className="text-primary block">RURAL COMMUNITIES</span>
                </h1>
                <p className="text-xl text-muted-foreground max-w-lg">
                  We seek to change the lives of one million rural patients and their families through mobile telemedicine technology.
                </p>
              </div>
              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="text-lg px-8 py-4">
                  Contact Us Today
                </Button>
                <Button variant="outline" size="lg" className="text-lg px-8 py-4">
                  Learn More
                </Button>
              </div>
            </div>
            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/79f007cf-3a7b-4932-b096-9151ae9c0352.jpg" 
                  alt="Healthcare professional using telemedicine technology"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* About Us Section */}
      <section id="about" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">About Us</h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
              A rural healthcare services firm focused on acquisitions and expanding market potential through telemedicine integration.
            </p>
          </div>

          {/* Mission Statement */}
          <div className="mb-16">
            <Card className="border-primary/20">
              <CardHeader className="text-center">
                <CardTitle className="text-3xl text-primary">Mission Statement</CardTitle>
              </CardHeader>
              <CardContent className="text-center">
                <p className="text-lg text-muted-foreground leading-relaxed">
                  The mission of MAY-DANN Group is seeking to become the largest provider of home healthcare services 
                  to rural communities in the southeastern US. We seek to change the lives of one million rural patients 
                  and their families for the better, by augmenting the standards of care with mobile telemedicine technology.
                </p>
              </CardContent>
            </Card>
          </div>

          {/* Guiding Principles */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Our Guiding Principles</h3>
            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
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
                <Card key={index} className="text-center hover:shadow-lg transition-shadow">
                  <CardHeader>
                    <div className="mx-auto mb-4 p-3 bg-primary/10 rounded-full w-fit">
                      <Icon name={principle.icon} size={32} className="text-primary" />
                    </div>
                    <CardTitle className="text-xl">{principle.title}</CardTitle>
                  </CardHeader>
                  <CardContent>
                    <p className="text-muted-foreground">{principle.description}</p>
                  </CardContent>
                </Card>
              ))}
            </div>
          </div>

          {/* Business Model */}
          <div className="mb-16">
            <h3 className="text-3xl font-bold text-center mb-12">Our Business Model</h3>
            <div className="grid md:grid-cols-3 gap-8">
              {[
                {
                  step: "1",
                  title: "Consolidate/Centralize",
                  subtitle: "Administration & Sales",
                  description: "Acquire existing home healthcare services operating in fragmented markets."
                },
                {
                  step: "2", 
                  title: "Augment with",
                  subtitle: "Telemedicine",
                  description: "Integrate telemedicine technology to meet provider and patient demands."
                },
                {
                  step: "3",
                  title: "Increase Service",
                  subtitle: "Agreements", 
                  description: "Expand market presence through expansion of service agreements."
                }
              ].map((model, index) => (
                <div key={index} className="relative">
                  <Card className="h-full hover:shadow-lg transition-shadow">
                    <CardHeader className="text-center">
                      <div className="mx-auto mb-4 w-12 h-12 bg-primary text-primary-foreground rounded-full flex items-center justify-center text-xl font-bold">
                        {model.step}
                      </div>
                      <CardTitle className="text-xl">{model.title}</CardTitle>
                      <CardDescription className="text-lg font-semibold text-accent">{model.subtitle}</CardDescription>
                    </CardHeader>
                    <CardContent className="text-center">
                      <p className="text-muted-foreground">{model.description}</p>
                    </CardContent>
                  </Card>
                  {index < 2 && (
                    <div className="hidden md:block absolute top-1/2 -right-4 transform -translate-y-1/2">
                      <Icon name="ArrowRight" size={24} className="text-primary" />
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Services Section */}
      <section id="services" className="py-20 bg-muted/50">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Services</h2>
            <p className="text-2xl text-primary font-semibold mb-8">WE CONNECT THE PATIENT TO THEIR DOCTORS</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div className="space-y-8">
              <div className="grid gap-6">
                {[
                  {
                    icon: "Home",
                    title: "Rural Home Healthcare Agency",
                    description: "Comprehensive home healthcare services tailored for rural communities."
                  },
                  {
                    icon: "Smartphone",
                    title: "Mobile Telemedicine Technology",
                    description: "Real-time interface between patients and healthcare providers through advanced technology."
                  },
                  {
                    icon: "Users",
                    title: "Trained Healthcare Aides",
                    description: "Specially trained traveling healthcare aides equipped with telemedicine units."
                  }
                ].map((service, index) => (
                  <Card key={index} className="hover:shadow-lg transition-shadow">
                    <CardContent className="flex items-start space-x-4 p-6">
                      <div className="p-3 bg-primary/10 rounded-full">
                        <Icon name={service.icon} size={28} className="text-primary" />
                      </div>
                      <div>
                        <h4 className="text-xl font-semibold mb-2">{service.title}</h4>
                        <p className="text-muted-foreground">{service.description}</p>
                      </div>
                    </CardContent>
                  </Card>
                ))}
              </div>
              
              <Card className="bg-primary/5 border-primary/20">
                <CardContent className="p-6">
                  <p className="text-lg leading-relaxed">
                    By facilitating direct access between the patient and the provider, The MAY-DANN Group seeks to 
                    eliminate the barriers of both the lack of transportation and technology that prevent access to 
                    quality healthcare for the rural community.
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="relative">
              <div className="rounded-2xl overflow-hidden shadow-2xl">
                <img 
                  src="/img/19fe887f-d8d8-48dc-8a2c-26aea10a1f66.jpg" 
                  alt="Rural healthcare services"
                  className="w-full h-auto"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section id="contact" className="py-20">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-4xl font-bold mb-4">Contact Us</h2>
            <p className="text-xl text-muted-foreground">Get in touch to learn more about our services</p>
          </div>

          <div className="grid lg:grid-cols-2 gap-12">
            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Contact Information</CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div>
                  <h4 className="font-semibold text-lg mb-2">Timothy Carvana, Founder, CEO</h4>
                  <p className="text-muted-foreground">The MAY-DANN Group Incorporated</p>
                </div>
                
                <div className="space-y-3">
                  <div className="flex items-center space-x-3">
                    <Icon name="MapPin" size={20} className="text-primary" />
                    <div>
                      <p>628 W. Fourth Street</p>
                      <p>Winston-Salem NC 27101</p>
                    </div>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Phone" size={20} className="text-primary" />
                    <p>404-324-8412</p>
                  </div>
                  
                  <div className="flex items-center space-x-3">
                    <Icon name="Mail" size={20} className="text-primary" />
                    <p>timcarvana@may-dann.com</p>
                  </div>
                </div>
              </CardContent>
            </Card>

            <Card className="hover:shadow-lg transition-shadow">
              <CardHeader>
                <CardTitle className="text-2xl">Get Started</CardTitle>
                <CardDescription>Ready to transform rural healthcare in your community?</CardDescription>
              </CardHeader>
              <CardContent className="space-y-6">
                <p className="text-muted-foreground">
                  Contact us today to learn how MAY-DANN Group can bring quality healthcare services 
                  and telemedicine technology to your rural community.
                </p>
                
                <div className="space-y-4">
                  <Button size="lg" className="w-full">
                    <Icon name="Phone" size={20} className="mr-2" />
                    Call Now: 404-324-8412
                  </Button>
                  
                  <Button variant="outline" size="lg" className="w-full">
                    <Icon name="Mail" size={20} className="mr-2" />
                    Send Email
                  </Button>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-card border-t py-12">
        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center space-y-4">
            <div className="flex items-center justify-center space-x-2">
              <Icon name="Stethoscope" size={28} className="text-primary" />
              <span className="text-xl font-bold">MAY-DANN Group</span>
            </div>
            <p className="text-muted-foreground">
              The MAY-DANN Group Incorporated, 628 W. Fourth Street Winston-Salem NC 27101
            </p>
            <p className="text-sm text-muted-foreground">
              © 2021 The MAY-DANN Group Incorporated
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
};

export default Index;