import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from 'lucide-react'
import ResourceCard from '@/components/ResourceCard'


const LocalityPage = () => {
    return (
        <div className='px-7 flex flex-col gap-6'>

            <Tabs defaultValue="overview">
                <TabsList className=' w-[100%] bg-[#E4E4E4]'>
                    <TabsTrigger className=' w-[100%]' value="overview">Overview</TabsTrigger>
                    <TabsTrigger className=' w-[100%]' value="suggestions">Suggestions</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">

                    <div className=' flex flex-col gap-5 mt-5'>
                        <div className=' w-full rounded-3xl px-6 py-7 bg-white shadow-md'>
                            <div className=' h-fit flex justify-between items-center w-full'>
                                <h4 className=' text-lg'>NDVI Score</h4>
                                <ChevronRight size={20} />
                            </div>

                            <div>
                                {/* content */}
                            </div>

                        </div>

                        <div>
                            <h4 className=' text-lg'>Basic Characteristics</h4>
                            <div className=' grid grid-cols-3 gap-5 mt-3'>
                                <ResourceCard bg_color='#fff' />
                                <ResourceCard bg_color='#fff' />
                                <ResourceCard bg_color='#fff' />
                                <ResourceCard bg_color='#fff' />
                                <ResourceCard bg_color='#fff' />
                                <ResourceCard bg_color='#fff' />
                            </div>
                        </div>



                    </div>

                </TabsContent>
                <TabsContent value="suggestions">
                    <div className=' w-full rounded-3xl px-6 py-7 bg-white shadow-md mt-5'>
                        <p>Field F1 (Loam Soil):</p>
                        <ul className=' list-disc ml-6'>
                            <li>Vegetables: Loam soil is excellent for various vegetables like tomatoes, peppers, beans, peas, squash, and leafy greens. The moderate temperature and moisture levels in the data suggest a warm season for growing.</li>
                            <li>Fruits: Melons, watermelons, and some berry varieties can also thrive in loam soil with proper irrigation and sunlight.</li>
                        </ul>
                    </div>
                </TabsContent>
            </Tabs>


        </div>
    )
}

export default LocalityPage