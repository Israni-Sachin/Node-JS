const productServices = require('../services/product.services')

const productGetByName = async (req, res) => {
    try {
        let data = req.params.name
        let result = await productServices.productGetByName(data);
        res.status(200).json({ message: "product fetched successfully", data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error while getting product' });
    }
}
const productsGet = async (req, res) => {
    try {
        let data = req.params.page
        let result = await productServices.productsGet(data);
        res.status(200).json({ data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error while fetching product' });
    }
}
const productAdd = async (req, res) => {
    try {
        let body = req.body;
        let data = await productServices.productAdd(body);
        successResponse(res, 'Product added successfully', data)
    } catch (error) {
        console.log(error);
        errorResponse(res, 'Error while adding product', error.status)
    }
}
const productUpdate = async (req, res) => {
    try {
        let name = req.params.name
        let data = req.body;
        let result = await productServices.productUpdate(name, data);
        res.status(200).json({ message: "product updated successfully", data: result });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: 'Error while updating product' });
    }
}
const productDelete = async (req, res) => {
    try {
        let name = req.params.name;
        let result = await productServices.productDelete(name);
        res.status(200).json({ message: "product deleted successfully", data_affected: result.affectedRows });
    } catch (error) {
        console.log(error);
        res.status(500).json({ message: "Error while deleting product" });
    }
}

module.exports = { productsGet, productGetByName, productUpdate, productDelete, productAdd }