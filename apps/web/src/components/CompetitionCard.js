import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from '@/components/ui/card';
import { motion } from 'framer-motion';

function CompetitionCard({ icon: Icon, title, description, gradient, delay = 0 }) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      whileHover={{ y: -8, transition: { duration: 0.2 } }}
      className="h-full"
    >
      <Card className={`h-full border-2 transition-all duration-300 hover:shadow-xl hover:border-primary bg-card/50 backdrop-blur-sm bg-gradient-to-br ${gradient}`}>
        <CardHeader>
          <div className="mb-4 inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10">
            <Icon className="w-8 h-8 text-primary" />
          </div>
          <CardTitle className="text-2xl font-heading text-foreground">{title}</CardTitle>
        </CardHeader>
        <CardContent>
          <CardDescription className="text-base leading-relaxed text-muted-foreground">
            {description}
          </CardDescription>
        </CardContent>
      </Card>
    </motion.div>
  );
}

export default CompetitionCard;
