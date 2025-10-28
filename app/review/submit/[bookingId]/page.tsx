import { ReviewSubmissionPage } from "@/components/pages/review-submission-page"

export default async function Page({
  params,
}: {
  params: Promise<{ bookingId: string }>
}) {
  const { bookingId } = await params
  return <ReviewSubmissionPage bookingId={bookingId} />
}
