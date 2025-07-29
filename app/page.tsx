import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { BarChart3, Building2, Car, Package, TrendingUp, Bell, Map, Users } from "lucide-react"
import { EnhancedDashboardStats } from "@/components/enhanced-dashboard-stats"
import { AdvancedAnalyticsCharts } from "@/components/advanced-analytics-charts"
import { RealTimeNotifications } from "@/components/real-time-notifications"
import { LiveOrderTracking } from "@/components/live-order-tracking"

export default function DashboardPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-blue-50 to-purple-50 dark:from-slate-900 dark:via-blue-900 dark:to-purple-900">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sticky top-0 z-40">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold bg-gradient-to-r from-blue-600 to-purple-600 bg-clip-text text-transparent">
              DeliveryHub Dashboard
            </h1>
            <p className="text-sm text-muted-foreground">
              Welcome back! Here's what's happening with your delivery platform.
            </p>
          </div>
          <div className="flex items-center gap-3">
            <Badge variant="secondary" className="animate-pulse-slow bg-green-100 text-green-700 border-green-200">
              <div className="w-2 h-2 bg-green-500 rounded-full mr-2 animate-ping" />
              Live
            </Badge>
            <Button size="sm" variant="outline" className="gap-2 bg-transparent">
              <BarChart3 className="h-4 w-4" />
              View Reports
            </Button>
            <Button
              size="sm"
              className="gap-2 bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700"
            >
              <Bell className="h-4 w-4" />
              Alerts
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 space-y-8 p-6 max-w-7xl mx-auto w-full">
        {/* Enhanced Stats */}
        <EnhancedDashboardStats />

        {/* Main Dashboard Tabs */}
        <Tabs defaultValue="overview" className="space-y-6">
          <TabsList className="grid w-full grid-cols-5 lg:w-auto lg:grid-cols-5">
            <TabsTrigger value="overview" className="gap-2">
              <TrendingUp className="h-4 w-4" />
              Overview
            </TabsTrigger>
            <TabsTrigger value="analytics" className="gap-2">
              <BarChart3 className="h-4 w-4" />
              Analytics
            </TabsTrigger>
            <TabsTrigger value="tracking" className="gap-2">
              <Map className="h-4 w-4" />
              Live Tracking
            </TabsTrigger>
            <TabsTrigger value="notifications" className="gap-2">
              <Bell className="h-4 w-4" />
              Notifications
            </TabsTrigger>
            <TabsTrigger value="team" className="gap-2">
              <Users className="h-4 w-4" />
              Team
            </TabsTrigger>
          </TabsList>

          <TabsContent value="overview" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              {/* Quick Stats Cards */}
              <Card className="hover-lift gradient-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Active Orders</CardTitle>
                  <Package className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">23</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">+3</span> in last hour
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift gradient-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Online Vendors</CardTitle>
                  <Building2 className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">18</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-blue-600">75%</span> of total vendors
                  </p>
                </CardContent>
              </Card>

              <Card className="hover-lift gradient-card">
                <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                  <CardTitle className="text-sm font-medium">Available Drivers</CardTitle>
                  <Car className="h-4 w-4 text-muted-foreground" />
                </CardHeader>
                <CardContent>
                  <div className="text-2xl font-bold">12</div>
                  <p className="text-xs text-muted-foreground">
                    <span className="text-green-600">Ready</span> for delivery
                  </p>
                </CardContent>
              </Card>
            </div>

            <div className="grid gap-6 md:grid-cols-2">
              <Card className="md:col-span-2">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <TrendingUp className="h-5 w-5 text-green-600" />
                    Recent Activity
                  </CardTitle>
                  <CardDescription>Latest platform activities and updates</CardDescription>
                </CardHeader>
                <CardContent>
                  <div className="space-y-4">
                    {[
                      {
                        action: "New order placed",
                        details: "Order #ORD-2024-156 from Mario's Pizza",
                        time: "2 min ago",
                        type: "order",
                      },
                      {
                        action: "Driver assigned",
                        details: "Mike Davis assigned to Order #ORD-2024-155",
                        time: "5 min ago",
                        type: "driver",
                      },
                      {
                        action: "Vendor approved",
                        details: "Fresh Salads Co. has been approved",
                        time: "8 min ago",
                        type: "vendor",
                      },
                      {
                        action: "Payment processed",
                        details: "$234.50 commission paid to Tokyo Sushi Bar",
                        time: "15 min ago",
                        type: "payment",
                      },
                    ].map((activity, index) => (
                      <div key={index} className="flex items-center gap-4 p-3 rounded-lg border">
                        <div
                          className={`w-2 h-8 rounded-full ${
                            activity.type === "order"
                              ? "bg-blue-500"
                              : activity.type === "driver"
                                ? "bg-green-500"
                                : activity.type === "vendor"
                                  ? "bg-purple-500"
                                  : "bg-orange-500"
                          }`}
                        />
                        <div className="flex-1">
                          <p className="font-medium">{activity.action}</p>
                          <p className="text-sm text-muted-foreground">{activity.details}</p>
                        </div>
                        <span className="text-xs text-muted-foreground">{activity.time}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>

          <TabsContent value="analytics" className="space-y-6">
            <AdvancedAnalyticsCharts />
          </TabsContent>

          <TabsContent value="tracking" className="space-y-6">
            <LiveOrderTracking />
          </TabsContent>

          <TabsContent value="notifications" className="space-y-6">
            <div className="flex justify-center">
              <RealTimeNotifications />
            </div>
          </TabsContent>

          <TabsContent value="team" className="space-y-6">
            <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
              <Card>
                <CardHeader>
                  <CardTitle>Team Performance</CardTitle>
                  <CardDescription>This month's team statistics</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Average Response Time</span>
                    <Badge variant="secondary" className="bg-green-100 text-green-700">
                      2.3 min
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Customer Satisfaction</span>
                    <Badge variant="secondary" className="bg-blue-100 text-blue-700">
                      96%
                    </Badge>
                  </div>
                  <div className="flex justify-between items-center">
                    <span className="text-sm">Issues Resolved</span>
                    <Badge variant="secondary">847</Badge>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Top Performers</CardTitle>
                  <CardDescription>This week's star employees</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  {["Mike Davis (Driver)", "Sarah Chen (Support)", "Alex Rodriguez (Manager)"].map((name, index) => (
                    <div key={index} className="flex items-center gap-3">
                      <div className="w-8 h-8 bg-gradient-to-br from-blue-500 to-purple-600 rounded-full flex items-center justify-center text-white font-bold text-sm">
                        {index + 1}
                      </div>
                      <span className="text-sm font-medium">{name}</span>
                    </div>
                  ))}
                </CardContent>
              </Card>

              <Card>
                <CardHeader>
                  <CardTitle>Recent Achievements</CardTitle>
                  <CardDescription>Milestones and badges earned</CardDescription>
                </CardHeader>
                <CardContent className="space-y-3">
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-yellow-500 rounded-full flex items-center justify-center">🏆</div>
                    <div>
                      <p className="text-sm font-medium">1000th Order</p>
                      <p className="text-xs text-muted-foreground">Milestone reached!</p>
                    </div>
                  </div>
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 bg-green-500 rounded-full flex items-center justify-center">⭐</div>
                    <div>
                      <p className="text-sm font-medium">5-Star Rating</p>
                      <p className="text-xs text-muted-foreground">Week average</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </TabsContent>
        </Tabs>
      </main>
    </div>
  )
}
