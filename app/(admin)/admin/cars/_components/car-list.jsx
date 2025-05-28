"use client"

import { Button } from '@/components/ui/button'
import { Input } from '@/components/ui/input'
import { PlusIcon, SearchIcon } from 'lucide-react'
import { useRouter } from 'next/navigation'
import { useState } from 'react'

export const CarsList = () => {
    const [search, setSearch] = useState("");

    const router = useRouter();

    const handleSearchSubmit = (e) => {
        e.preventDefault();
    }
  return (
    <div className='space-y-4'>
        <div className='flex flex-col sm:flex-row gap-4 items-start sm:items-center justify-between'>
            <Button>
                <PlusIcon className='h-4 w-4' /> Add Car
            </Button>
            <form onSubmit={handleSearchSubmit} className='flex w-full sm:w-auto'>
                <div className='relative flex-1'>
                    <SearchIcon className='absolute left-2.5 top-2.5 h-4 w-4' />
                    <Input 
                        className="pl-9 w-full sm:w-60"
                        value={search}
                        onChange={(e) => setSearch(e.target.value)}
                        type={search}
                        placeholder="Search cars"
                    />
                </div>
            </form>
        </div>
    </div>
  )
}