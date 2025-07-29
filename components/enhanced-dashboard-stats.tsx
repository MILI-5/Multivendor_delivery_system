"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Progress } from "@/components/ui/progress"
import { DollarSign, ShoppingCart, TrendingUp, Users, Clock, Star, Target, Activity } from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1%",
    changeType: "increase" as const,
    icon: DollarSign,
    gradient: "from-blue-500 to-purple-600",
    progress: 85,
    target: "$50,000",
  },
  {
    title: "Orders Today",
    value: "156",
    change: "+12%",
    changeType: "increase" as const,
    icon: ShoppingCart,
    gradient: "from-green-500 to-emerald-600",
    progress: 78,
    target: "200",
  },
  {
    title: "Active Customers",
    value: "2,350",
    change: "+180",
    changeType: "increase" as const,
    icon: Users,
    gradient: "from-orange-500 to-red-600",
    progress: 92,
    target: "2,500",
  },
  {
    title: "Avg. Order Value",
    value: "$28.50",
    change: "+5.2%",
    changeType: "increase" as const,
    icon: TrendingUp,
    gradient: "from-pink-500 to-violet-600",
    progress: 68,
    target: "$35.00",
  },
  {
    title: "Delivery Time",
    value: "28 min",
    change: "-3.2%",
    changeType: "decrease" as const,
    icon: Clock,
    gradient: "from-cyan-500 to-blue-600",
    progress: 85,
    target: "25 min",
  },
  {
    title: "Customer Rating",
    value: "4.8",
    change: "+0.2",
    changeType: "increase" as const,
    icon: Star,
    gradient: "from-yellow-500 to-orange-600",
    progress: 96,
    target: "5.0",
  },
  {
    title: "Conversion Rate",
    value: "3.24%",
    change: "+0.8%",
    changeType: "increase" as const,
    icon: Target,
    gradient: "from-indigo-500 to-purple-600",
    progress: 65,
    target: "5.0%",
  },
  {
    title: "Active Sessions",
    value: "1,247",
    change: "+15%",
    changeType: "increase" as const,
    icon: Activity,
    gradient: "from-teal-500 to-cyan-600",
    progress: 73,
    target: "1,500",
  },
]

export function EnhancedDashboardStats() {
  return (
    <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat, index) => (
        <Card key={stat.title} className="hover-lift metric-card relative group overflow-hidden border-0 shadow-lg">
          <div
            className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-5 group-hover:opacity-10 transition-opacity duration-300`}
          />
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2 relative z-10">
            <CardTitle className="text-sm font-medium text-muted-foreground">{stat.title}</CardTitle>
            <div className={`p-2 rounded-lg bg-gradient-to-br ${stat.gradient} text-white shadow-lg`}>
              <stat.icon className="h-4 w-4" />
            </div>
          </CardHeader>
          <CardContent className="relative z-10">
            <div className="flex items-baseline justify-between mb-3">
              <div className="text-2xl font-bold">{stat.value}</div>
              <Badge
                variant="secondary"
                className={`text-xs ${
                  stat.changeType === "increase"
                    ? "bg-green-100 text-green-700 border-green-200"
                    : "bg-red-100 text-red-700 border-red-200"
                }`}
              >
                {stat.change}
              </Badge>
            </div>
            <div className="space-y-2">
              <div className="flex justify-between items-center text-xs text-muted-foreground">
                <span>Progress</span>
                <span>Target: {stat.target}</span>
              </div>
              <Progress value={stat.progress} className="h-2" />
            </div>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
