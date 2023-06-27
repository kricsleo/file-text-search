import { Match, Options } from './types';
import glob from 'fast-glob'
import Tinypool from 'tinypool'

const defaultExclude = [
  '**/node_modules/**',
  '**/dist/**',
]

export async function findFiles(options: Options) {
  const exclude = options.exclude || defaultExclude
  const files = await glob(options.include, {
    ignore: exclude,
    absolute: true,
    dot: true,
  })
  return files
}

export async function search(options: Options) {
  const tinypool = new Tinypool({
    // todo: replace './worker.ts' with bundled file name 
    filename: new URL('./worker.ts', import.meta.url).href,
    name: 'searchFile'
  })
  const files = await findFiles(options)
  const allMatches = await Promise.all(files.map(async file => {
    const matches: Omit<Match, 'file'>[] = await tinypool.run({ file, search: options.search })
    return matches.map(match => ({ ...match, file }))
  }))
  const matches = allMatches.flat().filter(match => match.matches.length)
  return { matches }
}
