import type { Metadata } from 'next'
import Image from 'next/image'

import Hero from '@/components/Hero'
import { ContentSection, GradientSection } from '@/components/ui/section'
import Button from '@/components/ui/button'
import FadeIn from '@/components/ui/fade-in'

import staffMeeting from '@/public/icpdx/staff/icpdx-staff-hero.jpeg'
import david from '@/public/icpdx/staff/david-rannabargar-headshot.jpg'
import serena from '@/public/icpdx/staff/serena-rannabargar-headshot.jpg'
import nancy from '@/public/icpdx/staff/nancy-bennett-headshot.png'
import karla from '@/public/icpdx/staff/karla-hernandez-headshot.jpg'
import bahnafsha from '@/public/icpdx/staff/bahnafsha-sherzai-headshot.jpg'
import jacqueline from '@/public/icpdx/staff/jacqueline-carrillo-headshot.png'

export const metadata: Metadata = {
  title: 'Staff | Immigrant Connection PDX',
  alternates: {
    canonical: '/immigrant-connection-pdx/staff',
  },
}

const staff = [
  {
    name: 'David Rannabargar',
    title: 'Site Director',
    image: david,
    languages: 'English',
    bio: [
      "David (M.Div) has provided vision and leadership for the ICPDX team and served as Columbia View Church's senior pastor since 2020. His passion is to see immigrants and refugees find belonging, hope, and opportunity as they navigate life in the U.S.",
      "David's service comes from his belief that the gospel compels the church to love its neighbors in tangible, practical ways — including walking alongside immigrant families through the maze with moving walls that is the immigration legal system.",
      "Serving in one of Oregon's most diverse neighborhoods, David has seen firsthand the beauty of cultures coming together. His pastoral experience, paired with years of building relationships across cultural lines, fuels his desire to create a ministry where everyone feels welcomed and valued.",
    ],
  },
  {
    name: 'Serena Rannabargar',
    title: 'DOJ Accredited Representative',
    image: serena,
    languages: 'English, Spanish',
    bio: [
      "Serena (MSW, LCSW) founded Immigrant Connection PDX in 2020 and now serves as the lead DOJ Accredited Representative on the legal team, walking with immigrant clients through their legal cases and helping them take important steps toward stability and security in the U.S. Her passion is to show God's love in practical ways by offering dignity, compassion, and trustworthy support.",
      "Her service is deeply personal — growing up as a missionary kid in Honduras, she gained a love for people from all nations and a deep understanding of what it means to navigate life in a culture that's not your own.",
      "Today, Serena combines her immigration accreditation with her training as a Licensed Clinical Social Worker, bringing both professional skill and cross-cultural care to her role. She continues to serve with a deep passion for welcoming the stranger in Jesus' name.",
    ],
  },
  {
    name: 'Nancy Bennett',
    title: 'DOJ Accredited Representative',
    image: nancy,
    languages: 'English',
    bio: [
      'As a DOJ Accredited Representative since 2023, Nancy walks alongside immigrant clients through their legal cases, helping them take meaningful steps toward stability, security, and opportunity in the U.S. Her heartbeat is to advocate for justice and offer compassionate, trustworthy support to those navigating complex systems.',
      'Her "why" comes from a lifelong commitment to serving vulnerable and marginalized populations. Nancy has spent years in ministries and roles dedicated to providing resources, care, and guidance to people in need, reflecting her belief that everyone deserves dignity and a voice.',
      "Nancy brings a grounded, cross-cultural perspective to her work, shaped by her life in the Willamette Valley, raising four grown daughters, stewarding her small acreage, caring for her flock of Shetland sheep, and tending her lavender field. She also enjoys traveling to visit family across the country, connecting with people and communities along the way.",
    ],
  },
  {
    name: 'Karla Hernandez',
    title: 'Legal Assistant',
    image: karla,
    languages: 'English, Spanish',
    bio: [
      'As a Legal Assistant with Immigrant Connection PDX since 2024, Karla supports clients by helping prepare cases, organizing documents, and walking alongside families navigating the immigration process. Her passion is to serve others with compassion and dignity, offering practical help that points people toward hope and belonging.',
      'Her "why" comes from her own story. Born in Mexico and raised in Portland, Karla has deep roots in the community and a firsthand understanding of the immigrant experience. She believes in the richness of diversity, the importance of breaking out of echo chambers, and the power of being a voice for those who feel silenced.',
      "Karla's background integrates years of medical field experience with ministry leadership, equipping her to care for people in both practical and spiritual ways. She joined the team in 2024 after volunteering with ICPDX and quickly became a vital part of the mission, bringing a servant's heart and a Christ-centered identity to all she does.",
    ],
  },
  {
    name: 'Bahnafsha Sherzai',
    title: 'Legal Assistant',
    image: bahnafsha,
    languages: 'English, Dari',
    bio: [
      'Bahnafsha (BA, MA Criminal Justice) joined the ICPDX team in 2025 and has a deep passion for helping all immigrants as they navigate life in the U.S., with special experience working alongside Afghan families. She is committed to supporting newcomers as they seek stability, safety, and opportunity while preserving dignity and cultural identity.',
      'Her "why" comes from her own story. Arriving in the U.S. as a refugee herself, Bahnafsha understands the challenges of displacement, culture shock, and starting over in a new country. That journey fuels her commitment to walk beside others facing similar struggles.',
      'Today, Bahnafsha brings together her education, lived experience, and cross-cultural perspective to empower immigrants in understanding the U.S. system, integrating with confidence, and building stronger futures. Her vision is to see welcoming, inclusive communities where every immigrant feels respected, supported, and at home.',
    ],
  },
  {
    name: 'Jacqueline Carrillo',
    title: 'Legal Assistant',
    image: jacqueline,
    languages: 'English, Spanish',
    bio: [
      "Jacqueline (BA, Political Science) graduated from the University of Oregon's Robert D. Clark Honors College in 2023, where she studied political science and sociology to better understand the systems shaping people's lives. She joined Immigrant Connection PDX in the summer of 2025, bringing with her both academic insight and personal experience, and she's passionate about using both to serve the immigrant community with compassion and hope.",
      'Her "why" is rooted in her story. The daughter of first-generation immigrants, Jacqueline grew up surrounded by a vibrant and diverse community. From a young age, she loved learning about different cultures, traditions, and foods — and came to see the beauty of loving and supporting your neighbors, no matter where they come from.',
      "Her family's journey showed her that faith, perseverance, and empathy can carry you through even the hardest challenges when building a life in a new country.",
    ],
  },
]

export default function StaffPage() {
  return (
    <main>
      <Hero
        title="Our Team"
        subtitle="Compassionate advocates walking alongside immigrants and refugees"
        imageProps={{
          src: staffMeeting,
          alt: 'Immigrant Connection PDX staff meeting',
          color: 'blue',
        }}
      />

      <ContentSection>
        <div className="mx-auto max-w-6xl">
          <div className="grid gap-10 md:grid-cols-2 lg:gap-15">
            {staff.map((member, i) => (
              <FadeIn key={member.name} delay={i * 0.05}>
                <div className="overflow-hidden rounded-2xl bg-white shadow-lg">
                  <div className="flex flex-col sm:flex-row">
                    <div className="relative aspect-square w-full shrink-0 sm:aspect-3/4 sm:w-2/5">
                      <Image
                        src={member.image}
                        alt={`Photo of ${member.name}`}
                        fill
                        className="object-cover object-top"
                        sizes="(max-width: 640px) 100vw, 240px"
                      />
                    </div>
                    <div className="flex flex-col justify-center p-6 pb-3 sm:w-3/5 sm:pb-6">
                      <h3 className="font-display mb-1 text-2xl font-bold text-primary-dark-blue">
                        {member.name}
                      </h3>
                      <p className="mb-2 text-sm font-bold uppercase tracking-wide text-secondary-aqua">
                        {member.title}
                      </p>
                      <p className="font-display text-sm text-neutral-dark-gray">
                        {member.languages}
                      </p>
                    </div>
                  </div>
                  <div className="space-y-3 bg-gray-50 p-6 pt-3 sm:pt-6">
                    {member.bio.map((paragraph, j) => (
                      <p key={j} className="text-base leading-loose text-neutral-dark-gray">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </ContentSection>

      <GradientSection color="blue-aqua">
        <div className="flex flex-col items-center text-center">
          <h2 className="font-display mb-4 text-3xl font-bold text-white lg:text-4xl">
            Ready to Get Started?
          </h2>
          <p className="mb-8 max-w-2xl text-lg text-white/90">
            Our team is here to walk with you. Schedule an initial consultation
            and take the next step toward stability and security.
          </p>
          <Button
            href="https://immigrantconnectionpdx.as.me/?appointmentType=category:1.%20Initial%20Consultation%20%2F%20%20Consulta%20Inicial"
            color="light"
            arrow
          >
            Schedule a Consultation
          </Button>
        </div>
      </GradientSection>
    </main>
  )
}
