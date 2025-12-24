'use client'

import { useState } from 'react'
import Link from 'next/link'

export default function ServiceList() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <div className="my-10 flex flex-col items-center">
      <button
        type="button"
        onClick={() => setIsOpen(!isOpen)}
        className="mb-8 rounded-full bg-linear-to-r from-primary-light-blue to-secondary-aqua px-7 py-4 text-base font-semibold text-white uppercase transition-transform duration-300 hover:scale-105"
      >
        {isOpen ? 'See less services' : 'See more services'}
      </button>
      
      {isOpen && (
        <div className="animate-in fade-in slide-in-from-top-4 duration-300">
          <div className="mb-8 text-center text-base/relaxed text-neutral-dark-gray">
            <p>Adjustment of Status</p>
            <p>Advanced Parole/Travel Authorization</p>
            <p>Affidavit of Support</p>
            <p>Applications for Victims of Domestic Violence or Crimes (VAWA Or U Visa)</p>
            <p>Citizenship Certifications</p>
            <p>Consular Processing</p>
            <p>Consultations</p>
            <p>Deferred Action for Childhood Arrivals (DACA)</p>
            <p>Deferred Action for Parental Accountability (DAPA)</p>
            <p>Family-Based Petitions</p>
            <p>Fiancé Visas</p>
            <p>Green Card Renewals</p>
            <p>Naturalization and Citizenship Applications</p>
            <p>Referrals</p>
            <p>Work Authorization</p>
            <p>Removal of Conditions of Residency</p>
            <p>Temporary Protection Status (TPS)</p>
            <p>Visa Renewals</p>
            <p>Waiver Applications</p>
            <p>Additional Services</p>
          </div>
          
          <div className="text-center">
            <p className="mb-2 text-neutral-dark-gray">
              For more information regarding these services:
            </p>
            <Link 
              href="https://www.uscis.gov" 
              className="text-primary-light-blue hover:underline"
              target="_blank"
              rel="noopener noreferrer"
            >
              https://www.uscis.gov
            </Link>
          </div>
        </div>
      )}
    </div>
  )
}
