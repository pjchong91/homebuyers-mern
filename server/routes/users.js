const router = require('express').Router();
let User = require('../models/user.model');

router.route('/').get((req, res) => {
    User.find()
        .then(users => res.json(users))
        .catch(err => res.status(400).json('Error: ' + err));
})

router.route('/add').post((req, res) => {
    const username = req.body.username;
    const newUser = new User({ username })

    newUser.save()
        .then(() => res.json('User added!'))
        .catch(err => res.status(400).json(err));
})

router.route('/update/:id').post((req, res) => {
    User.findById(req.params.id)
        .then(user => {
            user.username = req.body.username;

            user.save()
                .then(() => {
                    return res.status(200).json({
                        success: true,
                        id: user._id,
                        message: 'Username updated'
                    })
                })
                .catch(err => {
                    return res.status(404).json({
                        err,
                        message: 'Username failed to update'
                    })
                })


        })

        .catch(err => res.status(400).json('Error: ' + err))
})

router.route('/delete/:id').delete((req, res) => {
    User.findByIdAndDelete(req.params.id)
        .then(() => res.json('User deleted'))
        .catch(err => res.status(400).json('Error: ' + err))
})

module.exports = router;

