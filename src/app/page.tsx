import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Events from '@/app/components/Events'
import SocialLinks from '@/app/components/SocialLinks'

export default function Home() {
  return (
    <div>
      <Hero />
      <SocialLinks />
      <About />
      <Events /> 
    </div>
  )
}
