import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Starter',
    price: '49',
    description: 'Perfect for small property managers',
    features: [
      'Up to 10 units',
      'Basic tenant screening',
      'Maintenance requests',
      'Online rent collection',
      'Document storage',
      'Email support'
    ]
  },
  {
    name: 'Professional',
    price: '99',
    description: 'For growing property management businesses',
    features: [
      'Up to 50 units',
      'Advanced tenant screening',
      'Maintenance management',
      'Financial reporting',
      'Document management',
      'Priority support',
      'Owner portal',
      'Custom branding'
    ]
  },
  {
    name: 'Enterprise',
    price: 'Custom',
    description: 'For large property management companies',
    features: [
      'Unlimited units',
      'Full tenant screening suite',
      'Advanced maintenance management',
      'Advanced financial tools',
      'API access',
      'Dedicated support',
      'Custom integrations',
      'White labeling'
    ]
  }
];

export const Pricing: React.FC = () => {
  return (
    <div id="pricing" className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold mb-4">Simple, Transparent Pricing</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Choose the plan that best fits your needs. All plans include a 14-day free trial.
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
              className="bg-white p-8 rounded-xl shadow-lg"
            >
              <h3 className="text-2xl font-bold mb-2">{plan.name}</h3>
              <div className="mb-4">
                <span className="text-4xl font-bold">${plan.price}</span>
                {plan.price !== 'Custom' && <span className="text-gray-600">/month</span>}
              </div>
              <p className="text-gray-600 mb-6">{plan.description}</p>
              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center">
                    <Check className="h-5 w-5 text-green-500 mr-2" />
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              <button className="w-full btn-primary">Get Started</button>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
};