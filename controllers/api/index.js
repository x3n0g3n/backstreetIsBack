const router = require('express').Router();
const userRoutes = require('./userRoutes');
const ReviewsRoutes = require('./ReviewsRoutes');

router.use('/users', userRoutes);
router.use('/reviews', ReviewsRoutes);

module.exports = router;