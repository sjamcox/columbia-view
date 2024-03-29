import { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'Book a Consultation | Immigrant Connection PDX',
}

export default function Booking() {
  return (
    <>
      <iframe
        src="https://app.squarespacescheduling.com/schedule.php?owner=25385557"
        title="Schedule Appointment"
        width="100%"
        height="800"
        frameBorder="0"
      ></iframe>
      <script
        src="https://embed.acuityscheduling.com/js/embed.js"
        type="text/javascript"
      />
    </>
  )
}
