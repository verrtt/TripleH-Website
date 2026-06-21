import React from 'react';
import { Helmet } from 'react-helmet';
import { Calendar, MapPin, Clock } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import RegistrationForm from '@/components/RegistrationForm.jsx';

function RegisterPage() {
  return (
    <>
      <Helmet>
        <title>Register - TeensHackHouston</title>
        <meta name="description" content="Register for TeensHackHouston and join Houston's premier teen hackathon. Choose your competition track and start building." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-primary text-primary-foreground transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-6" style={{ letterSpacing: '-0.02em' }}>
                Register now
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Join us for 24 hours of innovation, collaboration, and fun
              </p>
            </div>
          </section>

          <section className="py-24 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-3xl md:text-4xl font-heading font-bold mb-8 text-foreground">
                    Event details
                  </h2>

                  <div className="space-y-6 mb-12">
                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Calendar className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold mb-1 text-foreground">Date</h3>
                        <p className="text-muted-foreground">August 15-16, 2026</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <Clock className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold mb-1 text-foreground">Duration</h3>
                        <p className="text-muted-foreground">24 hours of hacking</p>
                      </div>
                    </div>

                    <div className="flex items-start gap-4">
                      <div className="flex-shrink-0 w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <MapPin className="w-6 h-6 text-primary" />
                      </div>
                      <div>
                        <h3 className="text-xl font-heading font-semibold mb-1 text-foreground">Location</h3>
                        <p className="text-muted-foreground">Houston Innovation Center<br />Houston, Texas</p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-muted/50 rounded-xl p-6 border border-border">
                    <h3 className="text-xl font-heading font-semibold mb-4 text-foreground">What to expect</h3>
                    <ul className="space-y-3 text-muted-foreground">
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Opening ceremony and team formation</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Workshops and mentorship sessions</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>24 hours to build your project</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Project presentations and judging</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Awards ceremony and prizes</span>
                      </li>
                      <li className="flex items-start gap-2">
                        <span className="text-primary mt-1">•</span>
                        <span>Free meals, snacks, and swag</span>
                      </li>
                    </ul>
                  </div>
                </div>

                <div>
                  <div className="bg-card rounded-2xl p-8 border border-border shadow-lg">
                    <h2 className="text-3xl font-heading font-bold mb-6 text-card-foreground">
                      Registration form
                    </h2>
                    <RegistrationForm />
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

export default RegisterPage;
