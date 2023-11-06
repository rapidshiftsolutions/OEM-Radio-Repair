import  ForDealerships  from '@/components/ForDealerships'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import  Header  from '@/components/Header'
import Hero from '@/components/Hero'
import Contact from '@/components/Contact'
import  PrimaryFeatures  from '@/components/AboutUs'
import SecondaryFeatures from '@/components/VehicleMakes'
import { Testimonials } from '@/components/Testimonials'

export default function Home() {
  return (
    <>
      <Header />
      <main>
        <Hero />
        <PrimaryFeatures />
        <SecondaryFeatures />
        <ForDealerships />
        <Contact />
      </main>
      <Footer />
    </>
  )
}
