export default {
    title: 'Adocs',
    description: 'An awesome docs template built by me',


    themeConfig: {
        logo: "/logo.svg",
        siteTitle: "Adocs",


        nav: [
            { text: "About", link: "/about" },
            { text: "Contact", link: "/contact" },
            { text: "Guide", link: "/guide" },
            { text: "Configs", link: "/configs" },
            { text: "Changelog",
              items: [
                        { text: "v0.0.1", link: "/item-1" },
                        { text: "v0.0.2", link: "/item-2" },
                        { text: "v0.0.3", link: "/item-3" },
                        ],
            },
          ],
          socialLinks: [
            { icon: "github", link: "..." },
            { icon: "twitter", link: "..." },
            { icon: "discord", link: "..." },
          ],

        sidebar: [
            {
              text: "Section A",
              collapsible: true,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
              ],
            },
            {
              text: "Section B",
              collapsible: false,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
              ],
            },
            {
              text: "Section C",
              collapsible: true,
              items: [
                { text: "Introduction", link: "/introduction" },
                { text: "Getting Started", link: "/getting-started" },
              ],
            },
          ],  

      },
  }

  

  