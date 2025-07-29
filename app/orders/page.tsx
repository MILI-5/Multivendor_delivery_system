import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Eye, Filter, Search } from "lucide-react"

const orders = [
  {
    id: "ORD-2024-001",
    customer: "Alice Johnson",
    vendor: "Mario's Pizza Palace",
    driver: "Mike Davis",
    amount: "$48.57",
    status: "delivered",
    time: "2024-01-15 14:30",
    items: 2,
  },
  {
    id: "ORD-2024-002",
    customer: "Bob Wilson",
    vendor: "Burger Junction",
    driver: "Sarah Brown",
    amount: "$28.04",
    status: "preparing",
    time: "2024-01-15 14:25",
    items: 2,
  },
  {
    id: "ORD-2024-003",
    customer: "Alice Johnson",
    vendor: "Tokyo Sushi Bar",
    driver: "Unassigned",
    amount: "$35.92",
    status: "confirmed",
    time: "2024-01-15 14:22",
    items: 2,
  },
  {
    id: "ORD-2024-004",
    customer: "Charlie Brown",
    vendor: "Spice Garden",
    driver: "Mike Davis",
    amount: "$42.15",
    status: "picked_up",
    time: "2024-01-15 14:18",
    items: 3,
  },
  {
    id: "ORD-2024-005",
    customer: "Diana Prince",
    vendor: "Mario's Pizza Palace",
    driver: "Sarah Brown",
    amount: "$31.20",
    status: "cancelled",
    time: "2024-01-15 14:10",
    items: 1,
  },
]

const statusColors = {
  delivered: "bg-green-100 text-green-800",
  preparing: "bg-yellow-100 text-yellow-800",
  confirmed: "bg-blue-100 text-blue-800",
  picked_up: "bg-purple-100 text-purple-800",
  cancelled: "bg-red-100 text-red-800",
}

export default function OrdersPage() {
  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Orders Management</h1>
            <p className="text-sm text-muted-foreground">Track and manage all orders across your platform</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search orders..." className="pl-8 w-64" />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">1,234</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+12%</span> from last month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Pending Orders</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">23</div>
              <p className="text-xs text-muted-foreground">Awaiting confirmation</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">In Progress</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">45</div>
              <p className="text-xs text-muted-foreground">Being prepared/delivered</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Completed Today</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">89</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+8%</span> from yesterday
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>Recent Orders</CardTitle>
            <CardDescription>All orders from your delivery platform</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Order ID</TableHead>
                  <TableHead>Customer</TableHead>
                  <TableHead>Vendor</TableHead>
                  <TableHead>Driver</TableHead>
                  <TableHead>Items</TableHead>
                  <TableHead>Amount</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Time</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {orders.map((order) => (
                  <TableRow key={order.id}>
                    <TableCell className="font-medium">{order.id}</TableCell>
                    <TableCell>{order.customer}</TableCell>
                    <TableCell>{order.vendor}</TableCell>
                    <TableCell>{order.driver}</TableCell>
                    <TableCell>{order.items}</TableCell>
                    <TableCell>{order.amount}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={statusColors[order.status as keyof typeof statusColors]}>
                        {order.status}
                      </Badge>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{order.time}</TableCell>
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
