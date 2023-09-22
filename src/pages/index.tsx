import Head from 'next/head';
import Header from './components/Header';
import Footer from './components/Footer';
import Image from 'next/image';

import profileImage from '../../public/profile_image.jpeg'

export default function Home() {

  const technologies = ['html', 'css', 'javascript', 'react', 'shopify']

  return (
    <div className='app__body'>
      <Head>
        <title>Rajvir Singh</title>
        <meta name="description" content="Portfolio App" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Header />
      <main>
        <div className='main__basicInfo'>
          <h1>Web Developer</h1>
          <h3>Based in India</h3>
          <div className='technologies'>
            {technologies.map((tech, index) => <p className='technology' key={index}>#{tech}</p>)}
          </div>
        </div>
        <Image
          className='main__profileImage'
          src={profileImage}
          alt="profile_image"
          placeholder='blur'
          fill
          priority />
      </main>
      <Footer />
    </div>
  )
}
