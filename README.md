# To-Do List Application

This repository contains two versions of a simple and interactive To-Do List application built using React and Bootstrap: one implemented with class-based components and the other with function-based components. Both versions allow users to add, edit, and delete tasks from a list.

## Features

- Add new tasks to the list.
- Edit existing tasks.
- Delete tasks from the list.
- Input validation to prevent empty tasks.

## Getting Started

Follow these instructions to get a copy of the project up and running on your local machine.

### Prerequisites

- Node.js and npm should be installed on your machine. You can download them from [here](https://nodejs.org/).

### Installation

1. Clone the repository:

    ```sh
    git clone https://github.com/yourusername/todo-list-app.git
    ```

2. Navigate to the project directory:

    ```sh
    cd todo-list-app
    ```

3. Install the dependencies:

    ```sh
    npm install
    ```

4. Start the development server:

    ```sh
    npm start
    ```

5. Open your browser and navigate to `http://localhost:3000`.

## Usage

### Adding a Task

1. Type your task in the input field.
2. Click the "ADD" button.

### Editing a Task

1. Click the "Edit" button next to the task you want to edit.
2. Modify the task in the prompt that appears.
3. Click "OK" to save your changes.

### Deleting a Task

1. Click the "Delete" button next to the task you want to delete.

## Code Structure

The repository contains two folders, each representing a different implementation of the To-Do List application:

- **`class-based/`**: Contains the class-based component version.
  - **`src/`**: Contains the source code of the class-based component version.
    - **`App.js`**: Main component that handles the To-Do list logic and UI using class-based components.
    - **`index.js`**: Entry point of the application.

- **`function-based/`**: Contains the function-based component version.
  - **`src/`**: Contains the source code of the function-based component version.
    - **`App.js`**: Main component that handles the To-Do list logic and UI using function-based components with hooks.
    - **`index.js`**: Entry point of the application.

## Differences between Class-based and Function-based Components

### Class-based Components

Class-based components use ES6 classes to define a component and its state. They rely on lifecycle methods to manage component behavior.

**Example:**

```javascript
import React, { Component } from "react";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { userInput: "", list: [] };
  }

  // Methods to handle input change, add, edit, and delete tasks...

  render() {
    // JSX to render the component...
  }
}

export default App;
```

###Function-based Components
Function-based components use functions to define a component. They use React hooks (useState, useEffect, etc.) to manage state and lifecycle behavior.
```javascript
import React, { useState } from "react";

function App() {
  const [userInput, setUserInput] = useState("");
  const [list, setList] = useState([]);

  // Functions to handle input change, add, edit, and delete tasks...

  return (
    // JSX to render the component...
  );
}

export default App;
```

##Acknowledgements
*React
*Bootstrap

Contributing
If you would like to contribute to this project, please fork the repository and create a pull request. We welcome all contributions that will improve the project.

This project is a part of learning React and Bootstrap and is continuously being improved.

```
This `README.md` file outlines the structure of your project and provides instructions on how to get started with either the class-based or function-based version of the To-Do List application. It also highlights the key differences between class-based and function-based components in React.
```
