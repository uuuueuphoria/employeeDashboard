# Employee Manager Part B

> Author: Wanlun Xue

**Description of App:** This app is written in javascript. The packages are managed by npm. This app allow authentication to user login and will direct user to dashboard page if login is successful. Users can select department to see department supervisor and employees and they can edit or delete employee data.

**What is used for:** It allows authorized user to view and manage employee from employee dashboard.

**How to use it:** User need to login the account in order to access the dashboard. username: user@gmail.com, password: 1234

**How to install app:** type "npm install" in terminal

**How to run the app:** type "npm start" in terminal

**List of special tools:**

- This app uses npm as JavaScript node package manager. The link for npm is (https://www.npmjs.com/package/npm)

- The project uses express as web framework. More info about express: (https://www.npmjs.com/package/express)

- Dotenv is used to loads environment variables from a .env file. More info about dotenv see (https://www.npmjs.com/package/dotenv)

- Cors is used to provide a Express middleware in this project. (https://www.npmjs.com/package/cors)

- Nodemon is used as developer tool to automatically restart the node application when file changes in the directory are detected. (https://www.npmjs.com/package/nodemon)

- The page are managed by cookie-session. The link for cookie-session is (https://www.npmjs.com/package/cookie-session)

- Ejs is used as template to generate HTML markup to display data. The link for EJS is (https://ejs.co/)

- Parcel is used as a developer tool to bundle this web application. The link for Parcel is (https://parceljs.org/getting_started.html)

- Snowpack is another bundling tool and it watches file change and instant update the output. More information about Snowpack (https://www.npmjs.com/package/snowpack)

**Link of working demo:** https://employee-dashboard-wanlun.herokuapp.com/

**Development**.
Start the server so the client can access the api `npm run server`. Make sure your are in the employee-manager directory when you run this command. To view any edits you make run `snowpack dev` from the employee-manager root folder. The project should run on localhost:3000

**Production**.
When your read to deploy to Netlify you first must build a deployment build of the client site. To do this run `snowpack build`. This will create a new folder called www inside the employee manager folder. This folder contains the optimized production bundle. Once you have this folder created commit your changes to git and visit your Heroku app an test your project.

**Data Reset**.
There is an api route /api/departments/reset that will copy the original data back to the employee.json file. You can run this command locally from the browser by running `http://localhost:5000/api/departments/reset`
