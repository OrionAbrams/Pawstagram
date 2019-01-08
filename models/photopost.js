module.exports = function(sequelize, DataTypes) {
  var PhotoPost = sequelize.define("PhotoPost", {
    title: {
      type: DataTypes.STRING,
      allowNull: false,
      validate: {
        len: [1]
      }
    },
    body: {
      type: DataTypes.TEXT,
      allowNull: false,
      validate: {
        len: [1]
      }
    }
  });

  PhotoPost.associate = function(models) {
    PhotoPost.belongsTo(models.User, {
      foreignKey: {
        allowNull: false
      }
    });
    PhotoPost.belongsTo(models.Photos, {
      foreignKey: {
        allowNull: false
      }
    });
  };

  return PhotoPost;
};
