# Metropolitan-Pest-Control-Web-System


## Project Setup
-mkdir backend frontend

    # Setup Frontend
    -cd frontend
    -npm create vite@latest . (Select React and JS)
    -npm install react-router-dom       //for paging and routing
    -npm install react-hot-toast        //for alert of notif features
    -npm install tailwindcss @tailwindcss/postcss postcss //add tailwind this is the latest script in the tailwind website *Just follow the installation in tailwind Documentation*
    -npm install cally      //for calendar

    # Setup Backend
    -cd root folder
    -npm init -y (json package file)
    -npm install express dotenv mongoose bcryptjs cloudinary cookie-parser jsonwebtoken socket.io
    -npm install nodemon -D
    -npm install multer //for handling file uploads
    -npm install nanoid //for auto random generate id



## How to run the backend and frontend
    -cd backend
    -npm run dev (if error occurs, then "run npm install")

    -cd frontend
    -npm run dev (if error occurs, then "run npm install")





## HTTP Status Codes
      200 - ok
      201 - created
      400 - bad request
      404 - not found
      500 - internal server error