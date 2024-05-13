import React from 'react'
import { ChevronRight } from 'lucide-react'
import ResourceCard from './ResourceCard'

const Resources = () => {
    return (
        <div className=' w-full rounded-3xl px-6 py-7 bg-white shadow-md'>
            <div className=' h-fit flex justify-between items-center w-full'>
                <h4 className=' text-lg'>Resourses</h4>
                <ChevronRight size={20} />
            </div>
            <div className=' grid grid-cols-3 gap-4 mt-5'>
                <ResourceCard bg_color='#f0f0f0' />
                <ResourceCard bg_color='#f0f0f0' />
                <ResourceCard bg_color='#f0f0f0' />
                <ResourceCard bg_color='#f0f0f0' />
                <ResourceCard bg_color='#f0f0f0' />
                <ResourceCard bg_color='#f0f0f0' />
            </div>
        </div>
    )
}

export default Resources