import { Options, Result } from './types';
import glob from 'fast-glob'
import Tinypool from 'tinypool'

const defaultExclude = [
  '**/node_modules/**',
  '**/dist/**',
]

export async function search(options: Options): Promise<Result[]> {
  const tinypool = new Tinypool({
    filename: new URL('./worker.mjs', import.meta.url).href,
    name: 'searchFile'
  })
  const files = await findFiles(options)
  const allMatches = await Promise.all(files.map(async file => {
    const matches: Omit<Result, 'file'>[] = await tinypool.run({ file, search: options.search })
    return matches.map(match => ({ ...match, file }))
  }))
  const matches = allMatches.flat().filter(match => match.matches.length)
  return matches
}

async function findFiles(options: Options) {
  const exclude = options.exclude || defaultExclude
  const files = await glob(options.include, {
    ignore: exclude,
    absolute: true,
    dot: true,
  })
  return files
}
