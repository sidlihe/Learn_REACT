# Full-Stack React + FastAPI Integration

This repository documents the foundational development process, architectural decisions, and key concepts learned while building a full-stack web application from scratch. 

The project connects a modern **React (Vite)** frontend with a **FastAPI (Python)** backend, featuring modular components, dynamic state management, and a clean separation of concerns.

---

## 🛠️ Tech Stack & Tools Used

### Frontend
- **React.js**: A library for building component-based user interfaces.
- **Vite**: A fast, modern build tool and dev server.
- **Axios**: A promise-based HTTP client used to fetch and post data.

### Backend
- **FastAPI**: A high-performance Python framework for building APIs.
- **Uvicorn**: An ASGI web server implementation for Python.
- **Pydantic**: Used for data validation and parsing request bodies in FastAPI.
- **Python venv**: A virtual environment to isolate backend dependencies.

---

## 📝 Key Concepts Learned

### 1. React Core Fundamentals
- **Components & JSX**: Learned how to split user interfaces into reusable, independent functional blocks. Explored how JSX allows rendering HTML-like nodes within JavaScript.
- **Props (Properties)**: Passed read-only data from parent components down to child components. Used destructuring (`{ text }`) for cleaner code readability.
- **State Management (`useState`)**: Implemented local state variables to store and update dynamic information (like counters and toggles) which trigger automatic UI re-renders.
- **Event Handling**: Used camelCase event listeners (`onClick`, `onSubmit`) to handle user interactivity and pass callback functions across components.
- **Conditional Rendering**: Displayed or hid UI elements dynamically using ternary operators (`condition ? true : false`) and logical AND short-circuits (`condition && <Element />`).
- **Rendering Lists**: Transformed arrays of objects into list elements using the JavaScript `.map()` method, ensuring each list item had a unique `key` prop for efficient rendering.

### 2. Full-Stack API Integration
- **FastAPI Routing**: Set up basic GET (`/api/data`) and POST (`/api/items`) endpoints.
- **CORS Configuration**: Configured Cross-Origin Resource Sharing (CORS) middleware in the backend to allow requests securely from the React development port (`localhost:5173`).
- **Data Transfer**: Used Axios to fetch initial lists from the backend inside a `useEffect` hook, and sent JSON payloads using POST requests to update the backend in-memory database.

### 3. Separation of Concerns & Clean Architecture
- **Controlled Inputs**: Used React state to capture and validate input fields dynamically on every keystroke.
- **Service Layer Pattern**: Extracted direct HTTP requests out of UI components and into a dedicated service module (`src/services/itemService.js`), making the codebase scalable and maintainable.

---

## 📂 Project Structure

```text
learn_react/
├── backend/                  # FastAPI Backend Project
│   ├── venv/                 # Python Virtual Environment
│   ├── main.py               # FastAPI server & CORS configuration
│   └── ...
├── src/                      # React Frontend Project
│   ├── components/           # Reusable UI Components (e.g., ItemForm.jsx)
│   ├── services/             # API services & Axios instances (e.g., itemService.js)
│   ├── App.jsx               # Root component coordinating state and layout
│   ├── main.jsx              # Application entry point
│   └── ...