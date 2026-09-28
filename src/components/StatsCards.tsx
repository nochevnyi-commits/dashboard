import { DollarSign, Users, ShoppingCart, TrendingUp, ArrowUpRight, ArrowDownRight } from 'lucide-react';

const stats = [
  {
    title: 'Total Revenue',
    value: '$45,231.89',
    change: '+20.1%',
    trend: 'up' as const,
    icon: DollarSign,
    color: 'bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400',
  },
  {
    title: 'New Customers',
    value: '2,350',
    change: '+15.3%',
    trend: 'up' as const,
    icon: Users,
    color: 'bg-blue-100 dark:bg-blue-900/30 text-blue-600 dark:text-blue-400',
  },
  {
    title: 'Total Orders',
    value: '12,234',
    change: '+8.2%',
    trend: 'up' as const,
    icon: ShoppingCart,
    color: 'bg-purple-100 dark:bg-purple-900/30 text-purple-600 dark:text-purple-400',
  },
  {
    title: 'Growth Rate',
    value: '23.5%',
    change: '-2.4%',
    trend: 'down' as const,
    icon: TrendingUp,
    color: 'bg-orange-100 dark:bg-orange-900/30 text-orange-600 dark:text-orange-400',
  },
];

export default function StatsCards() {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat) => (
        <div
          key={stat.title}
          className="bg-white dark:bg-gray-800 rounded-xl p-6 border border-gray-200 dark:border-gray-700 hover:shadow-lg transition-shadow"
        >
          <div className="flex items-center justify-between">
            <div className={`p-2.5 rounded-lg ${stat.color}`}>
              <stat.icon className="w-5 h-5" />
            </div>
            <div
              className={`flex items-center gap-1 text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600 dark:text-green-400' : 'text-red-600 dark:text-red-400'
              }`}
            >
              {stat.trend === 'up' ? (
                <ArrowUpRight className="w-4 h-4" />
              ) : (
                <ArrowDownRight className="w-4 h-4" />
              )}
              {stat.change}
            </div>
          </div>
          <div className="mt-4">
            <h3 className="text-2xl font-bold text-gray-900 dark:text-white">{stat.value}</h3>
            <p className="text-sm text-gray-500 dark:text-gray-400 mt-1">{stat.title}</p>
          </div>
        </div>
      ))}
    </div>
  );
}
