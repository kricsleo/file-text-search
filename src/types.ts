import { Pattern } from 'fast-glob'

export interface Options {
  search: Search[]
  include: Pattern[]
  exclude?: Pattern[]
}

export type Search = string | RegExp

export interface Result {
  search: Search
  file: string
  matches: Match[]
}

export interface Match {
  match: string
  start: number
  end: number
  // todo:
  // row: number
  // col: number
}
