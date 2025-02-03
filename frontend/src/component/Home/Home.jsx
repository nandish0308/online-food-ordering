import React from 'react'
import "./Home.css"
import Multiitemcarosel from './Multiitemcarosel'
import Restaurantcard from '../Restaurants/Restaurantcard'
const restaurant=[1]
const Home = () => {
  return (
    <div className='pb-10'>

        <section className='banner -z-50 relative flex flex-col justify-center
        items-center'>
             
             
            
             <div className='w-[50vw] z-10 text-center'>
                
              
             </div>
             <p className='text-2xl lg:text-6xl font-bold z-10 py-5'>Vamos food</p>
             <p className='z-10 text-black-300 text-xl lg:text-4xl'>Taste the convenience: Food, Fast and Delivered </p>

             <div className='cover absolute top-0 right-0'>

             </div>

             <div className='fadout'></div>
            
        </section> 
        {/* <section className='p-10 lg:py-10 lg:px-20'>
            <P className  ='text-2xl font-semibold text-black py-3 pb-10'> Topmeals </P> */}
            <section className='p-10 lg:py-10 lg:px-20'>
                <p className  ='text-2xl font-semibold text-black py-3 pb-10'> Topmeals </p>
            <Multiitemcarosel/>
        </section>

        <section className='px-5 lg:px-20 pt-10'>
            <h1 className='text-2xl font-semibold text-black pb-8'>
                 Customer's choice Restaurants
            </h1>
            <div className='flex flex-wrap items-center justify-around gap-5'>
                {
                restaurant.map((item)=><Restaurantcard/>)
                }
            </div>
        </section>
       
        
        
        </div>
  )
}

export default Home
