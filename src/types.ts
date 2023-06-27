import { Pattern } from 'fast-glob'

export type Search = string | RegExp

export interface Options {
  search: Search[]
  include: Pattern[]
  exclude?: Pattern[]
}

export interface Match {
  search: Search
  file: string
  matches: Array<{
    match: string
    start: number
    end: number
    // todo:
    // row: number
    // col: number
  }>
}
