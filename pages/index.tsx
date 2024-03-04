import { GetStaticProps } from 'next'
import { useRouter } from 'next/router'
import useEmblaCarousel from 'embla-carousel-react'
import Autoplay from 'embla-carousel-autoplay'
import React, { useCallback, useEffect, useState } from 'react'

import { Layout } from '@components/Layout'
import { HomeHeaderIndex } from '@components/HomeHeaderIndex'
import { StickyNavContainer } from '@effects/StickyNavContainer'
import { SEO } from '@meta/seo'

import { processEnv } from '@lib/processEnv'
import {getAllPosts, getAllSettings, getPostsByTag, GhostPostsOrPages, GhostSettings} from '@lib/ghost'
import { seoImage, ISeoImage } from '@meta/seoImage'

import { BodyClass } from '@helpers/BodyClass'
import VanillaTilt from 'vanilla-tilt'
import GradientBg from '@utils/gradientbg'
import Navbar from '@components/SaasApp/Navbar'
import HeroBanner from '@components/SaasApp/HeroBanner'
import Partner from '@components/SaasApp/Partner'
import Features from '@components/SaasApp/Features'
import AboutApp from '@components/SaasApp/AboutApp'
import PromoVideo from '@components/SaasApp/PromoVideo'
import KeyFeatures from '@components/SaasApp/KeyFeatures'
import AppScreens from '@components/SaasApp/AppScreens'
import Integrations from '@components/SaasApp/Integrations'
import AppDownload from '@components/SaasApp/AppDownload'
import PricingTable from '@components/SaasApp/PricingTable'
import Testimonials from '@components/SaasApp/Testimonials'
import OurLatestBlog from '@components/SaasApp/OurLatestBlog'
import Newsletter from '@components/SaasApp/Newsletter'
import Footer from '@components/SaasApp/Footer'
import HomeBlog, { HomeBlogProps } from "@components/SaasApp/OurLatestBlog";

interface CmsData {
  posts: GhostPostsOrPages
  settings: GhostSettings
  seoImage: ISeoImage
  bodyClass: string
}

interface IndexProps {
  cmsData: CmsData
}

// const Index: React.FC<HomeBlogProps> = (props) => {
//   return <HomeBlog {...props} />;
// };

const Index = ({ cmsData }: IndexProps) => {
  const { settings, posts, seoImage, bodyClass } = cmsData

  const router = useRouter()

  if (router.isFallback) return <div>Loading...</div>

  return (
    <>
      <SEO {...{ settings, seoImage }} />
      <StickyNavContainer
        throttle={300}
        activeClass="fixed-nav-active"
        render={(sticky) => (
          <Layout {...{ bodyClass, sticky, settings, isHome: true }} header={<HomeHeaderIndex {...{ settings }} />}>
            <Navbar />

            <HeroBanner />

            <Partner />

            <Features />

            <AboutApp />

            <PromoVideo />

            <KeyFeatures />

            <AppScreens />

            <Integrations />

            <AppDownload />

            <PricingTable />

            <Testimonials />

            <OurLatestBlog />

            <Newsletter />

            <Footer />
          </Layout>
        )}
      />
    </>
  )
};
export default Index

export const getStaticProps: GetStaticProps<HomeBlogProps> = async () => {
  const posts = await getPostsByTag('parent-tag-2');
  const settings = await getAllSettings();

  return {
    props: {
      settings,
      posts,
      bodyClass: BodyClass({}),
    },
  };
};



// export default Index;
