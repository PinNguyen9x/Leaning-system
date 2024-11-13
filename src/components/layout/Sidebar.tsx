import { MENU_ITEMS } from '@/constants'
import { TMenuItem } from '@/types'
import { UserButton } from '@clerk/nextjs'
import { ActiveLink } from '../common'

const Sidebar = () => {
  return (
    <div className="p-5 border-r border-r-gray-200 bg-white flex flex-col">
      <a href="/" className="font-bold text-3xl inline-block mb-5">
        <span className="text-primary">U</span>
        cademy
      </a>
      <ul className="flex flex-col gap-2">
        {MENU_ITEMS.map((item) => (
          <MenuItem key={item.url} url={item.url} title={item.title} icon={item.icon} />
        ))}
      </ul>
      <div className="mt-auto flex items-center justify-end">
        <UserButton />
      </div>
    </div>
  )
}

function MenuItem({ url = '/', title = '', icon }: TMenuItem) {
  return (
    <li>
      <ActiveLink url={url}>
        {icon}
        {title}
      </ActiveLink>
    </li>
  )
}

export default Sidebar
