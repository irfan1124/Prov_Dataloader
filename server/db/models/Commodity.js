/* jshint indent: 2 */

module.exports = function(sequelize, DataTypes) {
  return sequelize.define('Commodity', {
    CommodityID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      primaryKey: true,
      autoIncrement: true
    },
    CategoryID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Category',
        key: 'CategoryID'
      }
    },
    OwnerCompanyID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'Company',
        key: 'CompanyID'
      }
    },
    LocalName: {
      type: DataTypes.STRING(255),
      allowNull: false
    },
    Quantity: {
      type: DataTypes.INTEGER(11),
      allowNull: false
    },
    UnitOfMeasureID: {
      type: DataTypes.INTEGER(10).UNSIGNED,
      allowNull: false,
      references: {
        model: 'UnitOfMeasure',
        key: 'UnitOfMeasureID'
      }
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
    tableName: 'Commodity'
  });
};
