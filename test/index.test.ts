import { describe, expect, it } from 'vitest'
import { Options } from '../src/types'
import { search } from '../src/files'

const options: Options = {
  include: ['src/**/*'],
  search: [/searchC/]
}

describe('search', () => {
  it('text', async () => {
    const matches = await search(options)
    expect(matches).toMatchInlineSnapshot(`
      {
        "matches": [
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/files.ts",
            "matches": [
              {
                "end": 422,
                "match": "searchC",
                "start": 415,
              },
              {
                "end": 1042,
                "match": "searchC",
                "start": 1035,
              },
            ],
            "search": /searchC/,
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/worker.ts",
            "matches": [
              {
                "end": 31,
                "match": "searchC",
                "start": 24,
              },
            ],
            "search": /searchC/,
          },
        ],
      }
    `)
  })
})
