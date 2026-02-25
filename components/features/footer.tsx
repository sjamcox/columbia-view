'use client'

import Image from 'next/image'
import Link from 'next/link'
import { MapPin, Phone, Clock } from 'lucide-react'
import logo from '@/public/logos/cvwc-logo-mountains.png'
import facebookIcon from '@/public/logos/facebook.svg'
import youtubeIcon from '@/public/logos/youtube.svg'
import { menu } from '@/helpers/menu'

const quickLinks = [
  { text: 'Plan Your Visit', href: '/plan-your-visit' },
  { text: 'Ministries', href: '/ministries' },
  { text: 'Messages', href: '/messages' },
  { text: 'Events', href: '/events' },
  { text: 'About Us', href: '/about' },
  { text: 'Give', href: 'https://columbiaview.churchcenter.com/giving' },
]

export default function Footer() {
  return (
    <footer className="bg-neutral-dark-gray text-white">
      <div className="container mx-auto px-6 py-14">
        <div className="grid gap-12 sm:grid-cols-2 lg:grid-cols-3">

          {/* Brand Column */}
          <div className="flex flex-col gap-5">
            <Link href="/" className="w-fit">
              <Image
                src={logo}
                alt="Columbia View Church"
                width={64}
                height={64}
                className="brightness-0 invert"
              />
            </Link>
            <p className="max-w-xs text-sm leading-relaxed text-white/70">
              A community rooted in faith, united in love, and sent to serve Portland and beyond.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/COLUMBIAVIEW/"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="Facebook"
              >
                <Image src={facebookIcon} alt="Facebook" width={18} height={18} className="brightness-0 invert" />
              </a>
              <a
                href="https://www.youtube.com/@columbiaview.church"
                target="_blank"
                rel="noopener noreferrer"
                className="flex h-9 w-9 items-center justify-center rounded-full bg-white/10 transition-colors hover:bg-white/20"
                aria-label="YouTube"
              >
                <Image src={youtubeIcon} alt="YouTube" width={18} height={18} className="brightness-0 invert" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Quick Links
            </p>
            <ul className="flex flex-col gap-2">
              {quickLinks.map((link) => (
                <li key={link.text}>
                  <Link
                    href={link.href}
                    className="text-sm text-white/70 transition-colors hover:text-white"
                  >
                    {link.text}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact & Service Info */}
          <div className="flex flex-col gap-4">
            <p className="text-xs font-semibold uppercase tracking-widest text-white/50">
              Visit Us
            </p>
            <ul className="flex flex-col gap-3">
              <li className="flex items-start gap-3 text-sm text-white/70">
                <MapPin className="mt-0.5 h-4 w-4 shrink-0 text-white/40" />
                <span>
                  16700 NE Halsey Street<br />
                  Portland, OR 97230
                </span>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Phone className="h-4 w-4 shrink-0 text-white/40" />
                <a href="tel:5032537939" className="transition-colors hover:text-white">
                  503.253.7939
                </a>
              </li>
              <li className="flex items-center gap-3 text-sm text-white/70">
                <Clock className="h-4 w-4 shrink-0 text-white/40" />
                <span>Sundays at 10:00 am</span>
              </li>
            </ul>
          </div>

        </div>
      </div>

      {/* Bottom Bar */}
      <div className="border-t border-white/10">
        <div className="container mx-auto flex flex-col items-start gap-2 px-6 py-5 sm:flex-row sm:items-center sm:justify-between">
          <p className="text-xs text-white/40">
            © {new Date().getFullYear()} Columbia View Church. All rights reserved.
          </p>
          <Link
            href="/immigrant-connection-pdx"
            className="text-xs text-white/40 transition-colors hover:text-white/70"
          >
            Immigrant Connection PDX
          </Link>
        </div>
      </div>
    </footer>
  )
}
