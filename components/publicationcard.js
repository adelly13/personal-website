import Link from 'next/link'
import Image from 'next/image'

export default function PublicationCard({
    journal,
    title,
    href,
    href2,
    status,
    description
}) {
    return (
        <section className="grid px-12 grid-cols-2">
            <div className="text-[21px] p-6 text-light-grey underline underline-offset-8 decoration-light-grey/30 hover:decoration-light-grey/80">
                <Link legacyBehavior href={href ?? '/'}>
                    <a>
                        {journal}
                    </a>
                </Link>
            </div>
            <Link legacyBehavior href={href2 ?? '/'}>
                <a className={`rounded-lg bg-grey text-left p-6 bg-opacity-30 ${href2 ? 'hover:bg-opacity-60' : 'pointer-events-none'}`}>
                    <div className={`text-[21px] text-light-pink mb-1 ${href2 ? 'hover:underline hover:underline-offset-8' : ''}`}>
                        {title}
                    </div>
                    <div className="text-gold text-[15px] italic mb-3">
                        {status}
                    </div>
                    <div className="text-light-grey">
                        {description}        
                    </div>
                </a>
            </Link>
        </section>
    )
}