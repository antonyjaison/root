import React from 'react'
import { Tabs, TabsContent, TabsList, TabsTrigger } from "@/components/ui/tabs"
import { ChevronRight } from 'lucide-react'
import ResourceCard from '@/components/ResourceCard'
import axios from 'axios'


const LocalityPage = async () => {

    const data = {
        "messages": "",
        "uid": 1234,
        "latitude": 8.5241,
        "longitude": 76.9366
    }

    const res = await axios.post("https://25b6-59-92-70-236.ngrok-free.app/soil-data", data)
    const res_data = res.data?.stations[0]

    console.log(res_data)

    const requestData = {
        latitude: data.latitude,
        longitude: data.longitude
    };

    const weather_res = await axios.post("http://127.0.0.1:4040/get-weather", requestData)
    const weather = weather_res.data[0]
    console.log(weather)

    const gemini_data = {
        ...weather,
        AQI: res_data.AQI,
        CO: res_data.CO,
        NO2: res_data.NO2,
        OZONE: res_data.OZONE,
        SO2: res_data.SO2,
    }

    console.log(gemini_data)

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
                                <ResourceCard bg_color='#fff' title='Air Quality Index' value={res_data.AQI} />
                                <ResourceCard bg_color='#fff' title='Carbon Monoxide' value={`${res_data.CO}`} />
                                <ResourceCard bg_color='#fff' title='Nitrogen Dioxide' value={`${res_data.NO2}`} />
                                <ResourceCard bg_color='#fff' title='Ozone' value={`${res_data.OZONE}`} />
                                <ResourceCard bg_color='#fff' title='Sulphur Dioxide' value={`${res_data.SO2}`} />
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