import React from 'react'
import image8 from '../../assets/images/image-8-min.webp'


const Items = () => {
    return (
        <>

            <div className=" bg-white  rounded  aspect-square  shadow-lg m-4">
                <img className="mx-auto" src={image8} alt="" />
                <h3 className='font-bold text-xl text-slate-900 drop-shadow-lg py-4 text-center'>Deserts</h3>
                <p className="px-4 pb-4 text-sm">Choose from 7 Curry options+ Choice of Rice, Served in 750 Ml rice bowl</p>
            </div>
        </>
    )
}

export default Items