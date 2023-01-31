import Nav from '../components/nav'
import PublicationCard from '../components/publicationcard'

export default function Home() {
    return (
        <div>
            <Nav active="Publications"/>
            <section className="text-[48px] text-gold text-center mb-3 mt-2 font-light">
                PUBLICATIONS
            </section>
            <section className="mt-8 mb-20 ml-12 mr-12">
                <div className="text-center text-light-pink text-opacity-90 mb-8 text-[35px] bg-light-pink bg-opacity-10 p-2 rounded-md">
                    Scientific Publications
                </div>
                <div className="grid gap-8">
                    <PublicationCard
                        journal="Journal of Emerging Investigators"
                        title="Hybrid Quantum-Classical Generative Adversarial Network for Synthesizing Chemically Feasible Molecules"
                        status="Manuscript Published in 2023"
                        href="https://emerginginvestigators.org/"
                        href2="https://emerginginvestigators.org/articles/hybrid-quantum-classical-generative-adversarial-network-for-synthesizing-chemically-feasible-molecules"
                    />
                </div>
            </section>
            <section className="mt-8 mb-20 ml-12 mr-12">
                <div className="text-center text-light-pink text-opacity-90 mb-8 text-[35px] bg-light-pink bg-opacity-10 p-2">
                    Oral/Poster Presentations
                </div>
                <div className="grid gap-8">
                    <PublicationCard
                        journal="ASDRP Colloquium"
                        title="Hybrid Quantum-Classical Generative Adversarial Network for Generating Synthetic, Chemically Stable Molecules"
                        status="Presented in May 2022"
                        href="https://www.asdrp.org/"
                        href2="https://www.youtube.com/watch?v=Eg0rxtNCJcg&t=879s"
                    />
                    <PublicationCard
                        journal="University of Iowa SSTP Research Symposium"
                        title="An Analysis of COVID-19’s Unequal Impact on Human Mobility Behaviors"
                        status="Research Brief and Poster Presented in July 2022"
                        href="https://belinblank.education.uiowa.edu/students/sstp/"
                        href2="https://www.geo-social.com/blogs/Adelina_poster_2022.pdf"
                    />
                    <PublicationCard
                        journal="ASDRP Colloquium"
                        title="Quantum Computing and Quantum Chemistry Updates - Atomic and Molecular Gaussian-Orbital Hartree-Fock Energy Calculations and Quantum-Classical Generative Adversarial Network For Molecular Geometry Generation"
                        status="Presented in August 2022"
                        href="https://www.asdrp.org/"
                        href2="https://www.youtube.com/watch?v=f8veIMI0CA8"
                    />
                </div>
            </section>
        </div>
    )
}