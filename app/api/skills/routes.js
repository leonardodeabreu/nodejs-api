const express = require('express');
const { CREATE_REQUEST, UPDATE_REQUEST } = require('./request');
const SkillController = require('./controller');

const router = express.Router({ mergeParams: true });

let skills = [];

router.get('/', (req, res) => SkillController.getAll(res, skills));

router.get('/:id', (req, res) => SkillController.getById(req.params.id, res, skills));

router.post('/', CREATE_REQUEST, async (req, res) => SkillController.create(req, res, skills));

router.put('/:id', UPDATE_REQUEST, async (req, res) => SkillController.update(req, res, skills)); 

module.exports = router;
 