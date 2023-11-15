// const Product = require('../../../../models/order.model');
// const Cart = require('../../../../models/cart.model');
// const User = require('../../../../models/user.model');
// const Order = require('../../../../models/order.model');
// const moment = require('moment');
// const { Sequelize, DataTypes, Op } = require('sequelize');

// const orderAll = async () => {

//     // const today = moment().startOf('day');

//     // const data = await Order.aggregate([
//     //     {
//     //         $match: {
//     //             createdAt: {
//     //                 $gte: today.toDate(),
//     //                 $lte: moment(today).endOf('day').toDate()
//     //             }
//     //         }
//     //     },
//     //     {
//     //         $lookup: {
//     //             from: 'products',
//     //             localField: 'order_fk_prd_id',
//     //             foreignField: '_id',
//     //             as: 'product'
//     //         }
//     //     },
//     //     {
//     //         $unwind: '$product'
//     //     },
//     //     {
//     //         $lookup: {
//     //             from: 'users',
//     //             let: { user_id: '$order_fk_user_id' },
//     //             pipeline: [
//     //                 {
//     //                     $match: {
//     //                         $expr: {
//     //                             $eq: ['$_id', '$$user_id']
//     //                         }
//     //                     }
//     //                 },
//     //                 {
//     //                     $project: {
//     //                         _id: 1,
//     //                         user_fname: 1,
//     //                         user_lname: 1
//     //                     }
//     //                 }
//     //             ],
//     //             as: 'user'
//     //         }
//     //     },
//     //     {
//     //         $lookup:{
//     //             from:'orders',
//     //             let:{order_fk_prd_id:'$order_fk_prd_id'},
//     //             pipeline:[
//     //                 {
//     //                     $match:{
//     //                         $expr: {
//     //                             $eq: ['$order_fk_prd_id', '$$order_fk_prd_id']
//     //                         }
//     //                     }
//     //                 },
//     //                 {
//     //                     $project: {
//     //                         _id: 0,
//     //                         order_status: 1
//     //                     }
//     //                 }
//     //             ],
//     //             as:'order'
//     //         }
//     //     },
//     //     {
//     //         $group: {
//     //             _id: '$order_fk_prd_id',
//     //             order_status: {
//     //                 $first: '$order_status'
//     //             },
//     //             prd_total_qty: {
//     //                 $sum: '$order_prd_qty'
//     //             },
//     //             prd_total_amount: {
//     //                 $sum: { $multiply: ['$order_prd_qty', '$product.prd_price'] }
//     //             },
//     //             product_details: {
//     //                 $first: '$product'
//     //             },
//     //             users: {
//     //                 $push: {
//     //                     user_data: {
//     //                         $first: '$user'
//     //                     },
//     //                     prd_qty: '$order_prd_qty',
//     //                 }
//     //             }
//     //         }

//     //     },
//     //     // {
//     //     //     $unwind: '$order_status'
//     //     // },
//     //     {
//     //         $project: {
//     //             _id: 0,
//     //             id: '$_id',
//     //             order_status: 1,
//     //             // order_status: {$first:'$order_status.order_status'},
//     //             users: 1,
//     //             product_details: 1,
//     //             prd_total_qty: 1,
//     //             prd_total_amount: 1
//     //         }

//     //     },
//     //     {
//     //         $sort: {
//     //             prd_total_amount: -1
//     //         }
//     //     }
//     // ]);

//     // return data;
//     // Update with your actual model paths

//     const today = moment().startOf('day');

//     const data = await Order.findAll({
//         attributes: [
//             [Sequelize.fn('SUM', Sequelize.literal('"order_prd_qty" * "product.prd_price"')), 'prd_total_amount'],
//             [Sequelize.fn('SUM', 'order_prd_qty'), 'prd_total_qty']
//         ],
//         include: [
//             {
//                 model: Product,
//                 attributes: ['_id', 'prd_name', 'prd_price', 'prd_img'],
//                 where: { '_id': Sequelize.col('Order.order_fk_prd_id') }
//             },
//             {
//                 model: User,
//                 attributes: ['_id', 'user_fname', 'user_lname'],
//                 where: { '_id': Sequelize.col('Order.order_fk_user_id') }
//             }
//         ],
//         where: {
//             createdAt: {
//                 [Op.between]: [today.toDate(), moment(today).endOf('day').toDate()]
//             }
//         },
//         group: ['order_fk_prd_id'],
//         order: [[Sequelize.literal('"prd_total_amount"'), 'DESC']]
//     });

//     // Process the data as needed
//     return data;

// }

// const orderAdd = async (user) => {

//     // // find cart based on user id
//     // let cart = await Cart.findOne({ cart_fk_user_id: user.id })

//     // // if cart is empty then return
//     // if (!cart) return;

//     // const today = moment().startOf('day');

//     // // collect all product ids from cart
//     // const prdIds = cart.cart_items.map(item => item.cartitm_fk_prd_id);

//     // // find all orders of today based collected product ids
//     // let orders = await Order.find({
//     //     order_fk_user_id: user.id, order_fk_prd_id: { $in: prdIds },
//     //     createdAt: {
//     //         $gte: today.toDate(),
//     //         $lte: moment(today).endOf('day').toDate()
//     //     }
//     // });

//     // // store new items to be added to orders
//     // const newItems = []

//     // // loop through each cart item
//     // cart.cart_items.forEach(item => {

//     //     // find if item already exists in orders
//     //     const existingItem = orders.find(o => o.order_fk_prd_id.toString() == item.cartitm_fk_prd_id.toString());

//     //     // if item exists in orders then update qty
//     //     if (existingItem) {
//     //         existingItem.order_prd_qty += item.cartitm_prd_qty;
//     //         existingItem.save();
//     //     } else {

//     //         // if item does not exist in orders then add item to newItems
//     //         newItems.push({
//     //             order_fk_user_id: user.id,
//     //             order_fk_prd_id: item.cartitm_fk_prd_id,
//     //             order_prd_qty: item.cartitm_prd_qty
//     //         });
//     //     }
//     // });

//     // // add new items to orders
//     // await Order.create(newItems);

//     // // empty cart
//     // return await Cart.updateOne({ cart_fk_user_id: user.id }, { $set: { cart_items: [] } });

//     // Find the cart based on user id

//     const cart = await Cart.findOne({ where: { cart_fk_user_id: user.id } });

//     // If cart is empty, return
//     if (!cart) return;

//     const today = moment().startOf('day');

//     // Collect all product ids from the cart
//     const prdIds = cart.cart_items.map(item => item.cartitm_fk_prd_id);

//     // Find all orders of today based on collected product ids
//     let orders = await Order.findAll({
//         where: {
//             order_fk_user_id: user.id,
//             order_fk_prd_id: { [Op.in]: prdIds },
//             createdAt: {
//                 [Op.between]: [today.toDate(), moment(today).endOf('day').toDate()]
//             }
//         }
//     });

//     // Store new items to be added to orders
//     const newItems = [];

//     // Loop through each cart item
//     for (const item of cart.cart_items) {
//         // Find if item already exists in orders
//         const existingItem = orders.find(o => o.order_fk_prd_id.toString() === item.cartitm_fk_prd_id.toString());

//         // If item exists in orders then update qty
//         if (existingItem) {
//             existingItem.order_prd_qty += item.cartitm_prd_qty;
//             await existingItem.save();
//         } else {
//             // If item does not exist in orders then add item to newItems
//             newItems.push({
//                 order_fk_user_id: user.id,
//                 order_fk_prd_id: item.cartitm_fk_prd_id,
//                 order_prd_qty: item.cartitm_prd_qty
//             });
//         }
//     }

//     // Add new items to orders
//     await Order.bulkCreate(newItems);

//     // Empty the cart
//     await Cart.update({ cart_items: [] }, { where: { cart_fk_user_id: user.id } });

//     // You might want to return something meaningful here
//     return 'Process completed successfully';

// }

// const orderUpdate = async (body) => {
//     const today = moment().startOf('day');

//     // await Order.updateMany({
//     //     order_fk_prd_id: { $in: body.prd_ids },
//     //     createdAt: {
//     //         $gte: today.toDate(),
//     //         $lte: moment(today).endOf('day').toDate()
//     //     }
//     // }, { $set: { order_status: body.order_status } });

//     await Order.update(
//         { order_status: body.order_status },
//         {
//             where: {
//                 order_fk_prd_id: { [Op.in]: body.prd_ids },
//                 createdAt: {
//                     [Op.between]: [today.toDate(), moment(today).endOf('day').toDate()]
//                 }
//             }
//         }
//     );

// }
// module.exports = { orderAll, orderAdd, orderUpdate };

// let arr = [];
Array.prototype.last = function () {
    // console.log(this.length)
    if (this.length == 0) {
        let sum = -1;
        console.log(1);
        return -1;
    }
    else {
        return this[this.length - 1];
    }
}
// arr.last()

// add = x => y => z => x + y + z

// console.log(add(1)(1)(1));
// // console.log(arr[arr.length - 1]);

let a = 'PAYPALISHIRING'
rows = 3;

function str(s, rows) {
    // let arr = s.split('');
    // // console.log(arr);
    // let rr = [];
    // let last=[]
    // for (i = 0; i < arr.length; i += rows + 1) {
    //     rr.push(arr[i]);
    //     arr[i] = 0;
    // }
    // arr = arr.filter(v => v)

    // for (j = 1; j < arr.length; j+=3) {
    //     last.push(arr[j]);
    //     arr[j] = 0;
    // }
    // arr = arr.filter(v => v)
    // let main=rr.concat(arr,last)
    // console.log(main.join(''));
    // // return main;
    // function recursion(arr, sign, length, rows) {

    //     let array = Array(rows).fill([1])
    //     if (sign == "plus") {
    //         for (let i = 0; i < rows; i++) {

    //         }
    //     }
    //     else if (sign == "minus") {

    //     }
    // }
    // let arr = s.split('');
    // let length = arr.length
    // recursion(arr, plus, length, rows);

    // return a.childNodes[2].firstChild.firstChild.childNodes[1].firstChild.childNodes[2].firstChild.childNodes[2].firstChild.firstChild.childNodes[1].firstChild.childNodes[2].childNodes[2].childNodes[3].childNodes[1].firstChild.firstChild.childNodes[1].innerText;
}
// str(a, rows);


let array = Array(rows).fill([1])
console.log(array);

array[0].push(5)
console.log(array);