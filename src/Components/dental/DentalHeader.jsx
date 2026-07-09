import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../../assets/brand-logo.svg'

/**
 * Deliberately minimal: no nav links. This page has one job, and every pixel
 * here pushes the headline closer to the fold on a phone.
 */
const DentalHeader = () => {
  return (
    <header className="max-w-[1200px] mx-auto px-6 sm:px-8 pt-5 pb-1 sm:pt-6 sm:pb-2">
      <Link to="/" aria-label="SalimDev_Codes home" className="inline-block">
        <img src={logo} alt="SalimDev_Codes" className="h-7 sm:h-8 w-auto" />
      </Link>
    </header>
  )
}

export default DentalHeader
