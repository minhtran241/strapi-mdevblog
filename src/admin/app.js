import MLogo from "./extensions/m.png";

const myPrimary600Color = "#46ACDE";
const myPrimary500Color = "#017DB9";

const config = {
  locales: ["vi"],
  auth: {
    logo: MLogo,
  },
  menu: {
    logo: MLogo,
  },
  // Replace the favicon
  head: {
    favicon: MLogo,
  },
  theme: {
    colors: {
      buttonPrimary600: myPrimary600Color,
      primary600: myPrimary600Color,
      buttonPrimary500: myPrimary500Color,
      primary500: myPrimary500Color,
    },
  },
  // Disable video tutorials
  tutorials: false,
  // Disable notifications about new Strapi releases
  notifications: { release: false },
};

const bootstrap = (app) => {
  console.log(app);
};

export default {
  config,
  bootstrap,
};
