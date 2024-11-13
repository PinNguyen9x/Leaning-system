import { CourseGrid } from '@/components/common'
import CourseItem from '@/components/course/CourseItem'
import Heading from '@/components/typeography/Heading'
import React from 'react'

const page = () => {
  return (
    <>
      <Heading>Discover</Heading>
      <CourseGrid>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGrid>
    </>
  )
}

export default page
