import type { NextOptions } from 'clicktag/next'

export const options: NextOptions = {
  endpoint: process.env.CLICKTAG_ENDPOINT,
  flushDelayMs: 0,
  debug: true,
}
