import { Pattern } from 'fast-glob'

export interface Options {
  search: Search[]
  include: Pattern[]
  exclude?: Pattern[]
}

export type Search = string | RegExp

export interface Match {
  search: Search
  file: string  
  match: string
  start: number
  end: number
}
