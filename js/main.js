const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "rdr9cf03yc4d",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "9ea93dc1aafc73f61ba2e9d30407d24a1030d5579108d4164550f53d1f611a6d"
  });
  var data = [];
  // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
  client
    .getEntry({
        content_type: 'slide'
    })
    .then(function(content) {
        data.push(content);
        console.log(content);
    })
    .catch(err => console.log(err));