import { ListingDetailPage } from "@/components/pages/listing-detail-page"
import { use } from "react"

export default function ListingDetail({ params }: { params: Promise<{ id: string }> }) {
  const { id } = use(params)
  return <ListingDetailPage carId={id} />
}
