# hpdf-task1

This task helps beginners in understanding the basics of NodeJS-Express.

1)Install Node.js
https://nodejs.org/en/

2)Install Express
https://expressjs.com/en/starter/installing.html

3)Run the app by executing following command-
  $node app.js
  
  Load http://localhost:8080/ in a browser to see the output.

Endpoints and their expected outputs :

/		          Displays simple string like "Hello World- Akshatha"

/authors	    Fetches list of authors and posts from an API and prints a list of authors and the count of their posts

/setcookie		The server sets two cookies (name, age) which contains the name and age of the author 

/getcookies		Displays the contents of the cookies saved previously by /setcookie endpoint

/robots.txt		Denies request to this page

/html	      	Renders a HTML page

/input	    	Renders a HTML form that sends user entered data to POST /input
   	    	    
              Displays the data sent from GET /input to the browser as response and in the Console also
