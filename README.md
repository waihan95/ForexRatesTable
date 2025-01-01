# ForexRatesTable
A simple web application that renders a forex rates table by fetching data from a REST API. This project demonstrates the use of REST API integration, dynamic table rendering, and basic front-end/back-end functionality.

## Setup
1. Clone the repository
git clone https://github.com/waihan95/ForexRatesTable
cd forexratestable

2. Install Depencies
npm install

3. Create an .env file in the root directory and add your API key
API_KEY=your_api_key_here
API_URL=your_api_url_here
PORT=3000

## Features
- Fetches foreign exchange rates from a REST API.
- Displays both raw and modified exchange rate values in a table.
- Highlights specific rows based on conditions:
    - Red border for even-numbered values.
    - Red border for values of the HKD currency.
- Utilizes a modular JavaScript structure for scalability.

## Dependencies
 ### Frontend
- axios: Handles API requests efficiently.
- bootstrap: Provides responsive design and styling components.
- webpack: Bundles the application assets for optimized delivery.
- css-loader: Enables importing CSS files into JavaScript.
- style-loader: Injects CSS into the DOM for dynamic styling.

### Backend
- express: Serves as the server framework for routing and handling requests.
- node-fetch: Fetch API for making HTTP requests on the server side.

### Other
- dotenv: Manages environment variables securely via a .env file.
- dotenv-webpack: Integrates .env files with Webpack builds.
- crypto-browserify: Provides cryptographic functionality for browser environments.
- path-browserify: Adds compatibility for Node.js path module in the browser.

## For active development, always run:
npm run dev

## For Production Build:
npm run build

## Builds the application for production:
npm run server