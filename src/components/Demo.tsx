import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Building2, Users, Bell, Wrench, DollarSign, CheckCircle2 } from 'lucide-react';

export const Demo: React.FC = () => {
  const [activeTab, setActiveTab] = useState('dashboard');
  
  const tabs = {
    dashboard: {
      title: 'Dashboard Overview',
      description: 'Get a bird\'s eye view of your properties, tenants, and important metrics.',
      stats: [
        { icon: Building2, label: 'Properties', value: '12' },
        { icon: Users, label: 'Tenants', value: '45' },
        { icon: Bell, label: 'Alerts', value: '3' },
        { icon: DollarSign, label: 'Revenue', value: '$52,400' }
      ]
    },
    maintenance: {
      title: 'Maintenance Requests',
      description: 'Track and manage maintenance requests efficiently.',
      requests: [
        { id: 1, unit: '101A', issue: 'Leaking faucet', status: 'In Progress', priority: 'Medium' },
        { id: 2, unit: '205B', issue: 'AC not working', status: 'Scheduled', priority: 'High' },
        { id: 3, unit: '304C', issue: 'Light fixture', status: 'Completed', priority: 'Low' }
      ]
    },
    payments: {
      title: 'Rent Collection',
      description: 'Monitor rent payments and financial transactions.',
      transactions: [
        { tenant: 'John Smith', unit: '101A', amount: 1200, status: 'Paid', date: '2025-03-01' },
        { tenant: 'Sarah Johnson', unit: '205B', amount: 1500, status: 'Pending', date: '2025-03-01' },
        { tenant: 'Mike Davis', unit: '304C', amount: 1350, status: 'Paid', date: '2025-03-01' }
      ]
    }
  };

  return (
    <div className="section-padding bg-gray-50">
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-12"
        >
          <h2 className="text-4xl font-bold mb-4">See It In Action</h2>
          <p className="text-xl text-gray-600 max-w-2xl mx-auto">
            Experience how PropManage simplifies property management with our interactive demo.
          </p>
        </motion.div>

        <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
          <div className="flex border-b">
            <button
              onClick={() => setActiveTab('dashboard')}
              className={`flex-1 px-6 py-4 text-center ${activeTab === 'dashboard' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            >
              Dashboard
            </button>
            <button
              onClick={() => setActiveTab('maintenance')}
              className={`flex-1 px-6 py-4 text-center ${activeTab === 'maintenance' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            >
              Maintenance
            </button>
            <button
              onClick={() => setActiveTab('payments')}
              className={`flex-1 px-6 py-4 text-center ${activeTab === 'payments' ? 'border-b-2 border-blue-600 text-blue-600' : 'text-gray-500'}`}
            >
              Payments
            </button>
          </div>

          <div className="p-6">
            {activeTab === 'dashboard' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{tabs.dashboard.title}</h3>
                <p className="text-gray-600 mb-6">{tabs.dashboard.description}</p>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {tabs.dashboard.stats.map((stat) => (
                    <div key={stat.label} className="bg-gray-50 p-4 rounded-lg">
                      <stat.icon className="h-8 w-8 text-blue-600 mb-2" />
                      <div className="text-2xl font-bold mb-1">{stat.value}</div>
                      <div className="text-gray-600">{stat.label}</div>
                    </div>
                  ))}
                </div>
              </motion.div>
            )}

            {activeTab === 'maintenance' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{tabs.maintenance.title}</h3>
                <p className="text-gray-600 mb-6">{tabs.maintenance.description}</p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Unit</th>
                        <th className="text-left py-3 px-4">Issue</th>
                        <th className="text-left py-3 px-4">Priority</th>
                        <th className="text-left py-3 px-4">Status</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tabs.maintenance.requests.map((request) => (
                        <tr key={request.id} className="border-b">
                          <td className="py-3 px-4">{request.unit}</td>
                          <td className="py-3 px-4">{request.issue}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-block px-2 py-1 rounded text-sm ${
                              request.priority === 'High' ? 'bg-red-100 text-red-800' :
                              request.priority === 'Medium' ? 'bg-yellow-100 text-yellow-800' :
                              'bg-green-100 text-green-800'
                            }`}>
                              {request.priority}
                            </span>
                          </td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center gap-1 ${
                              request.status === 'Completed' ? 'text-green-600' :
                              request.status === 'In Progress' ? 'text-blue-600' :
                              'text-yellow-600'
                            }`}>
                              <Wrench className="h-4 w-4" />
                              {request.status}
                            </span>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === 'payments' && (
              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ duration: 0.4 }}
              >
                <h3 className="text-2xl font-semibold mb-2">{tabs.payments.title}</h3>
                <p className="text-gray-600 mb-6">{tabs.payments.description}</p>
                <div className="overflow-x-auto">
                  <table className="w-full">
                    <thead>
                      <tr className="border-b">
                        <th className="text-left py-3 px-4">Tenant</th>
                        <th className="text-left py-3 px-4">Unit</th>
                        <th className="text-left py-3 px-4">Amount</th>
                        <th className="text-left py-3 px-4">Status</th>
                        <th className="text-left py-3 px-4">Due Date</th>
                      </tr>
                    </thead>
                    <tbody>
                      {tabs.payments.transactions.map((transaction) => (
                        <tr key={transaction.unit} className="border-b">
                          <td className="py-3 px-4">{transaction.tenant}</td>
                          <td className="py-3 px-4">{transaction.unit}</td>
                          <td className="py-3 px-4">${transaction.amount}</td>
                          <td className="py-3 px-4">
                            <span className={`inline-flex items-center gap-1 ${
                              transaction.status === 'Paid' ? 'text-green-600' : 'text-yellow-600'
                            }`}>
                              {transaction.status === 'Paid' ? (
                                <CheckCircle2 className="h-4 w-4" />
                              ) : (
                                <DollarSign className="h-4 w-4" />
                              )}
                              {transaction.status}
                            </span>
                          </td>
                          <td className="py-3 px-4">{transaction.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};