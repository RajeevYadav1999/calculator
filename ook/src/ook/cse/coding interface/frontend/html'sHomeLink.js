import React from 'react'
import { Link } from 'react-router-dom';
import Logo from '../vig (2).png'

export default function HtmlHomeLink() {
  return (
    <>
      <br />
      <Link to='/'><img className='cse-nav-logo' src={Logo}></img></Link>
      <br/>
    </>
  )
}
