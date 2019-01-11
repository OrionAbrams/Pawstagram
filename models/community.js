module.exports = function(sequelize, DataTypes) {
  var Community = sequelize.define("Community", {
    name: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }  
    },
    posts: {
      type: DataTypes.TEXT,
      allowNull: true,
      validate: {
        len: [1]
      }
    },
    bio: {
      type: DataTypes.TEXT,
      allowNull: true
    },
    location: {
      type: DataTypes.STRING,
      allownull: true
    },
    photoUrl: {
      type: DataTypes.STRING,
      allowNull: false,
      defaultValue:
      "https://i1.wp.com/www.mvhsoracle.com/wp-content/uploads/2018/08/default-avatar.jpg?w=300&ssl=1",
      validate: {
        isUrl: true
      }
    }
  });

  Community.associate = function(models) {
    Community.belongsToMany(models.User, {
      through: "UserCommunity",
      as: "Communities",
      foreignKey: "communityId",
      otherKey: "userId"
    });
  };
  return Community;
};
