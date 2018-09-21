/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CommodityMatrix', {
    SourceCommodityID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Commodity',
        key: 'CommodityID'
      }
    },
    DestinationCommodityID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Commodity',
        key: 'CommodityID'
      }
    },
    ProcessID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Process',
        key: 'ProcessID'
      }
    }
  }, {
    tableName: 'CommodityMatrix'
  });
};
