# AI Study Assistant

A full-stack web application that helps students understand technical topics by generating simple explanations and examples using the OpenAI API.

---

##  Features

* Enter any study topic
* Generate AI-powered explanations in real time
* Receive simple examples to reinforce understanding
* Clean and responsive React user interface
* Express backend integrated with OpenAI API

---

##  Tech Stack

* **Frontend:** React, CSS
* **Backend:** Node.js, Express
* **API:** OpenAI API

---

##  Project Structure

```
ai-study-assistant/
├── src/                # React frontend
├── public/
├── server/             # Backend (Express + OpenAI)
│   ├── index.js
│   ├── package.json
├── README.md
```

---

##  How to Run Locally

### 1. Clone the repository

```bash
git clone https://github.com/sndanso/ai-study-assistant.git
cd ai-study-assistant
```

### 2. Install dependencies

Frontend:

```bash
npm install
```

Backend:

```bash
cd server
npm install
```

---

### 3. Set up environment variables

Create a `.env` file inside the `server` folder:

```env
OPENAI_API_KEY=your_api_key_here
```

---

### 4. Run the app

Start backend:

```bash
cd server
node index.js
```

Start frontend (in a new terminal):

```bash
cd ..
npm start
```

---

### 5. Open in browser

```
http://localhost:3000
```

---

## 🔮 Future Improvements

* Add quiz question generation
* Implement loading spinner animations
* Save recent topics/history
* Improve response formatting (markdown rendering)
* Deploy application online

---

##  Author

Sydney Danso

---
