import React from 'react'
import { ArrowUpRight } from 'lucide-react'

const ResourceCard = () => {
    return (
        <div className=' w-24 h-24 rounded-2xl bg-[#f0f0f0] p-4 flex flex-col gap-2'>
            <div>
                <h5 className=' text-[12px]'>Water</h5>
                <p className=' text-[10px]'>Normal level</p>
            </div>
            <div className=' flex flex-row justify-between'>
                <h3 className=' text-[20px]'>93%</h3>
                <button className=' bg-white rounded-full w-5 h-5 justify-center items-center self-center'>
                    <ArrowUpRight size={10} />
                </button>
            </div>

        </div>
    )
}

export default ResourceCard