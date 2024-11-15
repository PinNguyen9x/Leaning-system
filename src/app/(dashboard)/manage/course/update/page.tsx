import CourseUpdate from '@/components/course/CourseUpdate'
import Heading from '@/components/typeography/Heading'

const page = ({
  searchParams,
}: {
  searchParams: {
    slug: string
  }
}) => {
  return (
    <>
      <Heading className="mb-8">Update Course</Heading>
      <CourseUpdate />
    </>
  )
}

export default page
