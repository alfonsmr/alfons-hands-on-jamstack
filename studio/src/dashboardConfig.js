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
                    "60ba559916ad45bbea25c8d9",
                  title: "Sanity Studio",
                  name: "alfons-hands-on-jamstack-studio",
                  apiId: "e8918224-58ab-45dc-8a03-148e976068a2",
                },
                {
                  buildHookId: "60ba5599f3be826666f3e20f",
                  title: "Blog Website",
                  name: "alfons-hands-on-jamstack",
                  apiId: "d44cec1e-3904-45a3-8e50-b585e69cb32c",
                },
              ],
            },
          },
        ],
        data: [
          {
            title: "GitHub repo",
            value:
              "https://github.com/alfonsmr/alfons-hands-on-jamstack",
            category: "Code",
          },
          {
            title: "Frontend",
            value: "https://alfons-hands-on-jamstack.netlify.app",
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
