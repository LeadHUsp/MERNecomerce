const express = require('express');
const router = express.Router();
const jwt = require('jsonwebtoken'); // to generate token
const bcrypt = require('bcrypt'); // encrypt password


//Check validation for requests

const {
    check,
    validationResult
} = require('express-validator');
const gravatar = require('gravatar'); // get user image by email
const auth = require('../middleware/auth');
//Models 

const User = require('../models/User');


router.get('/', auth, async (req, res) => {
    try {
        //get user information by id
        const user = await User.findById(req.user.id).select('-password')
        res.json(user)

    } catch (error) {
        console.log(error.message);
        res.status(500).send('Server Error')
    }
})

router.post('/register', [
        //validation
        check('name', 'Name is required').not().isEmpty(),
        check('email', 'Please include a valid email').isEmail(),
        check('password', 'Pleaase enter a password with 6 or more characters').isLength({
            min: 6
        })

    ],
    async (req, res) => {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            });
        }
        //get name and email and password from request

        const {
            name,
            email,
            password
        } = req.body;

        try {
            //Check if user already exist
            let user = await User.findOne({
                email
            });
            //If user exist

            if (user) {
                return res.status(400).json({
                    errors: [{
                        msg: 'User already exists'
                    }]
                })
            }
            // If not exists
            //get image from gravatar
            const avatar = gravatar.url(email, {
                s: '200', //Size
                r: 'pg', // Rate
                d: 'mm'
            })
            //create user object
            user = new User({
                name,
                email,
                avatar,
                password
            })
            const salt = await bcrypt.genSalt(10); // generate salt contains 10
            //save passsword 
            user.password = await bcrypt.hash(password, salt); //use user password to encrypt
            //save user in database
            await user.save();
            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(
                payload,
                process.env.JWT_SECRET, {
                    expiresIn: 360000 //for development for production it will 360000
                }, (err, token) => {
                    if (err) throw err
                    res.json({
                        token
                    })
                }
            );
        } catch (error) {
            console.log(error.message);
            res.status(500).send('Server error')
        }
    }
);
router.post('/login', [
        check('email', 'please include a valid email').isEmail(),
        check('password', 'password is required').exists()
    ],
    async (req, res) => {
        //if error
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({
                errors: errors.array()
            })
        }
        //if everything is good
        //get email and password from request body
        const {
            email,
            password
        } = req.body;
        try {
            //find user
            let user = await User.findOne({
                email
            });
            //if user not found in database
            if (!user) {
                return res.status(400).json({
                    errors: [{
                        msg: 'Invalid credentials'
                    }]
                })
            }
            //payload for jwt
            const payload = {
                user: {
                    id: user.id
                }
            }
            jwt.sign(payload, process.env.JWT_SECRET, {
                    expiresIn: 360000
                },
                (err, token) => {
                    if (err) throw err;
                    res.json({
                        token
                    })
                })
        } catch (error) {
            console.log(error.message);
            res.status(500).send('Server error');
        }
    })

module.exports = router