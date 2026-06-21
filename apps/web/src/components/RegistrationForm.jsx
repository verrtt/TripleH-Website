import React, { useState } from 'react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from '@/components/ui/select';
import { toast } from 'sonner';

function RegistrationForm() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    school: '',
    track: '',
    experience: ''
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
    
    if (!formData.phone.trim()) {
      newErrors.phone = 'Phone number is required';
    } else if (!/^\d{10}$/.test(formData.phone.replace(/\D/g, ''))) {
      newErrors.phone = 'Please enter a valid 10-digit phone number';
    }
    
    if (!formData.school.trim()) {
      newErrors.school = 'School/Organization is required';
    }
    
    if (!formData.track) {
      newErrors.track = 'Please select a competition track';
    }
    
    if (!formData.experience) {
      newErrors.experience = 'Please select your experience level';
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
      const registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
      registrations.push({
        ...formData,
        timestamp: new Date().toISOString()
      });
      localStorage.setItem('registrations', JSON.stringify(registrations));
      
      toast.success('Registration submitted successfully');
      
      setFormData({
        name: '',
        email: '',
        phone: '',
        school: '',
        track: '',
        experience: ''
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
        <Label htmlFor="name" className="text-base font-medium text-foreground">Full Name</Label>
        <Input
          id="name"
          type="text"
          value={formData.name}
          onChange={(e) => handleChange('name', e.target.value)}
          className="mt-2"
          placeholder="Enter your full name"
        />
        {errors.name && <p className="text-sm text-destructive mt-1">{errors.name}</p>}
      </div>

      <div>
        <Label htmlFor="email" className="text-base font-medium text-foreground">Email Address</Label>
        <Input
          id="email"
          type="email"
          value={formData.email}
          onChange={(e) => handleChange('email', e.target.value)}
          className="mt-2"
          placeholder="your.email@example.com"
        />
        {errors.email && <p className="text-sm text-destructive mt-1">{errors.email}</p>}
      </div>

      <div>
        <Label htmlFor="phone" className="text-base font-medium text-foreground">Phone Number</Label>
        <Input
          id="phone"
          type="tel"
          value={formData.phone}
          onChange={(e) => handleChange('phone', e.target.value)}
          className="mt-2"
          placeholder="(123) 456-7890"
        />
        {errors.phone && <p className="text-sm text-destructive mt-1">{errors.phone}</p>}
      </div>

      <div>
        <Label htmlFor="school" className="text-base font-medium text-foreground">School/Organization</Label>
        <Input
          id="school"
          type="text"
          value={formData.school}
          onChange={(e) => handleChange('school', e.target.value)}
          className="mt-2"
          placeholder="Your school or organization"
        />
        {errors.school && <p className="text-sm text-destructive mt-1">{errors.school}</p>}
      </div>

      <div>
        <Label htmlFor="track" className="text-base font-medium text-foreground">Competition Track</Label>
        <Select value={formData.track} onValueChange={(value) => handleChange('track', value)}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Select a competition track" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="software">Software/Web Design</SelectItem>
            <SelectItem value="hardware">Hardware</SelectItem>
            <SelectItem value="game">Game Jam</SelectItem>
            <SelectItem value="pitching">Pitching</SelectItem>
          </SelectContent>
        </Select>
        {errors.track && <p className="text-sm text-destructive mt-1">{errors.track}</p>}
      </div>

      <div>
        <Label htmlFor="experience" className="text-base font-medium text-foreground">Experience Level</Label>
        <Select value={formData.experience} onValueChange={(value) => handleChange('experience', value)}>
          <SelectTrigger className="mt-2">
            <SelectValue placeholder="Select your experience level" />
          </SelectTrigger>
          <SelectContent>
            <SelectItem value="beginner">Beginner</SelectItem>
            <SelectItem value="intermediate">Intermediate</SelectItem>
            <SelectItem value="advanced">Advanced</SelectItem>
          </SelectContent>
        </Select>
        {errors.experience && <p className="text-sm text-destructive mt-1">{errors.experience}</p>}
      </div>

      <Button
        type="submit"
        disabled={isSubmitting}
        className="w-full bg-primary text-primary-foreground font-semibold py-6 text-lg transition-all duration-200 active:scale-[0.98] hover:bg-primary/90 hover:shadow-lg"
      >
        {isSubmitting ? 'Submitting...' : 'Register Now'}
      </Button>
    </form>
  );
}

export default RegistrationForm;
