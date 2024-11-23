# Alkye Test

The repo powering the Alkye Services Frontend Assignment

## Table of Contents

- [Getting Started](#Getting-Started)
- [Project Layout](#Project-Layout)
- [Coding Conventions](#Coding-Conventions)

## Local Development

### Getting Started

Install the latest version of Node.js and npm. You can install the latest version (recommended) of Node.js or just download it directly [here](https://nodejs.org/en/).

Next, run the following commands:

```shell
npm install
npm run dev
```

### Project Layout

In order to work together seamlessly, the project is organized in a way that makes it easy to find what you're looking for. The project is organized as follows:

- `src`
  - `components`: Contains all the reusable components used across the app
    - `[page]`: Contains all the components used on a specific page
  - `pages`: Contains all the route exposed pages of the app
  - `layouts`: Contains all the page layouts for app
  - `hooks`: Contains all the custom hooks used across the app
  - `utils`: Contains all the utility functions used across the app
  - `assets`: Contains all the assets used across the app

Overall there should be little to no business logic in a page itself. It should all be handled in the components and hooks.

### Coding Conventions

- All files names are kebab case except for hooks which are camel cased. For example, `useMyHook.js` and `my-component.jsx`
- All components, hooks, and utilities should be exports while all pages should be default exports
- No inline styles should be allowed, class-based styles must be use instead.
