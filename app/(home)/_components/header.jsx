import React from 'react'
import HomeSearch from './home-search'

const HeaderComponent = () => {
  return (
    <section className="relative py-16 md:py-28 dotted-background">
        <div className="max-w-4xl mx-auto text-center">
          <div className="mb-8">
            <h1 className="text-5xl md:text-8xl mb-4 gradient gradient-title">
              Find your Dream Car with Vehiclr AI
            </h1>
            <p className="text-xl mb-8 max-w-2xl mx-auto font-500">
              Advanced AI Car Search and test drive from thousands of vehicles.
            </p>
          </div>

          <HomeSearch />
        </div>
      </section>
  )
}

export default HeaderComponent
