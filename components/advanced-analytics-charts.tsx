"use client"

import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  Line,
  Pie,
  PieChart,
  Cell,
  ResponsiveContainer,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  RadialBar,
  RadialBarChart,
} from "recharts"
import { Download, TrendingUp } from "lucide-react"

const revenueData = [
  { name: "Jan", revenue: 4000, orders: 240, customers: 120 },
  { name: "Feb", revenue: 3000, orders: 198, customers: 98 },
  { name: "Mar", revenue: 5000, orders: 320, customers: 180 },
  { name: "Apr", revenue: 4500, orders: 280, customers: 165 },
  { name: "May", revenue: 6000, orders: 390, customers: 220 },
  { name: "Jun", revenue: 5500, orders: 350, customers: 195 },
  { name: "Jul", revenue: 7000, orders: 450, customers: 280 },
]

const categoryData = [
  { name: "Italian", value: 35, color: "#8884d8" },
  { name: "American", value: 25, color: "#82ca9d" },
  { name: "Japanese", value: 20, color: "#ffc658" },
  { name: "Indian", value: 12, color: "#ff7c7c" },
  { name: "Others", value: 8, color: "#8dd1e1" },
]

const deliveryPerformance = [
  { time: "00:00", orders: 12, avgTime: 25 },
  { time: "04:00", orders: 8, avgTime: 22 },
  { time: "08:00", orders: 35, avgTime: 28 },
  { time: "12:00", orders: 89, avgTime: 35 },
  { time: "16:00", orders: 56, avgTime: 32 },
  { time: "20:00", orders: 78, avgTime: 30 },
]

const vendorPerformance = [
  { name: "Mario's Pizza", revenue: 12450, orders: 150, rating: 4.8 },
  { name: "Tokyo Sushi", revenue: 18670, orders: 203, rating: 4.9 },
  { name: "Burger Junction", revenue: 8230, orders: 89, rating: 4.2 },
  { name: "Spice Garden", revenue: 5890, orders: 67, rating: 4.6 },
  { name: "Fresh Salads", revenue: 3240, orders: 45, rating: 4.1 },
]

const radialData = [
  { name: "Mobile", value: 68, fill: "#8884d8" },
  { name: "Desktop", value: 32, fill: "#82ca9d" },
]

export function AdvancedAnalyticsCharts() {
  return (
    <div className="space-y-6">
      {/* Main Analytics Tabs */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-blue-50 to-purple-50 dark:from-blue-950 dark:to-purple-950">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold">Advanced Analytics</CardTitle>
              <CardDescription>Comprehensive insights into your delivery platform performance</CardDescription>
            </div>
            <Button variant="outline" size="sm" className="gap-2 bg-transparent">
              <Download className="h-4 w-4" />
              Export
            </Button>
          </div>
        </CardHeader>
        <CardContent className="p-6">
          <Tabs defaultValue="revenue" className="space-y-6">
            <TabsList className="grid w-full grid-cols-4">
              <TabsTrigger value="revenue">Revenue</TabsTrigger>
              <TabsTrigger value="orders">Orders</TabsTrigger>
              <TabsTrigger value="performance">Performance</TabsTrigger>
              <TabsTrigger value="vendors">Vendors</TabsTrigger>
            </TabsList>

            <TabsContent value="revenue" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <TrendingUp className="h-5 w-5 text-green-600" />
                      Revenue Trend
                    </CardTitle>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <AreaChart data={revenueData}>
                        <defs>
                          <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                            <stop offset="5%" stopColor="#8884d8" stopOpacity={0.8} />
                            <stop offset="95%" stopColor="#8884d8" stopOpacity={0.1} />
                          </linearGradient>
                        </defs>
                        <CartesianGrid strokeDasharray="3 3" />
                        <XAxis dataKey="name" />
                        <YAxis />
                        <Tooltip formatter={(value) => [`$${value}`, "Revenue"]} />
                        <Area
                          type="monotone"
                          dataKey="revenue"
                          stroke="#8884d8"
                          fillOpacity={1}
                          fill="url(#colorRevenue)"
                        />
                      </AreaChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Order Categories</CardTitle>
                    <CardDescription>Distribution by cuisine type</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <PieChart>
                        <Pie
                          data={categoryData}
                          cx="50%"
                          cy="50%"
                          outerRadius={80}
                          fill="#8884d8"
                          dataKey="value"
                          label={({ name, value }) => `${name}: ${value}%`}
                        >
                          {categoryData.map((entry, index) => (
                            <Cell key={`cell-${index}`} fill={entry.color} />
                          ))}
                        </Pie>
                        <Tooltip />
                      </PieChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="orders" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Daily Order Pattern</CardTitle>
                  <CardDescription>Order volume and delivery time throughout the day</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={deliveryPerformance}>
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis dataKey="time" />
                      <YAxis yAxisId="left" />
                      <YAxis yAxisId="right" orientation="right" />
                      <Tooltip />
                      <Legend />
                      <Bar yAxisId="left" dataKey="orders" fill="#8884d8" name="Orders" />
                      <Line yAxisId="right" dataKey="avgTime" stroke="#82ca9d" name="Avg Delivery Time (min)" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>

            <TabsContent value="performance" className="space-y-6">
              <div className="grid gap-6 md:grid-cols-2">
                <Card>
                  <CardHeader>
                    <CardTitle>Platform Usage</CardTitle>
                    <CardDescription>Mobile vs Desktop orders</CardDescription>
                  </CardHeader>
                  <CardContent>
                    <ResponsiveContainer width="100%" height={300}>
                      <RadialBarChart cx="50%" cy="50%" innerRadius="20%" outerRadius="90%" data={radialData}>
                        <RadialBar dataKey="value" cornerRadius={10} fill="#8884d8" />
                        <Tooltip />
                        <Legend />
                      </RadialBarChart>
                    </ResponsiveContainer>
                  </CardContent>
                </Card>

                <Card>
                  <CardHeader>
                    <CardTitle>Growth Metrics</CardTitle>
                    <CardDescription>Key performance indicators</CardDescription>
                  </CardHeader>
                  <CardContent className="space-y-4">
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Customer Acquisition</span>
                      <Badge variant="secondary" className="bg-green-100 text-green-700">
                        +24%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Retention Rate</span>
                      <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                        87%
                      </Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Avg Session Duration</span>
                      <Badge variant="secondary">8.5 min</Badge>
                    </div>
                    <div className="flex items-center justify-between">
                      <span className="text-sm font-medium">Bounce Rate</span>
                      <Badge variant="secondary" className="bg-red-100 text-red-700">
                        12%
                      </Badge>
                    </div>
                  </CardContent>
                </Card>
              </div>
            </TabsContent>

            <TabsContent value="vendors" className="space-y-6">
              <Card>
                <CardHeader>
                  <CardTitle>Top Performing Vendors</CardTitle>
                  <CardDescription>Revenue and order performance comparison</CardDescription>
                </CardHeader>
                <CardContent>
                  <ResponsiveContainer width="100%" height={400}>
                    <BarChart data={vendorPerformance} layout="horizontal">
                      <CartesianGrid strokeDasharray="3 3" />
                      <XAxis type="number" />
                      <YAxis dataKey="name" type="category" width={100} />
                      <Tooltip
                        formatter={(value, name) => [
                          name === "revenue" ? `$${value}` : value,
                          name === "revenue" ? "Revenue" : "Orders",
                        ]}
                      />
                      <Bar dataKey="revenue" fill="#8884d8" name="Revenue" />
                      <Bar dataKey="orders" fill="#82ca9d" name="Orders" />
                    </BarChart>
                  </ResponsiveContainer>
                </CardContent>
              </Card>
            </TabsContent>
          </Tabs>
        </CardContent>
      </Card>
    </div>
  )
}
