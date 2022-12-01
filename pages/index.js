import Head from 'next/head'
import Image from 'next/image'
import Nav from '../components/nav'

export default function Home() {
  return (
    <div>
      <Nav active="Home"/>
      <main className="font-opensans">
        <h1 className="font-semibold text-gold text-center pt-12 text-[96px]">
          ADELINA CHAU
        </h1>
        <section className="text-light-pink text-center m-8 pr-30 pl-30 text-[30px] place-items-stretch flex flex-row place-content-center">
          <div classname="basis-1/4"></div>
          <div className="basis-1/2">
            Hey! I’m Adelina, a junior at Archbishop Mitty High School. I am passionate about quantum computing, machine learning, and entrepreneurship!
          </div>
        </section>
      </main>
      
    </div>
  )
}