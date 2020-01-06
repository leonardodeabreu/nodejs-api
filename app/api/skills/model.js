class SkillModel {
  constructor() {
    this.id = null;
    this.name = null;
    this.level = null;
    this.createdAt = null;
    this.updatedAt = null;
  }

  fill(data) {
    this.id = data.id;
    this.name = data.name;
    this.level = data.level;
    this.createdAt = data.createdAt;
    this.updatedAt = data.updatedAt;
  }
}

module.exports = SkillModel;
