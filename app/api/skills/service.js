const uuidv4 = require('uuid/v4');
const SkillModel = require('./model');

class SkillService {
  static async create(payload) {
    const skill = new SkillModel();

    skill.fill({
      id: uuidv4(),
      name: payload.name,
      level: payload.level,
      createdAt: new Date().getTime(),
      updatedAt: new Date().getTime()
    });

    return { skill };
  }

  static async update(skill, level) {
    skill.fill({
      id: skill.id,
      name: skill.name,
      level,
      createdAt: skill.createdAt,
      updatedAt: new Date().getTime()
    });

    return { skill }
  }
}

module.exports = SkillService;
