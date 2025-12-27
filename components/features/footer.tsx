'use client'

export default function Footer() {
  return (
    <>
      <div className="bg-neutral-dark-gray py-8">
        <div className="container mx-auto px-6">
          <div className="grid gap-6 sm:grid-cols-[repeat(auto-fit,minmax(200px,1fr))] sm:gap-20">
            <div className="flex flex-col gap-0 text-white">
              <p className="mb-0 font-bold">Columbia View Church</p>
              <p className="text-[15px]">16700 NE Halsey Street</p>
              <p className="text-[15px]">Portland, OR 97230</p>
              <p className="text-[15px]">503.253.7939</p>
            </div>
            <div className="flex flex-col gap-0 text-white">
              <p className="mb-0 font-bold">Worship Service</p>
              <p className="text-[15px]">Sundays at 10:00 am</p>
            </div>
          </div>
        </div>
      </div>
      <div className="border-t border-white bg-neutral-dark-gray py-2">
        <div className="container mx-auto px-6">
          <p className="text-sm text-white">
            © {new Date().getFullYear()} Columbia View Church | All Rights
            Reserved
          </p>
        </div>
      </div>
    </>
  )
}
