import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'

const links = [
    { label: "Projects", href:"/projects"},
    { label: "Publications", href: "/publications"},
    { label: "Blog", href: "https://blog.adelinachau.com" },
    { label: "Scrapbook", href: "https://scrapbook.hackclub.com/adelly13"},
]

export default function Nav({ active }) {
    console.log(active)
    return (
        <nav className="text-light-grey font-light">
            <ul className="flex flex-wrap justify-start items-start sm:items-center p-8 mt-6 sm:mt-0 mx-4">
                <Link href="/">
                    <Image src={logo} alt="adelina's logo" width="75" height="75"/>
                </Link>
                <ul className="flex justify-items-center items-center mx-10 text-[20px]">
                    {links.map(({ href, label }) => (
                        <li key={`${href}${label}`}>
                            <Link legacyBehavior href={href}>
                                <a className={`hover:text-gold px-12 py-2 ${active === label ?  'text-gold bg-white bg-opacity-10' : ``}$`}>
                                    {label} 
                                </a>
                            </Link>
                        </li>
                    ))}
                </ul>
            </ul>
        </nav>
      )
}