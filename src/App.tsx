import { useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import TopNavigation from './components/TopNavigation'
import SummarySection from './components/SummarySection'
import ContactSection from './components/ContactSection'

function App() {
  const [count, setCount] = useState(0)

  return (
    <>
      <TopNavigation />
      <div className='content-container'>
        <SummarySection />
        <ContactSection />
      </div>
    </>
  )
}

export default App
