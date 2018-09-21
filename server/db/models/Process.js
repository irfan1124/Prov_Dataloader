/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Process', {
    ProcessID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    ProcessDefinitionID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'ProcessDefinition',
        key: 'ProcessDefinitionID'
      }
    },
    Reference: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Commenced: {
      type: DataTypes.DATE,
      allowNull: false
    },
    Completed: {
      type: DataTypes.DATE,
      allowNull: true
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
    tableName: 'Process'
  });
};
