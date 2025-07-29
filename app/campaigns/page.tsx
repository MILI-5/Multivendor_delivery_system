import { SidebarTrigger } from "@/components/ui/sidebar"
import { PromotionalCampaigns } from "@/components/promotional-campaigns"

export default function CampaignsPage() {
  return (
    <div className="flex flex-col min-h-screen bg-gradient-to-br from-slate-50 via-purple-50 to-pink-50 dark:from-slate-900 dark:via-purple-900 dark:to-pink-900">
      <header className="flex h-16 shrink-0 items-center gap-2 border-b bg-background/95 backdrop-blur supports-[backdrop-filter]:bg-background/60 px-4 sticky top-0 z-40">
        <SidebarTrigger className="-ml-1" />
        <div>
          <h1 className="text-lg font-semibold">Marketing Campaigns</h1>
          <p className="text-sm text-muted-foreground">Create and manage promotional campaigns to boost sales</p>
        </div>
      </header>

      <main className="flex-1 p-6 max-w-7xl mx-auto w-full">
        <PromotionalCampaigns />
      </main>
    </div>
  )
}
