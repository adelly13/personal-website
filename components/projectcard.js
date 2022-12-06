import Link from 'next/link'
import Image from 'next/image'

export default function ProjectCard({
    title,
    href,
    description,
    dates
}) {
    return (
        <Link legacyBehavior href={href ?? '/'}>
            <a className={`rounded-lg bg-grey text-center p-6 bg-opacity-30 ${href ? 'hover:bg-opacity-60' : 'pointer-events-none'}`}>
                <div className={`text-[24px] font-semibold text-light-pink mb-1 ${href ? 'hover:underline hover:underline-offset-8' : ''}`}>
                    {title}
                </div>
                <div className="text-gold text-[15px] italic mb-3">
                    {dates}
                </div>
                <div className="text-light-grey">
                    {description}        
                </div>
            </a>
        </Link>
    )
}