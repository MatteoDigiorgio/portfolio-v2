import { Icons } from '@/components/icons';
import { HomeIcon, NotebookIcon } from 'lucide-react';

export const DATA = {
  name: 'Matteo Digiorgio',
  initials: 'MD',
  url: 'https://digiorgio.dev',
  location: 'Italy',
  locationLink: '',
  description:
    'Software Engineer @ Deloitte Digital. I love building things and helping people.',
  summary: `Analyst at Deloitte Digital, diving into TypeScript, Tailwind CSS, React, Next.js, and all things Agile. Former Web3 Software Engineer @ [Ethereal Labs](https://ethereallabs.dev/), crafting dApps and slashing project timelines by 20%. Computer Science grad from the [University of Perugia](/#education), juggling side projects playing with Next.js, TypeScript, Tailwind CSS, and React. I'm all about creating cool web stuff!`,
  avatarUrl: '/me.png',
  skills: [
    'React',
    'Next.js',
    'Typescript',
    'Node.js',
    'DocumentDB',
    'Redux',
    'Tailwind',
    'CSS',
  ],
  navbar: [{ href: '/', icon: HomeIcon, label: 'Home' }],
  contact: {
    email: 'matthew.digiorgio@gmail.com',
    tel: '+123456789',
    social: {
      GitHub: {
        name: 'GitHub',
        url: 'https://git.new/matteodigiorgio',
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: 'LinkedIn',
        url: 'https://dub.sh/matteodigiorgio',
        icon: Icons.linkedin,

        navbar: true,
      },
      X: {
        name: 'X',
        url: 'https://dub.sh/matteodigiorgio-x',
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: 'Send Email',
        url: '#',
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: 'Deloitte Digital',
      href: 'https://www.deloittedigital.com/it/en.html',
      badges: [],
      location: 'Remote',
      title: 'Software Engineer',
      logoUrl: '/DeloitteDigital.jpeg',
      start: 'January 2024',
      end: 'Present',
      description: `Curated projects and activities carried out

        01 / 2024 – Present
        ~ Auction Platform.
        One of the leading and most successful multi-brand car dealerships.

        Stack: Next.js, React, Redux, Nest.js, MongoDB, DocumentDB, AWS
        Activities:
        • Ticket solving.
        • Performance optimization of both back-end and front-end components.
        • Developed new components and pages.`,
    },
    {
      company: 'Ethereal Labs',
      badges: [],
      href: 'https://ethereallabs.dev/',
      location: 'Remote',
      title: 'Web3 Software Engineer',
      logoUrl: '/etherealLabs.jpeg',
      start: 'May 2023',
      end: 'January 2024',
      description: `As a Web3 Software Engineer, my primary was to develop front-end solutions for decentralized applications. I used cutting-edge web3 technologies, such as Wagmi hook (Viem version), to connect with smart contracts on the blockchain. Working closely with the development team, I collaborate on ensuring the security, performance optimization, and user-friendly of our applications.

        Projects I've been involved:
        - EtherealLabs
        - FlareLink
        - Rev3al
        - Apex Medical`,
    },
  ],
  education: [
    {
      school: 'English Language Institute, San Francisco',
      href: 'https://www.eli.edu/',
      degree: 'Intensive ESL Program - Academic Advanced Class',
      logoUrl: '/eli.jpeg',
      start: '2022',
      end: '2022',
    },
    {
      school: 'Instituto Politécnico do Porto',
      href: 'https://www.ipp.pt/',
      degree: 'Erasmus, Computer Science',
      logoUrl: '/pporto.jpeg',
      start: '2020',
      end: '2020',
    },
    {
      school: 'University of Perugia',
      href: 'https://www.unipg.it/',
      degree: "Bachelor's Degree of Computer Science (BCS)",
      logoUrl: '/unipg.jpeg',
      start: '2017',
      end: '2021',
    },
  ],
  projects: [
    {
      title: 'Ethereal Labs Website',
      href: 'https://ethereallabs.dev/',
      dates: 'Nov 2024 - Jan 2024',
      active: true,
      description: `The feature "Page Builder" on FlareLink is a revolutionary tool that empowers users to create their own personalized websites, utilizing their domain, within the Flare blockchain ecosystem and making use of Flare cryptocurrency.
        The feature "Send Tokens" is a tool that allow users to send tokens between wallets.`,
      technologies: [
        'ClickUp',
        'Next.js',
        'Tailwind CSS',
        'React',
        'Viem',
        'Wagmi',
        'GitHub',
        'TypeScript',
        'React.js',
      ],
      links: [
        {
          type: 'Website',
          href: 'https://ethereallabs.dev/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '/etherealLabsWeb.jpeg',
      video: '',
    },
    {
      title: 'Apex Medical',
      href: 'https://apex-medical.pages.dev/',
      dates: 'Aug 2023 - Sep 2023',
      active: true,
      description: `Developed a Single Page Application (SPA) medical website using Astro, a cutting-edge web development framework. 
        Astro's performance optimization capabilities have allowed us to create a lightning-fast user experience.
        The website offers a user-friendly interface that enables patients to easily schedule appointments.`,
      technologies: ['Astro', 'Tailwind', 'Bun'],
      links: [
        {
          type: 'Website',
          href: 'https://apex-medical.pages.dev/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '/apexWeb.jpeg',
      video: '',
    },
    {
      title: 'REV3AL: Security Portal “R3AL ID” (Prototype - Demo Product)',
      href: 'https://watermarkdemo.rev3al.com/',
      dates: 'Jul 2023 - Aug 2023',
      active: true,
      description: `Developed the UI and UX using Vite and implemented resemblejs that analyse and compare images which in this demo product (in the Verify section), the user can not reuploads the same or similar photo.`,
      technologies: ['React', 'Tailwind', 'Vite'],
      links: [
        {
          type: 'Website',
          href: 'https://watermarkdemo.rev3al.com/',
          icon: <Icons.globe className='size-3' />,
        },
      ],
      image: '/rev3alWeb.jpeg',
      video: '',
    },
    {
      title: 'Buy Me A Coffee DApp',
      href: 'https://buymeacoffee.digiorgio.dev/',
      dates: 'Mar 2023 - Apr 2023',
      active: true,
      description: `Buy Me A Coffee DApp`,
      technologies: ['Next.js', 'React', 'Wagmi', 'Tailwind'],
      links: [
        {
          type: 'Website',
          href: 'https://buymeacoffee.digiorgio.dev/',
          icon: <Icons.globe className='size-3' />,
        },
        {
          type: 'Source',
          icon: <Icons.github className='h-4 w-4' />,
          href: 'https://github.com/MatteoDigiorgio/BuyMeACoffee',
        },
      ],
      image: '/buyMeACoffeeWeb.png',
      video: '',
    },
  ],
} as const;
