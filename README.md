# Automated Presentations with Contentful and Reveal.js

## The Process

Basically:
1. Graphic Designers create some sort of brand asset (i.e. an ad or a flyer)
2. Social Media team posts this asset to some social media channel (i.e. Instagram)
3. Zapier automatically pulls this new asset into the Contentful CMS
4. Quarterly, a developer runs a build processs that compiles Contentful entries into a responsive HTML presentation and deploys to Amazon S3. This process takes about 5 minutes.

# Tech Details 

## Tools

- Reveal.js
- Handlebars.js
- Contentful
- Amazon S3
- Github
- Zapier

## Reveal.js

I selected Reveal.js as a framework for building responsive HTML presentations instead of traditional, local Powerpoints. Reveal.js is lightweight and easy to customize, while also offering sensible defaults. The accessibility/responsiveness of an HTML presentation made it a no-brainer over something like Powerpoint. 

The biggest advantage was its dead-simple HTML structure. Each slide is simply a \<section>, meaning populating the presentation with an API and a templating framework would be easy.

## Handlebars.js

There were a few options for accessing the Contentful API and parsing/injecting the data. I decided on Handlebars.js for its simplicity, as something like React or Vue felt like overkill for this use case.

I used vanilla Javascript to connect to the Contentful API, filter the response by desired year/quarter, and inject the resulting data/assets into the existing presentation structure. The result was an automated solution to building and populating presentations that automatically handled things like image resizing/placement. 

## Contentful

Instead of having one employee responsible for collecting 100+ assets and turning them into a Powerpoint presentation every quarter, I implemented Contentful, a headless CMS and single source of truth where employees could upload and store their marketing assets over the course of a quarter. 

Contentful allows for the creation of custom data models, and serves data over a robust API. Users are presented with an easy-to-use GUI that resembles something like Wordpress, so anyone in the department can log in and upload assets that they want included in the presentation. 

## Amazon S3

We needed a cheap, easy way to host these static web presentations. The organization already used AWS so S3 was a good option and dead simple to set up. One command with the AWS CLI sends a presentation to S3 and it's instantly avaiable to anyone with an internet connection, making sharing presentations a lot easier than sending around different version of a .ppt over email. 

## Github

I put the presentation template on Github, meaning any developer could clone it to their machine, build and configure the presentation with one command, and deploy it to S3. The entire process takes around 5 minutes from beginning to end, making it a huge time saver when compared to the previous process. 

## Zapier

Lots of the assets that made it to the presentations were sourced from social media posts throughout the quarter. I used Zapier to automatically pull in certain assets from Instagram, Twitter, and Facebook, and create entries in Contentful. Again, a big time saver for the social media team because they were no longer reponsible for manually uploading brand assets to the CMS. 
 

