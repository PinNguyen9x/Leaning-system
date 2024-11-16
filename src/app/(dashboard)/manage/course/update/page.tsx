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
  const courses = await getCourseBySlug({
    slug: searchParams.slug,
  })
  if (!courses) return null
  return (
    <>
      <Heading className="mb-8">Update Course</Heading>
      <CourseUpdate data={JSON.parse(JSON.stringify(courses))} />
    </>
  )
}

export default page
