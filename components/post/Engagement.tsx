import React from 'react'
import InteractionMetric from './InteractionMetric'
import CommentSection from './comment/CommentSection'

const Engagement = () => {
  return (
    <section className='overflow-hidden relative'>
      <InteractionMetric />
      <CommentSection />
    </section>
  )
}

export default Engagement