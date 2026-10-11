import type { NextRequest } from 'next/server'
import { withClicktag } from 'clicktag/next'
import { options } from '../../../../../options'

export const GET = withClicktag(
  async (request: NextRequest, { params }: { params: Promise<{ org: string; repo: string }> }) =>
    Response.json({ ...(await params), path: request.nextUrl.pathname }),
  options,
)
