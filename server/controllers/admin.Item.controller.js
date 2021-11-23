// Import Product Model
import Item from "../models/Item.model.js";
import Image from "../models/Image.model.js";
import Size from "../models/Size.model.js";
 
// Get all products
export const getItems = async (req, res) => {
    try {
        const total = await Item.count();
        const item = await Item.findAll({
            include: [
                {
                    model: Image, as: "images",
                },
                {
                    model: Size, as: "sizes"
                }
            ]
        });
        res.header('Access-Control-Expose-Headers', 'X-Total-Count')
        res.set("x-total-count", total);
        res.send(item);
    } catch (err) {
        console.log(err);
        res.status(500).send({
            message:
              err.message || "Some error occurred while retrieving data."
        });
    }
}
 
// Get product by id
export const getItemById = async (req, res) => {
    try {
        const item = await Item.findAll({
            include: [
                {
                    model: Image,
                }
            ],
            where: {
                id: req.params.id,
            },
        });
        res.send(item[0]);
    } catch (err) {
        console.log(err);
    }
}
 
// // Create a new product
// export const createProduct = async (req, res) => {
//     try {
//         await Product.create(req.body);
//         res.json({
//             "message": "Product Created"
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }

// // Update product by id
// export const updateProduct = async (req, res) => {
//     try {
//         await Product.update(req.body, {
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json({
//             "message": "Product Updated"
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }
 
// // Delete product by id
// export const deleteProduct = async (req, res) => {
//     try {
//         await Product.destroy({
//             where: {
//                 id: req.params.id
//             }
//         });
//         res.json({
//             "message": "Product Deleted"
//         });
//     } catch (err) {
//         console.log(err);
//     }
// }