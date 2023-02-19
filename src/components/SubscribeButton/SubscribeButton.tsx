import { useSession, signIn } from 'next-auth/react'
import { useRouter } from 'next/router'
import { api } from '@/services/api'
import { getStripeJs } from '@/services/stripe-js'
import styles from './SubscribeButton.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const { data: session } = useSession()
  const router = useRouter()

  const handleSubscribe = async () => {
    if (!session) {
      signIn('github')
      return
    }

    if (session.activeSubscription) {
      router.push('/posts')
      return
    }

    try {
      const response = await api.post('/subscribe')

      const { sessionId } = response.data

      const stripe = await getStripeJs()
      await stripe?.redirectToCheckout({ sessionId })
    } catch (err) {
      if (err instanceof Error) {
        alert(err.message)
      } else {
        alert('Ocorreu um erro desconhecido')
      }
    }
  }

  return (
    <button
      type="button"
      className={styles.subscribeButton}
      onClick={handleSubscribe}
    >
      Inscreva-se
    </button>
  )
}
