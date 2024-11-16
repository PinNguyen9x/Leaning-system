import CourseAddNew from '@/components/course/CourseAddNew'
import Heading from '@/components/common/Heading'
import { getUserInfo } from '@/lib/actions/user.action'
import { auth } from '@clerk/nextjs/server'

/**
 * Page to create a new course. Only accessible by users with role `ADMIN`.
 * Redirects to `/sign-in` if not signed in.
 * Redirects to `/404` if signed in user does not have role `ADMIN`.
 */
const page = async () => {
  const { userId } = await auth()
  if (!userId) return null
  const mongoUser = await getUserInfo({ userId })
  if (!mongoUser) return null
  return (
    <>
      <Heading>Create Course</Heading>
      <CourseAddNew user={JSON.parse(JSON.stringify(mongoUser))} />
    </>
  )
}

export default page
