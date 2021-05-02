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
        len: [3, 50]
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

    User.belongsToMany(models.User, {
      through: 'Review',
      as: 'reviews',
      otherKey: 'treehouseId',
      foreignKey: 'userId'
    });

    User.belongsToMany(models.User, {
      through: 'Reservation',
      as: 'reservations',
      otherKey: 'treehouseId',
      foreignKey: 'userId'
    });

    User.hasMany(models.Reservation, { foreignKey: 'userId' });
    User.hasMany(models.Review, { foreignKey: 'userId' });
  };


  User.prototype.toSafeObject = function() {
    const { id, firstName, lastName, email } = this;
    return { id, firstName, lastName, email };
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

  User.signup = async function ({ firstName, lastName, email, password }) {
    const hashedPassword = bcrypt.hashSync(password);
    const user = await User.create({
      firstName,
      lastName,
      email,
      hashedPassword,
    });
    return await User.scope('currentUser').findByPk(user.id);
  };


  return User;
};
