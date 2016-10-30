import { Reaction } from "/server/api";

// Register package as ReactionCommerce package
Reaction.registerPackage({
  label: "Hydrotik",
  name: "hydrotik",
  icon: "fa fa-vine",
  autoEnable: true,
  registry: [
    {
      route: "/about",
      name: "about",
      template: "aboutUs",
      workflow: "coreWorkflow"
    }
  ],
  layout: [{
    layout: "coreLayoutHydrotik",
    workflow: "coreWorkflow",
    collection: "Products",
    theme: "default",
    enabled: true,
    structure: {
      template: "productsLanding",
      layoutHeader: "layoutHeaderHydrotik",
      layoutFooter: "layoutFooterHydrotik",
      notFound: "productNotFound",
      dashboardHeader: "",
      dashboardControls: "dashboardControls",
      dashboardHeaderControls: "",
      adminControlsFooter: "adminControlsFooter"
    } }
  ],
  settings: {
    public: [
      {
        images: 'images/hero/'
      },
      {
        images: 'images/editorial/'
      },
      {
        images: 'images/ajax-loader.gif'
      },
      {
        fonts: 'fonts/'
      }
    ],
    npm: {
      dependencies: {
        "react-slick": "^0.14.5",
        "slick-carousel": "^1.6.0"
      }
    }
  }
});

