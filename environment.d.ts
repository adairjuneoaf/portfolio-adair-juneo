declare global {
  namespace NodeJS {
    interface ProcessEnv {
      PRISMIC_API_ENDPOINT: string;
      PRISMIC_ACCESS_TOKEN: string;
    }
  }
}

export {};
