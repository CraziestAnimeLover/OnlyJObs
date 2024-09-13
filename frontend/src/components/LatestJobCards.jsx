import React from 'react'
import { Badge } from "@/components/ui/badge"
export const LatestJobCards = () => {
  return (
    <div  className='p-5 rounded-md shadow-xl bg-white border border-gray-100 cursor-pointer'>
      <div>
                <h1 className='font-medium text-lg'>
                    {/* {job?.company?.name} */}
                     Company Name
    
                </h1>
                <p className='text-sm text-gray-500'>India</p>
            </div>

            <div>
                <h1 className='font-bold text-lg my-2'>
                    {/* {job?.title} */}
                    Job Title
                    </h1>
                <p className='text-sm text-gray-600'>
                    {/* {job?.description} */}
                   Job Descrption
                </p>
            </div>

            <div className='flex items-center gap-2 mt-4'>
                <Badge className={'text-blue-700 font-bold'} variant="ghost">
                    {/* {job?.position}  */}
                    Positions</Badge>
                <Badge className={'text-[#F83002] font-bold'} variant="ghost">
                    {/* {job?.jobType} */}
                    Part-Time
                    </Badge>
                <Badge className={'text-[#7209b7] font-bold'} variant="ghost">
                    {/* {job?.salary} */}
                    LPA</Badge>
            </div>
          
        </div>
  )
}
