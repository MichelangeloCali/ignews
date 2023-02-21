import { useEffect } from 'react'
import { GetStaticProps } from 'next'
import { useSession } from 'next-auth/react'
import Link from 'next/link'
import Head from 'next/head'
import router from 'next/router'
import { Document } from '@prismicio/client/types/documents'
import * as prismicH from '@prismicio/helpers'

import { getPrismicClient } from '../../../services/prismic'
import styles from '../post.module.scss'

interface PostPreviewProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

const PostPreview = ({ post }: PostPreviewProps) => {
  const { data: session } = useSession()

  useEffect(() => {
    if (session?.activeSubscription) {
      router.push(`/posts/${post.slug}`)
    }
  }, [post.slug, session])

  return (
    <>
      <Head>
        <title>{post.title}</title>
      </Head>

      <main className={styles.container}>
        <article className={styles.post}>
          <h1>{post.title}</h1>
          <time>{post.updatedAt}</time>
          <div
            className={`${styles.postContent} ${styles.previewContent}`}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />

          <div className={styles.continueReading}>
            Quer continuar lendo?
            <Link href="/"> Inscreva-se agora 🤗</Link>
          </div>
        </article>
      </main>
    </>
  )
}

export default PostPreview

export const getStaticPaths = () => {
  return {
    paths: [],
    fallback: 'blocking',
  }
}

export const getStaticProps: GetStaticProps = async ({ params }) => {
  const { slug } = params!
  const prismic = getPrismicClient()

  const response: Document = await prismic.getByUID(
    'publication',
    String(slug),
    {}
  )

  const post = {
    slug,
    title: prismicH.asText(response.data.title),
    content: prismicH.asHTML(response.data.content.splice(0, 3)),
    updatedAt: new Date(response.last_publication_date!).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    ),
  }

  return {
    props: {
      post,
    },
    redirect: 60 * 30, //30 min
  }
}
