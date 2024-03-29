import React from 'react'
import './../styles/index.scss'
import './FooterStyle.scss'
import {TiSocialFacebook, TiSocialGithub, TiSocialLinkedin} from 'react-icons/ti'
const Footer = () => {
  return (
    <div className='footer'>
        <div className='sectionContainer container grid'>
            <div className='gridOne'>
                <div className='logoDiv'>
                    Limkokwing
                </div>
                <p> Your mind should be stronger than your feeling, fly !!!</p>
                <div className='socialIcons flex'>
                    <TiSocialFacebook className='icon'/>
                    <TiSocialGithub className='icon'/>
                    <TiSocialLinkedin className='icon'/>
                </div>
            </div>

            <div className='footerLinks'>
                <span className='linkTitle'>Information</span>
                <li>
                    <a href=''>Home</a>
                </li>
                <li>
                    <a href=''>About</a>
                </li>
                <li>
                    <a href=''>Context</a>
                </li>
                <li>
                    <a href=''>LKW Page</a>
                </li>
            
            </div>

            <div className='footerLinks'>
                <span className='linkTitle'>Quick Links</span>
                <li>
                    <a href=''>FAQ</a>
                </li>
                <li>
                    <a href=''>Features</a>
                </li>
                <li>
                    <a href=''>How to </a>
                </li>
                <li>
                    <a href=''>Our Communites</a>
                </li>
            
            </div>

            <div className='footerLinks'>
                <span className='linkTitle'>Information For</span>
                <li>
                    <a href=''>Prospective </a>
                </li>
                <li>
                    <a href=''>Prospective </a>
                </li>
                <li>
                    <a href=''>Businesses</a>
                </li>
                <li>
                    <a href=''>Prospective online</a>
                </li>
            
            </div>
            
        </div>

        <div className='copyRightDiv flex'>
            <p>
                Courtesy Design | Developed by
                <a href='https://www.facebook.com/profile.php?id=100089003408624'> kmengtoch</a>
            </p>
        </div>
    </div>
  )
}

export default Footer
