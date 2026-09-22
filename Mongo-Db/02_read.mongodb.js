use("ecommerce");

// db.products.find({"name":"Wireless Mouse"})

// db.product.find({ price: {$gt:1000} })
// db.products.find({ price: { $gt: 1000 } })


// db.products.find({ $or: [{ category: "Electronics" }, { stock: { $lt: 50 } }] })


// db.products.find().sort({price: -1 }).limit(2)
db.products.find().sort({price: -1 }).skip(1).limit(3)
// db.products.find().sort({price: -1 }).limit(3)