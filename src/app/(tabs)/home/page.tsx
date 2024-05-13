import Notes from '@/components/Notes'
import Resources from '@/components/Resources'
import Weather from '@/components/Weather'
import React from 'react'

const HomePage = () => {
  return (
    <div className='px-7 flex flex-col gap-6 pb-3'>
      <Weather/>
      <Notes/>
      <Resources/>
    </div>
  )
}

export default HomePage