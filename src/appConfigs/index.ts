import * as UniUX from "uniux";

const appConfig = {
  parentProject: { name: "create-uniux-app" },

  name: "create-uniux-app",
  rootURL: "",
  design: {
      themeColour: UniUX.colourPacks.red,
  },
  sections: ["About"],

  pageConfigs: {
    home: {
      name: "Home",
      icon: UniUX.icons.faHome,
      url: "",
    },

    about: {
      name: "About",
      section: "About",
      icon: UniUX.icons.faInfoCircle,
      url: "about",
    },
  },
};

export { appConfig };
