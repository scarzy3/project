import React from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Calendar, DollarSign } from 'lucide-react';

export const Hero: React.FC = () => {
  return (
    <div className="section-padding pt-32 bg-gradient-to-br from-blue-50 to-white">
      <div className="max-w-7xl mx-auto">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6 }}
          >
            <h1 className="text-5xl font-bold leading-tight mb-6">
              Revolutionize Your Property Management
            </h1>
            <p className="text-xl text-gray-600 mb-8">
              One platform to manage it all. From tenant screening to maintenance requests,
              PropManage streamlines your entire property management workflow.
            </p>
            <div className="flex flex-wrap gap-4">
              <button className="btn-primary">Get Early Access</button>
              <button className="btn-secondary">Schedule Demo</button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="grid grid-cols-2 gap-4"
          >
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Building2 className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Property Management</h3>
              <p className="text-gray-600">Manage all your properties from one dashboard</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Users className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Tenant Portal</h3>
              <p className="text-gray-600">Give tenants a modern platform to interact</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <Calendar className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Maintenance</h3>
              <p className="text-gray-600">Track and manage maintenance requests easily</p>
            </div>
            <div className="bg-white p-6 rounded-xl shadow-lg">
              <DollarSign className="h-8 w-8 text-blue-600 mb-4" />
              <h3 className="font-semibold mb-2">Rent Collection</h3>
              <p className="text-gray-600">Automated rent collection and tracking</p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
};