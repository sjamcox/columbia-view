'use client'

import { useState } from 'react'
import Link from 'next/link'
import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet'
import {
  Collapsible,
  CollapsibleContent,
  CollapsibleTrigger,
} from '@/components/ui/collapsible'
import type { MenuItem } from '@/helpers/menu'

interface NavDrawerProps {
  menu: MenuItem[]
  open: boolean
  setOpen: (open: boolean) => void
}

export const NavDrawer = ({ menu, open, setOpen }: NavDrawerProps) => {
  const [navState, setNavState] = useState<Record<string, boolean>>({})

  const toggleIn = (name: string) => {
    setNavState((prevState) => ({ ...prevState, [name]: !navState[name] }))
  }

  return (
    <Sheet open={open} onOpenChange={setOpen}>
      <SheetContent side="right" className="w-full sm:w-[400px] p-0">
        <SheetHeader className="p-4 text-left">
           <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
        </SheetHeader>
        <div className="flex flex-col gap-4 px-6 py-4">
          <div className="flex justify-end">
             {/* Close button is built-in to SheetContent but we can also use setOpen(false) if we customized the header more. 
                 Shadcn SheetContent includes a Close primitive. 
                 However, to match the original layout exactly, let's keep the structure simple. 
                 The default SheetContent has a close button. I can hide it or use it. 
                 The original had a custom Toolbar with a Close button. 
                 I will rely on the default Close button of SheetContent unless I need to position it differently.
                 Actually, looking at the original execution, it had a Toolbar with margin top. 
                 I'll trust the default Sheet close button is sufficient or I can customize. 
                 But wait, the original had a specific layout. 
                 Let's stick to a clean list. */}
          </div>
          {menu.map((link: MenuItem) => {
            if (link.subnav) {
              return (
                <div key={link.text}>
                  <Collapsible
                    open={navState[link.text]}
                    onOpenChange={() => toggleIn(link.text)}
                  >
                    <CollapsibleTrigger asChild>
                      <button className="w-full text-left py-2 text-lg font-semibold text-[#333333] hover:bg-transparent">
                        {link.text}
                      </button>
                    </CollapsibleTrigger>
                    <CollapsibleContent>
                      <div className="flex flex-col gap-2 pl-4 py-2">
                        {link.subnav && link.subnav.map((item) => (
                          <Link
                            key={item.text}
                            href={item.href}
                            className="text-base font-medium text-[#444444] no-underline"
                            onClick={() => setOpen(false)}
                          >
                            {item.text}
                          </Link>
                        ))}
                      </div>
                    </CollapsibleContent>
                  </Collapsible>
                </div>
              )
            }

            return (
              <div key={link.text}>
                <Link
                  href={link.href || '#'}
                  className="block py-2 text-lg font-semibold text-[#333333] no-underline"
                  onClick={() => setOpen(false)}
                >
                  {link.text}
                </Link>
              </div>
            )
          })}
        </div>
      </SheetContent>
    </Sheet>
  )
}
