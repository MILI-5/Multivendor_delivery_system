import { SidebarTrigger } from "@/components/ui/sidebar"
import { InventoryManagement } from "@/components/inventory-management"

export default function InventoryPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-orange-50 to-red-50 dark:from-slate-900 dark:via-orange-900 dark:to-red-900">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sticky top-0 z-40">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-lg font-semibold">Inventory Management</h1>
          <p className="text-sm text-muted-foreground">Track and manage product inventory across all vendors</p>
        </div>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <InventoryManagement />
      </main>
    </div>
  )
}
