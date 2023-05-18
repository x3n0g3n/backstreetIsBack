const router = require('express').Router();
const { Reviews } = require('../../models');
const withAuth = require('../../utils/auth');

router.get('/', async (req, res) => {
    try {
        const ReviewsData = await Reviews.findAll();

        res.status(200).json(ReviewsData);
    } catch (err) {
        res.status(500).json(err);
    }
});
// create a review

router.post('/', withAuth, async (req,res) => {
    try {
        const newReview = await Reviews.create({
            ...req.body,
            user_id: req.session.user_id
        })
        res.status(200).json(newReview);
    } catch (err) {
        res.status(500).json(err);
    }
});
// edit review (needs to be logged on)
// delete review (needs to be logged on)

router.delete('/:id', withAuth, async (req, res) => {
    try {
      const ReviewsData = await Reviews.destroy({
        where: {
          id: req.params.id,
          user_id: req.session.user_id,
        },
      });
  
      if (!ReviewsData) {
        res.status(404).json({ message: 'No reviews found with this id!' });
        return;
      }
  
      res.status(200).json(ReviewsData);
    } catch (err) {
      res.status(500).json(err);
    }
  });
  

module.exports = router;