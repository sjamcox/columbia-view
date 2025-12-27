import type { Metadata } from 'next'
import Image from 'next/image'

import Hero from '@/components/Hero'
import { ContentSection, GradientSection } from '@/components/ui/section'
import Button from '@/components/ui/button'
import FadeIn from '@/components/ui/fade-in'

import churchOuting from '@/public/community/church-outing.jpg'
import david from '@/public/david-church-headshot.webp'
import serena from '@/public/serena-church-headshot.webp'
import nathaniel from '@/public/nathaniel-church-headshot.webp'
import hawi from '@/public/hawi-church-headshot.webp'
import jacob from '@/public/jacob-church-headshot.webp'
import jose from '@/public/jose-church-headshot.webp'

export const metadata: Metadata = {
  title: 'About | Columbia View Church',
  description:
    'Learn about our vision, mission, beliefs, and meet the staff at Columbia View Church. We invite you to belong, believe, and become.',
}

const staff = [
  {
    name: 'David Rannabargar',
    title: 'Lead Pastor',
    image: david,
    bio: 'Pastor David Rannabargar is married to his wife of 7 years (Tita) and is the proud dad of Kariss (4) and Charlee (2). David accepted the call to be Lead Pastor of Columbia View in 2020 and loves to journey with people in discovering belonging, faith, and formation in Jesus through the local church. In his spare time, he enjoys being with his kids building with magnet tiles, drinking really good coffee, going on hikes, and starting remodel projects around his home (sometimes even finishing them!)',
  },
  {
    name: 'Serena Rannabargar',
    title: 'Nursery and Missions Director',
    image: serena,
    bio: 'Serena, also known by friends as Tita, is the proud wife of David and mother of Kariss and Charlee. She grew up in Honduras (Central America) as a missionary kid and started following Jesus at a young age. She loves working with kids, helping them learn about Jesus and how to love one another. Her experience following Jesus internationally has added a ton of value to our church as we are located in one of the most diverse neighborhoods in Oregon (Rockwood.) As a follower of Jesus with an LCSW, she is grateful to steward her training in the mental health world as she helps others discover God’s incredible love for them. In her spare time, she and her family loves to adventure outdoors in the beautiful PNW!',
  },
  {
    name: 'Nathaniel Rodrigues',
    title: 'Worship Leader',
    image: nathaniel,
    bio: 'Nathaniel loves the ability for the body of Christ to worship with homogeneity of purpose and heterogeneity of expression. You may find him backpacking in the wilderness, composing music, or trying (and so far, failing) to make tepache. He loves living in Oregon City with his wife, recognizing that they are both subservient to their cats Rimsky and Bizet.',
  },
  {
    name: 'Hawi Jaldo',
    title: 'Outreach Coordinator',
    image: hawi,
    bio: "Hawi is committed to using her skillsets to positively impact vulnerable populations in our city. Growing up in a family of four, she learned the value of compassion, kindness, and empathy toward others. She serves as our church's Love INC. East Multnomah County board member. She also serves as a legal assistant for Immigrant Connection PDX, where she is blessed to weave together her faith and love for people, creating a meaningful and fulfilling career. In addition to her dedication to her work, she finds joy in the simple pleasures of life such as savoring a warm cup of chai, admiring the breathtaking sunsets, and wandering through fields of fragrant flowers.",
  },
  {
    name: 'Jacob Small',
    title: 'Worship Multimedia',
    image: jacob,
    bio: "Jacob Small is a faithful servant leader of Columbia view church. His service ranges from cleaning the gutters to dialing-in the Sunday morning worship experience. He is currently pursuing a christ-filled relationship with his girlfriend and loves bringing it up in conversation every 5 seconds. He currently works at a recreational van company, but is exploring career paths. One of Jacob's passions is to learn more about people's stories of God, philosophy, and everything in between. It should be noted, he can't help cracking a joke here and there. You will probably catch him at a food cart, ice cream shop, the river, or a scenic road driving leisurely.",
  },
  {
    name: 'Jose Mendoza',
    title: 'Facilities',
    image: jose,
    bio: 'Jose came to the states with his family from Mexico when he was four. He came to know Jesus in his early twenties and has a passion to be a good steward of the building and property that God has provided us. Jose is an avid gardener, growing several hundred of pounds of produce each year, sharing most of it with others. He also enjoys hiking, trips to the river, and spending time with his grown children.',
  },
]

const volunteeringStaff = [
  { name: 'Russelle Brandom', title: 'Kids Director' },
  { name: 'Johan Noya', title: 'Worship Leader' },
  { name: 'Linda Corrigan', title: 'Hospitality' },
]

export default function About() {
  return (
    <main>
      <Hero
        title="About Us"
        subtitle="Simplicity, Authenticity, and Community"
        imageProps={{
          src: churchOuting,
          alt: 'Columbia View community gathering',
          color: 'blue',
        }}
      />

      {/* Vision & Mission */}
      <ContentSection>
        <div className="mx-auto max-w-4xl text-center">
          <h2 className="font-display mb-10 text-4xl font-bold text-primary-dark-blue lg:text-5xl">
            Our Vision
          </h2>
          <p className="mb-15 text-2xl font-light italic text-neutral-dark-gray">
            "Inviting our community to belong to Jesus, believe in Jesus, and
            become like Jesus."
          </p>

          <div className="grid gap-10 md:grid-cols-3">
            <FadeIn delay={0.1} className="h-full">
              <div className="h-full rounded-2xl bg-primary-light-blue/10 p-8">
                <h3 className="font-display mb-4 text-2xl font-bold text-primary-dark-blue">
                  Belong
                </h3>
                <p className="text-base/relaxed text-neutral-dark-gray">
                  We seek to become the kind of faith community that welcomes
                  people in whatever age and stage of life they are in to
                  explore faith in the context of safe and loving community.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.2} className="h-full">
              <div className="h-full rounded-2xl bg-secondary-aqua/10 p-8">
                <h3 className="font-display mb-4 text-2xl font-bold text-primary-dark-blue">
                  Believe
                </h3>
                <p className="text-base/relaxed text-neutral-dark-gray">
                  We honor everyone's journey of faith and encourage people to
                  believe in Jesus as their Lord and savior, becoming his
                  apprentice.
                </p>
              </div>
            </FadeIn>
            <FadeIn delay={0.3} className="h-full">
              <div className="h-full rounded-2xl bg-secondary-yellow/10 p-8">
                <h3 className="font-display mb-4 text-2xl font-bold text-primary-dark-blue">
                  Become
                </h3>
                <p className="text-base/relaxed text-neutral-dark-gray">
                  We offer various opportunities for people to grow in their
                  faith and apprenticeship to Jesus, remade as humans through
                  His teachings.
                </p>
              </div>
            </FadeIn>
          </div>
        </div>

        <div className="mx-auto mt-20 max-w-4xl text-center">
          <h2 className="font-display mb-6 text-4xl font-bold text-primary-dark-blue lg:text-5xl">
            Our Mission
          </h2>
          <p className="text-xl/relaxed text-neutral-dark-gray">
            Advancing the great commission, in the spirit of the great
            commandment, for the flourishing of the whole community. All are
            welcome to discover the God who made them, died for them, and who
            wants an ongoing, transformative, hope-giving relationship with
            them.
          </p>
        </div>
      </ContentSection>

      {/* Beliefs */}
      <GradientSection color="blue-aqua">
        <div className="mx-auto max-w-4xl">
          <h2 className="font-display mb-10 text-center text-4xl font-bold text-white lg:text-5xl">
            Beliefs & Core Values
          </h2>

          <div className="grid gap-6 text-white md:grid-cols-2">
            <div className="rounded-xl bg-white/20 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-xl font-bold">One God</h3>
              <p className="opacity-90">
                We believe in one God, who is Father, Son, and Holy Spirit, and
                the Savior of all who put their faith in Him alone for eternal
                life.
              </p>
            </div>
            <div className="rounded-xl bg-white/20 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-xl font-bold">New Life</h3>
              <p className="opacity-90">
                We believe that those who are made new in Christ are called to
                be holy in character and conduct through the Lord’s Spirit.
              </p>
            </div>
            <div className="rounded-xl bg-white/20 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-xl font-bold">The Bible</h3>
              <p className="opacity-90">
                We believe in the Bible and its sufficiency to establish our
                faith and conduct.
              </p>
            </div>
            <div className="rounded-xl bg-white/20 p-6 backdrop-blur-sm">
              <h3 className="mb-2 text-xl font-bold">God's Will</h3>
              <p className="opacity-90">
                We believe God wills for people everywhere to know him and be
                made new in Christ.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="mb-6 text-xl text-white">
              The "Soul of the Church"
            </p>
            <div className="flex flex-wrap justify-center gap-4">
              {[
                'Biblical Authority',
                'Christlikeness',
                'Disciple Making',
                'Local Church-Centered',
                'Servant Leadership',
              ].map((val) => (
                <span
                  key={val}
                  className="rounded-full bg-white px-4 py-2 font-semibold text-primary-light-blue"
                >
                  {val}
                </span>
              ))}
            </div>
            <p className="mt-10 text-white/90">
              For a comprehensive overview of Wesleyan beliefs, please visit{' '}
              <a
                href="https://www.wesleyan.org/about/articles-of-religion"
                className="font-bold underline hover:opacity-80"
                target="_blank"
                rel="noopener noreferrer"
              >
                wesleyan.org
              </a>
            </p>
          </div>
        </div>
      </GradientSection>

      {/* Staff */}
      <ContentSection>
        <div className="mx-auto max-w-6xl">
          <h2 className="font-display mb-15 text-center text-4xl font-bold text-primary-dark-blue lg:text-5xl">
            Meet Our Staff
          </h2>

          <div className="grid gap-10 md:grid-cols-2 lg:gap-15">
            {staff.map((member) => (
              <div
                key={member.name}
                className="overflow-hidden rounded-2xl bg-white shadow-lg"
              >
                <div className="flex flex-col sm:flex-row">
                  <div className="relative aspect-4/3 w-full shrink-0 sm:aspect-3/4 sm:w-1/2">
                    <Image
                      src={member.image}
                      alt={`Photo of ${member.name}`}
                      fill
                      className="object-cover"
                      sizes="(max-width: 640px) 100vw, 300px"
                    />
                  </div>
                  <div className="flex flex-col justify-center p-6 sm:w-1/2">
                    <h3 className="font-display mb-1 text-2xl font-bold text-primary-dark-blue">
                      {member.name}
                    </h3>
                    <p className="mb-4 text-sm font-bold uppercase tracking-wide text-primary-light-blue">
                      {member.title}
                    </p>
                  </div>
                </div>
                <div className="bg-gray-50 p-6">
                  <p className="text-base/relaxed text-neutral-dark-gray">
                    {member.bio}
                  </p>
                </div>
              </div>
            ))}
          </div>

          <div className="mt-20">
            <h3 className="font-display mb-10 text-center text-3xl font-bold text-primary-dark-blue">
              Additional Team Members
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {volunteeringStaff.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm text-center"
                >
                  <h4 className="mb-2 text-lg font-bold text-primary-dark-blue">
                    {member.name}
                  </h4>
                  <p className="text-sm font-semibold text-primary-light-blue uppercase">
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20 text-center">
            <p className="mb-4 text-xl text-neutral-dark-gray">
              Want to get in touch?
            </p>
            <a
              href="mailto:office.cvwc@gmail.com"
              className="text-2xl font-bold text-primary-light-blue underline hover:opacity-80"
            >
              office.cvwc@gmail.com
            </a>
          </div>
        </div>
      </ContentSection>

      {/* Annual Report CTA */}
      <GradientSection color="dark-blue">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display mb-6 text-3xl font-bold text-white lg:text-4xl">
            Annual Report
          </h2>
          <p className="mb-8 max-w-2xl text-lg text-white/90">
            View our comprehensive report highlighting how God moved through
            Columbia View Church this past year.
          </p>
          <Button
            href="https://www.canva.com/design/DAGnS8q59gI/qEwRiwwmrIOCGrXMuELH7w/view"
            color="light"
            arrow
          >
            View 2025 Annual Report
          </Button>
        </div>
      </GradientSection>
    </main>
  )
}
