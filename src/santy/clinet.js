const sanityClient = require('@sanity/client');

const client = sanityClient({
  projectId: '<YOUR_PROJECT_ID>',
  dataset: 'production', // replace with your dataset name
  token: '<YOUR_WRITE_TOKEN>', // optional if the dataset is public
  useCdn: false, // `false` for fresh data
  apiVersion: '2023-10-14', // use the latest version
});

module.exports = client;
