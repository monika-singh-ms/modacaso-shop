module.exports = [
  'strapi::logger',
  'strapi::errors',
  {
  name: "strapi::security",
  config: {
    contentSecurityPolicy: {
      useDefaults: true,
      directives: {
        "connect-src": ["'self'", "https:"],
        "img-src": [
          "'self'",
          "data:",
          "blob:",
          "your-bucket-name.s3.your-region.amazonaws.com",
        ],
        "media-src": [
          "'self'",
          "data:",
          "blob:",
          "your-bucket-name.s3.your-region.amazonaws.com",
        ],
        "frame-src": ["'self'"],
        upgradeInsecureRequests: null,
      },
    },
  },
},
  'strapi::cors',
  'strapi::poweredBy',
  'strapi::query',
  'strapi::body',
  'strapi::session',
  'strapi::favicon',
  'strapi::public',
];
