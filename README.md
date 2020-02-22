# React Mobile Search

## Technologies used

### For develop
- React
- Sass
- ExpressJs for the dev web server
- Code style compliant with eslint [airbnb stylesheet](https://github.com/airbnb/javascript/tree/master/react)

### For building
- Webpack

### For testing
- Jest
- Enzyme

## UX Considerations
- The app works with a mobile search pattern, when the user inputs a word in the searchbox, and some suggestions related to that word will be autosuggested. By tapping on the suggestion, the related results will be displayed below.
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

- No desktop or table layout considered.

## Run the built application
- Simply navigate the index.html file from your modern chrome version

## Development environment

### Install dependencies
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

### Run tests with coverage report:
```
    npm run test
```

### Run linter:
```
    npm run lint
```
(0 lint errors in this version)# react-mobile-search
