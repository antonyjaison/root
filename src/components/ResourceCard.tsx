import React from 'react'
import { ArrowUpRight } from 'lucide-react'

type ResourceCardProps = {
    bg_color: string,
    title?: string,
    value?: string,
}

const ResourceCard = ({ bg_color, title, value }:ResourceCardProps) => {
    return (
        <div style={{ backgroundColor: bg_color }} className=' w-24 h-24 rounded-2xl p-4 flex flex-col gap-2'>
            <div>
                <h5 className=' text-[12px]'>{title}</h5>
                {/* <p className=' text-[10px]'>Normal level</p> */}
            </div>
            <div className=' flex flex-row justify-between'>
                <h3 className=' text-[20px]'>{value}</h3>
                <button className=' bg-white rounded-full w-5 h-5 justify-center items-center self-center'>
                    <ArrowUpRight size={10} />
                </button>
            </div>

        </div>
    )
}

export default ResourceCard