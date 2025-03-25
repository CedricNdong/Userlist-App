# React User Management Application

## Project Overview

This project involves developing a user management application using React and TypeScript. The application displays a list of users, allows for the deletion of selected users, and provides functionality to edit user details through a modal window. Bootstrap is utilized for styling, and the @faker-js/faker package generates sample user data.

## Key Tasks and Features

### Task 1: User List

- **Create React Application**: Initiated the project by generating a new React application using the CLI with TypeScript.
- **Install and Configure Bootstrap**: Added Bootstrap to the project to style the application and removed any default styling provided by the template.
- **Install Faker Package**: Used the @faker-js/faker package to generate fake user data.
- **Generate User List**: Created a list of 100 users with unique IDs, first names, and last names. The user list is displayed using the `<ListGroup>` component from Bootstrap.

### Task 2: Delete Users

- **Add Delete Button**: Included a "Löschen" button at the top of the page for user deletion.
- **Add Checkboxes**: Added checkboxes to each list entry to select users for deletion.
- **Implement Deletion Logic**: Developed the onClick event handler for the delete button to remove selected users from the list.
- **Button Availability**: Ensured that the delete button is only enabled when at least one user is selected.

### Task 3: Edit Users

- **Add Edit Button**: Placed an "Bearbeiten" button at the top of the page for editing user details.
- **Implement Modal Window**: Created a modal window to edit the details of a selected user.
- **Button Availability**: Ensured that the edit button is enabled only when exactly one user is selected.
- **Edit Logic**: Developed the onClick event handler for the edit button to open the modal and save changes made to the user's details.

## Technologies & Keywords

React, TypeScript, Bootstrap, Faker, User Management, ListGroup, Checkbox, Modal, HTTP, Testing, WebStorm, Postman

## Project Implementation

The project followed an iterative development approach, starting with basic routing and progressively adding more complex features such as user deletion, editing, and caching mechanisms. The use of NestJS ensured a modular and maintainable codebase.

## Example Usage

- **User List**: Display a list of 100 users with unique IDs, first names, and last names.
- **User Deletion**: Select and delete multiple users from the list using checkboxes and a delete button.
- **Edit User Details**: Edit the details of a single selected user through a modal window.



 sat# Getting Started with Create React App

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

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

## Learn More

You can learn more in the [Create React App documentation](https://facebook.github.io/create-react-app/docs/getting-started).

To learn React, check out the [React documentation](https://reactjs.org/).
