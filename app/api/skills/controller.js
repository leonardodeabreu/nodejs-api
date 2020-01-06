const { validationResult } = require('express-validator');
const SkillService = require('./service');

class SkillController {
  static getAll(res, skills) {
    return res.json(skills);
  }

  static getById(id, res, skills) {
    const needleSkill = skills.filter(item => item.id === id);
  
    return needleSkill.length > 0
      ? res.json(needleSkill)
      : res.status(404).send('Sorry buddy, but your skill was not found in our side of the force.');
  }
 
  static async create(req, res, skills) {
    const errors = validationResult(req);

    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    }

    const { skill } = await SkillService.create(req.body);

    skills.push(skill);

    res.send('Woooho! Your skill was added in the our galactic database.');
  }

  static async update(req, res, skills) {
    const errors = validationResult(req);
  
    if (!errors.isEmpty()) {
      return res.status(422).jsonp(errors.array());
    }
    const { id } = req.params;
    const needleSkill = skills.find(item => item.id === id);
    
    if (!needleSkill) {
      return res.status(404).send('Sorry buddy, but your skill was not found in our side of the force.');
    }

    const { level } = req.body;
    const { skill } = await SkillService.update(needleSkill, level);

    skills = skills.filter(item => item.id !== id);
  
    skills.push(skill);
  
    res.send('Woooho! We changed your skill as you requested, young padawan.');
  }
}

module.exports = SkillController;
