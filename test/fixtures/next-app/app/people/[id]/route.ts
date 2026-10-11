import { withClicktag } from 'clicktag/next'
import { options } from '../../../options'

export const GET = withClicktag(async () => Response.json({ ok: true }), { ...options, route: '/people/:personId' })
