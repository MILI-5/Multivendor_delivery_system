"use client"

import { useState } from "react"
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card"
import { Badge } from "@/components/ui/badge"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Progress } from "@/components/ui/progress"
import { AlertTriangle, Package, Search, Filter, Plus, Edit, Trash2, Eye } from "lucide-react"

interface InventoryItem {
  id: string
  name: string
  vendor: string
  category: string
  currentStock: number
  maxStock: number
  minStock: number
  price: number
  status: "in_stock" | "low_stock" | "out_of_stock"
  lastUpdated: string
}

const mockInventory: InventoryItem[] = [
  {
    id: "1",
    name: "Margherita Pizza",
    vendor: "Mario's Pizza Palace",
    category: "Pizza",
    currentStock: 12,
    maxStock: 50,
    minStock: 10,
    price: 18.99,
    status: "low_stock",
    lastUpdated: "2024-01-15 14:30",
  },
  {
    id: "2",
    name: "California Roll",
    vendor: "Tokyo Sushi Bar",
    category: "Sushi",
    currentStock: 25,
    maxStock: 40,
    minStock: 8,
    price: 12.99,
    status: "in_stock",
    lastUpdated: "2024-01-15 13:45",
  },
  {
    id: "3",
    name: "Classic Cheeseburger",
    vendor: "Burger Junction",
    category: "Burger",
    currentStock: 0,
    maxStock: 30,
    minStock: 5,
    price: 15.99,
    status: "out_of_stock",
    lastUpdated: "2024-01-15 12:20",
  },
  {
    id: "4",
    name: "Chicken Tikka Masala",
    vendor: "Spice Garden",
    category: "Curry",
    currentStock: 18,
    maxStock: 25,
    minStock: 5,
    price: 16.99,
    status: "in_stock",
    lastUpdated: "2024-01-15 14:15",
  },
]

const getStatusColor = (status: string) => {
  switch (status) {
    case "in_stock":
      return "bg-green-100 text-green-700 border-green-200"
    case "low_stock":
      return "bg-yellow-100 text-yellow-700 border-yellow-200"
    case "out_of_stock":
      return "bg-red-100 text-red-700 border-red-200"
    default:
      return "bg-gray-100 text-gray-700 border-gray-200"
  }
}

const getStockPercentage = (current: number, max: number) => {
  return (current / max) * 100
}

export function InventoryManagement() {
  const [inventory, setInventory] = useState<InventoryItem[]>(mockInventory)
  const [searchTerm, setSearchTerm] = useState("")

  const filteredInventory = inventory.filter(
    (item) =>
      item.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.vendor.toLowerCase().includes(searchTerm.toLowerCase()) ||
      item.category.toLowerCase().includes(searchTerm.toLowerCase()),
  )

  const lowStockItems = inventory.filter((item) => item.status === "low_stock" || item.status === "out_of_stock")

  return (
    <div className="space-y-6">
      {/* Header */}
      <Card className="border-0 shadow-lg">
        <CardHeader className="bg-gradient-to-r from-orange-50 to-red-50 dark:from-orange-950 dark:to-red-950">
          <div className="flex items-center justify-between">
            <div>
              <CardTitle className="text-xl font-bold flex items-center gap-2">
                <Package className="h-6 w-6" />
                Inventory Management
              </CardTitle>
              <CardDescription>Track and manage product inventory across all vendors</CardDescription>
            </div>
            <div className="flex items-center gap-2">
              <div className="relative">
                <Search className="absolute left-2.5 top-2.5 h-4 w-4 text-muted-foreground" />
                <Input
                  placeholder="Search inventory..."
                  className="pl-8 w-64"
                  value={searchTerm}
                  onChange={(e) => setSearchTerm(e.target.value)}
                />
              </div>
              <Button variant="outline" size="sm">
                <Filter className="h-4 w-4 mr-2" />
                Filter
              </Button>
              <Button size="sm" className="bg-gradient-to-r from-blue-600 to-purple-600">
                <Plus className="h-4 w-4 mr-2" />
                Add Item
              </Button>
            </div>
          </div>
        </CardHeader>
      </Card>

      {/* Alerts */}
      {lowStockItems.length > 0 && (
        <Card className="border-orange-200 bg-orange-50/50">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-orange-700">
              <AlertTriangle className="h-5 w-5" />
              Inventory Alerts ({lowStockItems.length})
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="grid gap-3 md:grid-cols-2 lg:grid-cols-3">
              {lowStockItems.map((item) => (
                <div key={item.id} className="flex items-center justify-between p-3 bg-white rounded-lg border">
                  <div>
                    <p className="font-medium text-sm">{item.name}</p>
                    <p className="text-xs text-muted-foreground">{item.vendor}</p>
                  </div>
                  <Badge variant="secondary" className={getStatusColor(item.status)}>
                    {item.currentStock} left
                  </Badge>
                </div>
              ))}
            </div>
          </CardContent>
        </Card>
      )}

      {/* Stats Cards */}
      <div className="grid gap-4 md:grid-cols-4">
        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Total Items</CardTitle>
            <Package className="h-4 w-4 text-muted-foreground" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inventory.length}</div>
            <p className="text-xs text-muted-foreground">Across all vendors</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">In Stock</CardTitle>
            <div className="h-4 w-4 bg-green-500 rounded-full" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inventory.filter((item) => item.status === "in_stock").length}</div>
            <p className="text-xs text-muted-foreground">Items available</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Low Stock</CardTitle>
            <div className="h-4 w-4 bg-yellow-500 rounded-full" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">{inventory.filter((item) => item.status === "low_stock").length}</div>
            <p className="text-xs text-muted-foreground">Need restock</p>
          </CardContent>
        </Card>

        <Card>
          <CardHeader className="flex flex-row items-center justify-between space-y-0 pb-2">
            <CardTitle className="text-sm font-medium">Out of Stock</CardTitle>
            <div className="h-4 w-4 bg-red-500 rounded-full" />
          </CardHeader>
          <CardContent>
            <div className="text-2xl font-bold">
              {inventory.filter((item) => item.status === "out_of_stock").length}
            </div>
            <p className="text-xs text-muted-foreground">Unavailable</p>
          </CardContent>
        </Card>
      </div>

      {/* Inventory Table */}
      <Card>
        <CardHeader>
          <CardTitle>Inventory Details</CardTitle>
          <CardDescription>Complete inventory status across all vendors</CardDescription>
        </CardHeader>
        <CardContent>
          <Table>
            <TableHeader>
              <TableRow>
                <TableHead>Product</TableHead>
                <TableHead>Vendor</TableHead>
                <TableHead>Category</TableHead>
                <TableHead>Stock Level</TableHead>
                <TableHead>Price</TableHead>
                <TableHead>Status</TableHead>
                <TableHead>Last Updated</TableHead>
                <TableHead>Actions</TableHead>
              </TableRow>
            </TableHeader>
            <TableBody>
              {filteredInventory.map((item) => (
                <TableRow key={item.id}>
                  <TableCell>
                    <div className="font-medium">{item.name}</div>
                  </TableCell>
                  <TableCell>{item.vendor}</TableCell>
                  <TableCell>{item.category}</TableCell>
                  <TableCell>
                    <div className="space-y-2">
                      <div className="flex items-center justify-between text-sm">
                        <span>
                          {item.currentStock}/{item.maxStock}
                        </span>
                        <span className="text-muted-foreground">
                          {Math.round(getStockPercentage(item.currentStock, item.maxStock))}%
                        </span>
                      </div>
                      <Progress value={getStockPercentage(item.currentStock, item.maxStock)} className="h-2" />
                    </div>
                  </TableCell>
                  <TableCell>${item.price}</TableCell>
                  <TableCell>
                    <Badge variant="secondary" className={getStatusColor(item.status)}>
                      {item.status.replace("_", " ")}
                    </Badge>
                  </TableCell>
                  <TableCell className="text-sm text-muted-foreground">{item.lastUpdated}</TableCell>
                  <TableCell>
                    <div className="flex items-center gap-1">
                      <Button variant="ghost" size="sm">
                        <Eye className="h-4 w-4" />
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
    </div>
  )
}
