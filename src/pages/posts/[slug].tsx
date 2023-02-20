import Head from 'next/head'
import { GetServerSideProps } from 'next'
import { getSession } from 'next-auth/react'
import { Document } from '@prismicio/client/types/documents'
import * as prismicH from '@prismicio/helpers'

import { getPrismicClient } from '@/services/prismic'
import styles from '../posts/post.module.scss'
import { inspect } from 'node:util'

interface IPrismicResponseData {
  title: any
  content: any
}

interface PostProps {
  post: {
    slug: string
    title: string
    content: string
    updatedAt: string
  }
}

const Post = ({ post }: PostProps) => {
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
            className={styles.postContent}
            dangerouslySetInnerHTML={{ __html: post.content }}
          />
        </article>
      </main>
    </>
  )
}

export default Post

export const getServerSideProps: GetServerSideProps = async ({
  req,
  params,
}) => {
  const session = await getSession({ req })
  const { slug } = params!
  const prismic = getPrismicClient(req)

  if (!session?.activeSubscription) {
    return {
      redirect: {
        destination: '/',
        permanent: false,
      },
    }
  }

  const response: Document<IPrismicResponseData> = await prismic.getByUID(
    'publication',
    String(slug),
    {}
  )

  console.log(inspect(response, { depth: null }))

  const post = {
    slug,
    title: prismicH.asText(response?.data.title),
    content: prismicH.asHTML(response?.data.content),
    updatedAt: new Date(response?.last_publication_date!).toLocaleDateString(
      'pt-BR',
      {
        day: '2-digit',
        month: 'long',
        year: 'numeric',
      }
    ),
  }

  console.log(inspect(post, { depth: null }))
  return {
    props: {
      post,
    },
  }
}
