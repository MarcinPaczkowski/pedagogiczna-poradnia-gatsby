module.exports = {
  siteMetadata: {
    siteUrl: `https://www.pedagogicznaporadnia.pl`,
    title: `Pedagogiczna Pora Dnia - Września | Korepetycje | Nauka czytania`,
    description: `Poradnia pedagogiczna zaprasza rodziców i dzieci specjalistyczne zajęcia dostosowane do indywidualnych potrzeb.`,
    author: `Małgorzata Paczkowska`,
    keywords: `poradnia, pedagogiczna, poradnia psychologiczna, września, dzieci, rozwiązywanie problemów, samorozwój, coaching, korepetycje, nauka czytania, pomoc w nauce`,
  },
  plugins: [
    {
      resolve: "gatsby-plugin-robots-txt",
      options: {
        policy: [{ userAgent: "*", allow: "/" }],
      },
    },
    `gatsby-plugin-sitemap`,
    `gatsby-plugin-sass`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Pedagogiczna Poradnia`,
        short_name: `PedagogicznaPoradnia`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/logo.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
