import mongoose from 'mongoose'

declare global {
  var mongoose: { conn: mongoose.Connection | null; promise: Promise<mongoose.Mongoose> | null }
}

declare namespace NodeJS {
  interface ProcessEnv {
    MONGODB_URI: string
    NEXT_PUBLIC_API_KEY?: string
  }
}
export type TMenuItem = {
  url: string
  title: string
  icon?: React.ReactNode
}

type TCreateUserParams = {
  clerkId: string
  username: string
  email: string
  name?: string
  avatar?: string
}
type MenuItems = TMenuItem[]
export { ActiveLinkProps, TCreateUserParams, TMenuItem, MenuItems }
