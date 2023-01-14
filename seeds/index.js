const seedCategories = require('./category-seeds');
const seedProducts = require('./product-seeds');
const seedNames = require('./tag-seeds');
const seedProductNames = require('./product-tag-seeds');

const sequelize = require('../config/connection');

const seedAll = async () => {
  await sequelize.sync({ force: true });
  console.log('\n----- DATABASE SYNCED -----\n');
  await seedCategories();
  console.log('\n----- CATEGORIES SEEDED -----\n');

  await seedProducts();
  console.log('\n----- PRODUCTS SEEDED -----\n');

  await seedNames();
  console.log('\n----- NAMES SEEDED -----\n');

  await seedProductNames();
  console.log('\n----- PRODUCT NAMES SEEDED -----\n');

  process.exit(0);
};

seedAll();
