import type { Metadata } from 'next'
import Image from 'next/image'

import david from '@/public/david-headshot.webp'
import serena from '@/public/serena-headshot.webp'
import nancy from '@/public/nancy-headshot.webp'
import hawi from '@/public/hawi-headshot.webp'

export const metadata: Metadata = {
  title: 'Staff | Immigrant Connection PDX',
}

const staff = [
  {
    name: 'David Rannabargar',
    title: 'Site Director',
    image: david,
    languages: 'English',
    bio: 'Pastor David Rannabargar is married to his wife of 7 years (Tita) and is the proud dad of Kariss (4) and Charlee (2). David accepted the call to be Lead Pastor of Columbia View in 2020 and loves to journey with people in discovering belonging, faith, and formation in Jesus through the local church. In his spare time, he enjoys spending time with his kids building with magnet tiles, drinking really good coffee, going on hikes, and starting remodel projects around his home (sometimes even finishing them!)',
  },
  {
    name: 'Serena Rannabargar',
    title: 'Lead DOJ Accredited Representative',
    image: serena,
    languages: 'English, Spanish',
    bio: 'Serena Rannabargar, also known by friends as Tita, is the proud wife of David Rannabargar and mother of two. She grew up in Honduras, Central America and feels blessed to be able to use the Spanish learned in her childhood to serve immigrant families in both of her roles as a Department of Justice Accredited Representative and Licensed Clinical Social Worker. She serves in the church where needed currently including in the NextGen ministry teaching kids. In spare time, her family adventures in the beautiful outdoors that God has created in the Northwest.',
  },
  {
    name: 'Nancy Bennett',
    title: 'DOJ Accredited Representative',
    image: nancy,
    languages: 'English',
    bio: 'Nancy Bennett is mother to four grown daughters and steward of a small acreage in the beautiful Willamette Valley. With a heart for justice, Nancy has served in multiple roles and ministries that provide resources and care for the vulnerable and the marginalized. She enjoys traveling to out of state family gatherings, being outdoors with her aging flock of Shetland sheep and tending her lavender field.',
  },
  {
    name: 'Hawi Jaldo',
    title: 'Legal Assistant',
    image: hawi,
    languages: 'English, Amharic',
    bio: 'As a coordinator at a non-profit organization that serves refugees and immigrants, Hawi is passionate about using her skillsets to positively impact vulnerable populations in our city. Growing up in a family of three, she learned the value of compassion, kindness, and empathy toward others. Through her work at Immigrant Connection PDX, she blessed to be able to weave together her faith and her love for people, creating a meaningful and fulfilling career. In addition to her dedication to her work, she find joy in the simple pleasures of life such as savoring a warm cup of chai, admiring the breathtaking sunsets, and wandering through fields of fragrant flowers.',
  },
]

export default function StaffPage() {
  return (
    <main className="mx-auto max-w-4xl px-6 py-12">
      <h1 className="font-display mb-16 text-center text-4xl font-bold text-neutral-800 lg:text-5xl">
        Immigrant Connection Staff
      </h1>

      <div className="space-y-16">
        {staff.map((member) => (
          <div
            key={member.name}
            className="flex flex-col items-center gap-8 md:flex-row md:items-start md:gap-12"
          >
            {/* Image Card */}
            <div className="relative shrink-0">
              <div className="relative h-64 w-64 overflow-hidden rounded-2xl shadow-xl md:h-72 md:w-72">
                <Image
                  src={member.image}
                  alt={`Photo of ${member.name}`}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 256px, 288px"
                />
              </div>
              {/* Decorative accent */}
              <div className="absolute -bottom-4 -right-4 -z-10 h-64 w-64 rounded-2xl bg-secondary-aqua/20 md:-bottom-6 md:-right-6 md:h-72 md:w-72" />
            </div>

            {/* Content */}
            <div className="text-center md:text-left">
              <h3 className="font-display mb-2 text-2xl font-bold text-primary-dark-blue">
                {member.name}
              </h3>
              
              <div className="mb-4 space-y-1 text-secondary-aqua">
                <p className="font-bold uppercase tracking-wide text-sm">{member.title}</p>
                <p className="font-medium text-sm">Languages: {member.languages}</p>
              </div>

              <p className="text-base leading-relaxed text-neutral-dark-gray">
                {member.bio}
              </p>
            </div>
          </div>
        ))}
      </div>
    </main>
  )
}
