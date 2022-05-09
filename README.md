# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

### This project is meant to show how to use openApiAxiosClient and openApiAxiosClient-TypeGen to generate types for the requests automatically using swagger schema.

#### Please Note, the following packages are already added to this project package.json but mentioned for documentation purposes.

- First of all install the following packages; openapi-client-axios, openapi-client-axios-typegen, @redocly/openapi-cli
- add the following commands into your package.json scripts:
    `"openapi:gen": "yarn -s typegen src/api/schema.yml > src/api/gen/client.d.ts && yarn openapi:convert",`
    `"openapi:convert": "npx @redocly/openapi-cli bundle ./src/api/schema.yml -o ./src/api/gen/schema.json --format json"`
- add your schema.yml file into the src/api directory or change the previous commands to match your directories.
- create an empty folder in the same directory as schema.yml and name it gen or change the previous commands to match your directories accordingly.
- add your swagger api schema into the schema.yml.
- run the command `npm run openapi:gen` and wait till it finishes. you now have your types for all your apis, you should find two files in the gen directory; client.d.ts, schemal.json
- we will be using the context api for our api calls.
- check the src/api/index.tsx for the useApi context config and the App.tsx for how to use it with a query in react query.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

### `npm run openapi:gen`
 generates the types for all the apis requests and responses in the schema.yml file

### `npm run openapi:convert`
  converts the schema.yml into json in the schema.json file


## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
