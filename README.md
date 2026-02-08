# 🌍 Asteroid Tracker & Risk Analysis Platform

A full-stack web application that leverages **NASA's Near Earth Object (NEO) API** to detect, analyze, and track asteroids approaching Earth. The platform provides real-time asteroid data, risk scoring, bookmarking, and a secure authentication system with OTP verification.

---

## 🚀 Features

### 🔭 Asteroid Discovery & Analysis

* Fetches **real-time Near-Earth Object data** from NASA NEO API
* Search asteroids by **custom date ranges**
* Displays:

  * Asteroid Name & ID
  * Distance from Earth (km)
  * Velocity (km/h)
  * Hazardous status

### 📊 Risk Scoring System

* Dynamically computes a **Risk Score** based on:

  * Velocity
  * Distance from Earth
  * Hazard classification
* Visual **Risk Score Table**
* **Alert Dashboard** with threshold-based warnings

### ⭐ Bookmarks

* Users can bookmark asteroids
* Saved asteroids persist per user account
* Quick access to frequently monitored NEOs

### 🔐 Authentication & Security

* User Registration & Login
* **Real-time OTP-based email verification**
* Password hashing with **bcrypt**
* Verified user access control

---

## 🖥️ Tech Stack

### Frontend

* **React + Vite**
* React Router
* Modern CSS / UI animations
* Responsive design

### Backend

* **Node.js**
* **Express.js**
* RESTful API architecture

### Database

* **MongoDB Atlas**
* Mongoose ODM

### External APIs

* **NASA Near Earth Object (NEO) API**

### Security & Utilities

* bcrypt
* OTP generation (email-based)
* dotenv

---

## 📸 Screenshots
<img width="1915" height="1079" alt="Screenshot 2026-02-08 092604" src="https://github.com/user-attachments/assets/64be0b64-3c6a-485c-8251-6aa1f3ab1ade" />
<img width="1919" height="1079" alt="Screenshot 2026-02-08 092621" src="https://github.com/user-attachments/assets/dca87e96-3418-4337-9e21-d8b5c58bcc43" />
<img width="1919" height="1079" alt="Screenshot 2026-02-08 092650" src="https://github.com/user-attachments/assets/12643e11-828b-458c-b76d-92f7e248b463" />
<img width="1919" height="1079" alt="Screenshot 2026-02-08 092724" src="https://github.com/user-attachments/assets/85ae1603-07a3-4cd2-a7ba-f5981e931d81" />
<img width="1919" height="1079" alt="Screenshot 2026-02-08 092743" src="https://github.com/user-attachments/assets/d0d0a808-2876-4351-b8a2-19a4645ce6a9" />
<img width="1919" height="1079" alt="Screenshot 2026-02-08 092810" src="https://github.com/user-attachments/assets/16ea52bd-a89a-40c5-a6b2-fb0f889d01a8" />
<img width="1919" height="1079" alt="Screenshot 2026-02-08 092817" src="https://github.com/user-attachments/assets/9b76d95f-d993-4495-b908-8f4c32d0ae5c" />
<img width="1919" height="1077" alt="Screenshot 2026-02-08 092927" src="https://github.com/user-attachments/assets/7f74830c-87f9-410f-9398-cf04a2f42b93" />







* Signup & Login Flow
* OTP Verification
* Asteroid Search Dashboard
* Risk Score Table
* Alert Dashboard
* MongoDB User Records

---

## 📁 Project Structure

```bash
WEB_HACKATHON
├── backend
│   ├── src
│   │   ├── routes
│   │   ├── utils
│   │   └── app.js
│   ├── .env
│   ├── server.js
│   ├── package.json
│   └── package-lock.json
├── frontend
│   ├── public
│   ├── src
│   │   ├── assets
│   │   ├── components
│   │   │   ├── Error.jsx
│   │   │   ├── HomePage.jsx
│   │   │   ├── OtpPage.jsx
│   │   │   ├── SignIn.jsx
│   │   │   └── SignUp.jsx
│   │   ├── App.jsx
│   │   ├── App.css
│   │   ├── index.css
│   │   └── main.jsx
│   ├── index.html
│   ├── eslint.config.js
│   ├── vite.config.js
│   ├── package.json
│   ├── package-lock.json
│   └── README.md
└── .gitignore


---

## ⚙️ Environment Variables

Create a `.env` file in the server directory:

```env
PORT=5000
MONGO_URI=your_mongodb_atlas_uri
NASA_API_KEY=your_nasa_api_key
EMAIL_USER=your_email
EMAIL_PASS=your_email_password
JWT_SECRET=your_secret_key
```

---

## 🧪 Running the Project Locally

### 1️⃣ Clone the Repository

```bash
git clone https://github.com/your-username/asteroid-tracker.git
cd asteroid-tracker
```

### 2️⃣ Install Dependencies

Frontend:

```bash
cd client
npm install
npm run dev
```

Backend:

```bash
cd server
npm install
npm run start
```

---

## 🔑 NASA API Setup

1. Visit: [https://api.nasa.gov/](https://api.nasa.gov/)
2. Generate a free API key
3. Add it to your `.env` file

---

## 📈 Future Improvements

* JWT-based session handling
* Admin dashboard
* Advanced risk prediction using ML
* Orbital visualization (3D)
* Push notifications for high-risk asteroids

---

## 🤝 Contributing

Contributions are welcome!

1. Fork the repo
2. Create a new branch
3. Commit your changes
4. Open a Pull Request

---



---

## 👨‍💻 Author

**BhaWesh Wasnik**
**Kushagra Gupta**

If you found this project useful, consider giving it a ⭐ on GitHub!
