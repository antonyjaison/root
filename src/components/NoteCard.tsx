import Image from 'next/image'
import React from 'react'

const NoteCard = () => {
    return (
        <div className=' flex h-fit flex-row items-center gap-4'>
            <Image src="/images/note.png" width={70} height={70} className=' object-cover rounded-lg' alt='note' />
            <div className=' flex-1'>
                <div>
                    <h3 className=' text-lg'>Sustainable Tomatoes</h3>
                    <p className=' text-[10px] text-[#818181]'>13-05-2024 | 1 min ago</p>
                </div>
                <p className=' text-[10px] text-[#111]'>From vine to table, grow the juiciest, healthiest tomatoes while nurturing...</p>
            </div>
        </div>
    )
}

export default NoteCard