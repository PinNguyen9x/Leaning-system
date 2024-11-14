import { CourseGrid } from '@/components/common'
import CourseItem from '@/components/course/CourseItem'
import Heading from '@/components/typeography/Heading'
import createUser from '@/lib/actions/user.action'
import React from 'react'

const page = async () => {
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
