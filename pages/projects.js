import Nav from '../components/nav'

export default function Home() {
  return (
    <div>
      <Nav active="Projects"/>
      <section className="text-[48px] text-light-pink text-center mb-10">
        Current Projects
      </section>
      <section className="grid grid-cols-3 grid-rows-2 gap-10 mx-12">
        <div className="rounded-lg bg-grey text-center p-6 bg-opacity-30">
          <div className="text-[24px] font-semibold text-light-grey mb-3">
            My Project 1
          </div>
          <div className="text-light-grey">
            Filler text containing information about the project           
          </div>
        </div>
        <div className="rounded-lg bg-grey text-center p-6 bg-opacity-30">
          <div className="text-[24px] font-semibold text-light-grey mb-3">
            My Project 2
          </div>
          <div className="text-light-grey">
            Filler text containing information about the project
          </div>
        </div>
        <div className="rounded-lg bg-grey text-center p-6 bg-opacity-30">
          <div className="text-[24px] font-semibold text-light-grey mb-3">
            My Project 3
          </div>
          <div className="text-light-grey">
            Filler text containing information about the project
          </div>
        </div>
        <div className="rounded-lg bg-grey text-center p-6 bg-opacity-30">
          <div className="text-[24px] font-semibold text-light-grey mb-3">
            My Project 4
          </div>
          <div className="text-light-grey">
            Filler text containing information about the project
          </div>
        </div>
        <div className="rounded-lg bg-grey text-center p-6 bg-opacity-30">
          <div className="text-[24px] font-semibold text-light-grey mb-3">
            My Project 5
          </div>
          <div className="text-light-grey">
            Filler text containing information about the project
          </div>
        </div>
        <div className="rounded-lg bg-grey text-center p-6 bg-opacity-30">
          <div className="text-[24px] font-semibold text-light-grey mb-3">
            My Project 6
          </div>
          <div className="text-light-grey">
            Filler text containing information about the project
          </div>
        </div>
      </section>
    </div>
  )
}