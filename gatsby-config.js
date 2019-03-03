const {
  NODE_ENV,
  URL: NETLIFY_SITE_URL = 'https://www.leo-prudhom.com',
  DEPLOY_PRIME_URL: NETLIFY_DEPLOY_URL = NETLIFY_SITE_URL,
  CONTEXT: NETLIFY_ENV = NODE_ENV
} = process.env;
const isNetlifyProduction = NETLIFY_ENV === 'production';
const siteUrl = isNetlifyProduction ? NETLIFY_SITE_URL : NETLIFY_DEPLOY_URL;


module.exports = {
  siteMetadata: {
    title: "Léo Prud'hom",
    author: "Léo Prud'hom",
    description: "Léo Prud'hom, développeur web freelance",
    titleTemplate: "%s · The Real Hero",
    url: "https://www.leo-prudhom.com", // No trailing slash allowed!
    image: "./static/img/LeoPrudSite.png", // Path to your image you placed in the 'static' folder
    
  },
  plugins: [
    'gatsby-plugin-react-helmet',
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: 'gatsby-starter-default',
        short_name: 'starter',
        start_url: 'https://www.leo-prudhom.com',
        background_color: '#663399',
        theme_color: '#663399',
        display: 'minimal-ui',
        icon: 'src/assets/images/website-icon.png', // This path is relative to the root of the site.
      },
    },
    'gatsby-plugin-sass',
    'gatsby-plugin-offline',
    {
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://www.leo-prudhom.com',
        policy: [{ userAgent: '*', allow: '/' }]
      }
    }
  ],
  
}
