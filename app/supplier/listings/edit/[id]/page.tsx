import { SupplierEditListingPage } from "@/components/pages/supplier-edit-listing-page"

export default async function Page({
  params,
}: {
  params: Promise<{ id: string }>
}) {
  const { id } = await params
  return <SupplierEditListingPage listingId={id} />
}
