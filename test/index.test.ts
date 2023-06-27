import { describe, expect, it } from 'vitest'
import { Options } from '../src/types'
import { search } from '../src/files'

const options: Options = {
  include: ['src/**/*'],
  search: [/searcH/i, 'search']
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
                "end": 429,
                "match": "search",
                "start": 423,
              },
              {
                "end": 561,
                "match": "search",
                "start": 555,
              },
              {
                "end": 754,
                "match": "search",
                "start": 748,
              },
              {
                "end": 770,
                "match": "search",
                "start": 764,
              },
            ],
            "search": /searcH/i,
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/files.ts",
            "matches": [
              {
                "end": 429,
                "match": "search",
                "start": 423,
              },
              {
                "end": 561,
                "match": "search",
                "start": 555,
              },
              {
                "end": 754,
                "match": "search",
                "start": 748,
              },
              {
                "end": 770,
                "match": "search",
                "start": 764,
              },
            ],
            "search": "search",
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/types.ts",
            "matches": [
              {
                "end": 55,
                "match": "Search",
                "start": 49,
              },
              {
                "end": 110,
                "match": "search",
                "start": 104,
              },
              {
                "end": 118,
                "match": "Search",
                "start": 112,
              },
              {
                "end": 200,
                "match": "search",
                "start": 194,
              },
              {
                "end": 208,
                "match": "Search",
                "start": 202,
              },
            ],
            "search": /searcH/i,
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/types.ts",
            "matches": [
              {
                "end": 110,
                "match": "search",
                "start": 104,
              },
              {
                "end": 200,
                "match": "search",
                "start": 194,
              },
            ],
            "search": "search",
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/worker.js",
            "matches": [
              {
                "end": 47,
                "match": "Search",
                "start": 41,
              },
              {
                "end": 97,
                "match": "search",
                "start": 91,
              },
              {
                "end": 120,
                "match": "search",
                "start": 114,
              },
              {
                "end": 138,
                "match": "search",
                "start": 132,
              },
              {
                "end": 157,
                "match": "search",
                "start": 151,
              },
              {
                "end": 195,
                "match": "search",
                "start": 189,
              },
              {
                "end": 226,
                "match": "search",
                "start": 220,
              },
              {
                "end": 241,
                "match": "search",
                "start": 235,
              },
              {
                "end": 257,
                "match": "search",
                "start": 251,
              },
              {
                "end": 272,
                "match": "search",
                "start": 266,
              },
              {
                "end": 352,
                "match": "search",
                "start": 346,
              },
              {
                "end": 531,
                "match": "search",
                "start": 525,
              },
              {
                "end": 641,
                "match": "search",
                "start": 635,
              },
              {
                "end": 652,
                "match": "search",
                "start": 646,
              },
              {
                "end": 684,
                "match": "search",
                "start": 678,
              },
              {
                "end": 707,
                "match": "search",
                "start": 701,
              },
              {
                "end": 728,
                "match": "search",
                "start": 722,
              },
            ],
            "search": /searcH/i,
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/worker.js",
            "matches": [
              {
                "end": 97,
                "match": "search",
                "start": 91,
              },
              {
                "end": 120,
                "match": "search",
                "start": 114,
              },
              {
                "end": 138,
                "match": "search",
                "start": 132,
              },
              {
                "end": 157,
                "match": "search",
                "start": 151,
              },
              {
                "end": 195,
                "match": "search",
                "start": 189,
              },
              {
                "end": 226,
                "match": "search",
                "start": 220,
              },
              {
                "end": 241,
                "match": "search",
                "start": 235,
              },
              {
                "end": 257,
                "match": "search",
                "start": 251,
              },
              {
                "end": 272,
                "match": "search",
                "start": 266,
              },
              {
                "end": 352,
                "match": "search",
                "start": 346,
              },
              {
                "end": 531,
                "match": "search",
                "start": 525,
              },
              {
                "end": 641,
                "match": "search",
                "start": 635,
              },
              {
                "end": 652,
                "match": "search",
                "start": 646,
              },
              {
                "end": 684,
                "match": "search",
                "start": 678,
              },
              {
                "end": 707,
                "match": "search",
                "start": 701,
              },
              {
                "end": 728,
                "match": "search",
                "start": 722,
              },
            ],
            "search": "search",
          },
        ],
      }
    `)
  })
})
