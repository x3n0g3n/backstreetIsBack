const router = require('express').Router();
const { User } = require('../models');
const withAuth = require('../utils/auth');

// Prevent non logged in users from viewing the homepage
router.get('/', withAuth, async (req, res) => {
  try {
    const userData = await User.findAll({
      attributes: { exclude: ['password'] },
      order: [['name', 'ASC']],
    });

    const users = userData.map((project) => project.get({ plain: true }));

    res.render('homepage', {
      users,
      // Pass the logged in flag to the template
      logged_in: req.session.logged_in,
    });
  } catch (err) {
    res.status(500).json(err);
  }
});

router.get('/login', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('login');
});

router.get('/register', (req, res) => {
  // If a session exists, redirect the request to the homepage
  if (req.session.logged_in) {
    res.redirect('/');
    return;
  }

  res.render('register');
});

  //the review page
  router.get('/reviews/:id', withAuth, async function(req, res) {
    try {
      // Get the review ID from the request parameters
      const reviewId = req.params.id;
  
      // Render the 'ReviewsPage' view with the necessary data
      res.render('ReviewsPage', { reviewId });
    } catch (error) {
      // Handle any errors that occur during the process
      console.error(error);
      res.status(500).json(err);
    }
  });
  

// router.post('/register', async (req, res) => {
//   try {
//     const newUser = req.body;
//     // hash the password from 'req.body' and save to newUser
//     newUser.password = await bcrypt.hash(req.body.password, 10);
//     // create the newUser with the hashed password and save to DB
//     //salted 10 times
//     const userData = await User.create(newUser);
//     console.log(userData);

//     res.status(200).json(userData);
//     //200 means OK
//   } catch (err) {
//     res.status(400).json(err);
//     //400 means bad request
//   }
// });


module.exports = router;