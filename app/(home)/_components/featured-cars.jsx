import { CarCard } from '@/components/car-card'
import { Button } from '@/components/ui/button'
import { featuredCars } from '@/constants/mock-data'
import { ChevronRight } from 'lucide-react'
import Link from 'next/link'
import React from 'react'

const FeaturedCarsSection = () => {
  return (
    <section className="py-12">
        <div className="container mx-auto px-4">
          <div className="flex justify-between items-center mb-8">
            <h2 className="text-2xl font-bold">Featured Cars</h2>
            <Button variant="ghost" className="flex items-center" asChild>
              <Link href="/cars">
                View All <ChevronRight className="ml-1 h-4 w-4" />
              </Link>
            </Button>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredCars.map((car) => (
              <CarCard key={car.id} car={car} />
            ))}
          </div>
        </div>
      </section>
  )
}

export default FeaturedCarsSection
