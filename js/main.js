const client = contentful.createClient({
    // This is the space ID. A space is like a project folder in Contentful terms
    space: "npjgi7kgplxn",
    // This is the access token for this space. Normally you get both ID and the token in the Contentful web app
    accessToken: "3e2a1184430389cceaee505b1f1eb94ba36b458c2828f09f0c84e0c86385f6f6"
  });
  var data = [];
  // SET THIS VALUE TO DESIRED QUARTER / YEAR
  var year = 2018;
  var quarter = "Fall"
  
  // This API call will request an entry with the specified ID from the space defined at the top, using a space-specific access token.
  client
    .getEntries({
        content_type: 'creativePackSlide'
    })
    .then(function(content) {
        for (i in content.items) {
            if (content.items[i].fields.quarter == quarter && content.items[i].fields.year == year) {
                data.push(content.items[i]);
            };
        };
        // data.push(content);
    })
    .catch(err => console.log(err));