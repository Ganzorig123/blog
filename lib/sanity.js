const sanityClient = require("@sanity/client");

const client = sanityClient({
  projectId: process.env.NEXT_PUBLIC_SANITY_PROJECT_ID,
  dataset: process.env.NEXT_PUBLIC_SANITY_DATASET,
  apiVersion: "2021-03-25", // use a UTC date string
  // token: "sanity-auth-token", // or leave blank for unauthenticated usage
  useCdn: process.NODE_ENV === "production",
});

export default client;
