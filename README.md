# PANO
###### A start panel for web browsing, a panorama of inspiration.

## Demo
[de.pano.today](http://de.pano.today) (hosted on AWS Frankfurt, Germany)

## Introduction
**This project is still in alpha stage development.**
**Currently designed for desktop screens only. Use latest Chrome/Edge/Firefox to get the best experience.**
This is a personal project of a nice & yet clean and elegant start page.
Simplicity is kept in mind by design to provide inspirations before your dive into the Internet.
This repo contains the React web app. The accompanying nodejs server is in [another repo](https://github.com/BedrockDigger/pano-feathers-app).

### Implemented Features
- today in history
- switch search engines
- daily artwork
- Lightbox for zooming the artwork
- daily quote
- daily accent colors

## Installation
1. Start up the backend Feathers App first.
2. clone and run this project:
``` shell
$ git clone https://github.com/BedrockDigger/pano-react-app
$ npm install
$ npm start
```
3. Cheers!

## Dependencies
Pano frontend won't be possible without the following:
``` json
"dependencies": {
    "@ant-design/pro-layout": "^5.0.12",
    "@fullpage/react-fullpage": "^0.1.18",
    "@umijs/preset-react": "1.x",
    "@umijs/test": "^3.2.27",
    "axios": "^0.21.0",
    "lint-staged": "^10.0.7",
    "moment-timezone": "^0.5.31",
    "prettier": "^1.19.1",
    "react": "^16.12.0",
    "react-dom": "^16.12.0",
    "react-image-lightbox": "^5.1.1",
    "react-live-clock": "^5.0.11",
    "react-moment": "^1.0.0",
    "react-wordcloud": "^1.2.7",
    "semantic-ui-css": "^2.4.1",
    "semantic-ui-react": "^2.0.1",
    "umi": "^3.2.27",
    "yorkie": "^2.0.0"
  }
```

## License
Pano is licensed under [The MIT License](https://mit-license.org/).
