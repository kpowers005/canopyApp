'use strict';
const { Validator } = require('sequelize');
const bcrypt = require('bcryptjs');

module.exports = (sequelize, DataTypes) => {
  const User = sequelize.define('User', {
    firstName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30]
      },
    },
    lastName: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 30]
      },
    },
    email: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [3, 256],
        isNotEmail(value) {
          if (!Validator.isEmail(value)) {
            throw new Error('Please provide valid email.');
          }
        },
      },
    },
    hashedPassword: {
      type: DataTypes.STRING.BINARY,
      allowNull: false,
      validate: {
        len: [60, 60]
      },
    },
  },
  {
    defaultScope: {
      attributes: {
        exclude: ['hashedPassword', 'email', 'createdAt', 'updatedAt'],
      },
    },
    scopes: {
      currentUser: {
        attributes: { exclude: ['hashedPassword'] },
      },
      loginUser: {
        attributes: {},
      },
    },
  }, {});

  User.associate = function(models) {

    User.belongsToMany(models.Treehouse, {
      through: 'Review',
      as: 'treehouse_reviews',
      otherKey: 'treehouseId',
      foreignKey: 'userId'
     });

     User.belongsToMany(models.Treehouse, {
       through: 'Reservation',
       as: 'Bookings',
       otherKey: 'treehouseId',
       foreignKey: 'userId'
     })
  };


  User.prototype.toSafeObject = function() {
    const { id, email } = this;
    return { id, email };
  };


  User.prototype.validatePassword = function (password) {
    return bcrypt.compareSync(password, this.hashedPassword.toString());
   };

   User.login = async function ({ credential, password }) {
    const { Op } = require('sequelize');
    const user = await User.scope('loginUser').findOne({
      where: {
        [Op.or]: {
          email: credential,
        },
      },
    });
    if (user && user.validatePassword(password)) {
      return await User.scope('currentUser').findByPk(user.id);
    }
  };

  User.signup = async function ({ username, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      email,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };


  return User;
};
