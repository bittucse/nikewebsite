import React from 'react'
import { reviews } from '../constants'
import ReviewCard from '../components/ReviewCard'

const CustomerReview = () => {
  return (
    <section className='max-container'>
      <h3 className='font-bold font-palanquin text-center text-4xl'>
        What Our
        <span className='text-coral-red'> Customers </span>
        Say?
      </h3>
      <p className='m-auto mt-4 text-center max-w-lg info-text'> Hear genuine stories from our satisfied customers about their
        exceptional experiences with us.</p>

        <div className='mt-12 flex justify-evenly items-center max-lg:flex-col gap-14'>
        {reviews.map((review)=>(
          
          <ReviewCard key={review} {...review} ></ReviewCard>

        ))}

        </div>
    </section>
  )
}

export default CustomerReview
