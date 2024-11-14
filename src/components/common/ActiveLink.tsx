'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

interface ActiveLinkProps {
  url: string
  className?: string
  children?: React.ReactNode
}

const ActiveLink = ({
  children,
  url,
  className = 'p-3 rounded-md flex items-center gap-3 dark:text-grayDark  transition-all',
}: ActiveLinkProps) => {
  const pathname = usePathname()
  const isActive = pathname === url

  return (
    <Link
      href={url}
      className={`${className} ${
        isActive
          ? 'text-primary bg-primary bg-opacity-10 svg-animate'
          : 'hover:!text-primary hover:!bg-primary hover:!bg-opacity-10'
      }`}
    >
      {children}
    </Link>
  )
}

export default ActiveLink
