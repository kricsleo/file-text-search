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
    expect(matches).toMatchInlineSnapshot(`
      [
        {
          "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/index.ts",
          "matches": [
            {
              "end": 201,
              "match": "search",
              "start": 195,
            },
            {
              "end": 353,
              "match": "search",
              "start": 347,
            },
            {
              "end": 547,
              "match": "search",
              "start": 541,
            },
            {
              "end": 563,
              "match": "search",
              "start": 557,
            },
          ],
          "search": /searcH/i,
        },
        {
          "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/index.ts",
          "matches": [
            {
              "end": 201,
              "match": "search",
              "start": 195,
            },
            {
              "end": 353,
              "match": "search",
              "start": 347,
            },
            {
              "end": 547,
              "match": "search",
              "start": 541,
            },
            {
              "end": 563,
              "match": "search",
              "start": 557,
            },
          ],
          "search": "search",
        },
        {
          "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/types.ts",
          "matches": [
            {
              "end": 72,
              "match": "search",
              "start": 66,
            },
            {
              "end": 80,
              "match": "Search",
              "start": 74,
            },
            {
              "end": 147,
              "match": "Search",
              "start": 141,
            },
            {
              "end": 201,
              "match": "search",
              "start": 195,
            },
            {
              "end": 209,
              "match": "Search",
              "start": 203,
            },
          ],
          "search": /searcH/i,
        },
        {
          "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/types.ts",
          "matches": [
            {
              "end": 72,
              "match": "search",
              "start": 66,
            },
            {
              "end": 201,
              "match": "search",
              "start": 195,
            },
          ],
          "search": "search",
        },
        {
          "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/worker.ts",
          "matches": [
            {
              "end": 59,
              "match": "Search",
              "start": 53,
            },
            {
              "end": 100,
              "match": "search",
              "start": 94,
            },
            {
              "end": 131,
              "match": "search",
              "start": 125,
            },
            {
              "end": 139,
              "match": "Search",
              "start": 133,
            },
            {
              "end": 166,
              "match": "search",
              "start": 160,
            },
            {
              "end": 185,
              "match": "search",
              "start": 179,
            },
            {
              "end": 223,
              "match": "search",
              "start": 217,
            },
            {
              "end": 254,
              "match": "search",
              "start": 248,
            },
            {
              "end": 269,
              "match": "search",
              "start": 263,
            },
            {
              "end": 285,
              "match": "search",
              "start": 279,
            },
            {
              "end": 300,
              "match": "search",
              "start": 294,
            },
            {
              "end": 380,
              "match": "search",
              "start": 374,
            },
            {
              "end": 561,
              "match": "search",
              "start": 555,
            },
            {
              "end": 597,
              "match": "search",
              "start": 591,
            },
            {
              "end": 605,
              "match": "Search",
              "start": 599,
            },
            {
              "end": 740,
              "match": "search",
              "start": 734,
            },
            {
              "end": 751,
              "match": "search",
              "start": 745,
            },
            {
              "end": 783,
              "match": "search",
              "start": 777,
            },
            {
              "end": 806,
              "match": "search",
              "start": 800,
            },
            {
              "end": 827,
              "match": "search",
              "start": 821,
            },
          ],
          "search": /searcH/i,
        },
        {
          "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/worker.ts",
          "matches": [
            {
              "end": 100,
              "match": "search",
              "start": 94,
            },
            {
              "end": 131,
              "match": "search",
              "start": 125,
            },
            {
              "end": 166,
              "match": "search",
              "start": 160,
            },
            {
              "end": 185,
              "match": "search",
              "start": 179,
            },
            {
              "end": 223,
              "match": "search",
              "start": 217,
            },
            {
              "end": 254,
              "match": "search",
              "start": 248,
            },
            {
              "end": 269,
              "match": "search",
              "start": 263,
            },
            {
              "end": 285,
              "match": "search",
              "start": 279,
            },
            {
              "end": 300,
              "match": "search",
              "start": 294,
            },
            {
              "end": 380,
              "match": "search",
              "start": 374,
            },
            {
              "end": 561,
              "match": "search",
              "start": 555,
            },
            {
              "end": 597,
              "match": "search",
              "start": 591,
            },
            {
              "end": 740,
              "match": "search",
              "start": 734,
            },
            {
              "end": 751,
              "match": "search",
              "start": 745,
            },
            {
              "end": 783,
              "match": "search",
              "start": 777,
            },
            {
              "end": 806,
              "match": "search",
              "start": 800,
            },
            {
              "end": 827,
              "match": "search",
              "start": 821,
            },
          ],
          "search": "search",
        },
      ]
    `)
  })
})
