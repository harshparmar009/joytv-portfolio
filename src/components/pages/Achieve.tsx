import { Video, Cloud, Tv, Server, Globe, Users, ShieldCheck, TrendingUp, BarChart3 } from 'lucide-react';

export default function Achieve() {
  return (
    <div className="bg-white p-4 sm:p-8">
      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-4 gap-4 mb-8">
        <StatCard icon={<Video className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="100+" subtitle="OTT Platforms Delivered" />
        <StatCard icon={<TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="500+" subtitle="IPTV Solutions Deployed" />
        <StatCard icon={<Cloud className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="99.9%" subtitle="Uptime on Cloud Services" />
        <StatCard icon={<Tv className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="24/7" subtitle="Live TV & Video Transmission" />
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <StatCard icon={<Server className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="10+" subtitle="CDN & Streaming Partners" />
        <StatCard icon={<Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="50+" subtitle="Countries Served" />
        <StatCard icon={<Users className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="1M+" subtitle="Users Streaming Daily" />
        <StatCard icon={<ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="Secure" subtitle="End-to-End Encryption" />
        <StatCard icon={<TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="Fastest" subtitle="Growing Streaming Provider" />
      </div>

      <div className="bg-blue-700 text-white text-center py-4 mb-8">
        <h2 className="text-xl sm:text-2xl font-bold">Our Pillars of Strength</h2>
      </div>

      <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-5 gap-4 mb-8">
        <StatCard icon={<BarChart3 className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="99%" subtitle="Customer Satisfaction Rate" />
        <StatCard icon={<Globe className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="Global" subtitle="Streaming Solutions" />
        <StatCard icon={<ShieldCheck className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="Data" subtitle="Privacy & Security" />
        <StatCard icon={<TrendingUp className="w-6 h-6 sm:w-8 sm:h-8 text-blue-700" />} title="High" subtitle="Scalability & Performance" />
      </div>
    </div>
  )
}

function StatCard({ icon, title, subtitle }: { icon: React.ReactNode; title: string; subtitle: string }) {
  return (
    <div className="border rounded-lg p-3 sm:p-4 flex flex-col items-center text-center h-full justify-center">
      {icon}
      <h3 className="text-base sm:text-lg font-bold text-blue-700 mt-2">{title}</h3>
      <p className="text-xs sm:text-sm text-gray-600 mt-1">{subtitle}</p>
    </div>
  )
}
