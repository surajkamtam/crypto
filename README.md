# Crypto Currency React Application


A public API "CoinGecko" was used for gathering cryptocurrency price and market capitalization.

- Link for CoinGecko: `https://www.coingecko.com/en`

A working React Application has been created with the following features:
- [x] Welcome page and Search page to demonstrate the working of React Router
- [x] HTML, CSS and React have been used with MATERIAL-UI
- [x] Using the CoinGecko application 104 crypto-currency data has taken
- [x] Additionally Cards were used for displaying the information
- [x] The code has been developed using Visual Studio Code 


## Installation
```
npx create-react-app financetracker
```
```
npm install axios
```
```
npm install @material-ui/core
```

## Approach Taken:

The aim of this project is to build a react application with public API. So various API's were considered involving cricket information, football information, movies information, pokemon information, weather information, etc.. However, cryptocurrency data was used as they did not need to subscribe or create an account for usage. Once the API was chosen then the React documents, API documents and examples were referred for importing the details from the API. Then some components such as cards were taken from the Material-UI. For debugging Youtube and stackoverflow have been used.

## Future Work:

Addition of more pages and content in the created application.

## Additional information
Initially, this project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br />
You will also see any lint errors in the console.

### Project includes:
  1) index.js:Used for Application startup.
  2) App.js:Used for routing between the Welcome page and Search page.
  4) first.js: Contains code for "Welcome page."
  5) second.js: Contains code for "Search and Gathering data" from Public API.
  6) App.css: Contains CSS code for styling.
  
  
## Link for getting the 104 currency data of Europe region using the API   

https://api.coingecko.com/api/v3/coins/markets?vs_currency=eur&order=market_cap_desc&per_page=100&page=1&sparkline=false


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).




