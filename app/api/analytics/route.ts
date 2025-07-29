import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase"

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const period = searchParams.get("period") || "30" // days

    // Get total revenue
    const { data: revenueData, error: revenueError } = await supabase
      .from("orders")
      .select("total_amount")
      .eq("payment_status", "paid")
      .gte("created_at", new Date(Date.now() - Number.parseInt(period) * 24 * 60 * 60 * 1000).toISOString())

    if (revenueError) {
      return NextResponse.json({ error: revenueError.message }, { status: 500 })
    }

    const totalRevenue = revenueData.reduce((sum, order) => sum + Number.parseFloat(order.total_amount), 0)

    // Get order counts by status
    const { data: orderStats, error: orderStatsError } = await supabase
      .from("orders")
      .select("status")
      .gte("created_at", new Date(Date.now() - Number.parseInt(period) * 24 * 60 * 60 * 1000).toISOString())

    if (orderStatsError) {
      return NextResponse.json({ error: orderStatsError.message }, { status: 500 })
    }

    const statusCounts = orderStats.reduce(
      (acc, order) => {
        acc[order.status] = (acc[order.status] || 0) + 1
        return acc
      },
      {} as Record<string, number>,
    )

    // Get vendor count
    const { count: vendorCount, error: vendorError } = await supabase
      .from("vendors")
      .select("*", { count: "exact", head: true })
      .eq("status", "approved")

    if (vendorError) {
      return NextResponse.json({ error: vendorError.message }, { status: 500 })
    }

    // Get driver count
    const { count: driverCount, error: driverError } = await supabase
      .from("drivers")
      .select("*", { count: "exact", head: true })
      .eq("status", "approved")

    if (driverError) {
      return NextResponse.json({ error: driverError.message }, { status: 500 })
    }

    // Get customer count
    const { count: customerCount, error: customerError } = await supabase
      .from("users")
      .select("*", { count: "exact", head: true })
      .eq("role", "customer")

    if (customerError) {
      return NextResponse.json({ error: customerError.message }, { status: 500 })
    }

    return NextResponse.json({
      totalRevenue,
      orderStats: statusCounts,
      vendorCount: vendorCount || 0,
      driverCount: driverCount || 0,
      customerCount: customerCount || 0,
      totalOrders: orderStats.length,
    })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
