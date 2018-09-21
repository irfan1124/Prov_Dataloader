/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CommodityData', {
    CommodityDataID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CommodityID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Commodity',
        key: 'CommodityID'
      }
    },
    Encoding: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Value: {
      type: DataTypes.TEXT,
      allowNull: false
    },
    CreatorUserID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'User',
        key: 'UserID'
      }
    },
    Created: {
      type: DataTypes.DATE,
      allowNull: false,
      defaultValue: sequelize.literal('CURRENT_TIMESTAMP')
    }
  }, {
    tableName: 'CommodityData'
  });
};
