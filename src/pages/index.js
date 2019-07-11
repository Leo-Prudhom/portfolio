import React from 'react'
import Helmet from 'react-helmet'

import Layout from '../components/layout'
// import Lightbox from 'react-images'
import Gallery from '../components/Gallery'
import 'bootstrap/dist/css/bootstrap.min.css';

import FormContact from "../components/FormContact"

import thumb01 from '../assets/images/thumbs/01.png'
import thumb02 from '../assets/images/thumbs/02.png'
import thumb03 from '../assets/images/thumbs/03.png'
import thumb04 from '../assets/images/thumbs/04.png'


import full01 from '../assets/images/fulls/01.png'
import full02 from '../assets/images/fulls/02.png'
import full03 from '../assets/images/fulls/03.png'
import full04 from '../assets/images/fulls/04.png'



const DEFAULT_IMAGES = [
    { id: '1', src: full01, thumbnail: thumb01, caption: 'Application mobile "Trésors du Morbihan"', description: 'Application mobile de geocaching / carte aux trésors, comprenant de nombreuses fonctionnalités (auth, geolocalisation, quiz, dashboard ...), réalisée avec React-native.'},
    { id: '2', src: full02, thumbnail: thumb02, caption: 'Carte isoline', description: 'Déstinée au domaine de la logistique, cette application web à pour intérêt d\'afficher sur une carte, grâce à l\'API hereMap, un tracé qui correspond à une temps de parcours en camion à partir d\'un point donné.'},
    { id: '3', src: full03, thumbnail: thumb03, caption: 'Weather Finder', description: 'Réalisée avec l\'API OpenWeatherMap, l\'appli renvoie les contitions météo en live d\'une ville selon son nom et code pays.'},
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
        const siteTitle = "Léo Prud'hom - Développeur web"
        const siteDescription = "Bienvenue sur le site de Léo Prud'hom. Développeur web en freenlance, je vous propose de me faire part de vos projets web afin d'y apporter une solution efficace, rapide et fonctionnelle"

        return (
            <Layout>
                <Helmet>
                        <title>{siteTitle}</title>
                        <meta name="description" content={siteDescription} />
                        <link rel="canonical" href="" />
                        <html lang="fr" />

                        <meta name="twitter:card" content="summary" />
                        <meta name="twitter:site" content="https://www.leo-prudhom.com/" />
                        <meta name="twitter:title" content={siteTitle} />
                        <meta name="twitter:description" content={siteDescription} />
                        <meta name="twitter:creator" content="Léo Prud'hom" />
                        <meta name="twitter:image" content="https://www.leo-prudhom.com/static/avatar-3e89cfe777480b60f4047c91566844aa.jpg"></meta>

                        <meta property="og:title" content={siteTitle} />
                        <meta property="og:type" content="article" />
                        <meta property="og:url" content="https://www.leo-prudhom.com/" />
                        <meta name="image" property="og:image" content="https://www.leo-prudhom.com/static/avatar-3e89cfe777480b60f4047c91566844aa.jpg"></meta>
                        <meta property="og:description" content={siteDescription} /> 
                        <meta property="og:site_name" content={siteTitle} />
                        <meta property="fb:admins" content="Facebook numeric ID" />

                </Helmet>

                <div id="main">


                        <section id="intro">
                            <header className="major">
                                <h2>À propos de Léo,<br />
                                Développeur d'applications web.</h2>
                            </header>
                            <p>Je suis un jeune développeur web en Freelance passionné par son job, les sorties en nature, les sports de glisse et le café! <i className="icon fa-coffee"></i> <br/>
                            De nature optimiste, j'aime relever des défis et faire évoluer les choses en alliant travail et bonne humeur. 
                            Venez avec vos idées, discutons-en autour d'un café ou organisons un visio-call, et travaillons ensemble pour réaliser des projets à la hauteur de vos ambitions! 
                            </p>

                        </section>

                        <section id="one">
                            <header className="major">
                                <h2>Des applications rapides,<br />
                                sécurisées et adaptées sur tous types supports.</h2>
                            </header>
                            <p>Grâce à des technologies modernes, bénéficiez d'un site web ergonomique aux performances ultra-rapides. 
                            Accessible à tous types d'usagers et sur tous types d'appareils (Smartphone, Tablette, Desktop).
                            </p>

                        </section>

                        <section id="two">
                            <h2>Quelques travaux</h2>

                            <Gallery images={DEFAULT_IMAGES.map(({ id, src, thumbnail, caption, description }) => ({
                                src,
                                thumbnail,
                                caption,
                                description
                            }))} />

                        </section>

                        <section id="three">
                            <h2>Contact</h2>
                            <p>Pour tout renseignement, je vous invite à remplir le formulaire ci-dessous et je reviendrai vers vous dans les plus brefs délais.</p>

                                <FormContact />

                        </section>

                </div>

            </Layout>
        )
    }
}

export default HomeIndex