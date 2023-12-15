const { Sequelize } = require('sequelize');


const sequelize = new Sequelize(process.env.DATABASE_URL, {
  dialect: 'postgres',
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false, 
    },
  },
});

// authentication and synchronization
sequelize.authenticate()
  .then(() => {
    console.log("Connection has been established successfully.");
   
    return sequelize.sync(); 
  })
  .catch((err) => {
    console.error("Unable to connect to the database:", err);
  });

module.exports = sequelize;
