const client = require('./client');

const newDoc = {
  _type: 'blogPost', // Example schema type; change based on your schema
  title: 'Sample Blog Post',
  slug: {
    _type: 'slug',
    current: 'sample-blog-post',
  },
  content: 'This is the content of the sample blog post.',
};

client
  .create(newDoc)
  .then((res) => {
    console.log(`Document created with ID: ${res._id}`);
  })
  .catch((err) => {
    console.error('Document creation failed:', err.message);
  });
