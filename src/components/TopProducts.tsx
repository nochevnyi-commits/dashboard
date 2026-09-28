import { Star, TrendingUp } from 'lucide-react';

const products = [
  {
    name: 'MacBook Pro 14"',
    category: 'Laptops',
    sales: 1234,
    revenue: '$3.08M',
    rating: 4.9,
    image: '💻',
  },
  {
    name: 'iPhone 15 Pro',
    category: 'Smartphones',
    sales: 2456,
    revenue: '$2.94M',
    rating: 4.8,
    image: '📱',
  },
  {
    name: 'AirPods Pro',
    category: 'Audio',
    sales: 3890,
    revenue: '$968K',
    rating: 4.7,
    image: '🎧',
  },
  {
    name: 'iPad Air',
    category: 'Tablets',
    sales: 987,
    revenue: '$788K',
    rating: 4.6,
    image: '📋',
  },
  {
    name: 'Apple Watch Ultra',
    category: 'Wearables',
    sales: 1567,
    revenue: '$1.41M',
    rating: 4.8,
    image: '⌚',
  },
];

export default function TopProducts() {
  return (
    <div className="bg-white dark:bg-gray-800 rounded-xl border border-gray-200 dark:border-gray-700">
      <div className="flex items-center justify-between p-6 pb-4">
        <div>
          <h3 className="text-lg font-semibold text-gray-900 dark:text-white">Top Products</h3>
          <p className="text-sm text-gray-500 dark:text-gray-400">Best selling this month</p>
        </div>
        <button className="text-sm text-indigo-600 dark:text-indigo-400 hover:text-indigo-700 font-medium">
          View All
        </button>
      </div>
      <div className="px-6 pb-6 space-y-4">
        {products.map((product, index) => (
          <div
            key={product.name}
            className="flex items-center gap-4 p-3 rounded-lg hover:bg-gray-50 dark:hover:bg-gray-700/50 transition-colors"
          >
            <div className="w-10 h-10 bg-gray-100 dark:bg-gray-700 rounded-lg flex items-center justify-center text-xl">
              {product.image}
            </div>
            <div className="flex-1 min-w-0">
              <div className="flex items-center gap-2">
                <p className="text-sm font-medium text-gray-900 dark:text-white truncate">
                  {product.name}
                </p>
                <span className="text-xs text-gray-500 dark:text-gray-400">#{index + 1}</span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400">{product.category}</p>
            </div>
            <div className="text-right">
              <p className="text-sm font-semibold text-gray-900 dark:text-white">{product.revenue}</p>
              <div className="flex items-center gap-1 justify-end">
                <Star className="w-3 h-3 text-yellow-500 fill-yellow-500" />
                <span className="text-xs text-gray-500 dark:text-gray-400">{product.rating}</span>
                <span className="text-xs text-gray-400 dark:text-gray-500">•</span>
                <span className="text-xs text-gray-500 dark:text-gray-400">
                  {product.sales.toLocaleString()} sold
                </span>
              </div>
            </div>
            <div className="hidden sm:flex items-center gap-1 text-green-600 dark:text-green-400">
              <TrendingUp className="w-3 h-3" />
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
