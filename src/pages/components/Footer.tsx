import React from 'react'
import footer from '@/styles/components/footer.module.scss';
import Facebook from '@/assets/Facebook';
import Instagram from '@/assets/Instagram';
import Github from '@/assets/Github';
import Twitter from '@/assets/Twitter';
import Youtube from '@/assets/Youtube';
import Copyrights from '@/assets/Copyrights';


function Footer() {
  return (
    <footer className={footer.footer}>
      <div className={footer.footer__socialIcons}>
        <Facebook fill="#CFCFCF" />
        <Instagram fill="#CFCFCF" />
        <Twitter fill="#CFCFCF" />
        <Github fill="#CFCFCF" />
        <Youtube fill="#CFCFCF" />
      </div>
      <div className={footer.footer__copyrightsIcon}>
        <Copyrights fill='#CFCFCF' />
        <span>2023</span>
      </div>
    </footer>
  )
}

export default Footer