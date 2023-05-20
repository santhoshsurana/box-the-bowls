import React from 'react'

const StatsCounter = () => {
    return (
        <>
            <section className=' max-w-6xl h-screen md:h-auto py-24 px-8 mx-auto'>
                <h1 className='text-3xl font-black pb-8 text-center uppercase text-slate-900 text-'>Counting Our Delicious Success!</h1>
                <ul className='flex md:flex-row text-center justify-between max-w-3xl mx-auto flex-col'>
                    <li className='p-4'>
                        <h2 className='text-6xl text-slate-800 font-black '>4.1+</h2>
                        <p className='text-lg py-1 text-slate-700 font-medium'>Taste Rating</p>
                    </li>
                    <li className='p-4'>
                        <h2 className='text-6xl text-slate-800 font-black '>12.6k+</h2>
                        <p className='text-lg py-1 text-slate-700 font-medium'>Customers</p>
                    </li>
                    <li className='p-4'>
                        <h2 className='text-6xl text-slate-800 font-black '>1.2L+</h2>
                        <p className='text-lg py-1 text-slate-700 font-medium'>Bowls Served</p>
                    </li>
                </ul>

            </section>
        </>
    )
}

export default StatsCounter