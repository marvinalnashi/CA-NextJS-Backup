import React from 'react'
import { getAllPosts, getAllSettings, GhostSettings, GhostPostsOrPages } from '@lib/ghost'
import {HomePostCard} from "@components/HomePostCard";

export interface HomeBlogProps {
  posts: GhostPostsOrPages
  settings: GhostSettings
  bodyClass: string
}

const HomeBlog: React.FC<HomeBlogProps> = ({ posts, settings, bodyClass }) => {
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
