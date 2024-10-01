import TopNavigation from './components/TopNavigation'
import SummarySection from './components/SummarySection'
import ContactSection from './components/ContactSection'

function App() {

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
