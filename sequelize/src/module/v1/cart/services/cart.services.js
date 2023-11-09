const Cart = require('../../../../models/cart.model');
const Cartitem = require('../../../../models/cartitems.model');

const cartGet = async (user) => {

    // find cart based on user id and populate cart items
    let cart = await Cart.findOne({ where: { cart_fk_user_id: user.id } })

    // if cart does not exist then return
    if (!cart) return;

    // convert cart to json so that we can modify it without using _doc
    // cart = cart.toJSON();

    // filter cart items which are not null
    // cart.cart_items = cart.cart_items.filter(item => item.cartitm_fk_prd_id != null);

    // giving cart total amount
    // cart.cart_total_amount = cart.cart_items.reduce((total, cartItem) => total + cartItem.cartitm_prd_qty * cartItem.cartitm_fk_prd_id.prd_price, 0);

    return cart;
}


const cartAdd = async (body, user) => {

    // give count of cart based on user id
    let count = await Cart.countDocuments({ where: { cart_fk_user_id: user.id } });

    // if count is 0 then create new cart
    if (count == 0) {

        // if cart item qty is 0 then throw error
        const cart = await Cart.findOne({ where: { cart_fk_user_id: user.id } });
        await Cartitem.create({ where: { cartitem_fk_cart_id: cart.cart_id, cart_fk_prd_id: body.prd_id, cartitem_prd_qty: body.prd_qty } });
    }

    // if count is not 0 then find cart based on user id
    // const cart = await Cart.findOne({ cart_fk_user_id: user.id });

    // loop through each cart item given in body
    // body.cart_items.forEach(item => {

    // find if item already exists in cart
    // const existingItem = cart.cart_items.find(i => i.cartitm_fk_prd_id.toString() == item.cartitm_fk_prd_id.toString());

    // if item qty is greater than 5 then throw error
    // if (item.cartitm_prd_qty > 5)
    // throw new Error('MAX_QTY_EXCEEDED');

    // if item exists in cart then update qty
    // if (existingItem) {

    // if item qty is 0 then remove item from cart
    //     if (item.cartitm_prd_qty == 0)
    //         cart.cart_items = cart.cart_items.filter(i => i.cartitm_fk_prd_id.toString() != item.cartitm_fk_prd_id.toString());
    //     else
    //         existingItem.cartitm_prd_qty = item.cartitm_prd_qty;

    // } else {

    // if item qty is 0 then throw error
    // if (item.cartitm_prd_qty == 0)
    //     throw new Error('INVALID_DATA');

    // if item does not exist in cart then add item to cart
    //     cart.cart_items.push({
    //         cartitm_fk_prd_id: item.cartitm_fk_prd_id,
    //         cartitm_prd_qty: item.cartitm_prd_qty
    //     });
    // }
    // });

    // save cart
    // await cart.save();
}

const cartDelete = async (user, data) => {

    // find cart based on user id and remove cart items
    // return await Cart.findOneAndUpdate({ cart_fk_user_id: user.id },
    //     { $pull: { cart_items: { cartitm_fk_prd_id: { $in: data.cart_items } } } },
    //     { new: true })
    //     .populate('cart_items.cartitm_fk_prd_id', 'prd_name prd_price prd_img');
    // async function updateCart(user, data) {
        // Find the cart for the user
        const cart = await Cart.findOne({
            where: { cart_fk_user_id: user.id },
            include: [{ model: Cartitem, as: 'cart_items' }]
        });

        if (cart) {
            // Remove cart items based on the condition
            await Cartitem.destroy({
                where: {
                    cartitm_fk_prd_id: { [Sequelize.Op.in]: data.cart_items },
                    cartId: cart.id
                }
            });

            // Reload the cart with updated cart items
            const updatedCart = await Cart.findOne({
                where: { id: cart.id },
                include: [{ model: Cartitem, as: 'cart_items' }]
            });

            return updatedCart;
        }

        return null; // Handle the case where the cart is not found
    // }

}
module.exports = { cartGet, cartAdd, cartDelete };



