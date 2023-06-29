import { Options, Match } from './types';
import glob from 'fast-glob'
import Tinypool from 'tinypool'

export * from './types'

const defaultExclude = [
  '**/node_modules/**',
  '**/dist/**',
]

export async function search(options: Options): Promise<Match[]> {
  const tinypool = new Tinypool({
    filename: new URL('./worker.mjs', import.meta.url).href,
    name: 'searchFile'
  })
  const files = await findFiles(options)
  const matches = await Promise.all(files.map(
    file => tinypool.run({ file, search: options.search }) as Promise<Match[]>
  ))
  return matches.flat()
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
