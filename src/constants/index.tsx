import {
  IconComment,
  IconCourse,
  IconExplore,
  IconOrder,
  IconStudy,
  IconUsers,
} from '@/components/icons'
import { TMenuItem } from '@/types'

export const MENU_ITEMS: TMenuItem[] = [
  {
    url: '/',
    title: 'Discover',
    icon: <IconExplore className="size-5" />,
  },
  {
    url: '/study',
    title: 'Khu vực học tập',
    icon: <IconStudy className="size-5" />,
  },
  {
    url: '/manage/course',
    title: 'Quản lý khóa học',
    icon: <IconCourse className="size-5" />,
  },
  {
    url: '/manage/member',
    title: 'Quản lý thành viên',
    icon: <IconUsers className="size-5" />,
  },
  {
    url: '/manage/order',
    title: 'Quản lý đơn hàng',
    icon: <IconOrder className="size-5" />,
  },
  {
    url: '/manage/comment',
    title: 'Quản lý bình luận',
    icon: <IconComment className="size-5" />,
  },
]
