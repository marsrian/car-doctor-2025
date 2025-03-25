import React from 'react'

const PageBanner = ({pageName, pagePath}) => {
  return (
    <div className="relative h-[300px] ">
        {/* Background Image */}
        <div className="absolute inset-0 bg-[url('/assets/images/checkout/checkout.png')] bg-cover bg-center rounded-[10px]"></div>

        {/* Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-[#151515] to-transparent rounded-[10px]"></div>
        <div className="flex items-center h-full">
          <h1 className="text-[45px] text-white font-bold ml-20 z-10">
            {pageName}
          </h1>
        </div>
        <div
          className="absolute bottom-0 left-1/3 bg-[#FF3811] text-white px-16 py-4"
          style={{ clipPath: "polygon(15% 74%, 83% 74%, 100% 100%, 0% 100%)" }}
        >
          <h1 className="z-10 text-xl font-semibold text-white mt-40">
            {pagePath}
          </h1>
        </div>
      </div>
  )
}

export default PageBanner
