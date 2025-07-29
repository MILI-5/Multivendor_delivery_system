"use client"

import { useState, useEffect } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { ScrollArea } from "@/components/ui/scroll-area"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Bell, Check, ShoppingCart, User, Truck, Star, AlertTriangle, DollarSign, Clock } from "lucide-react"

interface Notification {
  id: string
  type: "order" | "customer" | "driver" | "review" | "alert" | "payment"
  title: string
  message: string
  time: string
  isRead: boolean
  priority: "low" | "medium" | "high"
  avatar?: string
}

const mockNotifications: Notification[] = [
  {
    id: "1",
    type: "order",
    title: "New Order Received",
    message: "Order #ORD-2024-156 from Mario's Pizza Palace - $45.99",
    time: "2 min ago",
    isRead: false,
    priority: "high",
    avatar: "/placeholder.svg?height=32&width=32",
  },
  {
    id: "2",
    type: "driver",
    title: "Driver Assignment",
    message: "Mike Davis assigned to Order #ORD-2024-155",
    time: "5 min ago",
    isRead: false,
    priority: "medium",
  },
  {
    id: "3",
    type: "review",
    title: "New 5-Star Review",
    message: "Tokyo Sushi Bar received a 5-star review from Alice Johnson",
    time: "8 min ago",
    isRead: true,
    priority: "low",
  },
  {
    id: "4",
    type: "alert",
    title: "Inventory Alert",
    message: "Low stock alert for Margherita Pizza at Mario's Pizza Palace",
    time: "12 min ago",
    isRead: false,
    priority: "high",
  },
  {
    id: "5",
    type: "customer",
    title: "New Customer Registration",
    message: "Sarah Wilson just joined the platform",
    time: "15 min ago",
    isRead: true,
    priority: "low",
  },
  {
    id: "6",
    type: "payment",
    title: "Payment Received",
    message: "Payment of $234.50 received from Burger Junction",
    time: "20 min ago",
    isRead: true,
    priority: "medium",
  },
]

const getNotificationIcon = (type: string) => {
  switch (type) {
    case "order":
      return ShoppingCart
    case "customer":
      return User
    case "driver":
      return Truck
    case "review":
      return Star
    case "alert":
      return AlertTriangle
    case "payment":
      return DollarSign
    default:
      return Bell
  }
}

const getPriorityColor = (priority: string) => {
  switch (priority) {
    case "high":
      return "bg-red-100 text-red-700 border-red-200"
    case "medium":
      return "bg-yellow-100 text-yellow-700 border-yellow-200"
    case "low":
      return "bg-green-100 text-green-700 border-green-200"
    default:
      return "bg-gray-100 text-gray-700 border-gray-200"
  }
}

export function RealTimeNotifications() {
  const [notifications, setNotifications] = useState<Notification[]>(mockNotifications)
  const [unreadCount, setUnreadCount] = useState(0)

  useEffect(() => {
    const count = notifications.filter((n) => !n.isRead).length
    setUnreadCount(count)
  }, [notifications])

  const markAsRead = (id: string) => {
    setNotifications((prev) => prev.map((n) => (n.id === id ? { ...n, isRead: true } : n)))
  }

  const markAllAsRead = () => {
    setNotifications((prev) => prev.map((n) => ({ ...n, isRead: true })))
  }

  return (
    <Card className="w-full max-w-md border-0 shadow-lg">
      <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
        <div className="flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="relative">
              <Bell className="h-5 w-5" />
              {unreadCount > 0 && (
                <Badge className="absolute -top-2 -right-2 h-5 w-5 flex items-center justify-center p-0 text-xs bg-red-500">
                  {unreadCount}
                </Badge>
              )}
            </div>
            <div>
              <CardTitle className="text-lg">Notifications</CardTitle>
              <CardDescription>{unreadCount} unread messages</CardDescription>
            </div>
          </div>
          {unreadCount > 0 && (
            <Button variant="ghost" size="sm" onClick={markAllAsRead}>
              <Check className="h-4 w-4 mr-1" />
              Mark all read
            </Button>
          )}
        </div>
      </CardHeader>
      <CardContent className="p-0">
        <ScrollArea className="h-96">
          <div className="space-y-1">
            {notifications.map((notification) => {
              const Icon = getNotificationIcon(notification.type)
              return (
                <div
                  key={notification.id}
                  className={`flex items-start gap-3 p-4 border-l-4 hover:bg-muted/50 cursor-pointer transition-colors ${
                    !notification.isRead ? "bg-blue-50/50 border-l-blue-500" : "border-l-transparent"
                  }`}
                  onClick={() => markAsRead(notification.id)}
                >
                  <div className="flex-shrink-0">
                    {notification.avatar ? (
                      <Avatar className="h-8 w-8">
                        <AvatarImage src={notification.avatar || "/placeholder.svg"} />
                        <AvatarFallback>
                          <Icon className="h-4 w-4" />
                        </AvatarFallback>
                      </Avatar>
                    ) : (
                      <div className="h-8 w-8 rounded-full bg-blue-100 flex items-center justify-center">
                        <Icon className="h-4 w-4 text-blue-600" />
                      </div>
                    )}
                  </div>
                  <div className="flex-1 min-w-0">
                    <div className="flex items-start justify-between">
                      <p className="text-sm font-medium text-foreground">{notification.title}</p>
                      <div className="flex items-center gap-2">
                        <Badge variant="secondary" className={`text-xs ${getPriorityColor(notification.priority)}`}>
                          {notification.priority}
                        </Badge>
                        {!notification.isRead && <div className="h-2 w-2 bg-blue-500 rounded-full" />}
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground mt-1">{notification.message}</p>
                    <div className="flex items-center gap-1 mt-2">
                      <Clock className="h-3 w-3 text-muted-foreground" />
                      <span className="text-xs text-muted-foreground">{notification.time}</span>
                    </div>
                  </div>
                </div>
              )
            })}
          </div>
        </ScrollArea>
      </CardContent>
    </Card>
  )
}
