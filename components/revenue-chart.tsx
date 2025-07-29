"use client"

import { Bar, BarChart, ResponsiveContainer, XAxis, YAxis, Tooltip } from "recharts"

const data = [
  { name: "Jan", revenue: 4000, orders: 240 },
  { name: "Feb", revenue: 3000, orders: 198 },
  { name: "Mar", revenue: 5000, orders: 320 },
  { name: "Apr", revenue: 4500, orders: 280 },
  { name: "May", revenue: 6000, orders: 390 },
  { name: "Jun", revenue: 5500, orders: 350 },
  { name: "Jul", revenue: 7000, orders: 450 },
]

export function RevenueChart() {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <BarChart data={data}>
        <XAxis dataKey="name" />
        <YAxis />
        <Tooltip
          formatter={(value, name) => [
            name === "revenue" ? `$${value}` : value,
            name === "revenue" ? "Revenue" : "Orders",
          ]}
        />
        <Bar dataKey="revenue" fill="#8884d8" />
        <Bar dataKey="orders" fill="#82ca9d" />
      </BarChart>
    </ResponsiveContainer>
  )
}
