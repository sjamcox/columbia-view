import Image from 'next/image'
import Link from 'next/link'
import Slideshow from '@/components/Slideshow'
import EventGrid from '@/components/EventGrid'
import Button from '@/components/ui/button'

import baptism from '@/public/sunday/mark-baptism.webp'
import worship from '@/public/sunday/worship-team-vertical.webp'
import kids from '@/public/kids/kids-activity.webp'
import lifeGroup from '@/public/life-groups/ladies-group.webp'
import smilingFamily from '@/public/icpdx/smiling-family.webp'
import immigrantFamily from '@/public/icpdx/immigrant-family.webp'
import rightnow from '@/public/right-now-media.webp'


function ImageTile({
  link,
  image,
  alt,
  headline,
}: {
  link: string
  image: any
  alt: string
  headline: string
}) {
  return (
    <Link href={link} className="group block h-full">
      <div className="relative h-0 w-full overflow-hidden rounded pb-[133%] shadow-md">
        <Image
          src={image}
          alt={alt}
          fill
          className="absolute inset-0 object-cover"
        />
        <div className="absolute bottom-0 left-0 z-10 h-[70%] w-full bg-linear-to-b from-transparent to-[rgba(0,0,0,0.35)]" />
        <div className="absolute bottom-0 left-0 z-20 pb-2 pl-[22px] pr-5">
          <h3 className="text-[1.7rem] font-bold leading-tight text-white drop-shadow-md md:text-[33px]">
            {headline}
          </h3>
        </div>
      </div>
    </Link>
  )
}

export default function Page() {
  return (
    <>
      <Slideshow />
      <section>
        <div className="container mx-auto overflow-hidden px-4 py-8 md:overflow-visible md:py-24">
          <div className="flex flex-col-reverse justify-between md:flex-row">
            <div className="w-full md:w-1/2 lg:w-1/2">
              <h2 className="mb-8 text-[1.7rem] font-bold text-[#0E496F] md:text-[2.3rem] lg:text-[2.8rem]">
                Join us Sunday morning online or in person
              </h2>
              <p className="mb-8 text-lg leading-relaxed text-neutral-dark-gray">
                If you’re new to the area, new to church, or just looking for a
                new start, our Sunday morning worship services offer you the
                opportunity to build your faith in God and connect with new
                people. Our goal is to be an authentic community of believers
                who are learning to love Jesus and love others more and more
                each day. Regardless of your story, your doubts, or your
                struggles; you are welcome at Columbia View! So come as you are.
              </p>
              <div className="mt-2 flex flex-row gap-4">
                <Button href="/plan-your-visit" color="blue" className="mr-3">
                  Join us this Sunday
                </Button>
                <Button href="https://columbiaview.churchcenter.com/people/forms/33687" color="blue">
                  New Family Registration
                </Button>
              </div>
            </div>
            <div className="mb-8 md:mb-0 md:w-1/3">
              <div className="relative h-[300px] w-[375px] md:h-[480px] md:w-[400px]">
                {/* Background blue box */}
                <div className="absolute left-0 top-0 h-full w-[calc(100%-50px)] rounded-[10px] bg-[#BCE6FB] md:-left-10 md:-top-10 md:w-full" />
                {/* Image container */}
                <div className="relative left-[20px] top-[20px] h-[260px] w-full md:left-0 md:top-0 md:h-[400px]">
                  <Image
                    src={baptism}
                    alt="Pastor David baptising a new believer"
                    fill
                    priority
                    className="absolute rounded-[10px] object-cover"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 py-8 md:py-24 md:pt-0">
          <div className="flex flex-col items-center">
            <h2 className="text-[2.1rem] font-bold text-neutral-dark-gray md:text-[3.1rem] lg:text-[4rem]">
              Columbia View Ministries
            </h2>
            <p className="mb-8 text-lg text-[#646263]">
              Check out the different ways to get involved
            </p>
            <div className="grid w-full grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
              <ImageTile
                link="/ministries#sunday-worship"
                image={worship}
                alt="Worship band playing"
                headline="Sunday Worship"
              />
              <ImageTile
                link="/nextgen"
                image={kids}
                alt="kids in sunday school"
                headline="NextGen Ministries"
              />
              <ImageTile
                link="/ministries#life-groups"
                image={lifeGroup}
                alt="Two women smiling at life group"
                headline="Life Groups"
              />
              <ImageTile
                link="/immigrant-connection-pdx"
                image={smilingFamily}
                alt="immigrant man with large hat"
                headline="Immigrant Connection"
              />
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-4 py-8 md:py-16">
          <h2 className="mb-8 text-center text-[1.7rem] font-bold text-[#0E496F] md:text-[2.3rem] lg:text-[2.8rem]">
            Upcoming Events
          </h2>
          <EventGrid limit={3} />
          <div className="mt-8 flex justify-center">
            <Button href="/events" color="blue">
              View All Events
            </Button>
          </div>
        </div>
      </section>

      <section className="rounded-[20px] bg-[rgb(14,73,111)]">
        <div className="container mx-auto px-4 py-8 md:py-24">
          <div className="grid items-center gap-12 sm:grid-cols-2">
            <div>
              <div className="relative w-full pb-[56.25%]">
                {' '}
                {/* 16:9 Aspect Ratio */}
                <Image
                  src={rightnow}
                  alt=""
                  fill
                  className="absolute inset-0 object-contain"
                />
              </div>
            </div>
            <div>
              <h2 className="mb-8 text-[1.7rem] font-bold text-white md:text-[2.3rem] lg:text-[2.8rem]">
                RightNow Media
              </h2>
              <p className="mb-8 text-white">
                RightNow Media is the world’s largest streaming library of video
                Bible study resources and is now available to all Columbia View
                members. RightNow Media is a tool that you can use to help you
                live out your faith in every area of your life.
              </p>
              <Button href="https://app.rightnowmedia.org/join/columbiaviewchurch" color="blue">
                Get Access Today
              </Button>
            </div>
          </div>
        </div>
      </section>

      <section>
        <div className="container mx-auto px-0 py-12 md:px-4 md:py-24">
          <div className="relative flex flex-col items-center overflow-hidden rounded-[20px] md:h-[460px] md:flex-row md:overflow-hidden">
            <div className="absolute flex w-full flex-col">
                <div className="w-full md:w-1/2"></div>
                <div className="w-full md:w-1/2">
                    <div className="relative h-0 w-full pb-[60%] md:h-[460px] md:pb-0">
                         <Image
                            src={immigrantFamily}
                            alt="Immigrant mother and daughter smiling"
                            fill
                            className="absolute inset-0 object-cover rounded-none md:rounded-[10px]"
                        />
                    </div>
                </div>
            </div>

            <div className="relative w-full md:absolute flex">
                <div className="bg-[rgb(14,73,111)] p-8 text-white w-full md:w-7/12 md:rounded-[10px] z-10">
                    <div className="max-w-[500px]">
                        <h2 className="mb-8 text-[1.7rem] font-bold md:text-[2.3rem] lg:text-[2.8rem]">
                            Immigrant Connection PDX
                        </h2>
                        <p className="mb-8">
                            Providing church-based, low-cost immigration legal services
                            in underserved communities of the Portland Metro area and
                            beyond.
                        </p>
                        <Button href="/immigrant-connection-pdx" color="blue">
                            Learn more about our services
                        </Button>
                    </div>
                </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
