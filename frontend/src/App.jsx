import { AppProvider, useApp } from './context/AppContext'
import Navbar       from './components/Navbar'
import MenuPage     from './components/MenuPage'
import Profile      from './components/Profile'
import Cart         from './components/Cart'
import SuccessModal from './components/SuccessModal'
import Footer       from './components/Footer'
import HomePage     from './components/HomePage'
import ContactPage  from './components/ContactPage'
import AboutPage    from './components/AboutPage'
import LoginPage    from './components/LoginPage'

function AppContent() {
  const { page } = useApp()

  if (page === 'menu') {
    return (
      <>
        <Navbar />
        <MenuPage />
        <Cart />
        <SuccessModal />
      </>
    )
  }

  if (page === 'profile') {
    return (
      <>
        <Navbar />
        <Profile />
        <Footer />
        <Cart />
        <SuccessModal />
      </>
    )
  }

  if (page === 'login') {
    return (
      <>
        <Navbar />
        <LoginPage />
        <Cart />
        <SuccessModal />
      </>
    )
  }

  if (page === 'contact') {
    return (
      <>
        <Navbar />
        <ContactPage />
        <Cart />
        <SuccessModal />
      </>
    )
  }

  if (page === 'about') {
    return (
      <>
        <Navbar />
        <AboutPage />
        <Cart />
        <SuccessModal />
      </>
    )
  }

  // Default: home page
  return (
    <>
      <Navbar />
      <HomePage />
      <Cart />
      <SuccessModal />
    </>
  )
}

export default function App() {
  return (
    <AppProvider>
      <AppContent />
    </AppProvider>
  )
}
