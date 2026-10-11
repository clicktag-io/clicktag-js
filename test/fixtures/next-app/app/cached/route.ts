import { withClicktag } from 'clicktag/next'
import { options } from '../../options'

export const revalidate = 1

export const GET = withClicktag(async () => Response.json({ builtAt: Date.now() }), options)
