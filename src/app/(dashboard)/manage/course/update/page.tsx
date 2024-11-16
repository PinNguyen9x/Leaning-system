import CourseUpdate from '@/components/course/CourseUpdate'
import Heading from '@/components/common/Heading'
import { getCourseBySlug } from '@/lib/actions/course.action'

const page = async ({
  searchParams,
}: {
  searchParams: {
    slug: string
  }
}) => {
  const findCourse = await getCourseBySlug({
    slug: searchParams.slug,
  })
  if (!findCourse) return null
  return (
    <>
      <Heading className="mb-8">Update Course</Heading>
      <CourseUpdate />
    </>
  )
}

export default page
