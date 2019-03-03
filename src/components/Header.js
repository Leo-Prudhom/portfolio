import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <div className="image avatar"><img src={avatar} alt="Léo Prud'hom" title="Léo Prud'hom" /></div>
                    <h1><strong>Léo Prud'hom.</strong> Développeur web</h1><br />
                    <h1>Vous souhaitez créer un site ?<br/> Vous opérez une transformation digitale ?<br />
                    Vous êtes au bon endroit !</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
