import { CourseGrid } from '@/components/common'
import Heading from '@/components/common/Heading'
import CourseItem from '@/components/course/CourseItem'
import { getAllCourses } from '@/lib/actions/course.action'

const page = async () => {
  const courses = (await getAllCourses()) || []
  return (
    <>
      <Heading>Discover</Heading>
      <CourseGrid>
        {courses.length > 0 &&
          courses?.map((item) => <CourseItem key={item.slug} data={item}></CourseItem>)}
      </CourseGrid>
    </>
  )
}

export default page
