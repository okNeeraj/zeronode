const userData = require('./api/userData');

const data = [];

const App = JSON.stringify(userData);

const AppHTML = `
<!DOCTYPE html>
<html lang="en">
<head>
    <meta charset="UTF-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">
    <title>ZeroNode - Let's understand NodeJs</title>
    <link href="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/css/bootstrap.min.css" rel="stylesheet" integrity="sha384-0evHe/X+R7YkIZDRvuzKMRqM+OrBnVFBL6DOitfPri4tjfHxaWutUpFmBp4vmVor" crossorigin="anonymous">
</head>

<body>
    <nav class="navbar navbar-expand-lg navbar-dark bg-primary">
        <div class="container">
            <a class="navbar-brand" href="127.0.0.1:3000/" style="margin-right: 17em;">ZeroNode</a>
            <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
            </button>
            <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav">
                <li class="nav-item">
                <a class="nav-link active" aria-current="page" href="127.0.0.1:3000/">Home</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Projects</a>
                </li>
                <li class="nav-item">
                <a class="nav-link" href="#">Communities</a>
                </li>
                <li class="nav-item">
                <a href="#" class="nav-link">Documentation</a>
                </li>
                <li class="nav-item">
                <a href="#" class="nav-link">GitHub</a>
                </li>
            </ul>
            </div>
        </div>
    </nav>
    <div class="container mt-3">
        <h1>What is a buffer?</h1>
        <p>A buffer is an area of memory. Most JavaScript developers are much less familiar with this concept, compared to programmers using a system programming languages (like C, C++, or Go), which interact directly with memory every day. </p>
        <code class="bg-dark d-block p-2">
        <pre>${data}</pre>
        </code>
        
    </div>
    
<script src="https://cdn.jsdelivr.net/npm/@popperjs/core@2.11.5/dist/umd/popper.min.js" integrity="sha384-Xe+8cL9oJa6tN/veChSP7q+mnSPaj5Bcu9mPX5F5xIGE0DVittaqT5lorf0EI7Vk" crossorigin="anonymous"></script>
<script src="https://cdn.jsdelivr.net/npm/bootstrap@5.2.0-beta1/dist/js/bootstrap.min.js" integrity="sha384-kjU+l4N0Yf4ZOJErLsIcvOU2qSb74wXpOhqTvwVx3OElZRweTnQ6d31fXEoRD1Jy" crossorigin="anonymous"></script>
</body>
</html>
`;

module.exports = App;
