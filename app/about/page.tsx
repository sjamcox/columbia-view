import type { Metadata } from 'next'
import Image from 'next/image'

import Hero from '@/components/Hero'
import { ContentSection, GradientSection } from '@/components/ui/section'
import Button from '@/components/ui/button'
import FadeIn from '@/components/ui/fade-in'

import churchOuting from '@/public/community/church-outing.jpg'
import david from '@/public/david-church-headshot.webp'
import serena from '@/public/serena-church-headshot.webp'
import hawi from '@/public/hawi-church-headshot.webp'
import jacob from '@/public/jacob-church-headshot.webp'
import johan from '@/public/staff/johan-noya-headshot.jpeg'
import russelle from '@/public/staff/russelle-brandom-headshot.jpeg'

export const metadata: Metadata = {
  title: 'About | Columbia View Church',
  description:
    'Learn about our vision, mission, beliefs, and meet the staff at Columbia View Church. We invite you to belong, believe, and become.',
  alternates: {
    canonical: '/about',
  },
}

const staff = [
  {
    name: 'David Rannabargar',
    title: 'Lead Pastor & ICPDX Director',
    image: david,
    bio: "As a young dad of three\u2014Kariss (7), Charlee (4), and Korban (2)\u2014David knows the beautiful chaos of raising a family while working full time as both Lead Pastor of Columbia View and Site Director for Immigrant Connection PDX. He\u2019s been married to his wife, Serena (\u201cTita\u201d), for 9 years, and treasures the joys and challenges of this season of life. David accepted the call to become lead pastor of Columbia View Church in 2020 and his heartbeat from the beginning has been helping people cultivate community, faith, and apprenticeship to Jesus through the local church. When he\u2019s not in the middle of ministry or parenting, you\u2019ll find David building magnet tile towers with his kids, running through the neighborhood with a podcast in his ears, savoring a great cup of coffee with friends, hiking Portland\u2019s trails, or tackling another home remodel project (with mixed results on completion!).",
  },
  {
    name: 'Serena Rannabargar',
    title: 'Missions & Spiritual Formation',
    image: serena,
    bio: "As a mom of three young kids\u2014Kariss (7), Charlee (4), and Korban (2)\u2014Serena knows life is full of giggles, meltdowns, and everything in between. She\u2019s been married to David for 9 years and loves adventuring outdoors and staying active as a way to keep up with her busy family. Serena grew up in Honduras as a missionary kid, which gave her a heart for people from all walks of life. In 2020, she founded Columbia View\u2019s Immigrant Connection ministry and continues to welcome immigrants in Jesus\u2019 name as a lead DOJ Accredited Representative and provides spiritual leadership to the women\u2019s ministry in the church. Whether she\u2019s serving at church, working with immigrants, supporting clients in the mental health field, or hiking with her family, Serena\u2019s joy is helping others know they are seen, loved, and valued by Jesus.",
  },
  {
    name: 'Hawi Jaldo',
    title: 'Love INC EMC Board Member',
    image: hawi,
    bio: "As a young professional working on her master\u2019s in public health, Hawi Jaldo loves people and has a big heart for helping others feel seen, valued, and cared for. Growing up in an immigrant family of four shaped her with compassion, kindness, and empathy\u2014qualities that continue to guide the way she serves today. Hawi represents our church as a board member with Love INC of East Multnomah County and also serves as a legal assistant with Immigrant Connection PDX. She feels grateful to live out her faith by walking alongside people, meeting practical needs, and helping neighbors experience the love of Jesus in tangible ways. Outside of her work and ministry, Hawi enjoys life\u2019s simple pleasures\u2014sipping a warm cup of chai, watching a gorgeous sunset, or wandering through fields of flowers.",
  },
  {
    name: 'Jacob Ioanas-Small',
    title: 'Multimedia',
    image: jacob,
    bio: "As a young dad of twin girls working full-time with the Multnomah County Sheriff\u2019s Office, Jacob knows what it means to juggle family life, work, and ministry. He and his wife, Cosmina, have been married for 2 years and are learning the joyful (and coffee-fueled) rhythm of raising twins. At Columbia View, Jacob serves on the worship and multimedia team, where he loves helping create spaces for people to connect with Jesus through music and technology. Whether it\u2019s dialing in Sunday morning sound or quietly serving behind the scenes, Jacob brings a servant\u2019s heart and steady joy to the life of our church. In his free time, you\u2019ll probably find Jacob at a food cart, by the river, on a scenic drive, or cracking jokes with friends.",
  },
  {
    name: 'Johan Noya',
    title: 'Worship Leader',
    image: johan,
    bio: 'As a husband to Dani and dad to their 5-year-old daughter, Johan knows the joy and busyness of family life. His story began in Indonesia, and when his family moved to the U.S. during his childhood, he experienced firsthand what it means to adapt, belong, and grow in a new culture. At Columbia View, Johan serves as our main worship leader. His passion is helping people grow in their worship to Jesus\u2014not just through singing on Sundays, but in learning to live with hearts and lives centered on God every day. He loves developing others and creating spaces where people of all backgrounds can encounter the presence of God together.',
  },
  {
    name: 'Russelle Brandom',
    title: 'Kids Ministry',
    image: russelle,
    bio: 'As a proud mom of both biological and adopted kids, and wife to her husband Ken of 30 years, Russelle knows what it means to juggle family, work, and faith. Growing up as a military kid, she learned early on the value of adaptability, resilience, and community\u2014qualities she carries into her life and ministry today. At Columbia View, Russelle serves as our Kids Director. Her heart is to help children know that they are deeply loved by Jesus and to support parents as they raise the next generation in faith. Outside of church, Russelle and Ken run their own small business and still somehow find time to care for their neighbors and community.',
  },
]

const additionalStaff: { name: string; title: string; bio?: string }[] = [
  {
    name: 'Ken Brandom',
    title: 'Teaching Team',
  },
]

const icpdxStaff = [
  { name: 'David Rannabargar', title: 'Site Director' },
  { name: 'Serena Rannabargar', title: 'DOJ Accredited Representative' },
  { name: 'Nancy Bennett', title: 'DOJ Accredited Representative' },
  { name: 'Karla Hernandez', title: 'Legal Assistant' },
  { name: 'Bahnafsha Sherzai', title: 'Legal Assistant' },
  { name: 'Jacqueline Carrillo', title: 'Legal Assistant' },
]

const guestContributors: { name: string; title: string; bio?: string }[] = [
  { name: 'Cherica & Luke', title: 'Worship' },
  {
    name: 'Nathaniel Rodriguez',
    title: 'Worship & Teaching',
    bio: "Nathaniel serves as a guest worship leader and teacher. He believes the most important instrument on Sunday is the voice of the congregation and loves to see God\u2019s Word seep deep into our bones.",
  },
  { name: 'Dave Martin', title: 'Teaching & Discipleship' },
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
            &ldquo;Inviting our community to belong to Jesus, believe in Jesus, and
            become like Jesus.&rdquo;
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
                  We honor everyone&apos;s journey of faith and encourage people to
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
                be holy in character and conduct through the Lord&apos;s Spirit.
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
              <h3 className="mb-2 text-xl font-bold">God&apos;s Will</h3>
              <p className="opacity-90">
                We believe God wills for people everywhere to know him and be
                made new in Christ.
              </p>
            </div>
          </div>

          <div className="mt-10 text-center">
            <p className="mb-6 text-xl text-white">
              The &ldquo;Soul of the Church&rdquo;
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
              {additionalStaff.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <h4 className="mb-2 text-lg font-bold text-primary-dark-blue">
                    {member.name}
                  </h4>
                  <p className="mb-3 text-sm font-semibold uppercase text-primary-light-blue">
                    {member.title}
                  </p>
                  {member.bio && (
                    <p className="text-sm/relaxed text-neutral-dark-gray">
                      {member.bio}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="font-display mb-10 text-center text-3xl font-bold text-primary-dark-blue">
              Guest Ministry Contributors
            </h3>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {guestContributors.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm"
                >
                  <h4 className="mb-2 text-lg font-bold text-primary-dark-blue">
                    {member.name}
                  </h4>
                  <p className="mb-3 text-sm font-semibold uppercase text-primary-light-blue">
                    {member.title}
                  </p>
                  {member.bio && (
                    <p className="text-sm/relaxed text-neutral-dark-gray">
                      {member.bio}
                    </p>
                  )}
                </div>
              ))}
            </div>
          </div>

          <div className="mt-20">
            <h3 className="font-display mb-4 text-center text-3xl font-bold text-primary-dark-blue">
              Immigrant Connection PDX
            </h3>
            <p className="mb-10 text-center text-neutral-dark-gray">
              Our immigration legal services team serving immigrants and refugees in the Rockwood community.
            </p>
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {icpdxStaff.map((member) => (
                <div
                  key={member.name}
                  className="rounded-xl border border-gray-100 bg-white p-6 shadow-sm text-center"
                >
                  <h4 className="mb-2 text-lg font-bold text-primary-dark-blue">
                    {member.name}
                  </h4>
                  <p className="text-sm font-semibold uppercase text-primary-light-blue">
                    {member.title}
                  </p>
                </div>
              ))}
            </div>
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
