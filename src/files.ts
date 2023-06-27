import { Options, Search } from './types';
import glob from 'fast-glob'
import fs from 'fs/promises'

const defaultExclude = ['node_modules/']

export async function findFiles(options: Options) {
  const exclude = options.exclude || defaultExclude
  const files = await glob(options.include, {
    ignore: exclude,
    absolute: true,
    dot: true,
  })
  return files
}

export function searchContent(content: string, search: Search) {
  const searchReg = typeof search === 'string' 
    ? new RegExp(search, 'g') 
    : search
  const matches = []
  for (const match of content.matchAll(searchReg)) {
    matches.push({ match: match[0], index: match.index })
  }
  return matches
}

export async function searchFile(file: string, options: Options) {
  const content = await fs.readFile(file, 'utf-8')
  const allMatches = options.search.map(search => {
    const matches = searchContent(content, search)
    return { search, matches }
  })
  const matches = allMatches.filter(match => match.matches.length)
  return matches
}

export async function search(options: Options) {
  const files = await findFiles(options)
  const allMatches = await Promise.all(files.map(async file => {
    const matches = await searchFile(file, options)
    return matches.map(match => ({ ...match, file }))
  }))
  const matches = allMatches.flat().filter(match => match.matches.length)
  return { matches }
}
