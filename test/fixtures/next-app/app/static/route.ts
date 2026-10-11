import { withClicktag } from 'clicktag/next'
import { options } from '../../options'

export const dynamic = 'force-static'

export const GET = withClicktag(async () => Response.json({ builtAt: Date.now() }), options)
