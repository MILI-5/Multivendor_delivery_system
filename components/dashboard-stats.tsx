"use client"

import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { DollarSign, ShoppingCart, TrendingUp, Users } from "lucide-react"

const stats = [
  {
    title: "Total Revenue",
    value: "$45,231.89",
    change: "+20.1% from last month",
    icon: DollarSign,
    trend: "up",
  },
  {
    title: "Orders Today",
    value: "156",
    change: "+12% from yesterday",
    icon: ShoppingCart,
    trend: "up",
  },
  {
    title: "Active Customers",
    value: "2,350",
    change: "+180 new this month",
    icon: Users,
    trend: "up",
  },
  {
    title: "Avg. Order Value",
    value: "$28.50",
    change: "+5.2% from last month",
    icon: TrendingUp,
    trend: "up",
  },
]

export function DashboardStats() {
  return (
    <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
      {stats.map((stat) => (
        <Card key={stat.title}>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">{stat.title}</CardTitle>
            <stat.icon className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{stat.value}</div>
            <p className="text-xs text-muted-foreground">
              <span className={stat.trend === "up" ? "text-green-600" : "text-red-600"}>{stat.change}</span>
            </p>
          </CardContent>
        </Card>
      ))}
    </div>
  )
}
