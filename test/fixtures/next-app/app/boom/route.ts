import { withClicktag } from 'clicktag/next'
import { options } from '../../options'

export const POST = withClicktag(async () => {
  throw new TypeError('kaboom')
}, options)
