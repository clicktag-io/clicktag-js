import { notFound } from 'next/navigation'
import { withClicktag } from 'clicktag/next'
import { options } from '../../../options'

export const GET = withClicktag(async (_request: Request, { params }: { params: Promise<{ id: string }> }) => {
  const { id } = await params
  if (id === 'missing') notFound()
  return Response.json({ id })
}, options)
