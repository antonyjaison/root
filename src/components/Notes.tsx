import { ChevronRight } from 'lucide-react'
import React from 'react'
import NoteCard from './NoteCard'

const Notes = () => {
    return (
        <div className=' w-full rounded-3xl px-6 py-7 bg-white shadow-md'>
            <div className=' h-fit flex justify-between items-center w-full'>
                <h4 className=' text-lg'>Notes</h4>
                <ChevronRight size={20} />
            </div>
            <div className=' mt-5 flex flex-col gap-4'>
                <NoteCard />
                <NoteCard />
                <NoteCard />
                <NoteCard />
            </div>
        </div>
    )
}

export default Notes