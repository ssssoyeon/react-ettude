import React, { useEffect, useState} from 'react'
import './styles/Header.scss'
import Nav from './Nav'
import Util from './util'

const Header = ({isScrolled, modalOpenClick}) => {

    return (
      <header className={isScrolled ? 'scroll' : ''}>
        <div className="inner">
          <div className="mob_btn" onClick={modalOpenClick}>
            <img src="./img/icon_ham.png" alt="nav" />
          </div>
          <Nav />
          <h1 className="logo">
            <a href="#">
              <img src="/img/logo.png" alt="logo" />
            </a>
          </h1>
          <Util />
        </div>
      </header>
    )
  }



export default Header