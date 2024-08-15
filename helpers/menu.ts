export type MenuItem = {
  text: string
  href?: string
  subnav?: SubnavItem[]
}

export type SubnavItem = {
  text: string
  href: string
}

export const menu: MenuItem[] = [
  {
    text: 'Get Involved',
    subnav: [
      {
        text: 'Join Us',
        href: '/join-us',
      },
      {
        text: 'Service Opportunities',
        href: 'https://columbiaview.churchcenter.com/people/forms/86247',
      },
      {
        text: 'Event Calendar',
        href: 'https://columbiaview.churchcenter.com/calendar?view=list',
      },
      { text: 'Give', href: 'https://columbiaview.churchcenter.com/giving' },
    ],
  },
  { text: 'Ministries', href: '/ministries' },
  { text: 'Messages', href: '/messages' },
  {
    text: 'Immigrant Connection',
    subnav: [
      {
        text: 'Client Portal',
        href: '/immigrant-connection-pdx',
      },
      {
        text: 'Partner With Us',
        href: '/icpdx',
      },
      {
        text: 'Available Positions',
        href: '/immigrant-connection-pdx/jobs',
      },
      {
        text: 'Our Staff',
        href: '/immigrant-connection-pdx/staff',
      },
    ],
  },
  { text: 'About Us', href: '/about' },
]
