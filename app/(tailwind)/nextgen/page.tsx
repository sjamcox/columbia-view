import type { Metadata } from 'next'

import Image from 'next/image'

import { ImageSection } from 'components/Section'
import Hero from 'components/Hero'
import immigrantSuccess from 'public/immigrant-success-stories.webp'
import fingerprintIcon from 'public/icons/fingerprint.svg'
import heartIcon from 'public/icons/heart-hand.svg'
import compassIcon from 'public/icons/compass.svg'
import crownIcon from 'public/icons/crown.svg'
import KeywordCard from 'components/KeywordCard'
import AgeCard from './AgeCard'
import Button from 'components/Button'
import CoreTruth from './CoreTruth'

export const metadata: Metadata = {
  title: 'NextGen Ministries | Columbia View Church',
}

export default function NextGen() {
  return (
    <main>
      <Hero
        title="NextGen Ministries"
        subtitle="Partnering with parents to pass on faith to the next generation."
        imageProps={{
          src: immigrantSuccess,
          alt: '',
          color: 'blue',
        }}
        buttonProps={{
          href: '',
          text: 'PRE-REGISTER',
        }}
      />
      <section className="mx-auto w-full max-w-6xl px-6 py-15 lg:py-25">
        <h2 className="font-display from-primary-light-blue to-secondary-aqua mb-15 bg-gradient-to-b bg-clip-text text-center text-4xl/12 text-transparent">
          Sundays are the primary day that Columbia View Kids gather to play,
          learn from Scripture, pray, and be in community. Our classrooms are{' '}
          <span className="font-bold">safe</span>,{' '}
          <span className="font-bold">fun</span>, and{' '}
          <span className="font-bold">Jesus-centered</span> environments.
        </h2>
        <div className="grid grid-cols-3 grid-rows-1 gap-15">
          <KeywordCard
            keyword="Safe"
            text={`We comply with the state of Oregon's safety standards for childcare including cleanliness, as well as, background checks, and proper training for adult volunteers. You can rest assured that your kids are in a safe place each week!`}
            imageProps={{
              src: immigrantSuccess,
              alt: '',
            }}
          />
          <KeywordCard
            keyword="Fun"
            text={`Kids are built for fun and we want to provide an environment where they can be who they were created to be! Each week our schedule is carefully crafted to create an engaging experience of learning that each kid will enjoy and want more of!`}
            imageProps={{
              src: immigrantSuccess,
              alt: '',
            }}
          />
          <KeywordCard
            keyword="All About Jesus"
            text={`Our desire is to point kids to the hope of the world: Jesus. We want every kid to hear about Jesus every week so they can know him by his love, forgiveness, and sacrifice for them. Jesus loves your kids and we want them to know that love!`}
            imageProps={{
              src: immigrantSuccess,
              alt: '',
            }}
          />
        </div>
      </section>
      <section className="from-secondary-green to-primary-light-blue bg-gradient-to-b">
        <div className="mx-auto w-full max-w-6xl px-6 py-15 lg:py-25">
          <h2 className="font-display pb-15 text-center text-7xl/18 font-bold text-white uppercase">
            Age Groups
          </h2>
          <div className="grid grid-cols-3 grid-rows-1 gap-10">
            <AgeCard
              title="Littles"
              ages="3 Months - 2 Years"
              color="aqua"
              description={`At this age, we know your child is all about exploring. They’re constantly moving, touching, and investigating as they learn about the world around them. Our group leaders nurture this curiosity in each child, meeting their needs, praying over them, and getting all the snuggles in.`}
              imageProps={{
                src: immigrantSuccess,
                alt: '',
              }}
            />
            <AgeCard
              title="Mids"
              ages="3 Years - 5 Years"
              color="green"
              description={`During this stage, it’s important for kids to lean into their creativity as they begin to discover how God created them and the world they live in. In the preschool classrooms, our group leaders help cultivate this natural wonder through worship, video-based Bible stories, and hands-on activities.`}
              imageProps={{
                src: immigrantSuccess,
                alt: '',
              }}
            />
            <AgeCard
              title="Bigs"
              ages="6 Years - 12 Years"
              color="red"
              description={`In this age group, kids are focused on harnessing their influence. Our group leaders help develop a passion for loving others and making a difference in the elementary environment. We engage kids through worship, video-based Bible stories, and hands-on critical thinking activities.`}
              imageProps={{
                src: immigrantSuccess,
                alt: '',
              }}
            />
          </div>
        </div>
      </section>
      <section className="mx-auto w-full max-w-6xl px-6 py-15 lg:py-25">
        <div className="grid grid-cols-2 gap-45">
          <div className="flex h-full items-center">
            <div>
              <h2 className="font-display text-primary-dark-blue mb-6 text-5xl font-bold uppercase">
                Check-In Process
              </h2>
              <p className="mb-4 text-base">
                Our child check-in station is in front of our lobby as you first
                enter the building. We require that all kids are registered and
                checked in by a parent or guardian for their safety and
                security. For new or visiting families, to enjoy a smooth
                check-in process, please register in advance.
              </p>
              <p className="mb-8 text-base">
                We offer care for <span className="font-bold">Littles</span> for
                the length of the worship service.{' '}
                <span className="font-bold">Mids</span> and{' '}
                <span className="font-bold">Bigs</span> join the entire church
                for the first two songs of corporate worship before being
                dismissed to their classrooms for the remainder of the worship
                service.
              </p>
              <Button color="blue" href="" arrow>
                Pre-Register
              </Button>
            </div>
          </div>
          <div className="grid grid-cols-6">
            <div className="col-start-3 col-end-7 aspect-4/3 overflow-hidden rounded-2xl shadow-2xl">
              <Image
                src={immigrantSuccess}
                alt=""
                className="h-full object-cover"
              />
            </div>
            <div className="col-start-1 col-end-5 -mt-12 aspect-4/3 overflow-hidden rounded-2xl bg-black shadow-2xl">
              <Image
                src={immigrantSuccess}
                alt=""
                className="h-full object-cover"
              />
            </div>
            <div className="col-start-3 col-end-7 -mt-12 aspect-4/3 overflow-hidden rounded-2xl bg-black shadow-2xl">
              <Image
                src={immigrantSuccess}
                alt=""
                className="h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>
      <ImageSection src={immigrantSuccess} alt="">
        <div className="to-secondary-yellow h-full w-full bg-gradient-to-r from-0%">
          <div className="mx-auto w-full max-w-6xl px-6 py-15 lg:py-30">
            <p className="font-display text-right text-6xl/tight font-semibold text-white">
              biblical teaching,
              <br /> age-appropriate crafts,
              <br /> meaningful relationships
              <br /> & encouraging music
            </p>
          </div>
        </div>
      </ImageSection>
      <section className="mx-auto w-full max-w-6xl px-6 py-15 lg:py-25">
        <div className="mb-20 grid grid-cols-2 gap-45">
          <div className="aspect-5/3 self-center overflow-hidden rounded-2xl shadow-2xl">
            <Image
              src={immigrantSuccess}
              alt=""
              className="h-full object-cover"
            />
          </div>
          <div className="flex h-full items-center">
            <div>
              <h2 className="font-display text-primary-dark-blue mb-6 text-5xl font-bold uppercase">
                Cirriculum
              </h2>
              <p className="mb-4 text-base">
                Our church uses the Wonder Ink curriculum. Each kids' class
                explores the core biblical truths of: God Knows Me, Jesus Loves
                Me, The Holy Spirit Leads Me, and I am a Child of God in
                age-appropriate ways. We'll journey through the story of the
                scriptures every year.
              </p>
              <p className="mb-8 text-base">
                Parents are encouraged to create an online account for ongoing
                access to lesson videos, discussion questions, and more
                discipleship materials to be utilized during the week.
              </p>
              <Button color="blue" href="" arrow>
                Sign Up with Wonder Ink
              </Button>
            </div>
          </div>
        </div>
        <div className="mx-auto grid max-w-3xl grid-cols-9">
          <div className="col-start-1 col-end-5 row-start-1 row-end-2">
            <CoreTruth
              title="Gods Know Me"
              description="God, the Creator of all, knows me. He has always known me. He has had me in mind from the very beginning. He made me, and I am His masterpiece. He made me in His own image to do the amazing things He has prepared for me to do."
              icon={{
                src: fingerprintIcon,
                alt: 'fingerprint icon',
              }}
              scripture={{
                text: 'I am KNOWN by the Creator and that means I BELONG. I get to be part of His family.',
                verse: 'Psalm 139:13-14 NIrV',
              }}
              color="aqua"
            />
          </div>
          <div className="col-start-6 col-end-10 row-start-2 row-end-3">
            <CoreTruth
              title="Jesus Loves Me"
              description="Jesus’ perfect life, death, resurrection, and promised return are God’s love story. Jesus came to fulfill God’s promises to His children. Through Jesus, I have salvation. Jesus loves me no matter what. His love for me has no beginning and no end, and I get to love Him back. Jesus is God’s love in person. God’s love is big and generous, and it is for me! Jesus is the way to God’s love. Choosing to follow Jesus means choosing God’s love and God’s way."
              icon={{
                src: heartIcon,
                alt: 'heart in hand icon',
              }}
              scripture={{
                text: 'I am LOVED by Jesus, and I get to share His LOVE too.',
                verse: 'John 13:34, 35 NIrV',
              }}
              color="green"
            />
          </div>
          <div className="col-start-1 col-end-5 row-start-3 row-end-4">
            <CoreTruth
              title="The Holy Spirit Leads Me"
              description={[
                'God gives me the gift of His Holy Spirit when I choose to live for Jesus. The Holy Spirit invites me to live in God’s Kingdom—now and not yet.',
                'When I accept Jesus as my Savior, I receive the Holy Spirit as a gift, and He lives inside me. When I let the Holy Spirit lead, He strengthens me, and I grow in belief. As I learn that God’s way is the best way, my faith grows too. The Holy Spirit helps me be more like Jesus—the me I was made to be.',
              ]}
              icon={{
                src: compassIcon,
                alt: 'compass icon',
              }}
              scripture={{
                text: 'Because I am LED by the Holy Spirit, I can FOLLOW Him',
                verse: 'Romans 8:14, 15a NIrV',
              }}
              color="yellow"
            />
          </div>
          <div className="col-start-6 col-end-10 row-start-4 row-end-5">
            <CoreTruth
              title="I Am a Child of God"
              description={[
                'God’s amazing story changes my own. Because God knows me, Jesus loves me, and the Holy Spirit leads me, I get to be a wonder-filled reflection of God to the world. I get to know who I truly am and who I was made to be.',
                'The Bible tells me that I am fearfully and wonderfully made, knit together by a loving God who knows all about me and loves every inch of me. He delights in me, and I will celebrate His wonder!',
              ]}
              icon={{
                src: crownIcon,
                alt: 'crown icon',
              }}
              scripture={{
                text: 'I am a WONDER. I get to BE part of God’s story, and my life TELLS of God’s wonder.',
                verse: '1 Peter 2:9 NIrV',
              }}
              color="red"
            />
          </div>
        </div>
      </section>
      <section className="from-secondary-yellow to-secondary-green bg-gradient-to-b">
        <div className="mx-auto flex max-w-6xl flex-col items-center px-6 py-15 lg:py-25">
          <h2 className="font-display pb-4 text-center text-7xl/18 font-bold text-white uppercase">
            Join The Team
          </h2>
          <p className="mb-8 max-w-3xl text-center text-xl/relaxed text-white">
            Each week it takes a team of faithful volunteers to provide a
            high-quality experience for our kids. There are 3 ways you can serve
            on a Sunday morning: as a check-in kiosk helper (once per month), an
            assistant teacher (once per month), or as a teacher (one month, 4
            times per year).
          </p>
          <Button href="">Apply to Serve</Button>
        </div>
      </section>
    </main>
  )
}
