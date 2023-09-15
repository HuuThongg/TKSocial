import React from 'react'
import InteractionMetric from './InteractionMetric'
import CommentSection from './comment/CommentSection'
import { SchemaComment } from './comment/constanst'

interface EngagementProps {
  comments: SchemaComment
}
const Engagement = ({comments} : EngagementProps) => {
  return (
    <section className='overflow-hidden relative'>
      <InteractionMetric />
      {/* <CommentSection comments={comments} /> */}
    </section>
  )
}

export default Engagement