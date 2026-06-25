import { useState } from "react";
import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Mail, Phone, Github, Linkedin, Send } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { z } from "zod";

const contactSchema = z.object({
  name: z.string().trim().min(1, "Name is required").max(100),
  email: z.string().trim().email("Invalid email address").max(255),
  message: z.string().trim().min(1, "Message is required").max(1000),
});

const Contact = () => {
  const { toast } = useToast();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    message: "",
  });
  const [isSubmitting, setIsSubmitting] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
  e.preventDefault();
  setIsSubmitting(true);

  try {
    contactSchema.parse(formData);

    const response = await fetch("https://api.web3forms.com/submit", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Accept: "application/json",
      },
      body: JSON.stringify({
        access_key: "8331c081-de90-4d12-85d6-6efdf2ac2d35",
        name: formData.name,
        email: formData.email,
        message: formData.message,
        subject: "New Portfolio Contact",
      }),
    });

    const result = await response.json();

    if (result.success) {
      toast({
        title: "Message Sent!",
        description: "Thank you for contacting me. I'll get back to you soon.",
      });

      setFormData({
        name: "",
        email: "",
        message: "",
      });
    } else {
      throw new Error(result.message || "Failed to send message");
    }
  } catch (error) {
    if (error instanceof z.ZodError) {
      toast({
        title: "Validation Error",
        description: error.errors[0].message,
        variant: "destructive",
      });
    } else {
      toast({
        title: "Error",
        description: "Unable to send your message.",
        variant: "destructive",
      });
    }
  } finally {
    setIsSubmitting(false);
  }
};

  const contactInfo = [
    {
      icon: MapPin,
      label: "Location",
      value: "Phagwara, Punjab, India",
      color: "primary",
    },
    {
      icon: Mail,
      label: "Email",
      value: "rahulsingh25chahar@gmail.com",
      link: "mailto:rahulsingh25chahar@gmail.com",
      color: "accent",
    },
    {
      icon: Phone,
      label: "Phone",
      value: "+91 7417098003",
      link: "tel:+917417098003",
      color: "primary",
    },
  ];

  const socialLinks = [
    {
      icon: Github,
      label: "GitHub",
      url: "https://github.com/chahar01",
      color: "primary",
    },
    {
      icon: Linkedin,
      label: "LinkedIn",
      url: "https://www.linkedin.com/in/rahul-kumar-90a696200",
      color: "accent",
    },
  ];

  return (
    <section id="contact" className="py-20 relative overflow-hidden">
      {/* Background Gradient Decoration */}
      <div className="absolute inset-0 -z-10 opacity-30">
        <div className="absolute top-1/4 left-1/4 w-96 h-96 bg-primary/20 rounded-full blur-3xl" />
        <div className="absolute bottom-1/4 right-1/4 w-96 h-96 bg-accent/20 rounded-full blur-3xl" />
      </div>

      <div className="container mx-auto px-6">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-to-r from-primary via-primary-light to-accent bg-clip-text text-transparent">
            Get In Touch
          </h2>
          <p className="text-muted-foreground text-lg max-w-2xl mx-auto">
            Let's connect! Feel free to reach out for opportunities or collaborations
          </p>
        </div>

        <div className="grid lg:grid-cols-5 gap-8 max-w-7xl mx-auto">
          {/* Contact Info Sidebar */}
          <div className="lg:col-span-2 space-y-6 animate-fade-in">
            {/* Contact Information Card */}
            <Card className="p-8 backdrop-blur-sm bg-card/80 border-primary/20 shadow-soft hover:shadow-medium transition-all">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-primary rounded-full" />
                Contact Information
              </h3>
              <div className="space-y-6">
                {contactInfo.map((info, index) => (
                  <div key={index} className="flex items-start gap-4 group">
                    <div className={`p-3 rounded-xl ${info.color === "primary" ? "bg-gradient-primary" : "bg-gradient-accent"} shadow-soft group-hover:scale-110 group-hover:shadow-medium transition-all duration-300`}>
                      <info.icon className="w-5 h-5 text-white" />
                    </div>
                    <div className="flex-1">
                      <p className="text-xs font-semibold text-muted-foreground uppercase tracking-wider mb-1">
                        {info.label}
                      </p>
                      {info.link ? (
                        <a 
                          href={info.link} 
                          className="font-medium text-foreground hover:text-primary transition-colors break-all hover-scale inline-block"
                        >
                          {info.value}
                        </a>
                      ) : (
                        <p className="font-medium text-foreground">{info.value}</p>
                      )}
                    </div>
                  </div>
                ))}
              </div>
            </Card>

            {/* Social Media Card */}
            <Card className="p-8 backdrop-blur-sm bg-card/80 border-accent/20 shadow-soft hover:shadow-medium transition-all">
              <h3 className="text-2xl font-bold mb-6 flex items-center gap-2">
                <div className="w-1 h-6 bg-gradient-accent rounded-full" />
                Connect on Social
              </h3>
              <div className="flex gap-4">
                {socialLinks.map((social, index) => (
                  <a
                    key={index}
                    href={social.url}
                    target="_blank"
                    rel="noopener noreferrer"
                    className={`p-4 rounded-xl ${social.color === "primary" ? "bg-gradient-primary" : "bg-gradient-accent"} shadow-soft hover:shadow-medium transition-all hover:scale-110 hover:-translate-y-1 duration-300`}
                    aria-label={social.label}
                  >
                    <social.icon className="w-6 h-6 text-white" />
                  </a>
                ))}
              </div>
            </Card>

            {/* Decorative Quote */}
            <div className="hidden lg:block p-6 rounded-xl bg-gradient-to-br from-primary/5 to-accent/5 border border-primary/10">
              <p className="text-muted-foreground italic text-sm">
                "The best way to predict the future is to create it together. Let's build something amazing!"
              </p>
            </div>
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-3 animate-fade-in" style={{ animationDelay: "0.1s" }}>
            <Card className="p-8 md:p-10 backdrop-blur-sm bg-card/80 border-primary/20 shadow-medium hover:shadow-accent/10 transition-all">
              <h3 className="text-3xl font-bold mb-2 bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
                Send a Message
              </h3>
              <p className="text-muted-foreground mb-8">
                Fill out the form below and I'll get back to you as soon as possible
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="relative">
                  <Input
                    id="name"
                    value={formData.name}
                    onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                    placeholder="John Doe"
                    required
                    maxLength={100}
                    className="peer h-12 border-2 focus:border-primary transition-all"
                  />
                  <label 
                    htmlFor="name" 
                    className="absolute -top-2.5 left-3 px-1 bg-card text-xs font-semibold text-muted-foreground peer-focus:text-primary transition-colors"
                  >
                    Your Name *
                  </label>
                </div>

                <div className="relative">
                  <Input
                    id="email"
                    type="email"
                    value={formData.email}
                    onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                    placeholder="john@example.com"
                    required
                    maxLength={255}
                    className="peer h-12 border-2 focus:border-primary transition-all"
                  />
                  <label 
                    htmlFor="email" 
                    className="absolute -top-2.5 left-3 px-1 bg-card text-xs font-semibold text-muted-foreground peer-focus:text-primary transition-colors"
                  >
                    Email Address *
                  </label>
                </div>

                <div className="relative">
                  <Textarea
                    id="message"
                    value={formData.message}
                    onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                    placeholder="Tell me about your project or inquiry..."
                    rows={6}
                    required
                    maxLength={1000}
                    className="peer border-2 focus:border-primary transition-all resize-none"
                  />
                  <label 
                    htmlFor="message" 
                    className="absolute -top-2.5 left-3 px-1 bg-card text-xs font-semibold text-muted-foreground peer-focus:text-primary transition-colors"
                  >
                    Your Message *
                  </label>
                </div>

                <div className="flex items-center justify-between pt-2">
                  <p className="text-xs text-muted-foreground">
                    * Required fields
                  </p>
                  <Button 
                    type="submit" 
                    variant="hero" 
                    size="lg"
                    className="min-w-[160px]" 
                    disabled={isSubmitting}
                  >
                    {isSubmitting ? (
                      <>Sending...</>
                    ) : (
                      <>
                        <Send className="mr-2 h-4 w-4" />
                        Send Message
                      </>
                    )}
                  </Button>
                </div>
              </form>
            </Card>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
