/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Document', {
    DocumentID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    DocumentDefinitionID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'DocumentDefinition',
        key: 'DocumentDefinitionID'
      }
    },
    Reference: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Flagged: {
      type: DataTypes.INTEGER(1),
      allowNull: false
    },
    Notes: {
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
    tableName: 'Document'
  });
};
