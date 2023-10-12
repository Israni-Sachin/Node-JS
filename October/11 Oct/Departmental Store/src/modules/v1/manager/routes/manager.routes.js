const express = require('express');
const managerControllers = require('../controllers/manager.controllers');
const managerRoute = (app) => {
    app
        .route("/staff")
        .get(managerControllers.staffAll)
        .post(managerControllers.staffAdd)
        .patch(managerControllers.staffUpdate)
        .delete(managerControllers.staffDelete)

    app
        .route("/prdimg")
        .get(managerControllers.prdimgAll)
        .post(managerControllers.prdimgAdd)
        .patch(managerControllers.prdimgUpdate)
        .delete(managerControllers.prdimgDelete)

    app
        .route("/department")
        .get(managerControllers.departmentAll)
        .post(managerControllers.departmentAdd)
        .patch(managerControllers.departmentUpdate)
        .delete(managerControllers.departmentDelete)

    app.get("/cart", managerControllers.cartGet)
    app.get("/cartitems", managerControllers.cartGet)
}

module.exports = managerRoute;