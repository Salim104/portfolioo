import React, { useEffect } from 'react'
import DentalBackground from '../Components/dental/DentalBackground'
import DentalHeader from '../Components/dental/DentalHeader'
import DentalHero from '../Components/dental/DentalHero'
import DentalProblem from '../Components/dental/DentalProblem'
import DentalHowItWorks from '../Components/dental/DentalHowItWorks'
import DentalAbout from '../Components/dental/DentalAbout'
import DentalFinalCta from '../Components/dental/DentalFinalCta'

const Dental = () => {
  useEffect(() => {
    const previous = document.title
    document.title = 'AI Receptionist for Dental Practices | Never Miss a Patient Call'
    return () => {
      document.title = previous
    }
  }, [])

  return (
    <div className="w-full relative overflow-x-hidden">
      <DentalBackground />
      <DentalHeader />
      <DentalAbout />
      <DentalHero />
      <DentalProblem />
      <DentalHowItWorks />
      <DentalFinalCta />
    </div>
  )
}

export default Dental
