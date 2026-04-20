import Blobs from '@/components/Blobs'
import Navbar from '@/components/Navbar'
import Hero from '@/components/Hero'
import Features from '@/components/Features'
import HowItWorks from '@/components/HowItWorks'
import CTAStrip from '@/components/CTAStrip'
import Footer from '@/components/Footer'

export default function Home() {
  return (
    <>
      <Blobs />
      <Navbar />
      <main>
        <Hero />
        <Features />
        <HowItWorks />
        <CTAStrip />
      </main>
      <Footer />
    </>
  )
}
