import {GetStaticProps} from "next";
import React from 'react'
import { getAllPosts, getAllSettings, GhostSettings, GhostPostsOrPages } from '@lib/ghost'
import {BodyClass} from "@helpers/BodyClass";
import Link from 'next/link'
import { Layout } from '@components/Layout'
import { HeaderPage } from '@components/HeaderPage'
import { PostCard } from '@components/PostCard'
import { getLang, get } from '@utils/use-lang'
import {HomePostCard} from "@components/HomePostCard";

// export const getStaticProps: GetStaticProps = async () => {
//   // const posts = await getAllPosts({ limit: 3 })
//   const posts = await getAllPosts({ limit: 3 })
//   const settings = await getAllSettings()
//
//   return {
//     props: {
//       settings,
//       posts,
//       bodyClass: BodyClass({}),
//     },
//   }
// }

export interface HomeBlogProps {
  posts: GhostPostsOrPages
  settings: GhostSettings
  bodyClass: string
}

const HomeBlog: React.FC<HomeBlogProps> = ({ posts, settings, bodyClass }) => {
  const text = get(getLang(settings.lang));

  return (
      <div className="inner">
        <div className="post-feed">
          {posts.map((post, i) => (
            <HomePostCard key={post.id} {...{ settings, post, num: i }} />
          ))}
        </div>
      </div>
  )
}


export default HomeBlog;
