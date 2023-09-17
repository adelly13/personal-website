import Nav from '../components/nav'
import ProjectCard from '../components/projectcard'

export default function Home() {
  return (
    <div>
      <Nav active="Projects"/>
      <section className="text-[48px] text-gold text-center mb-3 mt-2 font-light">
        PROJECTS
      </section>
      <section className="mt-8 mb-20 ml-10 mr-10">
        <div className="text-center text-light-pink text-opacity-90 mb-8 text-[35px] bg-light-pink bg-opacity-10 p-2">
          Main Projects
        </div>
        <section className="grid grid-cols-3 gap-x-10 gap-y-14 mx-12">
          <ProjectCard
            title="Boston University RISE Internship"
            href="https://www.bu.edu/summer/high-school-programs/rise-internship-practicum/"
            description="As part of Boston University's RISE Internship program, I conducted computational microscopy research under Professor Lei Tian and Ph. D student Qianwan Yang. At the end of the program, I presented my research at the 2023 RISE Research Symposium."
            dates="June 2023 - Present"
          />
          <ProjectCard
            title="Univeristy of Iowa SSTP"
            href="https://www.geo-social.com/blogs/Adelina_poster_2022.pdf"
            description="As part of University of Iowa's SSTP, I conducted research on the impact of COVID-19 on social mobility under Professor Caglar Koylu and Dr. Hoeyun Kwon at University of Iowa's Geo-Social Lab and presented my research at the 2022 SSTP Research Symposium."
            dates="June 2022 - August 2022"
          />
          <ProjectCard
            title="Aspiring Scholars Directed Research Program (ASDRP)"
            href="https://www.asdrp.org/"
            description="I conduct research on quantum machine learning for drug discovery under Dr. Larry McMahan. My team and I designed a quantum machine learning algorithm to generate novel molecules based on existing small organic molecules."
            dates="August 2021 - Present"
          />
          <ProjectCard
            title="Brain Tumor Classification"
            href="https://github.com/adelly13/BrainTumorClassification"
            description="As a Python Research Program student, I conducted research on brain tumors and trained a convolutional neural network to perform classification on brain MRIs with the four categories being healthy brains, brains with pituitary tumors, brains with meningiomas, and brains with gliomas."
            dates="July 2021 - August 2021"
          />
          <ProjectCard
            title="Reinvent Tomorrow"
            href="https://adelly13.github.io/ReinventTomorrow/"
            description="A social organization dedicated to narrowing the gender gap in business and to educating young girls the fundamentals of business."
            dates="May 2021 - September 2021"
          />
        </section>
      </section>
      <section className="mt-8 mb-20 ml-10 mr-10">
        <div className="text-center text-light-pink text-opacity-90 mb-8 text-[35px] bg-light-pink bg-opacity-10 p-2">
          Other cool things!
        </div>
        <section className="grid grid-cols-3 gap-x-10 gap-y-14 mx-12">
          <ProjectCard
            title="TKO FRC Robotics 1351"
            href="https://www.amhsrobotics.com/"
            description="As Head of Design, I am responsible for designing and CAD-ing our team's robot in Solidworks and for training mechanical rookies with all the necessary knowledge."
            dates="August 2020 - Present"
          />
          <ProjectCard
            title="AMHS Computer Science Club"
            href="https://mittycsclub.github.io/"
            description="As Co-Vice President, I help conduct a variety of fun workshops each week, oversee the club logistics, and create promotional videos to recruit new club members."
            dates="August 2020 - Present"
          />
          <ProjectCard
            title="AMHS Business Club"
            description="As Vice President, I prepare lessons on various business topics and assist members in brainstorming ideas, writing business plans, and rehearsing business pitches for entrepreneurship competitions."
            dates="August 2020 - Present"
          />
          <ProjectCard
            title="AMHS Chinese Culture Club"
            description="As President, I plan events such as Paper Cutting and Calligraphy and Chinese New Year feast throughout the year to spread appreciation towards the beauty of Chinese culture."
            dates="August 2020 - Present"
          />
          <ProjectCard
            title="Apple Pi Learning"
            href="https://www.applepiinc.com/"
            description="I've been developing the curriculum for and teaching the Introduction to Python and Game Design class!"
            dates="August 2022 - Present"
          />
          <ProjectCard
            title="Edutine"
            href="https://www.edutine.com/"
            description="I've tutored K-12 students in several subjects and taught group classes in programming and business. As Assistant Coordinator and Tutor, I pairing tutors and students together and reach out to students interested in joining the program."
            dates="August 2020 - Present"
          />
        </section>
      </section>
    </div>
  )
}