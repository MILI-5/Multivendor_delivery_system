import { SidebarTrigger } from "@/components/ui/sidebar"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Avatar, AvatarFallback, AvatarImage } from "@/components/ui/avatar"
import { Eye, Filter, MapPin, Plus, Search, Star } from "lucide-react"

const drivers = [
  {
    id: "1",
    name: "Mike Davis",
    email: "driver1@example.com",
    phone: "+1234567896",
    vehicleType: "Motorcycle",
    vehicleNumber: "NYC-1234",
    rating: 4.6,
    totalDeliveries: 245,
    status: "active",
    isAvailable: true,
    joinDate: "2024-01-05",
  },
  {
    id: "2",
    name: "Sarah Brown",
    email: "driver2@example.com",
    phone: "+1234567897",
    vehicleType: "Car",
    vehicleNumber: "NYC-5678",
    rating: 4.4,
    totalDeliveries: 189,
    status: "active",
    isAvailable: false,
    joinDate: "2024-01-08",
  },
  {
    id: "3",
    name: "James Wilson",
    email: "driver3@example.com",
    phone: "+1234567898",
    vehicleType: "Bicycle",
    vehicleNumber: "NYC-9012",
    rating: 4.8,
    totalDeliveries: 156,
    status: "active",
    isAvailable: true,
    joinDate: "2024-01-12",
  },
  {
    id: "4",
    name: "Lisa Garcia",
    email: "driver4@example.com",
    phone: "+1234567899",
    vehicleType: "Motorcycle",
    vehicleNumber: "NYC-3456",
    rating: 4.2,
    totalDeliveries: 98,
    status: "pending",
    isAvailable: false,
    joinDate: "2024-01-14",
  },
]

const statusColors = {
  active: "bg-green-100 text-green-800",
  pending: "bg-yellow-100 text-yellow-800",
  inactive: "bg-gray-100 text-gray-800",
  suspended: "bg-red-100 text-red-800",
}

export default function DriversPage() {
  return (
    <div className="flex flex-col">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b px-4">
        <SidebarTrigger className="-ml-1" />
        <div className="flex flex-1 items-center justify-between">
          <div>
            <h1 className="text-lg font-semibold">Drivers Management</h1>
            <p className="text-sm text-muted-foreground">Manage delivery drivers and track their performance</p>
          </div>
          <div className="flex items-center gap-2">
            <div className="relative">
              <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
              <Input placeholder="Search drivers..." className="pl-8 w-64" />
            </div>
            <Button variant="outline" size="sm">
              <Filter className="h-4 w-4 mr-2" />
              Filter
            </Button>
            <Button size="sm">
              <Plus className="h-4 w-4 mr-2" />
              Add Driver
            </Button>
          </div>
        </div>
      </header>

      <main className="flex-1 space-y-6 p-6">
        <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-4">
          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Total Drivers</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">18</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+3</span> new this month
              </p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Available Now</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">12</div>
              <p className="text-xs text-muted-foreground">66.7% of active drivers</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">On Delivery</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">6</div>
              <p className="text-xs text-muted-foreground">Currently delivering orders</p>
            </CardContent>
          </Card>

          <Card>
            <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
              <CardTitle className="text-sm font-medium">Avg. Rating</CardTitle>
            </CardHeader>
            <CardContent>
              <div className="text-2xl font-bold">4.5</div>
              <p className="text-xs text-muted-foreground">
                <span className="text-green-600">+0.1</span> from last month
              </p>
            </CardContent>
          </Card>
        </div>

        <Card>
          <CardHeader>
            <CardTitle>All Drivers</CardTitle>
            <CardDescription>Manage and monitor all delivery drivers</CardDescription>
          </CardHeader>
          <CardContent>
            <Table>
              <TableHeader>
                <TableRow>
                  <TableHead>Driver</TableHead>
                  <TableHead>Vehicle</TableHead>
                  <TableHead>Rating</TableHead>
                  <TableHead>Deliveries</TableHead>
                  <TableHead>Status</TableHead>
                  <TableHead>Availability</TableHead>
                  <TableHead>Join Date</TableHead>
                  <TableHead>Actions</TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {drivers.map((driver) => (
                  <TableRow key={driver.id}>
                    <TableCell>
                      <div className="flex items-center gap-3">
                        <Avatar className="h-8 w-8">
                          <AvatarImage src={`/placeholder.svg?height=32&width=32&query=${driver.name}`} />
                          <AvatarFallback>
                            {driver.name
                              .split(" ")
                              .map((n) => n[0])
                              .join("")}
                          </AvatarFallback>
                        </Avatar>
                        <div>
                          <div className="font-medium">{driver.name}</div>
                          <div className="text-sm text-muted-foreground">{driver.email}</div>
                        </div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div>
                        <div className="font-medium">{driver.vehicleType}</div>
                        <div className="text-sm text-muted-foreground">{driver.vehicleNumber}</div>
                      </div>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Star className="h-4 w-4 fill-yellow-400 text-yellow-400" />
                        <span>{driver.rating}</span>
                      </div>
                    </TableCell>
                    <TableCell>{driver.totalDeliveries}</TableCell>
                    <TableCell>
                      <Badge variant="secondary" className={statusColors[driver.status as keyof typeof statusColors]}>
                        {driver.status}
                      </Badge>
                    </TableCell>
                    <TableCell>
                      <div className="flex items-center gap-2">
                        <div
                          className={`h-2 w-2 rounded-full ${driver.isAvailable ? "bg-green-500" : "bg-gray-400"}`}
                        />
                        <span className="text-sm">{driver.isAvailable ? "Available" : "Busy"}</span>
                      </div>
                    </TableCell>
                    <TableCell className="text-sm text-muted-foreground">{driver.joinDate}</TableCell>
                    <TableCell>
                      <div className="flex items-center gap-1">
                        <Button variant="ghost" size="sm">
                          <Eye className="h-4 w-4" />
                        </Button>
                        <Button variant="ghost" size="sm">
                          <MapPin className="h-4 w-4" />
                        </Button>
                      </div>
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
