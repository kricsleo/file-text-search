import { describe, expect, it } from 'vitest'
import { Options } from '../dist/types'
import { search } from '../dist/index'

const options: Options = {
  include: ['src/**/*'],
  search: [/searcH/i, 'search']
}

describe('search', () => {
  it('text', async () => {
    const matches = await search(options)
    const files = new Set(matches.map(t => t.file))
    const matchCount = matches.reduce((acc, cur) => acc + cur.matches.length, 0)
    expect(files.size).toMatchInlineSnapshot('3')
    expect(matchCount).toMatchInlineSnapshot('52')
  })
})
