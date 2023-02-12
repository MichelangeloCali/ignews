import { useSession, signIn } from 'next-auth/react'
import styles from './SubscribeButton.module.scss'

interface SubscribeButtonProps {
  priceId: string
}

export const SubscribeButton = ({ priceId }: SubscribeButtonProps) => {
  const { data: session } = useSession()

  const handleSubscribe = () => {
    if (!session) {
      signIn('github')
      return
    }
  }

  return (
    <button type="button" className={styles.subscribeButton}>
      Inscreva-se
    </button>
  )
}
