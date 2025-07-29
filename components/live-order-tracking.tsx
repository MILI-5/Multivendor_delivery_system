"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Progress } from "@/components/ui/progress"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { MapPin, Clock, User, Phone, CheckCircle, Circle, Truck, ChefHat, Package } from "lucide-react"

interface OrderTracking {
  id: string
  orderNumber: string
  customer: {
    name: string
    address: string
    phone: string
    avatar: string
  }
  vendor: {
    name: string
    address: string
  }
  driver: {
    name: string
    phone: string
    avatar: string
    vehicleNumber: string
  }
  status: "confirmed" | "preparing" | "ready" | "picked_up" | "on_the_way" | "delivered"
  estimatedTime: string
  items: Array<{
    name: string
    quantity: number
    price: number
  }>
  timeline: Array<{
    status: string
    time: string
    completed: boolean
  }>
  progress: number
}

const mockOrder: OrderTracking = {
  id: "1",
  orderNumber: "ORD-2024-156",
  customer: {
    name: "Alice Johnson",
    address: "123 Main St, New York, NY 10001",
    phone: "+1 (555) 123-4567",
    avatar: "/placeholder.svg?height=40&width=40",
  },
  vendor: {
    name: "Mario's Pizza Palace",
    address: "456 Oak Ave, New York, NY 10002",
  },
  driver: {
    name: "Mike Davis",
    phone: "+1 (555) 987-6543",
    avatar: "/placeholder.svg?height=40&width=40",
    vehicleNumber: "NYC-1234",
  },
  status: "on_the_way",
  estimatedTime: "12 minutes",
  items: [
    { name: "Margherita Pizza", quantity: 1, price: 18.99 },
    { name: "Caesar Salad", quantity: 1, price: 12.99 },
  ],
  timeline: [
    { status: "Order Confirmed", time: "2:30 PM", completed: true },
    { status: "Preparing", time: "2:35 PM", completed: true },
    { status: "Ready for Pickup", time: "2:55 PM", completed: true },
    { status: "Picked Up", time: "3:02 PM", completed: true },
    { status: "On the Way", time: "3:05 PM", completed: true },
    { status: "Delivered", time: "3:15 PM (Est.)", completed: false },
  ],
  progress: 85,
}

const statusColors = {
  confirmed: "bg-blue-100 text-blue-700",
  preparing: "bg-yellow-100 text-yellow-700",
  ready: "bg-purple-100 text-purple-700",
  picked_up: "bg-orange-100 text-orange-700",
  on_the_way: "bg-green-100 text-green-700",
  delivered: "bg-gray-100 text-gray-700",
}

export function LiveOrderTracking() {
  const [order, setOrder] = useState<OrderTracking>(mockOrder)

  // Simulate real-time updates
  useEffect(() => {
    const interval = setInterval(() => {
      setOrder((prev) => ({
        ...prev,
        progress: Math.min(prev.progress + 1, 100),
        estimatedTime:
          prev.progress < 100 ? `${Math.max(1, 15 - Math.floor(prev.progress / 6))} minutes` : "Delivered!",
      }))
    }, 3000)

    return () => clearInterval(interval)
  }, [])

  return (
    <div className="space-y-6">
      {/* Header Card */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-green-50 to-blue-50 dark:from-green-950 dark:to-blue-950">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold">Live Order Tracking</CardTitle>
              <CardDescription>Real-time delivery monitoring</CardDescription>
            </div>
            <Badge variant="secondary" className={statusColors[order.status]}>
              {order.status.replace("_", " ").toUpperCase()}
            </Badge>
          </div>
        </CardHeader>
      </Card>

      <div className="grid gap-6 md:grid-cols-2">
        {/* Order Details */}
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Package className="h-5 w-5" />
              Order #{order.orderNumber}
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-4">
            <div className="space-y-2">
              <h4 className="font-medium text-sm text-muted-foreground">CUSTOMER</h4>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={order.customer.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    <User className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{order.customer.name}</p>
                  <p className="text-sm text-muted-foreground">{order.customer.phone}</p>
                </div>
                <Button variant="outline" size="sm" className="ml-auto bg-transparent">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
              <div className="flex items-start gap-2 mt-2">
                <MapPin className="h-4 w-4 text-muted-foreground mt-0.5" />
                <p className="text-sm text-muted-foreground">{order.customer.address}</p>
              </div>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm text-muted-foreground">VENDOR</h4>
              <div className="flex items-center gap-2">
                <ChefHat className="h-4 w-4" />
                <p className="font-medium">{order.vendor.name}</p>
              </div>
              <p className="text-sm text-muted-foreground ml-6">{order.vendor.address}</p>
            </div>

            <div className="space-y-2">
              <h4 className="font-medium text-sm text-muted-foreground">DRIVER</h4>
              <div className="flex items-center gap-3">
                <Avatar>
                  <AvatarImage src={order.driver.avatar || "/placeholder.svg"} />
                  <AvatarFallback>
                    <Truck className="h-4 w-4" />
                  </AvatarFallback>
                </Avatar>
                <div>
                  <p className="font-medium">{order.driver.name}</p>
                  <p className="text-sm text-muted-foreground">{order.driver.vehicleNumber}</p>
                </div>
                <Button variant="outline" size="sm" className="ml-auto bg-transparent">
                  <Phone className="h-4 w-4" />
                </Button>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Progress Tracking */}
        <Card className="hover-lift">
          <CardHeader>
            <CardTitle className="flex items-center justify-between">
              <span className="flex items-center gap-2">
                <Clock className="h-5 w-5" />
                Delivery Progress
              </span>
              <span className="text-lg font-bold text-green-600">{order.estimatedTime}</span>
            </CardTitle>
          </CardHeader>
          <CardContent className="space-y-6">
            {/* Progress Bar */}
            <div className="space-y-2">
              <div className="flex justify-between text-sm">
                <span>Progress</span>
                <span>{order.progress}%</span>
              </div>
              <Progress value={order.progress} className="h-3" />
            </div>

            {/* Timeline */}
            <div className="space-y-4">
              {order.timeline.map((step, index) => (
                <div key={index} className="flex items-center gap-3">
                  {step.completed ? (
                    <CheckCircle className="h-5 w-5 text-green-500 flex-shrink-0" />
                  ) : (
                    <Circle className="h-5 w-5 text-muted-foreground flex-shrink-0" />
                  )}
                  <div className="flex-1">
                    <p className={`font-medium ${step.completed ? "text-foreground" : "text-muted-foreground"}`}>
                      {step.status}
                    </p>
                    <p className="text-sm text-muted-foreground">{step.time}</p>
                  </div>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      </div>

      {/* Order Items */}
      <Card>
        <CardHeader>
          <CardTitle>Order Items</CardTitle>
        </CardHeader>
        <CardContent>
          <div className="space-y-3">
            {order.items.map((item, index) => (
              <div key={index} className="flex items-center justify-between py-2 border-b last:border-b-0">
                <div className="flex items-center gap-3">
                  <div className="h-10 w-10 bg-muted rounded-lg flex items-center justify-center">
                    <Package className="h-4 w-4" />
                  </div>
                  <div>
                    <p className="font-medium">{item.name}</p>
                    <p className="text-sm text-muted-foreground">Qty: {item.quantity}</p>
                  </div>
                </div>
                <p className="font-medium">${item.price}</p>
              </div>
            ))}
            <div className="flex justify-between items-center pt-3 border-t font-bold">
              <span>Total</span>
              <span>${order.items.reduce((sum, item) => sum + item.price * item.quantity, 0).toFixed(2)}</span>
            </div>
          </div>
        </CardContent>
      </Card>
    </div>
  )
}
