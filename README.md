# Metropolitan-Pest-Control-Web-System


## Project Setup
-mkdir backend frontend

    # Setup Frontend
    -cd frontend
    -npm create vite@latest . (Select React and JS)
    -npm install react-router-dom       //for paging and routing
    -npm install react-hot-toast        //for alert of notif features
    -npm install tailwindcss @tailwindcss/postcss postcss //add tailwind this is the latest script in the tailwind website *Just follow the installation in tailwind Documentation*
    -npm install cally // for calendar

    # Setup Backend
    -cd root folder
    -npm init -y (json package file)
    -npm install express dotenv mongoose bcryptjs cloudinary cookie-parser jsonwebtoken socket.io
    -npm install nodemon -D



## How to run the backend and frontend
    -cd backend
    -npm run dev (if error occurs, then "run npm install")

    -cd frontend
    -npm run dev (if error occurs, then "run npm install")