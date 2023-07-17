const { Model, DataTypes } = require("sequelize");

class Job extends Model {
  static init(sequelize) {
    super.init(
      { name: DataTypes.STRING },
      {
        sequelize,
      }
    );
  }
  static associate(models) {
    this.belongsToMany(models.User, {
      foreignKey: "job_id",
      through: "user_jobs",
      as: "users",
    });
  }
}

module.exports = Job;
