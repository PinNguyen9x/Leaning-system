import { CourseGrid } from '@/components/common'
import CourseItem from '@/components/course/CourseItem'
import Heading from '@/components/typeography/Heading'
import createUser from '@/lib/actions/user.action'
import React from 'react'

const page = async () => {
  const user = await createUser({
    name: 'John Doe',
    username: 'johndoe',
    email_address: 'qg7QD@example.com',
    clerkId: 'user_id',
  })
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
