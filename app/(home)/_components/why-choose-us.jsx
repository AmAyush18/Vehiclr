import { CalendarIcon, CarIcon, ShieldIcon } from 'lucide-react'
import React from 'react'

const WhyChooseUsSection = () => {
  return (
    <section className="py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-2xl font-bold text-center mb-12">
            Why Choose Our Platform
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="text-center">
              <div className="txt-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-outline">
                <CarIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Wide Selection</h3>
              <p className="font-[500] txt-tertiary">
                Thousands of verified vehicles from trusted dealerships and
                private sellers.
              </p>
            </div>
            <div className="text-center">
              <div className="txt-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-outline">
                <CalendarIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Easy Test Drive</h3>
              <p className="font-[500] txt-tertiary">
                Book a test drive online in minutes, with flexible scheduling
                options.
              </p>
            </div>
            <div className="text-center">
              <div className="txt-secondary rounded-full w-16 h-16 flex items-center justify-center mx-auto mb-4 bg-outline">
                <ShieldIcon className="h-8 w-8" />
              </div>
              <h3 className="text-xl font-bold mb-2">Secure Process</h3>
              <p className="font-[500] txt-tertiary">
                Verified listings and secure booking process for peace of mind.
              </p>
            </div>
          </div>
        </div>
      </section>
  )
}

export default WhyChooseUsSection
