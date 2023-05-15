// import models
const Product = require('./Product');
const Category = require('./Category');
const Tag = require('./Tag');
const ProductTag = require('./ProductTag');

// Products belongsTo Category
Product.belongsTo(Category, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Categories have many Products
Category.hasMany(Product, {
  foreignKey: 'category_id',
  onDelete: 'CASCADE',
});

// Products belongToMany Tags (through ProductTag)
Product.belongsToMany(Tag, {
  // Define the third table needed to store the foreign keys
  foreignKey: 'product_id',
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  // as: 'product_tags'
});
// Product.belongsToMany(Tag, {
//   through: ProductTag,
//   // as: 'product_tags',
//   foreignKey: 'product_id',
// });


// Tags belongToMany Products (through ProductTag)
Tag.belongsToMany(Product, {
  // Define the third table needed to store the foreign keys
  foreignKey: 'tag_id',
  through: {
    model: ProductTag,
    unique: false
  },
  // Define an alias for when data is retrieved
  // as: 'tag_products'
});

module.exports = {
  Product,
  Category,
  Tag,
  ProductTag,
};
