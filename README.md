# Thais' Demo Code

This repo aims to provide a couple of front-end code implementations.

## Project Structure

Suggestion for a source code structure based on one of the common best practices.

```
./src

├── assests           // static files such as images
├── components        // all reusable components
    ├──Card
        ──Card.tsx
        ──Card.test.tsx
        ──Card.stories.tsx
        ──index.ts
    ├──Another component
|── context           // state managment
|── graphql           // request and queries
├── hooks             // custom hooks
├── pages             // sreens, views
|── styles            // global styles
├── types             // global types, interfaces
├── utils             // utility methods such as date, time, etc

```

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run lint`

Lints js, ts, tsx, json files.

### `npm run lint:fix`

Fixes lint errors and warnings (if possible) or throws an error (or a warning) that should be fixed manually.
