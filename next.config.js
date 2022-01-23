module.exports = {
  reactStrictMode: true,
  redirects: async () => {
    return [
      // static redirects
      {
        source: "/custom/static-redirects",
        destination: "/",
        permanent: true,
      },
      //dynamic redirects
      {
        source: "/redirects/:id",
        destination: "/products/:id",
        permanent: false,
      },
    ];
  },
};
