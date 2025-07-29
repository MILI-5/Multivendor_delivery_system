import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, Filter, Plus, Search, Star } from "lucide-react"

const vendors = [
  {
    id: "1",
    name: "Mario's Pizza Palace",
    email: "pizza@example.com",
    category: "Italian",
    rating: 4.5,
    totalOrders: 150,
    revenue: "$12,450",
    status: "approved",
    joinDate: "2024-01-10",
  },
  {
    id: "2",
    name: "Burger Junction",
    email: "burger@example.com",
    category: "American",
    rating: 4.2,
    totalOrders: 89,
    revenue: "$8,230",
    status: "approved",
    joinDate: "2024-01-08",
  },
  {
    id: "3",
    name: "Tokyo Sushi Bar",
    email: "sushi@example.com",
    category: "Japanese",
    rating: 4.8,
    totalOrders: 203,
    revenue: "$18,670",
    status: "approved",
    joinDate: "2024-01-05",
  },
  {
    id: "4",
    name: "Spice Garden",
    email: "indian@example.com",
    category: "Indian",
    rating: 4.3,
    totalOrders: 67,
    revenue: "$5,890",
    status: "approved",
    joinDate: "2024-01-12",
  },
  {
    id: "5",
    name: "Fresh Salads Co",
    email: "salads@example.com",
    category: "Healthy",
    rating: 4.1,
    totalOrders: 34,
    revenue: "$2,340",
    status: "pending",
    joinDate: "2024-01-14",
  },
]

const statusColors = {
  approved: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  suspended: "bg-red-100 text-red-800",
  rejected: "bg-gray-100 text-gray-800",
}

export default function VendorsPage() {
  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Vendors Management</h1>
            <p className="text-sm text-muted-foreground">Manage all vendors on your delivery platform</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search vendors..." className="pl-8 w-64" />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Vendor
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Vendors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">24</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+2</span> new this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Active Vendors</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">21</div>
              <p className="text-xs text-muted-foreground">87.5% of total vendors</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Approval</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">3</div>
              <p className="text-xs text-muted-foreground">Awaiting review</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.4</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+0.1</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Vendors</CardTitle>
            <CardDescription>Manage and monitor all vendors on your platform</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Vendor</TableHead>
                  <TableHead>Category</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Orders</TableHead>
                  <TableHead>Revenue</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {vendors.map((vendor) => (
                  <TableRow key={vendor.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32&query=${vendor.name}`} />
                          <AvatarFallback>{vendor.name.charAt(0)}</AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{vendor.name}</div>
                          <div className="text-sm text-muted-foreground">{vendor.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>{vendor.category}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{vendor.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>{vendor.totalOrders}</TableCell>
                    <TableCell>{vendor.revenue}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={statusColors[vendor.status as keyof typeof statusColors]}>
                        {vendor.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{vendor.joinDate}</TableCell>
                    <TableCell>
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
                      </Button>
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </CardContent>
        </Card>
      </main>
    </div>
  )
}
