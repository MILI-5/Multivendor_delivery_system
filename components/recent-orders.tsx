"use client"

import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Eye } from "lucide-react"

const recentOrders = [
  {
    id: "ORD-2024-001",
    customer: "Alice Johnson",
    vendor: "Mario's Pizza Palace",
    amount: "$48.57",
    status: "delivered",
    time: "2 min ago",
  },
  {
    id: "ORD-2024-002",
    customer: "Bob Wilson",
    vendor: "Burger Junction",
    amount: "$28.04",
    status: "preparing",
    time: "5 min ago",
  },
  {
    id: "ORD-2024-003",
    customer: "Alice Johnson",
    vendor: "Tokyo Sushi Bar",
    amount: "$35.92",
    status: "confirmed",
    time: "8 min ago",
  },
  {
    id: "ORD-2024-004",
    customer: "Charlie Brown",
    vendor: "Spice Garden",
    amount: "$42.15",
    status: "picked_up",
    time: "12 min ago",
  },
]

const statusColors = {
  delivered: "bg-green-100 text-green-800",
  preparing: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  picked_up: "bg-purple-100 text-purple-800",
  cancelled: "bg-red-100 text-red-800",
}

export function RecentOrders() {
  return (
    <div className="space-y-4">
      {recentOrders.map((order) => (
        <div key={order.id} className="flex items-center justify-between p-3 border rounded-lg">
          <div className="space-y-1">
            <div className="flex items-center gap-2">
              <span className="font-medium text-sm">{order.id}</span>
              <Badge variant="secondary" className={statusColors[order.status as keyof typeof statusColors]}>
                {order.status}
              </Badge>
            </div>
            <p className="text-sm text-muted-foreground">{order.customer}</p>
            <p className="text-xs text-muted-foreground">{order.vendor}</p>
          </div>
          <div className="text-right space-y-1">
            <p className="font-medium">{order.amount}</p>
            <p className="text-xs text-muted-foreground">{order.time}</p>
            <Button size="sm" variant="ghost">
              <Eye className="h-3 w-3" />
            </Button>
          </div>
        </div>
      ))}
    </div>
  )
}
