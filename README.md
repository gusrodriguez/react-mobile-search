# React Mobile Search

## What's this?
An implementation of a mobile search pattern in a web-mobile React application. 

## Why do I want this?
To see an example of a web-mobile search pattern :iphone: 

## What pattern?
You know... the userinputs a word in a searchbox, and some suggestions related to that word will be autosuggested. By tapping on the suggestion, the related results will be displayed below. Just like the web-mobile behavior of Google.

## Tech Stack
```
- React
- Sass
- ExpressJs for the dev web server
- Webpack
- Jest
- Enzyme
- Code style compliant with eslint [airbnb stylesheet](https://github.com/airbnb/javascript/tree/master/react)
```

## Usage
The accepted words that will match in this case are the following:
- 'Berlin'
- 'Skip the Line'
- 'German'
- 'Tour'
- 'Museum'
- 'Pass'
- 'Transport'

Type any of those words in the searchbox and the suggestions will be displayed.
All those words are stored on a configurable file calles 'suggested-entries.js'
 
## Does it work in desktop?

- No. Desktop and tablet layout are not considered.

## Run the built application
- Simply navigate the index.html file from your modern chrome version

## Installation

### Dependencies
```
npm install
```

### Build the application
```
 npm run build
```

### Run the application
```
npm start
```

### Navigate to:
```
localhost:8080
```
