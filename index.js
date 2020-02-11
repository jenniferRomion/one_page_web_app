/**
 * Required external modules
 */
    const express = require("express");
    const path = require("path");

 /**
  * App variables
  */
    const app = express();

    const port = process.env.PORT || "8000";
    const router = express.Router();
    //const path = __dirname + '/views/';

  /**
   * App configuration
   */
    app.set('view engine', 'ejs');
    app.set('views', path.join(__dirname, 'views'));
    
    app.use("/", router);
    app.use("/bootstrap", express.static(__dirname + '/node_module/bootstrap/dist'));
    
    app.use(express.static(path.join(__dirname, "public")));

    

   /**
    * Routes definition
    */
   router.use( (req, res, next) => {
    console.log("/" + req.method);
    next();
   });

    router.get("/", (req, res) => {
        res.status(200).send("ONE_PAGE_WEB_APP");
    });

    router.get("/home", (req, res) => {
        res.render(path.join(__dirname, '/views/', "home.ejs"));
    });


    app.use("*", (req, res) => {
        res.render(path.join(__dirname, '/views/', "404.ejs"));
    });

    /**
     * Server activation
     */
    app.listen(port, () => {
        console.log('listening to request on http://localhost:${port}');
    });