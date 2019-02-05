# Creative Pack Presentation Template built with Reveal.js

## Starting the Presentation

1. Clone the repo
```sh
$ git clone https://github.com/cpc-it/cpc-creative-pack
```
2. CD into the repo and start the Node server
```sh
$ cd cpc-creative-pack && npm start
```

## Customizing the Presentation

Currently, the presentation uses one of Reveal.js's built-in themes (called "White"). Any custom CSS is contained within css/custom.css. 

## Choosing Quarter/Year

By default, the presentation will include **all** slides in the Contentful space. To specify which year/quarter to build the presentation for, edit the following lines in main.js:
```javascript
var year = 2018; // acceptable range: 2018-2030
var quarter = "Fall" // acceptable values are Fall, Winter, Spring, or Summer
```

## Building the Production Version for S3 Hosting

1. Ensure you are in the creative pack directory
```sh
cd cpc-creative-pack
```

2. Run grunt copy to put all necessary static files in the /dist directory
```sh
grunt copy
```

3. Ensure the AWS command line tool is installed 

2. Run the following command to upload the dist folder to a specified S3 bucket
```sh
aws s3 sync ./dist s3://cpc-marcom-creative-packs/[specify remote directory] 
```