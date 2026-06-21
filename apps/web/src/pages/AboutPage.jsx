import React from 'react';
import { Helmet } from 'react-helmet';
import { Target, Users, Lightbulb, Heart } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';

function AboutPage() {
  const values = [
    {
      icon: Target,
      title: 'Innovation',
      description: 'We encourage creative thinking and bold ideas that push the boundaries of what\'s possible.'
    },
    {
      icon: Users,
      title: 'Collaboration',
      description: 'Building together creates stronger solutions and lasting connections within our community.'
    },
    {
      icon: Lightbulb,
      title: 'Learning',
      description: 'Every challenge is an opportunity to grow, experiment, and develop new skills.'
    },
    {
      icon: Heart,
      title: 'Inclusivity',
      description: 'We welcome all teens regardless of experience level or background to join and participate.'
    }
  ];

  const team = [
    { name: 'Maya Chen', role: 'Lead Organizer', initials: 'MC', color: 'bg-blue-600' },
    { name: 'Raj Patel', role: 'Technical Director', initials: 'RP', color: 'bg-purple-600' },
    { name: 'Lucia Torres', role: 'Sponsorship Lead', initials: 'LT', color: 'bg-emerald-600' },
    { name: 'Kwame Asante', role: 'Marketing Director', initials: 'KA', color: 'bg-orange-600' }
  ];

  return (
    <>
      <Helmet>
        <title>About Us - TeensHackHouston</title>
        <meta name="description" content="Learn about TeensHackHouston's mission to inspire young innovators in Houston through technology and collaboration." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-primary text-primary-foreground transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-6" style={{ letterSpacing: '-0.02em' }}>
                About TeensHackHouston
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Inspiring the next generation of innovators in Houston
              </p>
            </div>
          </section>

          <section className="py-24 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
                <div>
                  <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6 text-foreground">
                    Our mission
                  </h2>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    TeensHackHouston brings together young minds from across Houston to collaborate, innovate, and build solutions to real-world problems. We believe that age is no barrier to creating meaningful impact through technology.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed mb-6">
                    Our hackathon provides a supportive environment where teens can explore their interests in software development, hardware engineering, game design, and entrepreneurship. Whether you're a beginner or an experienced coder, there's a place for you here.
                  </p>
                  <p className="text-lg text-muted-foreground leading-relaxed">
                    Through mentorship, workshops, and hands-on challenges, we help participants develop technical skills, build confidence, and form lasting connections with peers who share their passion for technology.
                  </p>
                </div>
                <div className="relative">
                  <img
                    src="https://images.unsplash.com/photo-1448512393665-78e7d649a464"
                    alt="Houston skyline at sunset"
                    className="rounded-2xl shadow-2xl w-full h-auto"
                  />
                  <div className="absolute inset-0 rounded-2xl bg-gradient-to-tr from-primary/20 to-transparent mix-blend-overlay"></div>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
                  The TripleT philosophy
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Our name represents three core pillars that define our community
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-16">
                <div className="bg-card rounded-xl p-8 border border-border shadow-sm text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-heading font-bold text-2xl">T</span>
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-3 text-card-foreground">Teens</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Built by teens, for teens. We create opportunities specifically designed for young innovators.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-8 border border-border shadow-sm text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-heading font-bold text-2xl">T</span>
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-3 text-card-foreground">Technology</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    We harness the power of technology to solve problems and create positive change.
                  </p>
                </div>
                <div className="bg-card rounded-xl p-8 border border-border shadow-sm text-center">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center mx-auto mb-4">
                    <span className="text-primary-foreground font-heading font-bold text-2xl">T</span>
                  </div>
                  <h3 className="text-2xl font-heading font-semibold mb-3 text-card-foreground">Together</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Collaboration and community are at the heart of everything we do.
                  </p>
                </div>
              </div>
            </div>
          </section>

          <section className="py-24 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
                  Our values
                </h2>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {values.map((value, index) => (
                  <div key={index} className="flex gap-4 animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className="flex-shrink-0">
                      <div className="w-12 h-12 rounded-xl bg-primary/10 flex items-center justify-center">
                        <value.icon className="w-6 h-6 text-primary" />
                      </div>
                    </div>
                    <div>
                      <h3 className="text-xl font-heading font-semibold mb-2 text-foreground">{value.title}</h3>
                      <p className="text-muted-foreground leading-relaxed">{value.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 text-foreground">
                  Meet the team
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  The passionate individuals making TeensHackHouston possible
                </p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {team.map((member, index) => (
                  <div key={index} className="text-center animate-fade-in-up" style={{ animationDelay: `${index * 0.1}s` }}>
                    <div className={`w-24 h-24 rounded-xl ${member.color} flex items-center justify-center mx-auto mb-4 shadow-md`}>
                      <span className="text-white font-heading font-bold text-2xl">{member.initials}</span>
                    </div>
                    <h3 className="text-xl font-heading font-semibold mb-1 text-foreground">{member.name}</h3>
                    <p className="text-muted-foreground">{member.role}</p>
                  </div>
                ))}
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>
  );
}

export default AboutPage;
