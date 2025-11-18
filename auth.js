import { auth } from './firebase-config.js';
import { 
    createUserWithEmailAndPassword, 
    signInWithEmailAndPassword, 
    sendPasswordResetEmail,
    onAuthStateChanged,
    signOut 
} from 'https://www.gstatic.com/firebasejs/10.7.1/firebase-auth.js';

const showMessage = (message, isError = false) => {
    const messageEl = document.getElementById('message');
    if (messageEl) {
        messageEl.textContent = message;
        messageEl.style.color = isError ? '#e74c3c' : '#27ae60';
    }
};

// Login
const loginForm = document.getElementById('loginForm');
if (loginForm) {
    loginForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        try {
            await signInWithEmailAndPassword(auth, email, password);
            window.location.href = 'dashboard.html';
        } catch (error) {
            showMessage(error.message, true);
        }
    });
}

// Signup
const signupForm = document.getElementById('signupForm');
if (signupForm) {
    signupForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        const password = document.getElementById('password').value;
        
        try {
            await createUserWithEmailAndPassword(auth, email, password);
            showMessage('Account created successfully! Redirecting...');
            setTimeout(() => window.location.href = 'dashboard.html', 1500);
        } catch (error) {
            showMessage(error.message, true);
        }
    });
}

// Forgot Password
const forgotPasswordForm = document.getElementById('forgotPasswordForm');
if (forgotPasswordForm) {
    forgotPasswordForm.addEventListener('submit', async (e) => {
        e.preventDefault();
        const email = document.getElementById('email').value;
        
        try {
            await sendPasswordResetEmail(auth, email);
            showMessage('Password reset email sent! Check your inbox.');
        } catch (error) {
            showMessage(error.message, true);
        }
    });
}

// Logout
const logoutBtn = document.getElementById('logoutBtn');
if (logoutBtn) {
    logoutBtn.addEventListener('click', async () => {
        try {
            await signOut(auth);
            window.location.href = 'index.html';
        } catch (error) {
            showMessage(error.message, true);
        }
    });
}

// Auth State Observer
onAuthStateChanged(auth, (user) => {
    const currentPage = window.location.pathname.split('/').pop();
    
    if (user) {
        if (currentPage === 'dashboard.html') {
            const userEmailEl = document.getElementById('userEmail');
            if (userEmailEl) userEmailEl.textContent = `Email: ${user.email}`;
        } else if (currentPage === 'index.html' || currentPage === 'signup.html') {
            window.location.href = 'dashboard.html';
        }
    } else {
        if (currentPage === 'dashboard.html') {
            window.location.href = 'index.html';
        }
    }
});
