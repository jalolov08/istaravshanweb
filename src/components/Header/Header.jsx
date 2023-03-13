import React from 'react'
import './header.css';

export default function Header() {
  return (
    <div className='header_main'>
        <img className='logo_header' src='ISTARAVSHAN.png' />
        <ul className='header_menu'>
            <li>Хабархо</li>
            <li>Афиша</li>
            <li>Хизматҳо</li>
            <li>Раиси шаҳр</li>
            <li>Хокимият</li>
            <li>Дастурҳо</li>
            <li>Алоқа</li>
        </ul>
        <button className='header_login_btn'><img src='profilecircle.png'/>Хучраи Шахси</button>
    </div>
  )
}
