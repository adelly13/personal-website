import Link from 'next/link'
import Image from 'next/image'
import logo from '../public/logo.png'

const links = [
    { label: "Blog", href: "https:blog.adelinachau.com" },
    { label: "Projects", href:"/projects"},
    { label: "Resume", href: "/"},
    { label: "Publications", href: "/publications"}
]

export default function Nav({ active }) {
    console.log(active)
    return (
        <nav className="text-light-grey">
            <ul className="flex flex-wrap justify-start items-start sm:items-center p-8 mt-6 sm:mt-0 mx-5">
                <Link href="/">
                    <Image src={logo} alt="adelina's logo" width="75" height="75"/>
                </Link>
                <ul className="grid gap-4 justify-items-center items-center grid-cols-4 grid-rows-1 text-[20px] mx-10">
                    {links.map(({ href, label }) => (
                        <li key={`${href}${label}`}>
                            <Link legacyBehavior href={href}>
                                <a className={`hover:text-gold px-4 py-2 ${active === label ?  'text-gold bg-white bg-opacity-10' : ``}$`}>
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