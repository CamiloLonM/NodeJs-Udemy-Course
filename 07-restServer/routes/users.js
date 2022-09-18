
const { Router } = require('express')
const { check } = require('express-validator')
const { validateFields } = require('../middleware/validate-fields')
const { validRole, existsEmail, existUserById } = require('../helpers/db-validators')

const { userGet,
    userPost,
    userPut,
    userDelete } = require('../controllers/users')


const router = Router()

router.get('/', userGet)

router.post('/', [
    check('name', 'The name is required').not().isEmpty(),      // No puede ser vacio
    check('password', 'The password must be greater than 6 characters').isLength({ min: 6 }),
    check('email', 'The email is not valid').isEmail(),
    check('email').custom(existsEmail),
    // check('rol', 'No es un rol válido').isIn(['ADMI','USER']),
    check('role').custom(validRole),                // Es igual a .custom((role) => validRole(role))
    validateFields
], userPost)

router.put('/:id', [
    check('id', 'The ID is not valid').isMongoId(),
    check('id').custom(existUserById),
    check('role').custom(validRole),
    validateFields
], userPut)

router.delete('/:id', [
    check('id', 'The ID is not valid').isMongoId(),
    check('id').custom(existUserById),
    validateFields
], userDelete)



module.exports = router