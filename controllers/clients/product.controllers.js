module.exports.index = async (req, res) => {
  res.render("client/pages/products/index.pug",{
    pageTitle:"Trang sản phẩm"
  })
}

