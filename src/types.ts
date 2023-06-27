import { Pattern } from 'fast-glob'

export type Text = string | RegExp

export interface Options {
  text: Text[]
  include: Pattern[]
  exclude?: Pattern[]
}

export interface TextMatch {
  text: Text
  files: Array<{
    path: string
    matches: Array<{
      content: string
      row: number
      col: number
    }>
  }>
}

export type TextMatches = TextMatch[]