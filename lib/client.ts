import { createClient } from "@sanity/client";
import ImageUrlBuilder from "@sanity/image-url";

export const client = createClient({
  projectId: "y2w5k2uh",
  dataset: "production",
  apiVersion: "2022-02-19",
  useCdn: true,
  token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
});

const builder = ImageUrlBuilder(client);

export function urlFor(source: string) {
  return builder.image(source).toString().toLowerCase();
}
