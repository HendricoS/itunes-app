# Starting the application

## Starting the express server

1.  npm install (node-modules)
2.  npm install cors
3.  npm install helmet (middleware package for extra security)
4.  npm install node-fetch@2 // at the routes folder (api.js require node-fetch)
5.  node server.js (start server)

### To test the server side application

1.  npm install --save-dev jest supertest
2.  npx jest or npm test

## Starting the front-end application

1.  npm install (node-modules)
2.  npm install react-router-dom
3.  npm start

### To test the front-end application

1.  go to client directory
2.  npm install --save-dev jest
3.  npm test

# Security Measures

1.  npm install helmet

## What is helmet

The helmet package is a middleware for Express.js, a popular web application framework for Node.js. It helps improve the security of your web application by setting various HTTP headers that can protect against common web vulnerabilities.

Here are some of the key security features provided by the helmet package:

Content Security Policy (CSP): Helmet can set a Content Security Policy header that helps mitigate Cross-Site Scripting (XSS) attacks by defining which sources of content are allowed to be loaded on a web page.

HTTP Strict Transport Security (HSTS): Helmet can enable HSTS headers, which instruct browsers to only communicate with the server over secure HTTPS connections, reducing the risk of man-in-the-middle attacks.

X-Content-Type-Options: Helmet sets the X-Content-Type-Options header to prevent browsers from MIME-sniffing a response away from the declared content type. This helps prevent certain types of attacks, like content type confusion attacks.

X-Frame-Options: The X-Frame-Options header is set to prevent your web pages from being embedded within frames on other sites. This can help prevent Clickjacking attacks.

X-XSS-Protection: Helmet enables the X-XSS-Protection header, which helps to enable the built-in XSS filter in modern web browsers.

NoSniff: The NoSniff option prevents browsers from trying to guess ("sniff") the MIME type of a file based on its contents, reducing the risk of certain types of attacks.

Referrer-Policy: Helmet can set the Referrer-Policy header to control how much information the browser includes with HTTP Referer headers, helping to protect user privacy.

By using the helmet package and configuring it appropriately in your Express.js application, you can enhance the security of your web application and reduce the risk of common web vulnerabilities and attacks. It's a recommended practice to include helmet in your Express.js projects to help secure them.
