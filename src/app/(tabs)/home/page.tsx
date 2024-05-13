import Resources from '@/components/Resources'
import Weather from '@/components/Weather'
import React from 'react'

const HomePage = () => {
  return (
    <div className='px-7 flex flex-col gap-6'>
      <Weather/>
      <Resources/>
    </div>
  )
}

export default HomePage