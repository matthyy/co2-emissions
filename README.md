# Setup toolkit

- nvm use
- yarn install
- yarn build
- yarn start:server 
- go to http://localhost:8080/

To play the test: yarn test

# Responses to answers

•	What frameworks or packages did you use to solve this task and why did you choose them? (If you used none, which might you consider to expand the capabilities or the prototype and why?)

I chose React as a framework to solve this task. I chose it for multiple reasons
- very well-know framework back by facebook and maintained
- it's a light weight package
- it has tools such as create-app, eslint rules, packages (jest) which come together with react to help with tests. Therefore the ecosystem offer a great developer experience.

I used material ui in addition to React:
 - to help me with css and integration of front components.
 - it is a very popular, well-known, and maintained library
 
I considered choosing other framework such as Angular.js and Vue. I'm know Vue.js a bit but I am more proficient in React, that's the reason I chose it.
The two other frameworks could have work given the project.   

•	How would you approach extending the app to allow users to also select their country?

If the country could be selected, the project and the algorithm to compute the energy consume would be a bit more complex.   
Indeed, instead of multiplying by a constant (463) to get the average total CO2 emissions, it would depend on where it was produced. 

I would add a drop down list where the user could select his/her country in order to determine the rate CO2 produces for one Kwh.
To me, that information instead of being kept in the front end environment could be fetched from a backend system. One advantage is that we won't need to deploy a new app if data change over time.
Similarly, information relative to the network and device could be fetched from a backend to facilite the maintenance.  For example if a new device or network needed to be added in the list, the app won't need to be deployed. 

•	Based on your initial design, what potential usability or UX issues would you want to test or iterate on?

I would like to test the following items:
- the algorithm to compute the total CO2 consumed which is the core of the application with jest or an other test runner
- I would like to test UI component via jest react ui to verify the development
- In the long run, I would have liked to add end-to-end tests to make sure there is no regression
- I would like to improve the UX design of front components
- Another point, maybe it is not the subject, would be to fetch data as mentioned above from backend service rather than setting them in the react App. Another interesting issue could be to use server side rendering to improve UX.

•	Imagine we wanted to draw the data for this interactive from a REST API. What requirements would you convey to the API designer (e.g. parameters, routes, or desired data structure)?

I would create a swagger with the standards of OpenApi 3 to communicate with backend developers. Indeed Open Api standard, in my opinion, is a great tool to define an interface contract between front and back.
I would then generate the following swagger: 

openapi: 3.0.1
info:
  title: Api Streaming calculator IEA
  version: '1.0'
paths:
  '/devices':
    get:
      tags:
        - Device
      summary: 'Queries to get the list of network with its value of kwh'
      responses:
        '200':
          description: Request was successful
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Device'
  '/networks':
    get:
      tags:
        - Network
      summary: 'Queries to get the list of network with its value of kwh'
      responses:
        '200':
          description: Request was successful
          content:
            application/json:
              schema:
                $ref: '#/components/schemas/Network'
components:
  schemas:
    Network:
      required:
        - id
        - name
        - value
      properties:
        id:
          type: integer
          format: double
        name:
          type: string
        value:
          type: integer
          format: double
    Device:
      required:
        - id
        - name
        - value
      properties:
        id:
          type: integer
          format: double
        name:
          type: string
        value:
          type: integer
          format: double 


# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).

### Code Splitting

This section has moved here: [https://facebook.github.io/create-react-app/docs/code-splitting](https://facebook.github.io/create-react-app/docs/code-splitting)

### Analyzing the Bundle Size

This section has moved here: [https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size](https://facebook.github.io/create-react-app/docs/analyzing-the-bundle-size)

### Making a Progressive Web App

This section has moved here: [https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app](https://facebook.github.io/create-react-app/docs/making-a-progressive-web-app)

### Advanced Configuration

This section has moved here: [https://facebook.github.io/create-react-app/docs/advanced-configuration](https://facebook.github.io/create-react-app/docs/advanced-configuration)

### Deployment

This section has moved here: [https://facebook.github.io/create-react-app/docs/deployment](https://facebook.github.io/create-react-app/docs/deployment)

### `yarn build` fails to minify

This section has moved here: [https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify](https://facebook.github.io/create-react-app/docs/troubleshooting#npm-run-build-fails-to-minify)

