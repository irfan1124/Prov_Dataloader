/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DocumentDefinition', {
    DocumentDefinitionID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    Name: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    URL: {
      type: DataTypes.STRING(255),
      allowNull: false
    }
  }, {
    tableName: 'DocumentDefinition'
  });
};
