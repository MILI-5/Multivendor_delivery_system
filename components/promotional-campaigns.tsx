"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { Megaphone, Target, TrendingUp, DollarSign, Plus, Play, Pause, Edit, Trash2 } from "lucide-react"

interface Campaign {
  id: string
  name: string
  type: "discount" | "free_delivery" | "buy_one_get_one" | "cashback"
  status: "active" | "scheduled" | "paused" | "completed"
  startDate: string
  endDate: string
  discount: number
  target: "all_customers" | "new_customers" | "returning_customers" | "specific_vendors"
  budget: number
  spent: number
  orders: number
  revenue: number
  impressions: number
  conversions: number
}

const mockCampaigns: Campaign[] = [
  {
    id: "1",
    name: "Weekend Special - 20% Off",
    type: "discount",
    status: "active",
    startDate: "2024-01-15",
    endDate: "2024-01-17",
    discount: 20,
    target: "all_customers",
    budget: 5000,
    spent: 3200,
    orders: 156,
    revenue: 12450,
    impressions: 8500,
    conversions: 1200,
  },
  {
    id: "2",
    name: "Free Delivery Monday",
    type: "free_delivery",
    status: "scheduled",
    startDate: "2024-01-22",
    endDate: "2024-01-22",
    discount: 0,
    target: "new_customers",
    budget: 2000,
    spent: 0,
    orders: 0,
    revenue: 0,
    impressions: 0,
    conversions: 0,
  },
  {
    id: "3",
    name: "Pizza BOGO Deal",
    type: "buy_one_get_one",
    status: "completed",
    startDate: "2024-01-10",
    endDate: "2024-01-12",
    discount: 50,
    target: "specific_vendors",
    budget: 3000,
    spent: 2890,
    orders: 89,
    revenue: 8900,
    impressions: 12000,
    conversions: 890,
  },
  {
    id: "4",
    name: "Cashback Campaign",
    type: "cashback",
    status: "paused",
    startDate: "2024-01-08",
    endDate: "2024-01-20",
    discount: 10,
    target: "returning_customers",
    budget: 4000,
    spent: 1200,
    orders: 45,
    revenue: 3400,
    impressions: 5600,
    conversions: 450,
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "active":
      return "bg-green-100 text-green-700 border-green-200"
    case "scheduled":
      return "bg-blue-100 text-blue-700 border-blue-200"
    case "paused":
      return "bg-yellow-100 text-yellow-700 border-yellow-200"
    case "completed":
      return "bg-gray-100 text-gray-700 border-gray-200"
    default:
      return "bg-gray-100 text-gray-700 border-gray-200"
  }
}

const getCampaignIcon = (type: string) => {
  switch (type) {
    case "discount":
      return "💰"
    case "free_delivery":
      return "🚚"
    case "buy_one_get_one":
      return "🎁"
    case "cashback":
      return "💳"
    default:
      return "🎯"
  }
}

export function PromotionalCampaigns() {
  const [campaigns, setCampaigns] = useState<Campaign[]>(mockCampaigns)
  const [activeTab, setActiveTab] = useState("overview")

  const activeCampaigns = campaigns.filter((c) => c.status === "active")
  const totalBudget = campaigns.reduce((sum, c) => sum + c.budget, 0)
  const totalSpent = campaigns.reduce((sum, c) => sum + c.spent, 0)
  const totalRevenue = campaigns.reduce((sum, c) => sum + c.revenue, 0)

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-purple-50 to-pink-50 dark:from-purple-950 dark:to-pink-950">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <Megaphone className="h-6 w-6" />
                Promotional Campaigns
              </CardTitle>
              <CardDescription>Create and manage marketing campaigns to boost sales</CardDescription>
            </div>
            <Button size="sm" className="bg-gradient-to-r from-purple-600 to-pink-600">
              <Plus className="h-4 w-4 mr-2" />
              Create Campaign
            </Button>
          </div>
        </CardHeader>
      </Card>

      <Tabs value={activeTab} onValueChange={setActiveTab} className="space-y-6">
        <TabsList className="grid w-full grid-cols-4">
          <TabsTrigger value="overview">Overview</TabsTrigger>
          <TabsTrigger value="active">Active Campaigns</TabsTrigger>
          <TabsTrigger value="performance">Performance</TabsTrigger>
          <TabsTrigger value="create">Create New</TabsTrigger>
        </TabsList>

        <TabsContent value="overview" className="space-y-6">
          {/* Stats Cards */}
          <div className="grid gap-4 md:grid-cols-4">
            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Active Campaigns</CardTitle>
                <Play className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">{activeCampaigns.length}</div>
                <p className="text-xs text-muted-foreground">Currently running</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Total Budget</CardTitle>
                <DollarSign className="h-4 w-4 text-blue-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalBudget.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">
                  ${totalSpent.toLocaleString()} spent ({Math.round((totalSpent / totalBudget) * 100)}%)
                </p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Generated Revenue</CardTitle>
                <TrendingUp className="h-4 w-4 text-green-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">${totalRevenue.toLocaleString()}</div>
                <p className="text-xs text-muted-foreground">ROI: {Math.round((totalRevenue / totalSpent) * 100)}%</p>
              </CardContent>
            </Card>

            <Card>
              <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
                <CardTitle className="text-sm font-medium">Avg. Conversion</CardTitle>
                <Target className="h-4 w-4 text-purple-600" />
              </CardHeader>
              <CardContent>
                <div className="text-2xl font-bold">
                  {Math.round(
                    campaigns.reduce((sum, c) => sum + (c.conversions / c.impressions) * 100, 0) / campaigns.length,
                  )}
                  %
                </div>
                <p className="text-xs text-muted-foreground">Across all campaigns</p>
              </CardContent>
            </Card>
          </div>

          {/* Campaign Overview */}
          <Card>
            <CardHeader>
              <CardTitle>All Campaigns</CardTitle>
              <CardDescription>Overview of all promotional campaigns</CardDescription>
            </CardHeader>
            <CardContent>
              <Table>
                <TableHeader>
                  <TableRow>
                    <TableHead>Campaign</TableHead>
                    <TableHead>Type</TableHead>
                    <TableHead>Status</TableHead>
                    <TableHead>Budget</TableHead>
                    <TableHead>Performance</TableHead>
                    <TableHead>Duration</TableHead>
                    <TableHead>Actions</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  {campaigns.map((campaign) => (
                    <TableRow key={campaign.id}>
                      <TableCell>
                        <div className="flex items-center gap-2">
                          <span className="text-lg">{getCampaignIcon(campaign.type)}</span>
                          <div>
                            <div className="font-medium">{campaign.name}</div>
                            <div className="text-sm text-muted-foreground">
                              {campaign.discount > 0 ? `${campaign.discount}% off` : "Special offer"}
                            </div>
                          </div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <Badge variant="outline">{campaign.type.replace("_", " ")}</Badge>
                      </TableCell>
                      <TableCell>
                        <Badge variant="secondary" className={getStatusColor(campaign.status)}>
                          {campaign.status}
                        </Badge>
                      </TableCell>
                      <TableCell>
                        <div>
                          <div className="font-medium">${campaign.budget.toLocaleString()}</div>
                          <Progress value={(campaign.spent / campaign.budget) * 100} className="h-1 mt-1" />
                          <div className="text-xs text-muted-foreground">${campaign.spent.toLocaleString()} spent</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{campaign.orders} orders</div>
                          <div className="text-muted-foreground">${campaign.revenue.toLocaleString()} revenue</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="text-sm">
                          <div>{campaign.startDate}</div>
                          <div className="text-muted-foreground">to {campaign.endDate}</div>
                        </div>
                      </TableCell>
                      <TableCell>
                        <div className="flex items-center gap-1">
                          <Button variant="ghost" size="sm">
                            {campaign.status === "active" ? (
                              <Pause className="h-4 w-4" />
                            ) : (
                              <Play className="h-4 w-4" />
                            )}
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Edit className="h-4 w-4" />
                          </Button>
                          <Button variant="ghost" size="sm">
                            <Trash2 className="h-4 w-4" />
                          </Button>
                        </div>
                      </TableCell>
                    </TableRow>
                  ))}
                </TableBody>
              </Table>
            </CardContent>
          </Card>
        </TabsContent>

        <TabsContent value="performance" className="space-y-6">
          <div className="grid gap-6 md:grid-cols-2">
            <Card>
              <CardHeader>
                <CardTitle>Campaign Performance</CardTitle>
                <CardDescription>Key metrics comparison</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {campaigns.map((campaign) => (
                  <div key={campaign.id} className="space-y-2">
                    <div className="flex justify-between items-center">
                      <span className="text-sm font-medium">{campaign.name}</span>
                      <Badge variant="secondary" className={getStatusColor(campaign.status)}>
                        {Math.round((campaign.conversions / campaign.impressions) * 100)}% CVR
                      </Badge>
                    </div>
                    <Progress
                      value={(campaign.revenue / Math.max(...campaigns.map((c) => c.revenue))) * 100}
                      className="h-2"
                    />
                    <div className="flex justify-between text-xs text-muted-foreground">
                      <span>{campaign.orders} orders</span>
                      <span>${campaign.revenue.toLocaleString()} revenue</span>
                    </div>
                  </div>
                ))}
              </CardContent>
            </Card>

            <Card>
              <CardHeader>
                <CardTitle>ROI Analysis</CardTitle>
                <CardDescription>Return on investment by campaign</CardDescription>
              </CardHeader>
              <CardContent className="space-y-4">
                {campaigns
                  .filter((c) => c.spent > 0)
                  .map((campaign) => {
                    const roi = ((campaign.revenue - campaign.spent) / campaign.spent) * 100
                    return (
                      <div key={campaign.id} className="flex items-center justify-between p-3 border rounded-lg">
                        <div>
                          <p className="font-medium text-sm">{campaign.name}</p>
                          <p className="text-xs text-muted-foreground">
                            Spent: ${campaign.spent.toLocaleString()} | Revenue: ${campaign.revenue.toLocaleString()}
                          </p>
                        </div>
                        <Badge
                          variant="secondary"
                          className={roi > 0 ? "bg-green-100 text-green-700" : "bg-red-100 text-red-700"}
                        >
                          {roi > 0 ? "+" : ""}
                          {Math.round(roi)}%
                        </Badge>
                      </div>
                    )
                  })}
              </CardContent>
            </Card>
          </div>
        </TabsContent>

        <TabsContent value="create" className="space-y-6">
          <Card>
            <CardHeader>
              <CardTitle>Create New Campaign</CardTitle>
              <CardDescription>Set up a new promotional campaign</CardDescription>
            </CardHeader>
            <CardContent className="space-y-6">
              <div className="grid gap-4 md:grid-cols-2">
                <div className="space-y-2">
                  <label className="text-sm font-medium">Campaign Name</label>
                  <Input placeholder="Enter campaign name" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Campaign Type</label>
                  <select className="w-full p-2 border rounded-md">
                    <option>Discount</option>
                    <option>Free Delivery</option>
                    <option>Buy One Get One</option>
                    <option>Cashback</option>
                  </select>
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Start Date</label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">End Date</label>
                  <Input type="date" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Discount (%)</label>
                  <Input type="number" placeholder="0" />
                </div>
                <div className="space-y-2">
                  <label className="text-sm font-medium">Budget ($)</label>
                  <Input type="number" placeholder="0" />
                </div>
              </div>
              <div className="space-y-2">
                <label className="text-sm font-medium">Target Audience</label>
                <select className="w-full p-2 border rounded-md">
                  <option>All Customers</option>
                  <option>New Customers</option>
                  <option>Returning Customers</option>
                  <option>Specific Vendors</option>
                </select>
              </div>
              <div className="flex gap-2">
                <Button className="flex-1">Create Campaign</Button>
                <Button variant="outline">Save as Draft</Button>
              </div>
            </CardContent>
          </Card>
        </TabsContent>
      </Tabs>
    </div>
  )
}
