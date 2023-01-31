import {defineCliConfig} from 'sanity/cli'
import { SanityClient as sanityClient } from 'sanity';
import { ImageUrlBuilder as imageUrlBuilder} from 'sanity';

export default client = defineCliConfig({
  api: {
    projectId: '8g6l537l',
    dataset: 'production',
    useCdn: true,
    apiVersion: "2021-10-21",
  }
});

// helper function
const builder = imageUrlBuilder(client);
export const urlFor = (source) => {
  
}
