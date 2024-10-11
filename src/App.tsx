import TopNavigation from './components/TopNavigation'
import SummarySection from './components/SummarySection'
import ContactSection from './components/ContactSection'
import Footer from './components/Footer'

function App() {

  return (
    <>
      <TopNavigation />
      <div className='content-container'>
        <SummarySection />
        <ContactSection />
      </div>
      <Footer />
    </>
  )
}

export default App
