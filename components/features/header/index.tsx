'use client'

import { useState } from 'react'
import Image from 'next/image'
import Link from 'next/link'
import { Menu } from 'lucide-react'
import facebookIcon from '@/public/logos/facebook.svg'
import youtubeIcon from '@/public/logos/youtube.svg'
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from '@/components/ui/dropdown-menu'
import { NavDrawer } from './nav-drawer'
import { menu } from '@/helpers/menu'
import logo from '@/public/logos/cvwc-logo-mountains.png'

type NavLinkProps = {
  href: string
  text: string
}

function NavLink({ href, text }: NavLinkProps) {
  return (
    <Link href={href} className="mx-3 py-2 no-underline">
      <span className="text-base font-semibold text-[#333333] hover:text-primary-dark-blue">
        {text}
      </span>
    </Link>
  )
}

type NavParentProps = {
  text: string
  children: React.ReactNode
}

function NavParent({ text, children }: NavParentProps) {
  return (
    <DropdownMenu>
      <DropdownMenuTrigger className="mx-3 py-2 text-base font-semibold text-[#333333] hover:text-primary-dark-blue focus:outline-none">
        {text}
      </DropdownMenuTrigger>
      <DropdownMenuContent>
        {children}
      </DropdownMenuContent>
    </DropdownMenu>
  )
}

export default function Header() {
  const [open, setOpen] = useState(false)

  return (
    <>
      <NavDrawer menu={menu} open={open} setOpen={setOpen} />
      <div className="flex h-[90px] w-full items-center px-[4vw]">
        {/* Logo Section */}
        <div className="flex w-1/2 justify-start sm:w-1/12">
          <Link href="/">
            <div className="mb-[-4px] flex">
              <div>
                <Image
                  src={logo}
                  alt="Columbia View logo"
                  width={70}
                  height={70}
                  priority
                />
              </div>
            </div>
          </Link>
        </div>

        {/* Desktop Navigation */}
        <div className="hidden flex-1 justify-center md:flex">
          <div className="flex">
            {menu.map((item) => {
              if (item.subnav) {
                return (
                  <NavParent key={item.text} text={item.text}>
                    {item.subnav.map((subItem) => (
                      <Link key={subItem.text} href={subItem.href} passHref legacyBehavior>
                        <DropdownMenuItem className="cursor-pointer font-semibold text-[#333333]">
                           {subItem.text}
                        </DropdownMenuItem>
                      </Link>
                    ))}
                  </NavParent>
                )
              }
              return (
                <NavLink
                  key={item.text}
                  href={item.href || '#'}
                  text={item.text}
                />
              )
            })}
          </div>
        </div>

        {/* Mobile Menu Icon */}
        <div className="flex w-1/2 justify-end md:hidden">
          <button
            className="p-0 text-[#333333]"
            onClick={() => setOpen(true)}
          >
            <Menu className="h-6 w-6" />
          </button>
        </div>

        {/* Social Icons (Desktop) */}
        <div className="hidden sm:w-1/12 md:flex justify-end">
          <div className="flex space-x-2">
            <a
              href="https://www.facebook.com/COLUMBIAVIEW/"
              className="p-0 transition-opacity hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={facebookIcon}
                alt="Facebook"
                width={24}
                height={24}
              />
            </a>
            <a
              href="https://www.youtube.com/@columbiaview.church"
              className="p-0 transition-opacity hover:opacity-80"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Image
                src={youtubeIcon}
                alt="YouTube"
                width={24}
                height={24}
              />
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
