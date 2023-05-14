const router = require('express').Router();
const Reviews= require('../../models/Reviews');

router.get('/', async (req, res) => {
    try {
        const ReviewsData = await Reviews.findAll();

        res.status(200).json(ReviewsData)
    } catch (err) {
        res.status(500).json(err)
    }
})

module.exports = router;