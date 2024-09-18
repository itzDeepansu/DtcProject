import React from 'react'
import RoutesTable from "@/components/standalone/RoutesTable";

const page = () => {
  return (
    <div className='h-[calc(100vh-4.8rem)] overflow-hidden pb-2 bg-gray-600'>
      <RoutesTable height={"calc(100vh-3rem)"}/>
    </div>
  )
}

export default page
