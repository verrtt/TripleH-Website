import React from 'react';
import { Helmet } from 'react-helmet';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { Code, Cpu, Gamepad2, Presentation, ArrowRight, Calendar, Users, Trophy } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CompetitionCard from '@/components/CompetitionCard.jsx';
function HomePage() {
  const competitions = [{
    icon: Code,
    title: 'Software/Web Design',
    description: 'Build innovative web applications and software solutions that solve real-world problems.',
    gradient: 'from-blue-500/10 to-transparent dark:from-blue-500/5'
  }, {
    icon: Cpu,
    title: 'Hardware',
    description: 'Create physical computing projects using microcontrollers, sensors, and embedded systems.',
    gradient: 'from-slate-500/10 to-transparent dark:from-slate-500/5'
  }, {
    icon: Gamepad2,
    title: 'Game Jam',
    description: 'Design and develop engaging games from scratch within the hackathon timeframe.',
    gradient: 'from-purple-500/10 to-transparent dark:from-purple-500/5'
  }, {
    icon: Presentation,
    title: 'Pitching',
    description: 'Present your innovative ideas and business concepts to judges and potential investors.',
    gradient: 'from-green-500/10 to-transparent dark:from-green-500/5'
  }];
  const stats = [{
    icon: Users,
    value: '200+',
    label: 'Participants'
  }, {
    icon: Trophy,
    value: '$5,000',
    label: 'In Prizes'
  }, {
    icon: Calendar,
    value: '24 Hours',
    label: 'Of Hacking'
  }];
  return <>
      <Helmet>
        <title>TeensHackHouston - Code. Hack. Unite. Develop.</title>
        <meta name="description" content="Join TeensHackHouston, Houston's premier teen hackathon. Compete in software, hardware, game development, and pitching competitions." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="relative min-h-[100dvh] flex items-center justify-center overflow-hidden bg-black">
            <div className="absolute inset-0 z-0">
              <img src="https://images.unsplash.com/photo-1642678730222-9a041a983c33" alt="Abstract tech circuit board pattern" className="w-full h-full object-cover opacity-80" />
              <div className="absolute inset-0 bg-gradient-to-br from-blue-900/80 via-blue-900/60 to-black/80"></div>
            </div>

            <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <div className="animate-fade-in-up">
                <div className="inline-flex items-center space-x-3 mb-6">
                  <div className="w-16 h-16 rounded-xl bg-primary flex items-center justify-center shadow-lg shadow-primary/20">
                    <span className="text-primary-foreground font-heading font-bold text-3xl">T³</span>
                  </div>
                </div>
                <h1 className="text-5xl md:text-6xl lg:text-7xl font-heading font-extrabold text-white mb-6" style={{
                letterSpacing: '-0.02em'
              }}>
                  TeensHackHouston
                </h1>
                <p className="text-2xl md:text-3xl font-heading font-semibold text-blue-300 mb-8">
                  Code. Hack. Unite. Develop.
                </p>
                <p className="text-xl md:text-2xl text-white/90 mb-12 max-w-3xl mx-auto leading-relaxed">
                  Houston's premier teen hackathon where young innovators build the future
                </p>
                <div className="flex flex-col sm:flex-row gap-4 justify-center">
                  <Link to="/register">
                    <Button size="lg" className="bg-primary text-primary-foreground hover:bg-primary/90 font-semibold px-8 py-6 text-lg animate-pulse-glow transition-all duration-200 active:scale-[0.98]">
                      Register Now
                      <ArrowRight className="ml-2 w-5 h-5" />
                    </Button>
                  </Link>
                  <Link to="/competitions">
                    <Button size="lg" variant="outline" className="bg-white/10 backdrop-blur-sm border-white/30 text-white hover:bg-white/20 hover:text-white font-semibold px-8 py-6 text-lg transition-all duration-200 active:scale-[0.98]">
                      View Competitions
                    </Button>
                  </Link>
                </div>
              </div>
            </div>

            <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent transition-colors duration-300"></div>
          </section>

          <section className="py-20 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                {stats.map((stat, index) => <div key={index} className="text-center animate-fade-in-up" style={{
                animationDelay: `${index * 0.1}s`
              }}>
                    <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-4">
                      <stat.icon className="w-8 h-8 text-primary" />
                    </div>
                    <div className="text-4xl font-heading font-bold text-foreground mb-2">{stat.value}</div>
                    <div className="text-lg text-muted-foreground">{stat.label}</div>
                  </div>)}
              </div>
            </div>
          </section>

          <section className="py-24 bg-muted/50 transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="text-center mb-16">
                <h2 className="text-4xl md:text-5xl font-heading font-bold text-foreground mb-4">
                  Competition tracks
                </h2>
                <p className="text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
                  Choose your path and showcase your skills in one of our four exciting competition categories:
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {competitions.map((comp, index) => <CompetitionCard key={index} icon={comp.icon} title={comp.title} description={comp.description} gradient={comp.gradient} delay={index * 0.1} />)}
              </div>

              <div className="text-center mt-12">
                <Link to="/competitions">
                  <Button size="lg" className="bg-primary text-primary-foreground font-semibold px-8 py-6 text-lg transition-all duration-200 active:scale-[0.98] hover:shadow-lg hover:bg-primary/90">
                    Learn More About Competitions
                    <ArrowRight className="ml-2 w-5 h-5" />
                  </Button>
                </Link>
              </div>
            </div>
          </section>
        </main>

        <Footer />
      </div>
    </>;
}
export default HomePage;
