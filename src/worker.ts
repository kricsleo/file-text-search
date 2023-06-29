import fs from 'fs/promises'
import { Match, Search } from './types'

export function searchContent(content: string, search: Search): Omit<Match, 'file'>[] {
  const searchReg = typeof search === 'string' 
    ? new RegExp(search, 'g') 
    : new RegExp(search.source, search.global ? search.flags : search.flags + 'g')
  const matches = []
  for (const match of content.matchAll(searchReg)) {
    matches.push({
      search, 
      match: match[0], 
      start: match.index!, 
      end: match.index! + match[0].length
    })
  }
  return matches
}

export async function searchFile(options: { file: string; search: Search[] }): Promise<Match[]> {
  const { file, search } = options
  const content = await fs.readFile(file, 'utf-8')
  const matches = search
    .map(search => searchContent(content, search))
    .flat()
    .map(match => ({ ...match, file }))
  return matches
}