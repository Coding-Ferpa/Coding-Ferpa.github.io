// app/page.tsx
import Hero from '@/app/components/Hero'
import About from '@/app/components/About'
import Events from '@/app/components/Events'

export default function Home() {
  return (
    <div>
      <Hero />
      <About />
      <Events />
    </div>
  )
}
