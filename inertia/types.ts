import type { Errors, ErrorBag } from '@inertiajs/core'

export type InertiaProps = {
  errors: Errors & ErrorBag
  message: {
    type: string
    content: string
  }
  isAuth: boolean
  user: {
    username: string
    role: string
  }
}

export interface Item {
  title: any
  fields: {
    id?: string | number | any
    [key: string]: any
  }
}

export type Role = 'admin' | 'agency' | 'branch' | 'guest'

export type User = {
  id?: string | number
  email?: string
  username?: string
  password?: string
  role?: Role
  updatedAt?: string
  createdAt?: string
}

export interface Agency {
  id?: number
  name?: string
  location?: string
  services?: string[]
  phone?: string
  email?: string
  address?: string
  user?: User
}
export interface Branch {
  id?: number
  name?: string
  location?: string
  phone?: string
  email?: string
  address?: string
  user?: User
}
