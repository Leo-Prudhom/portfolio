import React from 'react'

import Footer from './Footer'
import avatar from '../assets/images/avatar.jpg'

class Header extends React.Component {
    render() {
        return (
            <header id="header">
                <div className="inner">
                    <div className="image avatar"><img src={avatar} alt="" /></div>
                    <h1><strong>Bienvenue, je m'apelle Léo Prud'hom</strong></h1><br />
                    <h1>Vous recherchez un développeur web ?<br/> Vous opérez une transformation digitale ?<br />
                    Vous êtes au bon endroit !</h1>
                </div>
                <Footer />
            </header>
        )
    }
}

export default Header
