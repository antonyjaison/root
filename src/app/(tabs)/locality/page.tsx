import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"


const LocalityPage = () => {
    return (
        <div className='px-7 flex flex-col gap-6'>

            <Tabs defaultValue="overview">
                <TabsList className=' w-[100%] bg-[#E4E4E4]'>
                    <TabsTrigger className=' w-[100%]' value="overview">Overview</TabsTrigger>
                    <TabsTrigger className=' w-[100%]' value="suggestions">Suggestions</TabsTrigger>
                </TabsList>
                <TabsContent value="overview">Make changes to your account here.</TabsContent>
                <TabsContent value="suggestions">Change your password here.</TabsContent>
            </Tabs>


        </div>
    )
}

export default LocalityPage