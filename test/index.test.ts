import { describe, expect, it } from 'vitest'
import { Options } from '../src/types'
import { search } from '../src/files'

const options: Options = {
  include: ['**/*'],
  search: ['search']
}

describe('search', () => {
  it('text', async () => {
    const matches = await search(options)
    expect(matches).toMatchInlineSnapshot(`
      {
        "matches": [
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/README.md",
            "matches": [
              {
                "index": 12,
                "match": "search",
              },
              {
                "index": 75,
                "match": "search",
              },
              {
                "index": 144,
                "match": "search",
              },
            ],
            "search": "search",
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/package.json",
            "matches": [
              {
                "index": 23,
                "match": "search",
              },
              {
                "index": 245,
                "match": "search",
              },
              {
                "index": 352,
                "match": "search",
              },
              {
                "index": 418,
                "match": "search",
              },
            ],
            "search": "search",
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/.git/FETCH_HEAD",
            "matches": [
              {
                "index": 91,
                "match": "search",
              },
            ],
            "search": "search",
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/.git/config",
            "matches": [
              {
                "index": 196,
                "match": "search",
              },
            ],
            "search": "search",
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/src/files.ts",
            "matches": [
              {
                "index": 394,
                "match": "search",
              },
              {
                "index": 425,
                "match": "search",
              },
              {
                "index": 451,
                "match": "search",
              },
              {
                "index": 470,
                "match": "search",
              },
              {
                "index": 508,
                "match": "search",
              },
              {
                "index": 528,
                "match": "search",
              },
              {
                "index": 595,
                "match": "search",
              },
              {
                "index": 713,
                "match": "search",
              },
              {
                "index": 838,
                "match": "search",
              },
              {
                "index": 849,
                "match": "search",
              },
              {
                "index": 881,
                "match": "search",
              },
              {
                "index": 904,
                "match": "search",
              },
              {
                "index": 925,
                "match": "search",
              },
              {
                "index": 1057,
                "match": "search",
              },
              {
                "index": 1216,
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
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/test/index.test.ts",
            "matches": [
              {
                "index": 94,
                "match": "search",
              },
              {
                "index": 174,
                "match": "search",
              },
              {
                "index": 184,
                "match": "search",
              },
              {
                "index": 206,
                "match": "search",
              },
              {
                "index": 276,
                "match": "search",
              },
              {
                "index": 448,
                "match": "search",
              },
              {
                "index": 563,
                "match": "search",
              },
              {
                "index": 660,
                "match": "search",
              },
              {
                "index": 758,
                "match": "search",
              },
              {
                "index": 812,
                "match": "search",
              },
              {
                "index": 822,
                "match": "search",
              },
              {
                "index": 927,
                "match": "search",
              },
              {
                "index": 1045,
                "match": "search",
              },
              {
                "index": 1143,
                "match": "search",
              },
              {
                "index": 1241,
                "match": "search",
              },
              {
                "index": 1339,
                "match": "search",
              },
              {
                "index": 1393,
                "match": "search",
              },
              {
                "index": 1403,
                "match": "search",
              },
              {
                "index": 1508,
                "match": "search",
              },
              {
                "index": 1629,
                "match": "search",
              },
              {
                "index": 1683,
                "match": "search",
              },
              {
                "index": 1693,
                "match": "search",
              },
              {
                "index": 1798,
                "match": "search",
              },
              {
                "index": 1916,
                "match": "search",
              },
              {
                "index": 1970,
                "match": "search",
              },
              {
                "index": 1980,
                "match": "search",
              },
              {
                "index": 2085,
                "match": "search",
              },
              {
                "index": 2204,
                "match": "search",
              },
              {
                "index": 2302,
                "match": "search",
              },
              {
                "index": 2400,
                "match": "search",
              },
              {
                "index": 2498,
                "match": "search",
              },
              {
                "index": 2596,
                "match": "search",
              },
              {
                "index": 2694,
                "match": "search",
              },
              {
                "index": 2792,
                "match": "search",
              },
              {
                "index": 2890,
                "match": "search",
              },
              {
                "index": 2988,
                "match": "search",
              },
              {
                "index": 3086,
                "match": "search",
              },
              {
                "index": 3184,
                "match": "search",
              },
              {
                "index": 3282,
                "match": "search",
              },
              {
                "index": 3380,
                "match": "search",
              },
              {
                "index": 3479,
                "match": "search",
              },
              {
                "index": 3578,
                "match": "search",
              },
              {
                "index": 3632,
                "match": "search",
              },
              {
                "index": 3642,
                "match": "search",
              },
              {
                "index": 3747,
                "match": "search",
              },
              {
                "index": 3866,
                "match": "search",
              },
              {
                "index": 3964,
                "match": "search",
              },
              {
                "index": 4018,
                "match": "search",
              },
              {
                "index": 4028,
                "match": "search",
              },
              {
                "index": 4133,
                "match": "search",
              },
              {
                "index": 4252,
                "match": "search",
              },
              {
                "index": 4306,
                "match": "search",
              },
              {
                "index": 4316,
                "match": "search",
              },
              {
                "index": 4421,
                "match": "search",
              },
              {
                "index": 4545,
                "match": "search",
              },
              {
                "index": 4643,
                "match": "search",
              },
              {
                "index": 4741,
                "match": "search",
              },
              {
                "index": 4839,
                "match": "search",
              },
              {
                "index": 4937,
                "match": "search",
              },
              {
                "index": 5035,
                "match": "search",
              },
              {
                "index": 5133,
                "match": "search",
              },
              {
                "index": 5231,
                "match": "search",
              },
              {
                "index": 5329,
                "match": "search",
              },
              {
                "index": 5427,
                "match": "search",
              },
              {
                "index": 5525,
                "match": "search",
              },
              {
                "index": 5623,
                "match": "search",
              },
              {
                "index": 5722,
                "match": "search",
              },
              {
                "index": 5821,
                "match": "search",
              },
              {
                "index": 5920,
                "match": "search",
              },
              {
                "index": 6019,
                "match": "search",
              },
              {
                "index": 6118,
                "match": "search",
              },
              {
                "index": 6217,
                "match": "search",
              },
              {
                "index": 6316,
                "match": "search",
              },
              {
                "index": 6415,
                "match": "search",
              },
              {
                "index": 6514,
                "match": "search",
              },
              {
                "index": 6613,
                "match": "search",
              },
              {
                "index": 6712,
                "match": "search",
              },
              {
                "index": 6811,
                "match": "search",
              },
              {
                "index": 6910,
                "match": "search",
              },
              {
                "index": 7009,
                "match": "search",
              },
              {
                "index": 7108,
                "match": "search",
              },
              {
                "index": 7207,
                "match": "search",
              },
              {
                "index": 7306,
                "match": "search",
              },
              {
                "index": 7405,
                "match": "search",
              },
              {
                "index": 7504,
                "match": "search",
              },
              {
                "index": 7603,
                "match": "search",
              },
              {
                "index": 7702,
                "match": "search",
              },
              {
                "index": 7801,
                "match": "search",
              },
              {
                "index": 7900,
                "match": "search",
              },
              {
                "index": 7999,
                "match": "search",
              },
              {
                "index": 8098,
                "match": "search",
              },
              {
                "index": 8197,
                "match": "search",
              },
              {
                "index": 8296,
                "match": "search",
              },
              {
                "index": 8395,
                "match": "search",
              },
              {
                "index": 8494,
                "match": "search",
              },
              {
                "index": 8593,
                "match": "search",
              },
              {
                "index": 8692,
                "match": "search",
              },
              {
                "index": 8791,
                "match": "search",
              },
              {
                "index": 8890,
                "match": "search",
              },
              {
                "index": 8989,
                "match": "search",
              },
              {
                "index": 9088,
                "match": "search",
              },
              {
                "index": 9187,
                "match": "search",
              },
              {
                "index": 9286,
                "match": "search",
              },
              {
                "index": 9385,
                "match": "search",
              },
              {
                "index": 9484,
                "match": "search",
              },
              {
                "index": 9583,
                "match": "search",
              },
              {
                "index": 9682,
                "match": "search",
              },
              {
                "index": 9781,
                "match": "search",
              },
              {
                "index": 9880,
                "match": "search",
              },
              {
                "index": 9979,
                "match": "search",
              },
              {
                "index": 10078,
                "match": "search",
              },
              {
                "index": 10177,
                "match": "search",
              },
              {
                "index": 10276,
                "match": "search",
              },
              {
                "index": 10375,
                "match": "search",
              },
              {
                "index": 10474,
                "match": "search",
              },
              {
                "index": 10573,
                "match": "search",
              },
              {
                "index": 10672,
                "match": "search",
              },
              {
                "index": 10771,
                "match": "search",
              },
              {
                "index": 10870,
                "match": "search",
              },
              {
                "index": 10969,
                "match": "search",
              },
              {
                "index": 11068,
                "match": "search",
              },
              {
                "index": 11167,
                "match": "search",
              },
              {
                "index": 11266,
                "match": "search",
              },
              {
                "index": 11365,
                "match": "search",
              },
              {
                "index": 11464,
                "match": "search",
              },
              {
                "index": 11563,
                "match": "search",
              },
              {
                "index": 11662,
                "match": "search",
              },
              {
                "index": 11761,
                "match": "search",
              },
              {
                "index": 11860,
                "match": "search",
              },
              {
                "index": 11959,
                "match": "search",
              },
              {
                "index": 12058,
                "match": "search",
              },
              {
                "index": 12157,
                "match": "search",
              },
              {
                "index": 12256,
                "match": "search",
              },
              {
                "index": 12355,
                "match": "search",
              },
              {
                "index": 12454,
                "match": "search",
              },
              {
                "index": 12553,
                "match": "search",
              },
              {
                "index": 12652,
                "match": "search",
              },
              {
                "index": 12751,
                "match": "search",
              },
              {
                "index": 12850,
                "match": "search",
              },
              {
                "index": 12949,
                "match": "search",
              },
              {
                "index": 13048,
                "match": "search",
              },
              {
                "index": 13147,
                "match": "search",
              },
              {
                "index": 13246,
                "match": "search",
              },
              {
                "index": 13345,
                "match": "search",
              },
              {
                "index": 13444,
                "match": "search",
              },
              {
                "index": 13543,
                "match": "search",
              },
              {
                "index": 13642,
                "match": "search",
              },
              {
                "index": 13741,
                "match": "search",
              },
              {
                "index": 13840,
                "match": "search",
              },
              {
                "index": 13939,
                "match": "search",
              },
              {
                "index": 14038,
                "match": "search",
              },
              {
                "index": 14137,
                "match": "search",
              },
              {
                "index": 14236,
                "match": "search",
              },
              {
                "index": 14335,
                "match": "search",
              },
              {
                "index": 14434,
                "match": "search",
              },
              {
                "index": 14533,
                "match": "search",
              },
              {
                "index": 14632,
                "match": "search",
              },
              {
                "index": 14731,
                "match": "search",
              },
              {
                "index": 14830,
                "match": "search",
              },
              {
                "index": 14929,
                "match": "search",
              },
              {
                "index": 15028,
                "match": "search",
              },
              {
                "index": 15127,
                "match": "search",
              },
              {
                "index": 15226,
                "match": "search",
              },
              {
                "index": 15325,
                "match": "search",
              },
              {
                "index": 15425,
                "match": "search",
              },
              {
                "index": 15525,
                "match": "search",
              },
              {
                "index": 15625,
                "match": "search",
              },
              {
                "index": 15725,
                "match": "search",
              },
              {
                "index": 15825,
                "match": "search",
              },
              {
                "index": 15925,
                "match": "search",
              },
              {
                "index": 16025,
                "match": "search",
              },
              {
                "index": 16125,
                "match": "search",
              },
              {
                "index": 16225,
                "match": "search",
              },
              {
                "index": 16325,
                "match": "search",
              },
              {
                "index": 16425,
                "match": "search",
              },
              {
                "index": 16525,
                "match": "search",
              },
              {
                "index": 16625,
                "match": "search",
              },
              {
                "index": 16725,
                "match": "search",
              },
              {
                "index": 16825,
                "match": "search",
              },
              {
                "index": 16925,
                "match": "search",
              },
              {
                "index": 17025,
                "match": "search",
              },
              {
                "index": 17125,
                "match": "search",
              },
              {
                "index": 17225,
                "match": "search",
              },
              {
                "index": 17325,
                "match": "search",
              },
              {
                "index": 17425,
                "match": "search",
              },
              {
                "index": 17525,
                "match": "search",
              },
              {
                "index": 17625,
                "match": "search",
              },
              {
                "index": 17725,
                "match": "search",
              },
              {
                "index": 17825,
                "match": "search",
              },
              {
                "index": 17925,
                "match": "search",
              },
              {
                "index": 18025,
                "match": "search",
              },
              {
                "index": 18125,
                "match": "search",
              },
              {
                "index": 18225,
                "match": "search",
              },
              {
                "index": 18325,
                "match": "search",
              },
              {
                "index": 18425,
                "match": "search",
              },
              {
                "index": 18525,
                "match": "search",
              },
              {
                "index": 18625,
                "match": "search",
              },
              {
                "index": 18725,
                "match": "search",
              },
              {
                "index": 18825,
                "match": "search",
              },
              {
                "index": 18925,
                "match": "search",
              },
              {
                "index": 19025,
                "match": "search",
              },
              {
                "index": 19125,
                "match": "search",
              },
              {
                "index": 19225,
                "match": "search",
              },
              {
                "index": 19325,
                "match": "search",
              },
              {
                "index": 19425,
                "match": "search",
              },
              {
                "index": 19525,
                "match": "search",
              },
              {
                "index": 19625,
                "match": "search",
              },
              {
                "index": 19725,
                "match": "search",
              },
              {
                "index": 19825,
                "match": "search",
              },
              {
                "index": 19925,
                "match": "search",
              },
              {
                "index": 20025,
                "match": "search",
              },
              {
                "index": 20125,
                "match": "search",
              },
              {
                "index": 20225,
                "match": "search",
              },
              {
                "index": 20325,
                "match": "search",
              },
              {
                "index": 20425,
                "match": "search",
              },
              {
                "index": 20525,
                "match": "search",
              },
              {
                "index": 20625,
                "match": "search",
              },
              {
                "index": 20725,
                "match": "search",
              },
              {
                "index": 20825,
                "match": "search",
              },
              {
                "index": 20925,
                "match": "search",
              },
              {
                "index": 21025,
                "match": "search",
              },
              {
                "index": 21125,
                "match": "search",
              },
              {
                "index": 21225,
                "match": "search",
              },
              {
                "index": 21325,
                "match": "search",
              },
              {
                "index": 21425,
                "match": "search",
              },
              {
                "index": 21525,
                "match": "search",
              },
              {
                "index": 21625,
                "match": "search",
              },
              {
                "index": 21725,
                "match": "search",
              },
              {
                "index": 21825,
                "match": "search",
              },
              {
                "index": 21925,
                "match": "search",
              },
              {
                "index": 22025,
                "match": "search",
              },
              {
                "index": 22125,
                "match": "search",
              },
              {
                "index": 22225,
                "match": "search",
              },
              {
                "index": 22325,
                "match": "search",
              },
              {
                "index": 22425,
                "match": "search",
              },
              {
                "index": 22525,
                "match": "search",
              },
              {
                "index": 22625,
                "match": "search",
              },
              {
                "index": 22725,
                "match": "search",
              },
              {
                "index": 22825,
                "match": "search",
              },
              {
                "index": 22925,
                "match": "search",
              },
              {
                "index": 23025,
                "match": "search",
              },
              {
                "index": 23125,
                "match": "search",
              },
              {
                "index": 23225,
                "match": "search",
              },
              {
                "index": 23325,
                "match": "search",
              },
              {
                "index": 23425,
                "match": "search",
              },
              {
                "index": 23525,
                "match": "search",
              },
              {
                "index": 23625,
                "match": "search",
              },
              {
                "index": 23725,
                "match": "search",
              },
              {
                "index": 23825,
                "match": "search",
              },
              {
                "index": 23925,
                "match": "search",
              },
              {
                "index": 24025,
                "match": "search",
              },
              {
                "index": 24125,
                "match": "search",
              },
              {
                "index": 24225,
                "match": "search",
              },
              {
                "index": 24325,
                "match": "search",
              },
              {
                "index": 24425,
                "match": "search",
              },
              {
                "index": 24525,
                "match": "search",
              },
              {
                "index": 24625,
                "match": "search",
              },
              {
                "index": 24725,
                "match": "search",
              },
              {
                "index": 24825,
                "match": "search",
              },
              {
                "index": 24925,
                "match": "search",
              },
              {
                "index": 25025,
                "match": "search",
              },
              {
                "index": 25125,
                "match": "search",
              },
              {
                "index": 25225,
                "match": "search",
              },
              {
                "index": 25325,
                "match": "search",
              },
              {
                "index": 25425,
                "match": "search",
              },
              {
                "index": 25525,
                "match": "search",
              },
              {
                "index": 25625,
                "match": "search",
              },
              {
                "index": 25725,
                "match": "search",
              },
              {
                "index": 25825,
                "match": "search",
              },
              {
                "index": 25925,
                "match": "search",
              },
              {
                "index": 26025,
                "match": "search",
              },
              {
                "index": 26125,
                "match": "search",
              },
              {
                "index": 26225,
                "match": "search",
              },
              {
                "index": 26325,
                "match": "search",
              },
              {
                "index": 26425,
                "match": "search",
              },
              {
                "index": 26525,
                "match": "search",
              },
              {
                "index": 26625,
                "match": "search",
              },
              {
                "index": 26725,
                "match": "search",
              },
              {
                "index": 26825,
                "match": "search",
              },
              {
                "index": 26925,
                "match": "search",
              },
              {
                "index": 27025,
                "match": "search",
              },
              {
                "index": 27125,
                "match": "search",
              },
              {
                "index": 27225,
                "match": "search",
              },
              {
                "index": 27325,
                "match": "search",
              },
              {
                "index": 27425,
                "match": "search",
              },
              {
                "index": 27525,
                "match": "search",
              },
              {
                "index": 27625,
                "match": "search",
              },
              {
                "index": 27725,
                "match": "search",
              },
              {
                "index": 27825,
                "match": "search",
              },
              {
                "index": 27925,
                "match": "search",
              },
              {
                "index": 28025,
                "match": "search",
              },
              {
                "index": 28125,
                "match": "search",
              },
              {
                "index": 28225,
                "match": "search",
              },
              {
                "index": 28325,
                "match": "search",
              },
              {
                "index": 28425,
                "match": "search",
              },
              {
                "index": 28525,
                "match": "search",
              },
              {
                "index": 28625,
                "match": "search",
              },
              {
                "index": 28725,
                "match": "search",
              },
              {
                "index": 28825,
                "match": "search",
              },
              {
                "index": 28925,
                "match": "search",
              },
              {
                "index": 29025,
                "match": "search",
              },
              {
                "index": 29125,
                "match": "search",
              },
              {
                "index": 29225,
                "match": "search",
              },
              {
                "index": 29325,
                "match": "search",
              },
              {
                "index": 29425,
                "match": "search",
              },
              {
                "index": 29525,
                "match": "search",
              },
              {
                "index": 29625,
                "match": "search",
              },
              {
                "index": 29725,
                "match": "search",
              },
              {
                "index": 29825,
                "match": "search",
              },
              {
                "index": 29925,
                "match": "search",
              },
              {
                "index": 30025,
                "match": "search",
              },
              {
                "index": 30125,
                "match": "search",
              },
              {
                "index": 30225,
                "match": "search",
              },
              {
                "index": 30325,
                "match": "search",
              },
              {
                "index": 30425,
                "match": "search",
              },
              {
                "index": 30525,
                "match": "search",
              },
              {
                "index": 30625,
                "match": "search",
              },
              {
                "index": 30725,
                "match": "search",
              },
              {
                "index": 30825,
                "match": "search",
              },
              {
                "index": 30925,
                "match": "search",
              },
              {
                "index": 31025,
                "match": "search",
              },
              {
                "index": 31125,
                "match": "search",
              },
              {
                "index": 31225,
                "match": "search",
              },
              {
                "index": 31325,
                "match": "search",
              },
              {
                "index": 31425,
                "match": "search",
              },
              {
                "index": 31525,
                "match": "search",
              },
              {
                "index": 31625,
                "match": "search",
              },
              {
                "index": 31725,
                "match": "search",
              },
              {
                "index": 31825,
                "match": "search",
              },
              {
                "index": 31925,
                "match": "search",
              },
              {
                "index": 32025,
                "match": "search",
              },
              {
                "index": 32125,
                "match": "search",
              },
              {
                "index": 32225,
                "match": "search",
              },
              {
                "index": 32325,
                "match": "search",
              },
              {
                "index": 32425,
                "match": "search",
              },
              {
                "index": 32525,
                "match": "search",
              },
              {
                "index": 32625,
                "match": "search",
              },
              {
                "index": 32725,
                "match": "search",
              },
              {
                "index": 32825,
                "match": "search",
              },
              {
                "index": 32925,
                "match": "search",
              },
              {
                "index": 33025,
                "match": "search",
              },
              {
                "index": 33125,
                "match": "search",
              },
              {
                "index": 33225,
                "match": "search",
              },
              {
                "index": 33325,
                "match": "search",
              },
              {
                "index": 33425,
                "match": "search",
              },
              {
                "index": 33525,
                "match": "search",
              },
              {
                "index": 33625,
                "match": "search",
              },
              {
                "index": 33725,
                "match": "search",
              },
              {
                "index": 33825,
                "match": "search",
              },
              {
                "index": 33925,
                "match": "search",
              },
              {
                "index": 34025,
                "match": "search",
              },
              {
                "index": 34125,
                "match": "search",
              },
              {
                "index": 34225,
                "match": "search",
              },
              {
                "index": 34325,
                "match": "search",
              },
              {
                "index": 34425,
                "match": "search",
              },
              {
                "index": 34525,
                "match": "search",
              },
              {
                "index": 34625,
                "match": "search",
              },
              {
                "index": 34725,
                "match": "search",
              },
              {
                "index": 34825,
                "match": "search",
              },
              {
                "index": 34925,
                "match": "search",
              },
              {
                "index": 35025,
                "match": "search",
              },
              {
                "index": 35125,
                "match": "search",
              },
              {
                "index": 35225,
                "match": "search",
              },
              {
                "index": 35325,
                "match": "search",
              },
              {
                "index": 35425,
                "match": "search",
              },
              {
                "index": 35525,
                "match": "search",
              },
              {
                "index": 35625,
                "match": "search",
              },
              {
                "index": 35725,
                "match": "search",
              },
              {
                "index": 35825,
                "match": "search",
              },
              {
                "index": 35925,
                "match": "search",
              },
              {
                "index": 36025,
                "match": "search",
              },
              {
                "index": 36125,
                "match": "search",
              },
              {
                "index": 36225,
                "match": "search",
              },
              {
                "index": 36325,
                "match": "search",
              },
              {
                "index": 36425,
                "match": "search",
              },
              {
                "index": 36525,
                "match": "search",
              },
              {
                "index": 36625,
                "match": "search",
              },
              {
                "index": 36725,
                "match": "search",
              },
              {
                "index": 36825,
                "match": "search",
              },
              {
                "index": 36925,
                "match": "search",
              },
              {
                "index": 37025,
                "match": "search",
              },
              {
                "index": 37125,
                "match": "search",
              },
              {
                "index": 37225,
                "match": "search",
              },
              {
                "index": 37325,
                "match": "search",
              },
              {
                "index": 37425,
                "match": "search",
              },
              {
                "index": 37525,
                "match": "search",
              },
              {
                "index": 37625,
                "match": "search",
              },
              {
                "index": 37725,
                "match": "search",
              },
              {
                "index": 37825,
                "match": "search",
              },
              {
                "index": 37925,
                "match": "search",
              },
              {
                "index": 38025,
                "match": "search",
              },
              {
                "index": 38125,
                "match": "search",
              },
              {
                "index": 38225,
                "match": "search",
              },
              {
                "index": 38325,
                "match": "search",
              },
              {
                "index": 38425,
                "match": "search",
              },
              {
                "index": 38525,
                "match": "search",
              },
              {
                "index": 38625,
                "match": "search",
              },
              {
                "index": 38725,
                "match": "search",
              },
              {
                "index": 38825,
                "match": "search",
              },
              {
                "index": 38925,
                "match": "search",
              },
              {
                "index": 39025,
                "match": "search",
              },
              {
                "index": 39125,
                "match": "search",
              },
              {
                "index": 39225,
                "match": "search",
              },
              {
                "index": 39325,
                "match": "search",
              },
              {
                "index": 39425,
                "match": "search",
              },
              {
                "index": 39525,
                "match": "search",
              },
              {
                "index": 39625,
                "match": "search",
              },
              {
                "index": 39725,
                "match": "search",
              },
              {
                "index": 39825,
                "match": "search",
              },
              {
                "index": 39925,
                "match": "search",
              },
              {
                "index": 40025,
                "match": "search",
              },
              {
                "index": 40125,
                "match": "search",
              },
              {
                "index": 40225,
                "match": "search",
              },
              {
                "index": 40325,
                "match": "search",
              },
              {
                "index": 40425,
                "match": "search",
              },
              {
                "index": 40525,
                "match": "search",
              },
              {
                "index": 40625,
                "match": "search",
              },
              {
                "index": 40725,
                "match": "search",
              },
              {
                "index": 40825,
                "match": "search",
              },
              {
                "index": 40925,
                "match": "search",
              },
              {
                "index": 41025,
                "match": "search",
              },
              {
                "index": 41125,
                "match": "search",
              },
              {
                "index": 41225,
                "match": "search",
              },
              {
                "index": 41325,
                "match": "search",
              },
              {
                "index": 41425,
                "match": "search",
              },
              {
                "index": 41525,
                "match": "search",
              },
              {
                "index": 41625,
                "match": "search",
              },
              {
                "index": 41725,
                "match": "search",
              },
              {
                "index": 41825,
                "match": "search",
              },
              {
                "index": 41925,
                "match": "search",
              },
              {
                "index": 42025,
                "match": "search",
              },
              {
                "index": 42125,
                "match": "search",
              },
              {
                "index": 42225,
                "match": "search",
              },
              {
                "index": 42325,
                "match": "search",
              },
              {
                "index": 42425,
                "match": "search",
              },
              {
                "index": 42525,
                "match": "search",
              },
              {
                "index": 42625,
                "match": "search",
              },
              {
                "index": 42725,
                "match": "search",
              },
              {
                "index": 42825,
                "match": "search",
              },
              {
                "index": 42925,
                "match": "search",
              },
              {
                "index": 43025,
                "match": "search",
              },
              {
                "index": 43125,
                "match": "search",
              },
              {
                "index": 43225,
                "match": "search",
              },
              {
                "index": 43325,
                "match": "search",
              },
              {
                "index": 43425,
                "match": "search",
              },
              {
                "index": 43525,
                "match": "search",
              },
              {
                "index": 43625,
                "match": "search",
              },
              {
                "index": 43725,
                "match": "search",
              },
              {
                "index": 43825,
                "match": "search",
              },
              {
                "index": 43925,
                "match": "search",
              },
              {
                "index": 44025,
                "match": "search",
              },
              {
                "index": 44125,
                "match": "search",
              },
              {
                "index": 44225,
                "match": "search",
              },
              {
                "index": 44325,
                "match": "search",
              },
              {
                "index": 44425,
                "match": "search",
              },
              {
                "index": 44525,
                "match": "search",
              },
              {
                "index": 44625,
                "match": "search",
              },
              {
                "index": 44725,
                "match": "search",
              },
              {
                "index": 44825,
                "match": "search",
              },
              {
                "index": 44925,
                "match": "search",
              },
              {
                "index": 45025,
                "match": "search",
              },
              {
                "index": 45125,
                "match": "search",
              },
              {
                "index": 45225,
                "match": "search",
              },
              {
                "index": 45325,
                "match": "search",
              },
              {
                "index": 45425,
                "match": "search",
              },
              {
                "index": 45525,
                "match": "search",
              },
              {
                "index": 45625,
                "match": "search",
              },
              {
                "index": 45725,
                "match": "search",
              },
              {
                "index": 45825,
                "match": "search",
              },
              {
                "index": 45925,
                "match": "search",
              },
              {
                "index": 46025,
                "match": "search",
              },
              {
                "index": 46125,
                "match": "search",
              },
              {
                "index": 46225,
                "match": "search",
              },
              {
                "index": 46325,
                "match": "search",
              },
              {
                "index": 46425,
                "match": "search",
              },
              {
                "index": 46525,
                "match": "search",
              },
              {
                "index": 46625,
                "match": "search",
              },
              {
                "index": 46725,
                "match": "search",
              },
              {
                "index": 46825,
                "match": "search",
              },
              {
                "index": 46925,
                "match": "search",
              },
              {
                "index": 47025,
                "match": "search",
              },
              {
                "index": 47125,
                "match": "search",
              },
              {
                "index": 47225,
                "match": "search",
              },
              {
                "index": 47325,
                "match": "search",
              },
              {
                "index": 47425,
                "match": "search",
              },
              {
                "index": 47525,
                "match": "search",
              },
              {
                "index": 47625,
                "match": "search",
              },
              {
                "index": 47725,
                "match": "search",
              },
              {
                "index": 47825,
                "match": "search",
              },
              {
                "index": 47925,
                "match": "search",
              },
              {
                "index": 48025,
                "match": "search",
              },
              {
                "index": 48125,
                "match": "search",
              },
              {
                "index": 48225,
                "match": "search",
              },
              {
                "index": 48325,
                "match": "search",
              },
              {
                "index": 48425,
                "match": "search",
              },
              {
                "index": 48525,
                "match": "search",
              },
              {
                "index": 48625,
                "match": "search",
              },
              {
                "index": 48725,
                "match": "search",
              },
              {
                "index": 48825,
                "match": "search",
              },
              {
                "index": 48925,
                "match": "search",
              },
              {
                "index": 49025,
                "match": "search",
              },
              {
                "index": 49125,
                "match": "search",
              },
              {
                "index": 49225,
                "match": "search",
              },
              {
                "index": 49325,
                "match": "search",
              },
              {
                "index": 49425,
                "match": "search",
              },
              {
                "index": 49525,
                "match": "search",
              },
              {
                "index": 49625,
                "match": "search",
              },
              {
                "index": 49725,
                "match": "search",
              },
              {
                "index": 49825,
                "match": "search",
              },
              {
                "index": 49925,
                "match": "search",
              },
              {
                "index": 50025,
                "match": "search",
              },
              {
                "index": 50125,
                "match": "search",
              },
              {
                "index": 50225,
                "match": "search",
              },
              {
                "index": 50325,
                "match": "search",
              },
              {
                "index": 50425,
                "match": "search",
              },
              {
                "index": 50525,
                "match": "search",
              },
              {
                "index": 50625,
                "match": "search",
              },
              {
                "index": 50725,
                "match": "search",
              },
              {
                "index": 50825,
                "match": "search",
              },
              {
                "index": 50925,
                "match": "search",
              },
              {
                "index": 51025,
                "match": "search",
              },
              {
                "index": 51125,
                "match": "search",
              },
              {
                "index": 51225,
                "match": "search",
              },
              {
                "index": 51325,
                "match": "search",
              },
              {
                "index": 51425,
                "match": "search",
              },
              {
                "index": 51525,
                "match": "search",
              },
              {
                "index": 51625,
                "match": "search",
              },
              {
                "index": 51725,
                "match": "search",
              },
              {
                "index": 51825,
                "match": "search",
              },
              {
                "index": 51925,
                "match": "search",
              },
              {
                "index": 52025,
                "match": "search",
              },
              {
                "index": 52125,
                "match": "search",
              },
              {
                "index": 52225,
                "match": "search",
              },
              {
                "index": 52325,
                "match": "search",
              },
              {
                "index": 52425,
                "match": "search",
              },
              {
                "index": 52525,
                "match": "search",
              },
              {
                "index": 52625,
                "match": "search",
              },
              {
                "index": 52725,
                "match": "search",
              },
              {
                "index": 52825,
                "match": "search",
              },
              {
                "index": 52925,
                "match": "search",
              },
              {
                "index": 53025,
                "match": "search",
              },
              {
                "index": 53125,
                "match": "search",
              },
              {
                "index": 53225,
                "match": "search",
              },
              {
                "index": 53325,
                "match": "search",
              },
              {
                "index": 53425,
                "match": "search",
              },
              {
                "index": 53525,
                "match": "search",
              },
              {
                "index": 53625,
                "match": "search",
              },
              {
                "index": 53725,
                "match": "search",
              },
              {
                "index": 53825,
                "match": "search",
              },
              {
                "index": 53925,
                "match": "search",
              },
              {
                "index": 54025,
                "match": "search",
              },
              {
                "index": 54125,
                "match": "search",
              },
              {
                "index": 54225,
                "match": "search",
              },
              {
                "index": 54325,
                "match": "search",
              },
              {
                "index": 54425,
                "match": "search",
              },
              {
                "index": 54525,
                "match": "search",
              },
              {
                "index": 54625,
                "match": "search",
              },
              {
                "index": 54725,
                "match": "search",
              },
              {
                "index": 54825,
                "match": "search",
              },
              {
                "index": 54925,
                "match": "search",
              },
              {
                "index": 55025,
                "match": "search",
              },
              {
                "index": 55125,
                "match": "search",
              },
              {
                "index": 55225,
                "match": "search",
              },
              {
                "index": 55325,
                "match": "search",
              },
              {
                "index": 55425,
                "match": "search",
              },
              {
                "index": 55525,
                "match": "search",
              },
              {
                "index": 55625,
                "match": "search",
              },
              {
                "index": 55725,
                "match": "search",
              },
              {
                "index": 55825,
                "match": "search",
              },
              {
                "index": 55925,
                "match": "search",
              },
              {
                "index": 56025,
                "match": "search",
              },
              {
                "index": 56125,
                "match": "search",
              },
              {
                "index": 56225,
                "match": "search",
              },
              {
                "index": 56325,
                "match": "search",
              },
              {
                "index": 56425,
                "match": "search",
              },
              {
                "index": 56525,
                "match": "search",
              },
              {
                "index": 56625,
                "match": "search",
              },
              {
                "index": 56725,
                "match": "search",
              },
              {
                "index": 56825,
                "match": "search",
              },
              {
                "index": 56925,
                "match": "search",
              },
              {
                "index": 57025,
                "match": "search",
              },
              {
                "index": 57125,
                "match": "search",
              },
              {
                "index": 57225,
                "match": "search",
              },
              {
                "index": 57325,
                "match": "search",
              },
              {
                "index": 57425,
                "match": "search",
              },
              {
                "index": 57525,
                "match": "search",
              },
              {
                "index": 57625,
                "match": "search",
              },
              {
                "index": 57725,
                "match": "search",
              },
              {
                "index": 57825,
                "match": "search",
              },
              {
                "index": 57925,
                "match": "search",
              },
              {
                "index": 58025,
                "match": "search",
              },
              {
                "index": 58125,
                "match": "search",
              },
              {
                "index": 58225,
                "match": "search",
              },
              {
                "index": 58325,
                "match": "search",
              },
              {
                "index": 58425,
                "match": "search",
              },
              {
                "index": 58525,
                "match": "search",
              },
              {
                "index": 58625,
                "match": "search",
              },
              {
                "index": 58725,
                "match": "search",
              },
              {
                "index": 58825,
                "match": "search",
              },
              {
                "index": 58925,
                "match": "search",
              },
              {
                "index": 59025,
                "match": "search",
              },
              {
                "index": 59125,
                "match": "search",
              },
              {
                "index": 59225,
                "match": "search",
              },
              {
                "index": 59325,
                "match": "search",
              },
              {
                "index": 59425,
                "match": "search",
              },
              {
                "index": 59525,
                "match": "search",
              },
              {
                "index": 59625,
                "match": "search",
              },
              {
                "index": 59725,
                "match": "search",
              },
              {
                "index": 59825,
                "match": "search",
              },
              {
                "index": 59925,
                "match": "search",
              },
              {
                "index": 60025,
                "match": "search",
              },
              {
                "index": 60125,
                "match": "search",
              },
              {
                "index": 60225,
                "match": "search",
              },
              {
                "index": 60325,
                "match": "search",
              },
              {
                "index": 60425,
                "match": "search",
              },
              {
                "index": 60525,
                "match": "search",
              },
              {
                "index": 60625,
                "match": "search",
              },
              {
                "index": 60725,
                "match": "search",
              },
              {
                "index": 60825,
                "match": "search",
              },
              {
                "index": 60925,
                "match": "search",
              },
              {
                "index": 61025,
                "match": "search",
              },
              {
                "index": 61125,
                "match": "search",
              },
              {
                "index": 61225,
                "match": "search",
              },
              {
                "index": 61325,
                "match": "search",
              },
              {
                "index": 61425,
                "match": "search",
              },
              {
                "index": 61525,
                "match": "search",
              },
              {
                "index": 61625,
                "match": "search",
              },
              {
                "index": 61725,
                "match": "search",
              },
              {
                "index": 61825,
                "match": "search",
              },
              {
                "index": 61925,
                "match": "search",
              },
              {
                "index": 62025,
                "match": "search",
              },
              {
                "index": 62125,
                "match": "search",
              },
              {
                "index": 62225,
                "match": "search",
              },
              {
                "index": 62325,
                "match": "search",
              },
              {
                "index": 62425,
                "match": "search",
              },
              {
                "index": 62525,
                "match": "search",
              },
              {
                "index": 62625,
                "match": "search",
              },
              {
                "index": 62725,
                "match": "search",
              },
              {
                "index": 62825,
                "match": "search",
              },
              {
                "index": 62925,
                "match": "search",
              },
              {
                "index": 63025,
                "match": "search",
              },
              {
                "index": 63125,
                "match": "search",
              },
              {
                "index": 63225,
                "match": "search",
              },
              {
                "index": 63325,
                "match": "search",
              },
              {
                "index": 63425,
                "match": "search",
              },
              {
                "index": 63525,
                "match": "search",
              },
              {
                "index": 63625,
                "match": "search",
              },
              {
                "index": 63725,
                "match": "search",
              },
              {
                "index": 63825,
                "match": "search",
              },
              {
                "index": 63925,
                "match": "search",
              },
              {
                "index": 64025,
                "match": "search",
              },
              {
                "index": 64125,
                "match": "search",
              },
              {
                "index": 64225,
                "match": "search",
              },
              {
                "index": 64325,
                "match": "search",
              },
              {
                "index": 64425,
                "match": "search",
              },
              {
                "index": 64525,
                "match": "search",
              },
              {
                "index": 64625,
                "match": "search",
              },
              {
                "index": 64725,
                "match": "search",
              },
              {
                "index": 64825,
                "match": "search",
              },
              {
                "index": 64925,
                "match": "search",
              },
              {
                "index": 65025,
                "match": "search",
              },
              {
                "index": 65125,
                "match": "search",
              },
              {
                "index": 65179,
                "match": "search",
              },
              {
                "index": 65189,
                "match": "search",
              },
              {
                "index": 65294,
                "match": "search",
              },
              {
                "index": 65415,
                "match": "search",
              },
              {
                "index": 65469,
                "match": "search",
              },
              {
                "index": 65479,
                "match": "search",
              },
              {
                "index": 65584,
                "match": "search",
              },
              {
                "index": 65718,
                "match": "search",
              },
              {
                "index": 65772,
                "match": "search",
              },
              {
                "index": 65782,
                "match": "search",
              },
            ],
            "search": "search",
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/.git/logs/HEAD",
            "matches": [
              {
                "index": 790,
                "match": "search",
              },
            ],
            "search": "search",
          },
          {
            "file": "/Users/shengfeng.xu/Documents/workspace/file-text-search/.git/logs/refs/heads/master",
            "matches": [
              {
                "index": 613,
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
