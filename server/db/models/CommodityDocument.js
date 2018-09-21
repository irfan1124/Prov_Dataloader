/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('CommodityDocument', {
    CommodityID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Commodity',
        key: 'CommodityID'
      }
    },
    DocumentID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Document',
        key: 'DocumentID'
      }
    }
  }, {
    tableName: 'CommodityDocument'
  });
};
