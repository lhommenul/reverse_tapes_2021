const Product = requrie('./Product');



for (let index = 0; index < 50; index++) {
    Product({
        name: "Product_name"+index,
        type: 5,
        description: "dk sqjdpo sq,o dksqo^dks^pqkd ^pksq kdl^s ",
        date_id: "id_onbjjct",
        color:["red","black"],
        picture_thumbnail:["id to image"],
        pictures:["id to image","id to image","id to image"],
        size:"M",
        come_to_get_it:false,
        price_ttc:10,
        price_ht:12,
        visible:false,
        quantity:150
    }).save()
}
