# 📚 Bookly – MERN Stack Book Store App

Bookly is a simple and clean MERN (MongoDB, Express.js, React.js, Node.js) based Book Store application.  
It is currently in development — core features and UI are completed, while user authentication and advanced functionality are in progress.

---

## 🚀 Features (Current)

### ✅ **Frontend (React + Tailwind + Vite)**
- Clean and responsive UI.
- Table View & Card View for books.
- Loading spinner during API requests.
- Modal view for quick book preview.
- Navigation using React Router.
- Component-based structure.

### ✅ **Backend (Node.js + Express + MongoDB)**
- REST API for books:
  - `GET` all books
  - `POST` create a book
  - `PUT` update a book
  - `GET` book details
  - `DELETE` remove a book
- MongoDB connection using Mongoose.
- Proper HTTP status codes.
- Error handling & validation.

---

## 🏗️ Upcoming Features (Work in Progress)
- 🔐 **User Authentication (JWT + bcrypt)**
- 👥 Login & Register pages
- 📚 User-based book management
- 🖼️ Improved UI with animations
- 📄 Pagination / Search / Filters
- 🌙 Dark mode toggle
- 📱 Fully mobile optimized layout

---

## 🛠️ Tech Stack

### **Frontend**
- React.js  
- Tailwind CSS  
- React Router  
- Axios  
- Vite  

### **Backend**
- Node.js  
- Express.js  
- MongoDB & Mongoose  

---

## 📁 Folder Structure

 Bookly/
│
├── backend/
│ ├── models/
│ ├── routes/
│ ├── config/
│ ├── server.js
│ └── package.json
│
├── frontend/
│ ├── src/
│ │ ├── pages/
│ │ ├── components/
│ │ ├── App.jsx
│ │ └── index.css
│ └── package.json
│
└── README.md

---

## 📌 How to Run This Project Locally

### 📥 Clone the Repository

    `` git clone https://github.com/your-username/bookly.git ``

  - cd bookly

### ⚙️ Backend Setup

 - Install dependencies:
 - cd backend
 - npm install

- Start backend server:

         `npm run dev`


### Backend will run on:

  `` 👉 http://localhost:3000 ``
  
  

## 💻 Frontend Setup

### Install dependencies:

  - cd frontend
  - npm install

### Start frontend:

  - npm run dev


### Frontend will run on:

  `` 👉 http://localhost:5173 ``

---

## 🧪 API Endpoints (Current)

  - Method	Endpoint	Description
  - GET	/books	Get all books
  - GET	/books/:id	Get book by ID
  - POST	/books	Add a new book
  - PUT	/books/:id	Update book
  - DELETE	/books/:id	Delete book

---

## 📸 Screenshots (Add after deployment)

  You can add screenshots like:

 ![App Screenshot](./screenshots/home.png)

---

## 🤝 Contributing

 Contributions are always welcome!
 Feel free to fork this repo and submit a pull request.

---

## 📄 License

This project is Open Source and free to use.
