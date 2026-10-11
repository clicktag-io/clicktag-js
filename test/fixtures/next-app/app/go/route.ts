import { redirect } from 'next/navigation'
import { withClicktag } from 'clicktag/next'
import { options } from '../../options'

export const dynamic = 'force-dynamic'

export const GET = withClicktag(async () => redirect('/users/1'), options)
