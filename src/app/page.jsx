import  ForDealerships  from '@/components/ForDealerships'
import { Faqs } from '@/components/Faqs'
import { Footer } from '@/components/Footer'
import  Header  from '@/components/Header'
import { Hero } from '@/components/Hero'
import Contact from '@/components/Contact'
import  PrimaryFeatures  from '@/components/AboutUs'
import SecondaryFeatures from '@/components/VehicleMakes'
import { Testimonials } from '@/components/Testimonials'
import  Banner  from '@/components/Banner'

import { Route, Routes } from 'react-router-dom'


export default function Home() {
  return (
    <>
      <Header />
      <Banner />
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
