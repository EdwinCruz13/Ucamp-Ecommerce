const { Router } = require("express");

const router = Router();
/* ----------------------------------------------------
  defining routes
----------------------------------------------------*/

let strComments = "Yo soy Index <p>Visita estos enlaces como primeras pruebas.</p>";
strComments += "<p><a href='https://ucamp-ecommerce-server.onrender.com/api/products/list'>Listado de productos</a> </p>";
strComments += "<p><a href='https://ucamp-ecommerce-server.onrender.com/api/products/colors/list'>Listado de colores</a> </p>";
strComments += "<p><a href='https://ucamp-ecommerce-server.onrender.com/api/products/categories/list'>Listado de categorias de productos</a> </p>";
strComments += "<p><a href='https://ucamp-ecommerce-server.onrender.com/api/users/list'>Listado de usuarios</a> </p>";

strComments += "<p>para mas contenido visita el sitio: <a href='https://ucamp-ecommerce-client-51lu.onrender.com/'>https://ucamp-ecommerce-client-51lu.onrender.com/</a> </p>";


//listing of users, 
//add the token in order to verify the private access
router.get("/", (req, resp) => {
    return resp.send(strComments);
});





module.exports = router;