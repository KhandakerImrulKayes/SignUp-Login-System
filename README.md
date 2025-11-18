# Firebase Authentication System (React)

A React-based login/signup system with Firebase authentication including forgot password functionality.

## Setup Instructions

1. **Install Dependencies**
   ```bash
   npm install
   ```

2. **Create a Firebase Project**
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Create a new project
   - Enable Email/Password authentication in Authentication > Sign-in method

3. **Get Firebase Configuration**
   - Go to Project Settings > General
   - Scroll to "Your apps" section
   - Click on Web app (</>) icon
   - Copy the firebaseConfig object

4. **Update src/firebase.js**
   - Replace the placeholder values with your actual Firebase config

5. **Run the Application**
   ```bash
   npm run dev
   ```

## Features

- ✅ User Registration (Sign Up)
- ✅ User Login
- ✅ Password Reset via Email
- ✅ User Logout
- ✅ Protected Dashboard
- ✅ Auto-redirect based on auth state
- ✅ React Router for navigation

## Tech Stack

- React 18
- Firebase 10
- React Router 6
- Vite

## Project Structure

```
src/
├── pages/
│   ├── Login.jsx
│   ├── Signup.jsx
│   ├── ForgotPassword.jsx
│   └── Dashboard.jsx
├── firebase.js
├── App.jsx
├── App.css
└── main.jsx
```
