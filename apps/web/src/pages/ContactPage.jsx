import React from 'react';
import { Helmet } from 'react-helmet';
import { Mail, MapPin, MessageSquare } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import ContactForm from '@/components/ContactForm.jsx';

function ContactPage() {
  return (
    <>
      <Helmet>
        <title>Contact Us - TeensHackHouston</title>
        <meta name="description" content="Get in touch with the TeensHackHouston team. We're here to answer your questions and help you get involved." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-primary text-primary-foreground transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-6" style={{ letterSpacing: '-0.02em' }}>
                Get in touch
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Have questions? We'd love to hear from you
              </p>
            </div>
          </section>

          <section className="py-24 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
                    Contact information
                  </h2>

                  <div className="space-y-6 mb-12">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Mail className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold mb-1 text-foreground">Email</h3>
                        <p className="text-muted-foreground">TeensHackHouston@gmail.com</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold mb-1 text-foreground">Location</h3>
                        <p className="text-muted-foreground">Houston, Texas</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MessageSquare className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold mb-1 text-foreground">Response time</h3>
                        <p className="text-muted-foreground">We typically respond within 24-48 hours</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">Frequently asked questions</h3>
                    <div className="space-y-4">
                      <div>
                        <h4 className="font-semibold mb-1 text-foreground">Do I need prior coding experience?</h4>
                        <p className="text-muted-foreground text-sm">No! We welcome participants of all skill levels. Workshops and mentors will be available to help beginners.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-foreground">Is there a registration fee?</h4>
                        <p className="text-muted-foreground text-sm">TeensHackHouston is completely free to attend. We provide meals, snacks, and swag for all participants.</p>
                      </div>
                      <div>
                        <h4 className="font-semibold mb-1 text-foreground">Can I participate remotely?</h4>
                        <p className="text-muted-foreground text-sm">This is an in-person event in Houston. However, we may offer virtual participation options in the future.</p>
                      </div>
                    </div>
                  </div>
                </div>

                <div>
                  <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                    <h2 className="text-3xl font-heading font-bold mb-6 text-card-foreground">
                      Send us a message
                    </h2>
                    <ContactForm />
                  </div>
                </div>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default ContactPage;
