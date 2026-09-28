import { MoreHorizontal } from 'lucide-react';

const orders = [
  {
    id: '#ORD-7841',
    customer: 'Sarah Johnson',
    product: 'MacBook Pro 14"',
    amount: '$2,499.00',
    status: 'Completed',
    date: '2 min ago',
  },
  {
    id: '#ORD-7840',
    customer: 'Mike Peters',
    product: 'iPhone 15 Pro',
    amount: '$1,199.00',
    status: 'Processing',
    date: '15 min ago',
  },
  {
    id: '#ORD-7839',
    customer: 'Emily Davis',
    product: 'AirPods Pro',
    amount: '$249.00',
    status: 'Completed',
    date: '1 hour ago',
  },
  {
    id: '#ORD-7838',
    customer: 'James Wilson',
    product: 'iPad Air',
    amount: '$799.00',
    status: 'Shipped',
    date: '3 hours ago',
  },
  {
    id: '#ORD-7837',
    customer: 'Lisa Anderson',
    product: 'Apple Watch Ultra',
    amount: '$899.00',
    status: 'Pending',
    date: '5 hours ago',
  },
];

const statusStyles: Record<string, string> = {
  Completed: 'bg-green-100 dark:bg-green-900/30 text-green-700 dark:text-green-400',
  Processing: 'bg-blue-100 dark:bg-blue-900/30 text-blue-700 dark:text-blue-400',
  Shipped: 'bg-purple-100 dark:bg-purple-900/30 text-purple-700 dark:text-purple-400',
  Pending: 'bg-yellow-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-400',
};

export default function RecentOrders() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between p-6 pb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Recent Orders</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Latest transactions</p>
        </div>
        <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-medium">
          View All
        </button>
      </div>
      <div className="overflow-x-auto">
        <table className="w-full">
          <thead>
            <tr className="border-t border-gray-200 dark:border-gray-700">
              <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider px-6 py-3">
                Order
              </th>
              <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider px-6 py-3">
                Customer
              </th>
              <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider px-6 py-3 hidden md:table-cell">
                Amount
              </th>
              <th className="text-left text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider px-6 py-3">
                Status
              </th>
              <th className="text-right text-xs font-medium text-gray-500 dark:text-gray-400 uppercase tracking-wider px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody className="divide-y divide-gray-100 dark:divide-gray-700">
            {orders.map((order) => (
              <tr key={order.id} className="hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors">
                <td className="px-6 py-4">
                  <div>
                    <p className="text-sm font-medium text-gray-900 dark:text-white">{order.id}</p>
                    <p className="text-xs text-gray-500 dark:text-gray-400">{order.date}</p>
                  </div>
                </td>
                <td className="px-6 py-4">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-gradient-to-br from-indigo-400 to-purple-500 rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">
                        {order.customer.charAt(0)}
                      </span>
                    </div>
                    <div>
                      <p className="text-sm font-medium text-gray-900 dark:text-white">
                        {order.customer}
                      </p>
                      <p className="text-xs text-gray-500 dark:text-gray-400">{order.product}</p>
                    </div>
                  </div>
                </td>
                <td className="px-6 py-4 hidden md:table-cell">
                  <span className="text-sm font-medium text-gray-900 dark:text-white">
                    {order.amount}
                  </span>
                </td>
                <td className="px-6 py-4">
                  <span
                    className={`inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium ${
                      statusStyles[order.status]
                    }`}
                  >
                    {order.status}
                  </span>
                </td>
                <td className="px-6 py-4 text-right">
                  <button className="p-1 rounded-lg text-gray-400 hover:text-gray-600 dark:hover:text-gray-300 hover:bg-gray-100 dark:hover:bg-gray-700">
                    <MoreHorizontal className="w-4 h-4" />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
