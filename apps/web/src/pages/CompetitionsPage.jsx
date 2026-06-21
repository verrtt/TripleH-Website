import React from 'react';
import { Helmet } from 'react-helmet';
import { Code, Cpu, Gamepad2, Presentation } from 'lucide-react';
import Header from '@/components/Header.jsx';
import Footer from '@/components/Footer.jsx';
import CompetitionCard from '@/components/CompetitionCard.jsx';

function CompetitionsPage() {
  const competitions = [
    {
      icon: Code,
      title: 'Software/Web Design',
      description: 'Build innovative web applications and software solutions that solve real-world problems. Use modern frameworks and technologies to create responsive, user-friendly applications. Judges will evaluate based on functionality, design, innovation, and technical implementation.',
      gradient: 'from-blue-500/10 to-transparent dark:from-blue-500/5'
    },
    {
      icon: Cpu,
      title: 'Hardware',
      description: 'Create physical computing projects using microcontrollers, sensors, and embedded systems. Design and build IoT devices, robotics projects, or smart home solutions. Showcase your ability to bridge software and hardware in creative ways.',
      gradient: 'from-slate-500/10 to-transparent dark:from-slate-500/5'
    },
    {
      icon: Gamepad2,
      title: 'Game Jam',
      description: 'Design and develop engaging games from scratch within the hackathon timeframe. Create 2D or 3D games using engines like Unity, Godot, or custom frameworks. Focus on gameplay mechanics, storytelling, and player experience.',
      gradient: 'from-purple-500/10 to-transparent dark:from-purple-500/5'
    },
    {
      icon: Presentation,
      title: 'Pitching',
      description: 'Present your innovative ideas and business concepts to judges and potential investors. Develop a compelling pitch deck, demonstrate market research, and articulate your value proposition. Perfect for aspiring entrepreneurs and visionaries.',
      gradient: 'from-green-500/10 to-transparent dark:from-green-500/5'
    }
  ];

  return (
    <>
      <Helmet>
        <title>Competition Tracks - TeensHackHouston</title>
        <meta name="description" content="Explore our four competition tracks: Software/Web Design, Hardware, Game Jam, and Pitching. Find the perfect category for your skills." />
      </Helmet>

      <div className="min-h-screen flex flex-col">
        <Header />

        <main className="flex-1">
          <section className="py-20 bg-primary text-primary-foreground transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
              <h1 className="text-5xl md:text-6xl font-heading font-extrabold mb-6" style={{ letterSpacing: '-0.02em' }}>
                Competition tracks
              </h1>
              <p className="text-xl md:text-2xl text-primary-foreground/90 max-w-3xl mx-auto leading-relaxed">
                Choose your path and compete in one of our four exciting categories
              </p>
            </div>
          </section>

          <section className="py-24 bg-background transition-colors duration-300">
            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {competitions.map((comp, index) => (
                  <CompetitionCard
                    key={index}
                    icon={comp.icon}
                    title={comp.title}
                    description={comp.description}
                    gradient={comp.gradient}
                    delay={index * 0.1}
                  />
                ))}
              </div>
            </div>
          </section>

          <section className="py-20 bg-muted/50 transition-colors duration-300">
            <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
              <h2 className="text-3xl md:text-4xl font-heading font-bold text-center mb-12 text-foreground">
                Judging criteria
              </h2>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-card-foreground">Innovation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    How creative and original is your solution? Does it bring a fresh perspective to the problem?
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-card-foreground">Technical Implementation</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    How well is your project executed? Is the code clean, efficient, and well-structured?
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-card-foreground">Design & UX</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    Is your project visually appealing and easy to use? Does it provide a great user experience?
                  </p>
                </div>
                <div className="bg-card rounded-xl p-6 border border-border shadow-sm">
                  <h3 className="text-xl font-heading font-semibold mb-3 text-card-foreground">Impact</h3>
                  <p className="text-muted-foreground leading-relaxed">
                    What problem does your project solve? How significant is its potential impact?
                  </p>
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

export default CompetitionsPage;
