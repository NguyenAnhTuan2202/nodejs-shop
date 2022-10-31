const Product = require("../models/product");

exports.getProducts = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/product-list", {
      prods: products,
      pageTitle: "Tuấn Shop",
      path: "/products",
    });
  });
};

exports.getProduct = (req, res, next) => {
  const prodId = req.params.slug;
  console.log(prodId);
  res.redirect("/");
};

exports.getIndex = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/index", {
      prods: products,
      pageTitle: "Tuấn Shop",
      path: "/",
    });
  });
};
exports.getCart = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/cart", {
      pageTitle: "Tuấn Shop",
      path: "/cart",
    });
  });
};
exports.getCheckout = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/checkout", {
      pageTitle: "Tuấn Shop",
      path: "/checkout",
    });
  });
};
exports.getOrders = (req, res, next) => {
  Product.fetchAll((products) => {
    res.render("shop/orders", {
      pageTitle: "Tuấn Shop",
      path: "/orders",
    });
  });
};
