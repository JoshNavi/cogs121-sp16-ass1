// Node.js Dependencies
const express = require("express");
const app = express();
const http = require("http").createServer(app);
// const io = require("socket.io")(http);
const path = require("path");
const session = require("express-session");
const MongoStore = require("connect-mongo")(session);
const handlebars = require('express-handlebars');
const mongoose = require('mongoose');

require("dotenv").load();

var models = require("./models");
var db = mongoose.connection;

var router = {
  index: require("./routes/index")
};

var parser = {
    body: require("body-parser"),
    cookie: require("cookie-parser")
};

var strategy = { /* TODO */ };

// Database Connection
/* TODO */

// session middleware
var session_middleware = session({
    key: "session",
    secret: process.env.SESSION_SECRET,
    saveUninitialized: true,
    resave: true,
    store: new MongoStore({ mongooseConnection: db })
});

// Middleware
app.set("port", process.env.PORT || 3000);
app.engine('html', handlebars({ defaultLayout: 'layout', extname: '.html' }));
app.set("view engine", "html");
app.set("views", __dirname + "/views");
app.use(express.static(path.join(__dirname, "public")));
app.use(parser.cookie());
app.use(parser.body.urlencoded({ extended: true }));
app.use(parser.body.json());
app.use(require('method-override')());
app.use(session_middleware);
/* TODO: Passport Middleware Here*/

/* TODO: Use Twitter Strategy for Passport here */

/* TODO: Passport serialization here */

// Routes
/* TODO: Routes for OAuth using Passport */
app.get("/", router.index.view);
// More routes here if needed

// io.use(function(socket, next) {
//     session_middleware(socket.request, {}, next);
// });

/* TODO: Server-side Socket.io here */

// Start Server
http.listen(app.get("port"), function() {
    console.log("Express server listening on port " + app.get("port"));
});
