import { Options } from './types';
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

export async function searchFile(path: string, options: Options) {
  const content = await fs.readFile(path, 'utf-8')
  const matches = options.text.map(text => {
    const textReg = typeof text === 'string' ? new RegExp(text) : text
    const matches = content.match(textReg)
    return { text, matches }
  })
  return matches
}

export async function search(options: Options) {
  const files = await findFiles(options)
  const matches = await Promise.all(files.map(async path => {
    const matches = await searchFile(path, options)
    return { path, matches }
  }))
  return matches
}
