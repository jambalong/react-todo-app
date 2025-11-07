# **Pebble List**

A simple, fast, and responsive task list application built with **React** to demonstrate fundamental concepts of component architecture and modern state management.

## **Features**

* **CRUD Functionality:** Full Create, Read, Update, and Delete capabilities for tasks.
* **Persistent State:** Tasks are managed using React's `useState` hook.
* **Responsive Design:** Optimized for display on both desktop and mobile screens.
* **Modular Architecture:** Clear separation of concerns using functional components (e.g., `TaskInput`, `TaskList`).

## **Live Demo**

[https://jambalong.github.io/pebble-list/](https://jambalong.github.io/pebble-list/)

## **Tech Stack**

* **Framework:** React
* **Build Tool:** Vite
* **Language:** JavaScript (ES6+)
* **Styling:** CSS

## **Key Technical Takeaways**

This project focuses on the core principles of front-end development:

* **State Management (`useState`):** Demonstrates how to manage an array of objects (`tasks`) immutably by using the spread operator (`...tasks`) with the `setTasks` updater function.

* **Immutability:** Operations like toggling completion status (`handleToggleComplete`) and deletion (`handleDeleteTask`) use functional approaches to return a new state array rather than modifying the existing one directly.

* **Component Composition:** The `TaskPage` acts as a container, passing state and handler functions as **props** down to presentational components (`TaskInput`, `TaskList`).

## **Installation and Setup**

To run this project locally:

1. **Clone the repository:**

    ```bash
    git clone https://github.com/jambalong/pebble-list.git
    cd react-todo-app
    ```

2. **Install dependencies:**

    ```bash
    npm install
    ```

3. **Start the development server:**

    ```bash
    npm run dev
    ```

    The application will typically open at `http://localhost:5173`.
