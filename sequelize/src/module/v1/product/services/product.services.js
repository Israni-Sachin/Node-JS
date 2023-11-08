const { Sequelize } = require("sequelize");
const Products = require("../../../../models/product.model");

const productGet = async (body, user) => {

    // let conditions = {
    // where: {
    //     prd_name: { $regex: new RegExp(body.search, "i") }
    // }
    // }
    // let product = await Products.findAll({
    //     attributes: attributes,
    //     where: Sequelize.literal(`prd_name REGEXP '${searchRegex.source}'`),
    // });

    const searchRegex = new RegExp(body.search, "i");
    let attributes = ["prd_name",
        "prd_price",
        "prd_img",
        "prd_is_visible"]
    let conditions = {
        attributes: attributes,
        where: Sequelize.literal(`prd_name REGEXP '${searchRegex.source}'`),
        offset: body.page * body.limit - body.limit,
        limit: body.limit,
    }
    if (user.role == "user") conditions.prd_is_visible = true;


    let products = await Products.findAll(conditions)

    delete conditions.offset;
    delete conditions.limit;

    let total = await Products.findAndCountAll(conditions);
    count = Math.ceil(total.count / body.limit)

    return { products: products, total_page: count, total_products: total.count };
}

const productAdd = async (data) => {

    const existingProduct = await Products.findOne({
        where: {
            prd_name: data.prd_name,
            prd_price: data.prd_price
        }
    });

    if (existingProduct) {
        throw new Error("ALREADY_EXISTS");
    }

    await Products.create(data);

}

const productUpdate = async (data) => {

    // Check if a product with the given prd_id exists
    const count = await Products.count({ where: { _id: data.prd_id } });

    if (count === 0) {
        throw new Error("DATA_NOT_FOUND");
    }

    // Check if another product with the same prd_name and prd_price exists
    const check = await Products.count({
        where: {
            _id: { [Sequelize.Op.ne]: data.prd_id },
            prd_name: data.prd_name,
            prd_price: data.prd_price
        }
    });

    if (check > 0) {
        throw new Error("ALREADY_EXISTS");
    }

    // Update the existing product
    await Products.update({ ...data, prd_id: undefined }, {
        where: { prd_id: data.prd_id }
    });

}

const productDelete = async (data) => {

    await Products.update(
        { prd_is_visible: false },
        {
          where: {
            prd_id: { [Sequelize.Op.in]: data.prd_ids },
          },
        }
      );

}

module.exports = { productGet, productAdd, productUpdate, productDelete };

