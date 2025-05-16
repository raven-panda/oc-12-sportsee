# Sportsee

Push your limits and track every move with SportSee — the ultimate fitness companion that turns your progress into power.

Whether you're training for a marathon or just getting started, SportSee keeps you motivated, focused, and ready to crush your goals.

## Specification

This project is made with React + Vite + TypeScript.

## Libs used

- [**React**](https://react.dev/) + [**Vite**](https://vite.dev/).
- [**Recharts**](https://recharts.org) for chart components.
- [**Axios**](https://axios-http.com) for back-end data fetching.

### Dev dependencies

- [**TypeScript**](https://www.typescriptlang.org/) for static typing code.
- [**ESLint**](https://eslint.org/) for code quality.
- [**Prettier**](https://prettier.io/) code formatter for code readability.

## Project structure

```
src/
|
| -- assets/
| ---- # contains fonts, pictures etc
|
| -- components/
| ---- # Reusable components used accross the application
|
| -- definitions/
| ---- # Types for back-end data
|
| -- hook/
| ---- # React hooks for data distribution, they uses the service to place data into a state
|
| -- service/
| ---- # Contains all back-end data fetching logic
| ---- ApiActions.ts # -> functions used for queries, fetch error management logic is here
| ---- ApiEndpoints.ts # -> string constants that contains all possible API endpoints
|
| -- views/
| ---- # All pages component used in the router
| ---- # a .tsx file for the component, and possible CSS style sheet with the same name for custom page style
```

## How to start the project

1. Here is [the repository](https://github.com/OpenClassrooms-Student-Center/SportSee) for the back end API, see it's README.md.
2. Clone the repository
   ```sh
   git clone https://github.com/raven-panda/oc-12-sportsee
   ```
3. Install libraries and start the application
   ```sh
   # Using NPM
   npm install
   npm run dev
   
   # Using yarn
   yarn install
   yarn dev
   ```

## Other scripts

- `yarn format` to run prettier on all js,jsx,ts,tsx,json,css files in `src`.
- `yarn lint` to check if ESLint detect errors in the project.
