import React from 'react';
import { motion } from 'framer-motion';
import {
  Building2,
  Users,
  Calendar,
  DollarSign,
  FileText,
  MessageSquare,
  Bell,
  PieChart
} from 'lucide-react';

const features = [
  {
    icon: Building2,
    title: 'Property Management',
    description: 'Manage multiple properties, units, and leases from a centralized dashboard.'
  },
  {
    icon: Users,
    title: 'Tenant Screening',
    description: 'Comprehensive background checks and credit reports for potential tenants.'
  },
  {
    icon: Calendar,
    title: 'Maintenance Tracking',
    description: 'Schedule and track maintenance requests, assign vendors, and keep records.'
  },
  {
    icon: DollarSign,
    title: 'Financial Management',
    description: 'Automated rent collection, expense tracking, and financial reporting.'
  },
  {
    icon: FileText,
    title: 'Document Management',
    description: 'Store and manage leases, contracts, and other important documents securely.'
  },
  {
    icon: MessageSquare,
    title: 'Communication Hub',
    description: 'Built-in messaging system for tenants, owners, and maintenance staff.'
  },
  {
    icon: Bell,
    title: 'Automated Notifications',
    description: 'Automated reminders for rent, maintenance, and important dates.'
  },
  {
    icon: PieChart,
    title: 'Analytics & Reporting',
    description: 'Detailed insights and reports on property performance and financials.'
  }
];

export const Features: React.FC = () => {
  return (
    <div id="features" className="section-padding bg-white">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">All-In-One Solution</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Everything you need to manage your properties efficiently in one powerful platform.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {features.map((feature, index) => (
            <motion.div
              key={feature.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-gray-50 p-6 rounded-xl"
            >
              <feature.icon className="h-10 w-10 text-blue-600 mb-4" />
              <h3 className="text-xl font-semibold mb-2">{feature.title}</h3>
              <p className="text-gray-600">{feature.description}</p>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};