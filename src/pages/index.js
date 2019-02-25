import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'

import thumb01 from '../assets/images/thumbs/01.png'
import thumb02 from '../assets/images/thumbs/02.png'
import thumb03 from '../assets/images/thumbs/03.png'
import thumb04 from '../assets/images/thumbs/04.jpg'


import full01 from '../assets/images/fulls/01.png'
import full02 from '../assets/images/fulls/02.png'
import full03 from '../assets/images/fulls/03.png'
import full04 from '../assets/images/fulls/04.jpg'


const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Site vitrine agence web', description: 'Vitrine web réalisée en CSS3 et HTML5, 100% responsive.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Site touristique', description: 'Calendrier d\'événements, actualités, système de réservation.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Weather Finder', description: 'Renvoie les contitions météo en live d\'une ville donnée.'},
    { id: '4', src: full04, thumbnail: thumb04, caption: 'Application vélo libre service Rennes', description: 'Grâce aux données data explore, cette application permet d\'avoir des données en temps réél pour trouver une station de vélo à Rennes.'},
    
];

class HomeIndex extends React.Component {

    constructor() {
        super();

        this.state = {
            lightboxIsOpen: false,
            currentImage: 0,
        };

        this.closeLightbox = this.closeLightbox.bind(this);
        this.gotoNext = this.gotoNext.bind(this);
        this.gotoPrevious = this.gotoPrevious.bind(this);
        this.openLightbox = this.openLightbox.bind(this);
        this.handleClickImage = this.handleClickImage.bind(this);
    }

    openLightbox (index, event) {
        event.preventDefault();
        this.setState({
            currentImage: index,
            lightboxIsOpen: true,
        });
    }
    closeLightbox () {
        this.setState({
            currentImage: 0,
            lightboxIsOpen: false,
        });
    }
    gotoPrevious () {
        this.setState({
            currentImage: this.state.currentImage - 1,
        });
    }
    gotoNext () {
        this.setState({
            currentImage: this.state.currentImage + 1,
        });
    }
    handleClickImage () {
        if (this.state.currentImage === this.props.images.length - 1) return;

        this.gotoNext();
    }

    render() {
        const siteTitle = "Léo P - Développeur web"
        const siteDescription = "Bienvenue sur le site de Léo Prud'hom. Développeur web en freenlance, je vous propose de me faire part de vos projets web afin d'y apporter une solution efficace, rapide et fonctionnelle"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                </Helmet>

                <div id="main">

                    <section id="intro">
                        <header className="major">
                            <h2>À propos de Léo<br />
                            Développeur d'applications web.</h2>
                        </header>
                        <p>Je suis un jeune Freelance passionné par son job, les sorties en nature, les sports de glisse et le café! <i className="icon fa-coffee"></i> <br/>
                        De nature optimiste, j'aime relever des défis et faire évoluer les choses en alliant travail et bonne humeur. 
                        Venez avec vos idées, dicutons-en autour d'un café ou organisons un visio-call, et travaillons ensemble pour réaliser des projets à la hauteur de vos ambitions! 
                        </p>

                    </section>

                    <section id="one">
                        <header className="major">
                            <h2>Des applications rapides,<br />
                            sécurisées et adaptées sur tous types supports.</h2>
                        </header>
                        <p>Grâce à des technologies modernes, bénéficiez d'un site web ergonomique aux performances ultra-rapides. 
                        Accessible à tous types d'usagers et sur tous types d'appareils (Smartphone, Tablette, Desktop).
                        Protégez-vous des attaques grâce à des protocoles et moyens de cryptages dans l'ère du temps.
                        </p>

                    </section>

                    <section id="two">
                        <h2>Recent Work</h2>

                        <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                            src,
                            thumbnail,
                            caption,
                            description
                        }))} />

                    </section>

                    <section id="three">
                        <h2>Get In Touch</h2>
                        <p>Pour tout renseignement, je vous invite à remplir le formulaire ci-dessous et je reviendrai vers vous dans les plus brefs délais.</p>
                        
                        <div className="row">
                            <div className="8u 12u$(small)">
                            <div className="8u 12u$(small)">

                            <form 
                                name="contact-form"
                                method="post"
                                data-netlify="true"
                                data-netlify-honeypot="bot-field"
                                >
                                          
                                <input name="name" type="text"/>
                                <button > Send </button>
                            </form>
                                
                
            </div>
                                
                            </div>
                            <div className="4u 12u$(small)">
                                <ul className="labeled-icons">
                                    <li>
                                        <h3 className="icon fa-home"><span className="label">Address</span></h3>
                                        1234 Somewhere Rd.<br />
                                        Nashville, TN 00000<br />
                                        United States
                                    </li>
                                    <li>
                                        <h3 className="icon fa-mobile"><span className="label">Phone</span></h3>
                                        000-000-0000
                                    </li>
                                    <li>
                                        <h3 className="icon fa-envelope-o"><span className="label">Email</span></h3>
                                        <a href="#">hello@untitled.tld</a>
                                    </li>
                                </ul>
                            </div>
                        </div>
                    </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex