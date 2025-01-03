# Personal Web Application

This project is a personal web application built with a React frontend and a Ruby on Rails backend. 

## Project Structure

The project is organized into two main directories: `frontend` and `backend`.

### Frontend

The frontend is built using React and is located in the `frontend` directory. It includes:

- `public`: Contains static files served directly, such as the HTML file and images.
- `src`: Contains the source code for the React application, including:
  - `components`: React component files that define the UI.
  - `App.js`: The main component that sets up the application structure and routing.
  - `index.js`: The entry point that renders the App component into the DOM.
  - `styles`: CSS or style files for the application.
- `package.json`: Configuration file for npm, listing dependencies and scripts.
- `tsconfig.json`: Configuration file for TypeScript, specifying compiler options.

### Backend

The backend is built using Ruby on Rails and is located in the `backend` directory. It includes:

- `app`: Contains the MVC structure:
  - `controllers`: Handles incoming requests and responses.
  - `models`: Defines the data structure and business logic.
  - `views`: Defines how data is presented to the user.
- `config`: Contains configuration files, including routes and initializers.
- `db`: Contains database-related files, including migrations and schema definitions.
- `Gemfile`: Specifies the Ruby gems required for the application.
- `Gemfile.lock`: Locks the versions of the gems specified in the Gemfile.
- `Rakefile`: Defines tasks that can be run from the command line.

## Getting Started

To get started with the project, clone the repository and install the necessary dependencies for both the frontend and backend.

### Frontend

1. Navigate to the `frontend` directory.
2. Run `npm install` to install the required packages.
3. Start the development server with `npm start`.

### Backend

1. Navigate to the `backend` directory.
2. Run `bundle install` to install the required gems.
3. Set up the database with `rails db:create` and `rails db:migrate`.
4. Start the Rails server with `rails server`.

## Contributing

Contributions are welcome! Please open an issue or submit a pull request for any improvements or bug fixes.