import React from 'react';
import header from '@/styles/components/header.module.scss';
import Hamburger from '@/assets/Hamburger';

function Header() {
  return (
    <header className={header.header}>
        <div className={header.header__logo}>
            Rajvir Singh
        </div>
        <Hamburger fill='#CFCFCF' />
    </header>
  )
}

export default Header