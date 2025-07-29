import { type NextRequest, NextResponse } from "next/server"
import { createServerClient } from "@/lib/supabase"

export async function GET(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const { searchParams } = new URL(request.url)
    const status = searchParams.get("status")
    const category = searchParams.get("category")
    const limit = Number.parseInt(searchParams.get("limit") || "10")
    const offset = Number.parseInt(searchParams.get("offset") || "0")

    let query = supabase
      .from("vendors")
      .select(`
        *,
        user:users!vendors_user_id_fkey(first_name, last_name, email, phone)
      `)
      .order("created_at", { ascending: false })
      .range(offset, offset + limit - 1)

    if (status) {
      query = query.eq("status", status)
    }

    if (category) {
      query = query.eq("category", category)
    }

    const { data: vendors, error } = await query

    if (error) {
      return NextResponse.json({ error: error.message }, { status: 500 })
    }

    return NextResponse.json({ vendors })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}

export async function POST(request: NextRequest) {
  try {
    const supabase = createServerClient()
    const body = await request.json()

    // First create the user
    const { data: user, error: userError } = await supabase
      .from("users")
      .insert([
        {
          email: body.email,
          first_name: body.first_name,
          last_name: body.last_name,
          phone: body.phone,
          role: "vendor",
        },
      ])
      .select()
      .single()

    if (userError) {
      return NextResponse.json({ error: userError.message }, { status: 500 })
    }

    // Then create the vendor
    const { data: vendor, error: vendorError } = await supabase
      .from("vendors")
      .insert([
        {
          user_id: user.id,
          business_name: body.business_name,
          description: body.description,
          category: body.category,
          address: body.address,
          phone: body.phone,
          email: body.email,
        },
      ])
      .select()
      .single()

    if (vendorError) {
      return NextResponse.json({ error: vendorError.message }, { status: 500 })
    }

    return NextResponse.json({ vendor }, { status: 201 })
  } catch (error) {
    return NextResponse.json({ error: "Internal server error" }, { status: 500 })
  }
}
