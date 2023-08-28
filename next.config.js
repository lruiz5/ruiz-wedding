// next.config.js
module.exports = {
  images: {
    domains: ["a-us.storyblok.com"],
    remotePatterns: [
      {
        protocol: "https",
        hostname: "xsgames.co",
        port: "",
        pathname: "*",
      },
    ],
  },
};
