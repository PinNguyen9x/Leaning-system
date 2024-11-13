import { CourseGrid } from '@/components/common'
import CourseItem from '@/components/course/CourseItem'
import Heading from '@/components/typeography/Heading'

const page = () => {
  return (
    <>
      <Heading>Manage Study</Heading>
      <CourseGrid>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
        <CourseItem></CourseItem>
      </CourseGrid>
    </>
  )
}

export default page
