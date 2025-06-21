Q1: What is emmet ?
A: VS code provides a shortcut tool to create boiler plate code for a given feature
e.g. html:5 will create a boiler plate dummy html file

Q2: What is a CDN and react CDN ?
A: CDN : content delivery network is a global network of servers which keeps a copy of a websites content (like files, images) and delivers the same to the end user's computer browser across the globe. E.G., if you try to open a US website from India like amazon. then without CDN , the request would have to go all the way to the US and come back to India which will take huge amount of time & resources. But with CDN , we have a server closer to us within the country like in delhi/mumbai which keeps a copy of the website's content/file which will be delivered to us by CDN in a moment - much faster
React CDN : we can inject react into our app without actually installing it
In this project , we are using react CDN to inject react into our app, therefore we no need install react or react-dom
e.g.
<script src="https://unpkg.com/react@17/umd/react.development.js" crossorigin></script>

Q3: what is crossorigin ?
A: When a website tries to get data from another website then it is not allowed as there are some restriction . Due to this , it gives cors error.
To fix cors error, the target website has to allow the requesting website by Access-control-allow-origin: * //all can access
Access-control-allow-origin: http://yourwebsite //only your website alone can access


