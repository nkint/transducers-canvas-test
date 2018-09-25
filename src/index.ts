import * as tx from '@thi.ng/transducers'

const canvas = document.createElement('canvas')
const ctx = canvas.getContext('2d')
document.body.appendChild(canvas)

const result = tx.transduce(
  tx.map((x: any) => {
    const ret = [x * 10, 10]
    return ret
  }),
  tx.push(),
  tx.range(4),
)

ctx.beginPath()
result.forEach((point: [number, number]) => {
  ctx.lineTo(...point)
})
ctx.stroke()

const hot = module.hot
if (hot) {
  hot.dispose(() => canvas.remove())
}
