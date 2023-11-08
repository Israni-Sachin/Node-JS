
const orderControllers = require('../controllers/order.controllers');
const { verifyToken } = require('../../../../middlewares/token');
const roleValidator = require('../../../../middlewares/role-validator');

const ordersRoutes = (app) => {

    app.get('/order', verifyToken, roleValidator(['admin']), orderControllers.orderAll);

    app.post('/order', verifyToken, orderControllers.orderAdd);

    app.put('/order', verifyToken, orderControllers.orderUpdate);
}

module.exports = ordersRoutes;

