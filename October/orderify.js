const data = await Orders.find({
    createdAt: {
      $gte: today.toDate(),
      $lte: moment(today).endOf('day').toDate()
    }
  })
    .populate('order_items.orderitm_fk_prd_id', 'prd_id prd_name prd_price prd_img')
    .populate('order_fk_user_id', 'user_fname user_lname');

  let items = [];
  let prds = [];

  data.forEach(e => {
    items.map(i => prds.push(i.prd_id));

    e.order_items.forEach(item => {
      if (prds.includes(item.orderitm_fk_prd_id._id)) {

        let a = items.findIndex(ee => ee.prd_id == item.orderitm_fk_prd_id._id)
        console.log(a);
        items[a].total_qty += item.orderitm_prd_qty;
        items[a].total_amount = Number(item.orderitm_fk_prd_id.prd_price) * Number(items[a].total_qty)

        items[a].user.forEach(i => {
          if (i.user_id == e.order_fk_user_id._id) {
            // console.log(item.orderitm_prd_qty);
            // console.log(i);
            // let new = {
            //   i.prd_qty += item.orderitm_prd_qty
            // }
            let us = { ...i, [i.prd_qty]: i.prd_qty += item.orderitm_prd_qty }
            console.log(us);
          }
          else {
            items[a].user.push({
              user_id: e.order_fk_user_id._id,
              user_fname: e.order_fk_user_id.user_fname,
              user_lname: e.order_fk_user_id.user_lname,
              prd_qty: item.orderitm_prd_qty
            });
          }
        });
      }
      else {
        items.push(itemToPrdMapper(item, e));
      }
    })
  })
  return items;