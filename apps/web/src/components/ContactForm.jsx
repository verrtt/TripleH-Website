import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Textarea } from '@/components/ui/textarea';
import { toast } from 'sonner';

function ContactForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    subject: '',
    message: ''
  });
  const [errors, setErrors] = useState({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validateForm = () => {
    const newErrors = {};
    
    if (!formData.name.trim()) {
      newErrors.name = 'Name is required';
    }
    
    if (!formData.email.trim()) {
      newErrors.email = 'Email is required';
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(formData.email)) {
      newErrors.email = 'Please enter a valid email address';
    }
    
    if (!formData.subject.trim()) {
      newErrors.subject = 'Subject is required';
    }
    
    if (!formData.message.trim()) {
      newErrors.message = 'Message is required';
    } else if (formData.message.trim().length < 10) {
      newErrors.message = 'Message must be at least 10 characters';
    }
    
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    
    if (!validateForm()) {
      toast.error('Please fix the errors in the form');
      return;
    }
    
    setIsSubmitting(true);
    
    setTimeout(() => {
      const messages = JSON.parse(localStorage.getItem('contactMessages') || '[]');
      messages.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('contactMessages', JSON.stringify(messages));
      
      toast.success('Message sent successfully');
      
      setFormData({
        name: '',
        email: '',
        subject: '',
        message: ''
      });
      setErrors({});
      setIsSubmitting(false);
    }, 1000);
  };

  const handleChange = (field, value) => {
    setFormData(prev => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors(prev => ({ ...prev, [field]: '' }));
    }
  };

  return (
    <form onSubmit={handleSubmit} className="space-y-6">
      <div>
        <Label htmlFor="contact-name" className="text-base font-medium text-foreground">Name</Label>
        <Input
          id="contact-name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="mt-2"
          placeholder="Your name"
        />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
      </div>

      <div>
        <Label htmlFor="contact-email" className="text-base font-medium text-foreground">Email</Label>
        <Input
          id="contact-email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="mt-2"
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
      </div>

      <div>
        <Label htmlFor="contact-subject" className="text-base font-medium text-foreground">Subject</Label>
        <Input
          id="contact-subject"
          type="text"
          value={formData.subject}
          onChange={(e) => handleChange('subject', e.target.value)}
          className="mt-2"
          placeholder="What is this about?"
        />
        {errors.subject && <p className="text-sm text-destructive mt-1">{errors.subject}</p>}
      </div>

      <div>
        <Label htmlFor="contact-message" className="text-base font-medium text-foreground">Message</Label>
        <Textarea
          id="contact-message"
          value={formData.message}
          onChange={(e) => handleChange('message', e.target.value)}
          className="mt-2 min-h-[150px]"
          placeholder="Tell us what you need..."
        />
        {errors.message && <p className="text-sm text-destructive mt-1">{errors.message}</p>}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground font-semibold py-6 text-lg transition-all duration-200 active:scale-[0.98] hover:bg-primary/90 hover:shadow-lg"
      >
        {isSubmitting ? 'Sending...' : 'Send Message'}
      </Button>
    </form>
  );
}

export default ContactForm;
