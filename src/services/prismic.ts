import * as prismic from "@prismicio/client";

function createClientPrismic(): prismic.Client {
  const Prismic = prismic.createClient(process.env.PRISMIC_API_ENDPOINT, {
    accessToken: process.env.PRISMIC_ACCESS_TOKEN,
  });

  return Prismic;
}

export default createClientPrismic;
