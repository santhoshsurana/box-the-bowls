import chef from '../../assets/images/chef.png'
import comfort from '../../assets/images/comfort.png'
import taste from '../../assets/images/taste.png'

const Features = () => {
    return (
        <>
            <section className=' max-w-6xl md:h-auto py-24 px-8 mx-auto'>
                <h1 className='text-3xl font-black pb-8 text-center uppercase text-slate-900'>What Makes Us Unique</h1>
                <ul className='flex md:flex-row text-center justify-between max-w-3xl mx-auto flex-col'>
                    <li className='p-4'>
                        <img src={comfort} alt='' className='w-48 mx-auto aspect-square pb-8' />
                        <p className='text-lg py-1 text-slate-700  font-medium'>Comfort and Convenience</p>
                    </li>
                    <li className='p-4'>
                        <img src={taste} alt='' className='w-48 mx-auto aspect-square pb-8' />
                        <p className='text-lg py-1 text-slate-700 font-medium'>Delightful Fusion of Flavors</p>
                    </li>
                    <li className='p-4'>
                        <img src={chef} alt='' className='w-48 mx-auto aspect-square pb-8' />
                        <p className='text-lg py-1 text-slate-700 font-medium'>Crafted by Expert Chefs</p>
                    </li>
                </ul>

            </section>
        </>
    )
}

export default Features