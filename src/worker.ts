import fs from 'fs/promises'
import { Search, Options } from './types'

export function searchContent(content: string, search: Search) {
  const searchReg = typeof search === 'string' 
    ? new RegExp(search, 'g') 
    : new RegExp(search.source, search.global ? search.flags : search.flags + 'g')
  const matches = []
  for (const match of content.matchAll(searchReg)) {
    matches.push({ 
      match: match[0], 
      start: match.index!, 
      end: match.index! + match[0].length
    })
  }
  return matches
}

export async function searchFile(options: { file: string; search: Options['search'] }) {
  const content = await fs.readFile(options.file, 'utf-8')
  const allMatches = options.search.map(search => {
    const matches = searchContent(content, search)
    return { search, matches }
  })
  const matches = allMatches.filter(match => match.matches.length)
  return matches
}