'use client';

import { Icon } from "@iconify/react";
import Link from "next/link";
import { LineChart, Line, AreaChart, Area, BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, Legend } from 'recharts';

export default function DashboardPage() {
  // Chart Data
  const revenueData = [
    { month: 'Jan', revenue: 1200, bots: 8 },
    { month: 'Feb', revenue: 1900, bots: 10 },
    { month: 'Mar', revenue: 1500, bots: 9 },
    { month: 'Apr', revenue: 2100, bots: 11 },
    { month: 'May', revenue: 1800, bots: 10 },
    { month: 'Jun', revenue: 2400, bots: 12 },
  ];

  const serverData = [
    { name: 'Mon', servers: 40 },
    { name: 'Tue', servers: 42 },
    { name: 'Wed', servers: 45 },
    { name: 'Thu', servers: 43 },
    { name: 'Fri', servers: 48 },
    { name: 'Sat', servers: 46 },
    { name: 'Sun', servers: 48 },
  ];

  const botUsageData = [
    { name: 'Music Bot', usage: 85, color: '#5865F2' },
    { name: 'Moderation', usage: 72, color: '#10B981' },
    { name: 'Economy', usage: 65, color: '#F59E0B' },
    { name: 'Fun', usage: 58, color: '#8B5CF6' },
  ];

  const stats = [
    {
      label: "Active Bots",
      value: "12",
      change: "+3 this month",
      icon: "mdi:robot",
      color: "text-[#5865F2]",
      bgColor: "bg-[#5865F2]/10",
      borderColor: "border-[#5865F2]/30",
    },
    {
      label: "Total Servers",
      value: "48",
      change: "+8 this month",
      icon: "mdi:server",
      color: "text-green-400",
      bgColor: "bg-green-400/10",
      borderColor: "border-green-400/30",
    },
    {
      label: "Monthly Revenue",
      value: "$1,240",
      change: "+12% from last month",
      icon: "mdi:currency-usd",
      color: "text-yellow-400",
      bgColor: "bg-yellow-400/10",
      borderColor: "border-yellow-400/30",
    },
    {
      label: "Active Orders",
      value: "5",
      change: "2 pending",
      icon: "mdi:code",
      color: "text-purple-400",
      bgColor: "bg-purple-400/10",
      borderColor: "border-purple-400/30",
    },
  ];

  const recentActivity = [
    {
      type: "purchase",
      title: "Music Bot Pro",
      description: "Purchased successfully",
      time: "2 hours ago",
      icon: "mdi:check-circle",
      color: "text-green-400",
    },
    {
      type: "server",
      title: "New server added",
      description: "Discord Server #1234",
      time: "5 hours ago",
      icon: "mdi:server-plus",
      color: "text-blue-400",
    },
    {
      type: "order",
      title: "Custom bot order",
      description: "Order #4567 in progress",
      time: "1 day ago",
      icon: "mdi:clock-outline",
      color: "text-yellow-400",
    },
    {
      type: "update",
      title: "Bot updated",
      description: "Moderation Bot v2.1",
      time: "2 days ago",
      icon: "mdi:update",
      color: "text-purple-400",
    },
  ];

  const quickActions = [
    {
      title: "Add New Bot",
      description: "Browse our bot collection",
      icon: "mdi:plus-circle",
      href: "/dashboard/bots",
      color: "bg-[#5865F2]/10 border-[#5865F2]/30 hover:bg-[#5865F2]/20",
    },
    {
      title: "Create Custom Order",
      description: "Request a custom bot",
      icon: "mdi:code",
      href: "/dashboard/orders",
      color: "bg-purple-400/10 border-purple-400/30 hover:bg-purple-400/20",
    },
    {
      title: "Manage Servers",
      description: "View all your servers",
      icon: "mdi:server",
      href: "/dashboard/servers",
      color: "bg-green-400/10 border-green-400/30 hover:bg-green-400/20",
    },
  ];

  return (
    <div className="space-y-6 sm:space-y-8">
      {/* Welcome Section */}
      <div>
        <h1 className="text-2xl sm:text-3xl lg:text-4xl font-bold text-white mb-2">
          Welcome back! 👋
        </h1>
        <p className="text-gray-400 text-sm sm:text-base">
          Here's what's happening with your account today.
        </p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6">
        {stats.map((stat, index) => {
          const gradientColors = [
            'from-[#5865F2]/20 via-[#5865F2]/10 to-transparent',
            'from-green-400/20 via-green-400/10 to-transparent',
            'from-yellow-400/20 via-yellow-400/10 to-transparent',
            'from-purple-400/20 via-purple-400/10 to-transparent',
          ];
          
          return (
            <div
              key={index}
              className="relative p-6 sm:p-8 rounded-3xl bg-gray-900/50 backdrop-blur-sm transition-all hover:scale-[1.02] hover:bg-gray-900/70 overflow-hidden border border-white/5"
            >
              {/* Gradual Light Gradient Overlay */}
              <div className={`absolute inset-0 bg-gradient-to-br ${gradientColors[index]} opacity-60 rounded-3xl`} />
              
              {/* Glow Effect */}
              <div className={`absolute -inset-0.5 bg-gradient-to-br ${gradientColors[index]} opacity-20 blur-xl rounded-3xl -z-10`} />
              
              {/* Background Icon - Bottom Right */}
              <div className="absolute bottom-0 right-0 opacity-10">
                <Icon icon={stat.icon} width={120} height={120} className="text-white" />
              </div>
              
              {/* Content */}
              <div className="relative z-10">
                <p className="text-4xl sm:text-5xl font-bold text-white mb-2">{stat.value}</p>
                <p className="text-sm sm:text-base text-gray-300 mb-1">{stat.label}</p>
                <p className="text-xs text-gray-500">{stat.change}</p>
              </div>
            </div>
          );
        })}
      </div>

      {/* Charts Section */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 sm:gap-8">
        {/* Revenue Chart */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Revenue & Bots</h3>
              <p className="text-sm text-gray-400">Last 6 months overview</p>
            </div>
            <div className="p-2 rounded-lg bg-[#5865F2]/10 border border-[#5865F2]/30">
              <Icon icon="mdi:chart-line" width={20} height={20} className="text-[#5865F2]" />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <AreaChart data={revenueData}>
              <defs>
                <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="5%" stopColor="#5865F2" stopOpacity={0.3}/>
                  <stop offset="95%" stopColor="#5865F2" stopOpacity={0}/>
                </linearGradient>
              </defs>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="month" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Legend />
              <Area
                type="monotone"
                dataKey="revenue"
                stroke="#5865F2"
                strokeWidth={2}
                fillOpacity={1}
                fill="url(#colorRevenue)"
                name="Revenue ($)"
              />
              <Line
                type="monotone"
                dataKey="bots"
                stroke="#10B981"
                strokeWidth={2}
                dot={{ fill: '#10B981', r: 4 }}
                name="Active Bots"
              />
            </AreaChart>
          </ResponsiveContainer>
        </div>

        {/* Servers Chart */}
        <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
          <div className="flex items-center justify-between mb-6">
            <div>
              <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Server Activity</h3>
              <p className="text-sm text-gray-400">Weekly server count</p>
            </div>
            <div className="p-2 rounded-lg bg-green-400/10 border border-green-400/30">
              <Icon icon="mdi:server" width={20} height={20} className="text-green-400" />
            </div>
          </div>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={serverData}>
              <CartesianGrid strokeDasharray="3 3" stroke="#ffffff10" />
              <XAxis dataKey="name" stroke="#9CA3AF" fontSize={12} />
              <YAxis stroke="#9CA3AF" fontSize={12} />
              <Tooltip
                contentStyle={{
                  backgroundColor: 'rgba(0, 0, 0, 0.9)',
                  border: '1px solid rgba(255, 255, 255, 0.1)',
                  borderRadius: '8px',
                  color: '#fff'
                }}
              />
              <Bar dataKey="servers" fill="#10B981" radius={[8, 8, 0, 0]} />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* Bot Usage Chart */}
      <div className="p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm">
        <div className="flex items-center justify-between mb-6">
          <div>
            <h3 className="text-lg sm:text-xl font-semibold text-white mb-1">Bot Usage Statistics</h3>
            <p className="text-sm text-gray-400">Usage percentage by bot type</p>
          </div>
          <div className="p-2 rounded-lg bg-purple-400/10 border border-purple-400/30">
            <Icon icon="mdi:chart-pie" width={20} height={20} className="text-purple-400" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          {botUsageData.map((bot, index) => (
            <div key={index} className="p-4 rounded-lg border border-white/10 bg-white/5">
              <div className="flex items-center justify-between mb-3">
                <span className="text-sm font-medium text-gray-300">{bot.name}</span>
                <span className="text-sm font-bold text-white">{bot.usage}%</span>
              </div>
              <div className="w-full bg-gray-800 rounded-full h-2.5">
                <div
                  className="h-2.5 rounded-full transition-all"
                  style={{
                    width: `${bot.usage}%`,
                    backgroundColor: bot.color,
                    boxShadow: `0 0 10px ${bot.color}40`
                  }}
                />
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Quick Actions */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Quick Actions</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-6">
          {quickActions.map((action, index) => (
            <Link
              key={index}
              href={action.href}
              className={`p-6 rounded-xl border ${action.color} backdrop-blur-sm transition-all hover:scale-105 group`}
            >
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-lg bg-white/5 group-hover:bg-white/10 transition-colors">
                  <Icon icon={action.icon} width={24} height={24} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="text-lg font-semibold text-white mb-1">{action.title}</h3>
                  <p className="text-sm text-gray-400">{action.description}</p>
                </div>
                <Icon
                  icon="mdi:chevron-right"
                  width={20}
                  height={20}
                  className="text-gray-400 group-hover:text-white group-hover:translate-x-1 transition-all"
                />
              </div>
            </Link>
          ))}
        </div>
      </div>

      {/* Recent Activity */}
      <div>
        <h2 className="text-xl sm:text-2xl font-semibold text-white mb-4 sm:mb-6">Recent Activity</h2>
        <div className="space-y-3 sm:space-y-4">
          {recentActivity.map((activity, index) => (
            <div
              key={index}
              className="p-4 sm:p-6 rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm hover:bg-white/10 transition-all"
            >
              <div className="flex items-start gap-4">
                <div className="p-2 rounded-lg bg-white/5">
                  <Icon icon={activity.icon} width={20} height={20} className={activity.color} />
                </div>
                <div className="flex-1 min-w-0">
                  <h3 className="text-base sm:text-lg font-semibold text-white mb-1">
                    {activity.title}
                  </h3>
                  <p className="text-sm text-gray-400 mb-2">{activity.description}</p>
                  <p className="text-xs text-gray-500">{activity.time}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
