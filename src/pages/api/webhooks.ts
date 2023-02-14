import { Readable } from 'stream'
import { NextApiRequest, NextApiResponse } from 'next'
import Stripe from 'stripe'
import { stripe } from '../../services/stripe'

const buffer = async (readable: Readable) => {
  const chunks = []

  for await (const chunck of readable) {
    chunks.push(typeof chunck === 'string' ? Buffer.from(chunck) : chunck)
  }

  return Buffer.concat(chunks)
}

export const config = {
  api: {
    bodyParser: false,
  },
}

const relevantEvents = new Set(['checkout.session.completed'])

const webhooks = async (req: NextApiRequest, res: NextApiResponse) => {
  if (req.method === 'POST') {
    const buf = await buffer(req)
    const secret = req.headers['stripe-signature']

    let event: Stripe.Event

    try {
      event = stripe.webhooks.constructEvent(
        buf,
        secret!,
        process.env.STRIPE_WEBHOOK_SECRET!
      )
    } catch (err: any) {
      return res.status(400).send(`Webhook error: ${err.message}`)
    }

    const { type } = event

    if (relevantEvents.has(type)) {
      console.log('Evento recebido', event)
    }

    res.json({ received: true })
  } else {
    res.setHeader('Allow', 'POST')
    res.status(405).end('Method not allowed')
  }
}

export default webhooks
