import sanityClient from "@sanity/client";
// require("dotenv").config();

export const client = sanityClient({
  projectId: "ekas9mvf",
  dataset: "production",
  apiVersion: "v1",
  token: "ekas9mvf",
  userCdn: false,
});
