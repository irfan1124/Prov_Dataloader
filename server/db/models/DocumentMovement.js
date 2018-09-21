/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('DocumentMovement', {
    DocumentID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Document',
        key: 'DocumentID'
      }
    },
    MovementID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      references: {
        model: 'Movement',
        key: 'MovementID'
      }
    }
  }, {
    tableName: 'DocumentMovement'
  });
};
