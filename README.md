<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta name="viewport" content="width=device-width, initial-scale=1.0">
</head>
<body>
    <h1>Basic Calculator Web App</h1>
    <h2>Project Overview</h2>
    <p>
        This is a fullstack web application that provides a basic calculator functionality. It uses Node.js and Express.js for the backend, React.js for the frontend, Recoil as the state management library, and Tailwind CSS for styling. The application is capable of performing calculations on simple equations, such as addition, subtraction, multiplication, and division. User data and calculation history are stored in MongoDB. The project includes three main routes:
    </p>
    <ul>
        <li><code>/post</code>: Computes the answer for the equation, returns it, and stores it in the database.</li>
        <li><code>/history</code>: Displays the history of calculations made by the user.</li>
        <li><code>/clear</code>: Allows users to clear their calculation history from the database.</li>
    </ul>
    <h2>Prerequisites</h2>
    <p>Before you can run this project locally, ensure you have the following prerequisites installed:</p>
    <ul>
        <li><a href="https://nodejs.org/">Node.js</a>: Make sure you have Node.js installed to run the server and build the frontend.</li>
        <li><a href="https://www.mongodb.com/">MongoDB</a>: MongoDB is used as the database for this project. You should have MongoDB installed and running.</li>
    </ul>
    <h2>Getting Started</h2>
    <ol>
        <li>Clone the repository to your local machine:</li>
    </ol>
    <pre><code>git clone https://github.com/your-username/basic-calculator-web-app.git</code></pre>
    <ol start="2">
        <li>Navigate to the project directory:</li>
    </ol>
    <pre><code>cd basic-calculator-web-app</code></pre>
    <ol start="3">
        <li>Install the backend dependencies:</li>
    </ol>
    <pre><code>cd backend</code></pre>
    <pre><code>npm install</code></pre>
    <ol start="4">
        <li>Configure the backend:</li>
    </ol>
    <p>Create a <code>.env</code> file in the <code>backend</code> directory and provide the necessary environment variables, including MongoDB connection URL, JWT secret, and other configuration options.</p>
    <ol start="5">
        <li>Start the backend server:</li>
    </ol>
    <pre><code>npm start</code></pre>
    <ol start="6">
        <li>Install the frontend dependencies:</li>
    </ol>
    <pre><code>cd ../frontend</code></pre>
    <pre><code>npm install</code></pre>
    <ol start="7">
        <li>Start the frontend development server:</li>
    </ol>
    <pre><code>npm start</code></pre>
    <ol start="8">
        <li>Access the web app in your browser at <code>http://localhost:3000</code>.</li>
    </ol>
    <h2>Contributing</h2>
    <p>If you'd like to contribute to this project, please follow these guidelines:</p>
    <ol>
        <li>Fork the repository.</li>
        <li>Create a new branch for your feature or bug fix.</li>
        <li>Make your changes and ensure the code style adheres to the project conventions.</li>
        <li>Test your changes thoroughly.</li>
        <li>Create a pull request with a clear description of your changes and why they are needed.</li>
    </ol>
    <h2>License</h2>
    <p>This project is licensed under the MIT License. See the <a href="LICENSE">LICENSE</a> file for details.</p>
    <h2>Contact</h2>
    <p>For any questions or inquiries, please contact <a href="mailto:harshpsharma98842@gmail.com">P Harsh Sharma</a>.</p>
</body>
</html>
