import SanityClient from '@sanity/client';
import ImageUrlBuilder from '@sanity/image-url'

export const client = SanityClient({
    projectId: 'y2w5k2uh',
    dataset: 'production',
    apiVersion: '2022-12-21',
    useCdn: true,
    token: process.env.NEXT_PUBLIC_SANITY_TOKEN,
})

const builder = ImageUrlBuilder(client);

export function urlFor(source: string) {
    if (!source) {
        return 'image not found';
    } else {
        return builder.image(source).toString().toLowerCase();
    }
}
