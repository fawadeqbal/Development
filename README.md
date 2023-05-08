# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.


# E-Commerce

The @material-ui/core package has a peer dependency of react that requires version ^16.8.0 || ^17.0.0. However, the root project has installed react version ^18.2.0. This version of react is not compatible with the peer dependency required by @material-ui/core.

To fix this issue, you can either downgrade your react version to ^17.0.0 or install a compatible version of @material-ui/core that supports react version ^18.2.0.

If you want to force the installation of @material-ui/core with your current react version, you can try using the --force flag or --legacy-peer-deps flag with your npm command. However, be aware that this could result in an incorrect or broken dependency resolution.

Here's an example of how to install @material-ui/core with the --legacy-peer-deps flag:
# npm install --legacy-peer-deps @material-ui/core

# Development
