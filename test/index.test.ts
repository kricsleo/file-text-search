import { describe, expect, it } from 'vitest'
import { Options } from '../src/types'
import { search } from '../src/files'

const options: Options = {
  include: ['src/**/*.ts'],
  search: ['search']
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
                "index": 389,
                "match": "search",
              },
              {
                "index": 420,
                "match": "search",
              },
              {
                "index": 446,
                "match": "search",
              },
              {
                "index": 465,
                "match": "search",
              },
              {
                "index": 503,
                "match": "search",
              },
              {
                "index": 523,
                "match": "search",
              },
              {
                "index": 590,
                "match": "search",
              },
              {
                "index": 708,
                "match": "search",
              },
              {
                "index": 833,
                "match": "search",
              },
              {
                "index": 844,
                "match": "search",
              },
              {
                "index": 876,
                "match": "search",
              },
              {
                "index": 899,
                "match": "search",
              },
              {
                "index": 920,
                "match": "search",
              },
              {
                "index": 1052,
                "match": "search",
              },
              {
                "index": 1211,
                "match": "search",
              },
            ],
            "search": "search",
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/types.ts",
            "matches": [
              {
                "index": 104,
                "match": "search",
              },
              {
                "index": 194,
                "match": "search",
              },
            ],
            "search": "search",
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/worker.ts",
            "matches": [
              {
                "index": 24,
                "match": "search",
              },
            ],
            "search": "search",
          },
        ],
      }
    `)
  })
})
