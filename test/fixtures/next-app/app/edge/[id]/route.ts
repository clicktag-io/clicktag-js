import { withClicktag } from 'clicktag/next'
import { options } from '../../../options'

export const runtime = 'edge'

export const GET = withClicktag(
  async (_request: Request, { params }: { params: Promise<{ id: string }> }) => Response.json(await params),
  options,
)
