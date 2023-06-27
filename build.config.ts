import { defineBuildConfig } from 'unbuild'

export default defineBuildConfig({
  rollup: {
    replace: {
      './worker.ts': id => {
        console.log('id--------', id)
      }
    }
  },
})
