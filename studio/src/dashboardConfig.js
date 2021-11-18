export default {
  widgets: [
    { name: "structure-menu" },
    {
      name: "project-info",
      options: {
        __experimental_before: [
          {
            name: "netlify",
            options: {
              description:
                "NOTE: Because these sites are static builds, they need to be re-deployed to see the changes when documents are published.",
              sites: [
                {
                  buildHookId:
                    "61960f69bf0a8ae09d686ae9",
                  title: "Sanity Studio",
                  name: "sanity-gatsby-blog-studio-x1dgtd8r",
                  apiId: "2b5ddeff-98ef-41fb-b3fa-a9f6661d946c",
                },
                {
                  buildHookId: "61960f69b973d5bbcb61b98c",
                  title: "Blog Website",
                  name: "sanity-gatsby-blog-web-53ec15ar",
                  apiId: "00236e4d-af93-4970-b16d-293ec1707d55",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/Marremurten/sanity-gatsby-blog",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://sanity-gatsby-blog-web-53ec15ar.netlify.app",
            category: "apps",
          },
        ],
      },
    },
    { name: "project-users", layout: { height: "auto" } },
    {
      name: "document-list",
      options: {
        title: "Recent blog posts",
        order: "_createdAt desc",
        types: ["post"],
      },
      layout: { width: "medium" },
    },
  ],
};
