const { signUp, signIn } = require('../../controller/signHandler/sign');
const router = require('express').Router();

router.route('/signup', signUp);
router.route('/login', signIn);

module.exports = router;