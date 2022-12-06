import Nav from '../components/nav'
import PublicationCard from '../components/publicationcard'

export default function Home() {
    return (
        <div>
            <Nav active="Publications"/>
            <section className="text-[48px] text-light-pink text-center mb-14 mt-2 font-light">
                Publications
            </section>
            <section className="grid gap-8">
                <PublicationCard
                    journal="Journal of Emerging Investigators"
                    title="Hybrid Quantum-Classical Generative Adversarial Network for Synthesizing Chemically Feasible Molecules"
                    status="Manuscript Accepted in 2022"
                    href="https://emerginginvestigators.org/"
                />
                <PublicationCard
                    journal="University of Iowa SSTP Research Symposium"
                    title="An Analysis of COVID-19’s Unequal Impact on Human Mobility Behaviors"
                    status="Research Brief and Poster Presented in 2022"
                    href="https://belinblank.education.uiowa.edu/students/sstp/"
                    href2="https://www.geo-social.com/blogs/Adelina_poster_2022.pdf"
                />
            </section>
        </div>
    )
}