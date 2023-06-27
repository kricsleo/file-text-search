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
                "end": 24,
                "match": "Search",
                "start": 18,
              },
              {
                "end": 421,
                "match": "search",
                "start": 415,
              },
              {
                "end": 452,
                "match": "search",
                "start": 446,
              },
              {
                "end": 460,
                "match": "Search",
                "start": 454,
              },
              {
                "end": 478,
                "match": "search",
                "start": 472,
              },
              {
                "end": 497,
                "match": "search",
                "start": 491,
              },
              {
                "end": 535,
                "match": "search",
                "start": 529,
              },
              {
                "end": 566,
                "match": "search",
                "start": 560,
              },
              {
                "end": 581,
                "match": "search",
                "start": 575,
              },
              {
                "end": 597,
                "match": "search",
                "start": 591,
              },
              {
                "end": 612,
                "match": "search",
                "start": 606,
              },
              {
                "end": 692,
                "match": "search",
                "start": 686,
              },
              {
                "end": 873,
                "match": "search",
                "start": 867,
              },
              {
                "end": 998,
                "match": "search",
                "start": 992,
              },
              {
                "end": 1009,
                "match": "search",
                "start": 1003,
              },
              {
                "end": 1041,
                "match": "search",
                "start": 1035,
              },
              {
                "end": 1064,
                "match": "search",
                "start": 1058,
              },
              {
                "end": 1085,
                "match": "search",
                "start": 1079,
              },
              {
                "end": 1217,
                "match": "search",
                "start": 1211,
              },
              {
                "end": 1376,
                "match": "search",
                "start": 1370,
              },
            ],
            "search": /searcH/i,
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/files.ts",
            "matches": [
              {
                "end": 421,
                "match": "search",
                "start": 415,
              },
              {
                "end": 452,
                "match": "search",
                "start": 446,
              },
              {
                "end": 478,
                "match": "search",
                "start": 472,
              },
              {
                "end": 497,
                "match": "search",
                "start": 491,
              },
              {
                "end": 535,
                "match": "search",
                "start": 529,
              },
              {
                "end": 566,
                "match": "search",
                "start": 560,
              },
              {
                "end": 581,
                "match": "search",
                "start": 575,
              },
              {
                "end": 597,
                "match": "search",
                "start": 591,
              },
              {
                "end": 612,
                "match": "search",
                "start": 606,
              },
              {
                "end": 692,
                "match": "search",
                "start": 686,
              },
              {
                "end": 873,
                "match": "search",
                "start": 867,
              },
              {
                "end": 998,
                "match": "search",
                "start": 992,
              },
              {
                "end": 1009,
                "match": "search",
                "start": 1003,
              },
              {
                "end": 1041,
                "match": "search",
                "start": 1035,
              },
              {
                "end": 1064,
                "match": "search",
                "start": 1058,
              },
              {
                "end": 1085,
                "match": "search",
                "start": 1079,
              },
              {
                "end": 1217,
                "match": "search",
                "start": 1211,
              },
              {
                "end": 1376,
                "match": "search",
                "start": 1370,
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
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/worker.ts",
            "matches": [
              {
                "end": 30,
                "match": "search",
                "start": 24,
              },
            ],
            "search": /searcH/i,
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/worker.ts",
            "matches": [
              {
                "end": 30,
                "match": "search",
                "start": 24,
              },
            ],
            "search": "search",
          },
        ],
      }
    `)
  })
})
