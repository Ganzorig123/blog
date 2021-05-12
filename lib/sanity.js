const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-03-25", // use a UTC date string
  // token: "sanity-auth-token", // or leave blank for unauthenticated usage
  useCdn: process.NODE_ENV === "production",
});

export const previewClient = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-03-25", // use a UTC date string
  // token: "sanity-auth-token", // or leave blank for unauthenticated usage
  useCdn: false,
  token:
    "sknmMv3ttuNduST7rNOvS8q1yGwawGRWvV9euw8Pr9ynJYV0ED8kXwBiG6lOhQvSSEfVhiPerotV1RBPK4UcQsb2wKnYmsERELIl6PGJ4p8vs2lfI3OsxKfo7jgcmMA9vUPSbk1u6xkF09eVDJTEEk5AhNMCoRUs4EzEinj0h5BfyJEatFYo",
});

export default client;
