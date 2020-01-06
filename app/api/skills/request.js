const { check } = require('express-validator');
const { LEVEL } = require('../../utils/constants');

module.exports = Object.freeze({
  CREATE_REQUEST: [
    check('name').not().isEmpty()
      .withMessage('Hey buddy, "name" is a required param.'),
    check('level').not().isEmpty()
      .withMessage('Hey buddy, "level" is a required param.'),
    check('level').isIn([LEVEL.JUNIOR, LEVEL.SENIOR, LEVEL.EXPERT])
      .withMessage(`Opsss! The param "level" must be ${LEVEL.JUNIOR}, ${LEVEL.SENIOR} or ${LEVEL.EXPERT}`)
  ],
  UPDATE_REQUEST: [
    check('level').not().isEmpty()
      .withMessage('Hey buddy, "level" is a required param.'),
    check('level').isIn([LEVEL.JUNIOR, LEVEL.SENIOR, LEVEL.EXPERT])
      .withMessage(`Opsss! The param "level" must be ${LEVEL.JUNIOR}, ${LEVEL.SENIOR} or ${LEVEL.EXPERT}`)
  ],
});
