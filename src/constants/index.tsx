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
    title: 'Study',
    icon: <IconStudy className="size-5" />,
  },
  {
    url: '/manage/course',
    title: 'Manage course',
    icon: <IconCourse className="size-5" />,
  },
  {
    url: '/manage/member',
    title: 'Manage member',
    icon: <IconUsers className="size-5" />,
  },
  {
    url: '/manage/order',
    title: 'Manage order',
    icon: <IconOrder className="size-5" />,
  },
  {
    url: '/manage/comment',
    title: 'Manage comment',
    icon: <IconComment className="size-5" />,
  },
]
