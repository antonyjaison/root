import React from 'react'
import { MapPin, CloudSnow } from 'lucide-react'

const Weather = () => {
    return (
        <div className=' w-full rounded-3xl px-6 py-7 bg-white shadow-md flex flex-col gap-4'>
            <div className=' h-fit flex items-center gap-2'>
                <MapPin size={18} />
                <p className=' text-base font-bold'>Thiruvanathapuram</p>
            </div>

            <div className=' flex h-fit items-center justify-between'>
                <div className=' flex h-fit items-center gap-5'>
                    <h3 className=' font-semibold text-6xl'>
                        <span>17<sup className=' text-4xl'>°C</sup></span>
                    </h3>
                    <div>
                        <p>H:<span>17°C</span></p>
                        <p>L:<span>17°C</span></p>
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
                    <p className=' text-base font-semibold'>30%</p>
                </div>
                <div>
                    <h5 className=' text-sm'>Precipitation</h5>
                    <p className=' text-base font-semibold'>5.1ml</p>
                </div>
                <div>
                    <h5 className=' text-sm'>Pressure</h5>
                    <p className=' text-base font-semibold'>450hPa</p>
                </div>
                <div>
                    <h5 className=' text-sm'>Wind</h5>
                    <p className=' text-base font-semibold'>23m/s</p>
                </div>
            </div>

        </div>
    )
}

export default Weather