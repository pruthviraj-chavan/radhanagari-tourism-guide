
import React from 'react';
import { Helmet } from 'react-helmet';
import Layout from '@/components/Layout';
import { Card, CardContent } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import { MapPin, Phone, Mail, Clock } from 'lucide-react';
import { toast } from '@/hooks/use-toast';

const Contact = () => {
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    toast({
      title: "Message Sent!",
      description: "Thank you for contacting us. We'll get back to you soon.",
    });
  };

  return (
    <>
      <Helmet>
        <title>Contact Us - Radhanagari Tourism Guide</title>
        <meta name="description" content="Get in touch with us for safari bookings, accommodation queries, or any information about Radhanagari Wildlife Sanctuary." />
      </Helmet>
      <Layout>
        <div className="bg-forest text-white py-16">
          <div className="container mx-auto px-4">
            <h1 className="text-3xl md:text-4xl font-bold mb-6 text-center text-white">Contact Us</h1>
            <p className="max-w-3xl mx-auto text-center text-gray-200">
              Have questions about visiting Radhanagari? We're here to help with safari bookings, accommodation recommendations, and travel tips.
            </p>
          </div>
        </div>
        
        <div className="container mx-auto px-4 py-12">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
            <div>
              <h2 className="text-2xl font-bold mb-6 text-forest">Get in Touch</h2>
              <p className="text-gray-700 mb-6">
                Fill out the form below and our team will get back to you as soon as possible. We're happy to answer any questions about planning your visit to Radhanagari Wildlife Sanctuary.
              </p>
              
              <form onSubmit={handleSubmit} className="space-y-4">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label htmlFor="name" className="text-sm font-medium text-gray-700">Full Name</label>
                    <Input id="name" placeholder="Your name" required />
                  </div>
                  
                  <div className="space-y-2">
                    <label htmlFor="email" className="text-sm font-medium text-gray-700">Email Address</label>
                    <Input id="email" type="email" placeholder="Your email" required />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="phone" className="text-sm font-medium text-gray-700">Phone Number</label>
                  <Input id="phone" placeholder="Your phone number" />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="subject" className="text-sm font-medium text-gray-700">Subject</label>
                  <Input id="subject" placeholder="How can we help you?" required />
                </div>
                
                <div className="space-y-2">
                  <label htmlFor="message" className="text-sm font-medium text-gray-700">Message</label>
                  <Textarea id="message" placeholder="Your message" rows={5} required />
                </div>
                
                <Button type="submit" className="w-full bg-forest hover:bg-forest-dark">
                  Send Message
                </Button>
              </form>
            </div>
            
            <div className="lg:pl-8">
              <h2 className="text-2xl font-bold mb-6 text-forest">Contact Information</h2>
              
              <div className="space-y-6">
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <MapPin className="h-5 w-5 text-forest mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-forest">Address</h3>
                        <p className="text-gray-700">Forest Department Office, Radhanagari Wildlife Sanctuary, Kolhapur District, Maharashtra, India - 416212</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Phone className="h-5 w-5 text-forest mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-forest">Phone Numbers</h3>
                        <p className="text-gray-700">Safari Booking: +91 9988776655</p>
                        <p className="text-gray-700">Tourism Office: +91 9988776644</p>
                        <p className="text-gray-700">Emergency: +91 9988776633</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Mail className="h-5 w-5 text-forest mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-forest">Email</h3>
                        <p className="text-gray-700">info@radhanagari-tourism.com</p>
                        <p className="text-gray-700">bookings@radhanagari-tourism.com</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
                
                <Card>
                  <CardContent className="p-6">
                    <div className="flex items-start">
                      <Clock className="h-5 w-5 text-forest mr-3 mt-0.5" />
                      <div>
                        <h3 className="font-semibold text-forest">Office Hours</h3>
                        <p className="text-gray-700">Monday to Saturday: 9:00 AM - 5:30 PM</p>
                        <p className="text-gray-700">Sunday: 10:00 AM - 3:00 PM</p>
                      </div>
                    </div>
                  </CardContent>
                </Card>
              </div>
              
              <div className="mt-8 h-64 bg-gray-200 rounded-lg overflow-hidden">
                {/* Placeholder for map - in a real app, you would insert a Google Maps embed here */}
                <div className="w-full h-full flex items-center justify-center bg-gray-300">
                  <span className="text-gray-600">Interactive Map Would Be Here</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </Layout>
    </>
  );
};

export default Contact;
