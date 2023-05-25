import nopage_logo from '../assets/images/404.png'

const NoPage = () => {
  return (
    <>
    <img src={nopage_logo} className='w-96 mx-auto' alt="" />
    <h1 className='text-3xl font-bold text-btb-yellow text-center'>404 page not found!</h1>
    </>
  )
}

export default NoPage