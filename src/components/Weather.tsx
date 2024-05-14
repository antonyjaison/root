import React from 'react'
import { MapPin, CloudSnow } from 'lucide-react'
import axios from 'axios'

const Weather = async () => {

    const latitude = 8.5241; // Example latitude
    const longitude = 76.9366; // Example longitude

    const requestData = {
        latitude: latitude,
        longitude: longitude
    };

    const res = await axios.post("http://127.0.0.1:4040/get-weather", requestData)
    const weather = res.data[0]
    console.log(weather)

    return (
        <div className=' w-full rounded-3xl px-6 py-7 bg-white shadow-md flex flex-col gap-4'>
            <div className=' h-fit flex items-center gap-2'>
                <MapPin size={18} />
                <p className=' text-base font-bold'>Thiruvanathapuram</p>
            </div>

            <div className=' flex h-fit items-center justify-between'>
                <div className=' flex h-fit items-center gap-5'>
                    <h3 className=' font-semibold text-6xl'>
                        <span>{weather.apparent_temperature.toFixed(0)}<sup className=' text-4xl'>°C</sup></span>
                    </h3>
                    <div>
                        <p>H:<span> {weather.apparent_temperature.toFixed() + 4}°C</span></p>
                        <p>L:<span> {weather.apparent_temperature.toFixed() - 4}°C</span></p>
                    </div>
                </div>
                <div>
                    <CloudSnow size={50} />
                </div>
            </div>

            <div className=' w-full h-[0.5px] bg-slate-300' />

            <div className=' flex  w-full justify-between'>
                <div>
                    <h5 className=' text-sm'>Humidity</h5>
                    <p className=' text-base font-semibold'>{weather.relative_humidity_2m?.toFixed()}%</p>
                </div>
                <div>
                    <h5 className=' text-sm'>Precipitation</h5>
                    <p className=' text-base font-semibold'>{weather.precipitation?.toFixed()}ml</p>
                </div>
                <div>
                    <h5 className=' text-sm'>Pressure</h5>
                    <p className=' text-base font-semibold'>{weather.surface_pressure?.toFixed()}hPa</p>
                </div>
                <div>
                    <h5 className=' text-sm'>Wind</h5>
                    <p className=' text-base font-semibold'>{weather.wind_speed_10m?.toFixed()}m/s</p>
                </div>
            </div>

        </div>
    )
}

export default Weather