const router = require('express').Router();
const bcrypt = require('bcrypt');
const { User } = require('../../models');

//get all user route to test api in insomina
router.get('/', async (req, res)  => {
  try {
    const userData = await User.findAll()
  
    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

// create a user
router.post('/', async (req, res) => {
  try {
    const newUser = req.body;
    // hash the password from 'req.body' and save to newUser
    newUser.password = await bcrypt.hash(req.body.password, 10);
    // create the newUser with the hashed password and save to DB
    //salted 10 times
    const userData = await User.create(newUser);
    res.status(200).json(userData);
    //200 means OK
  } catch (err) {
    res.status(400).json(err);
    //400 means bad request
  }
});

router.post('/login', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

// find a way to add the jurrasic guy for failed log in attempts

if (!userData) {
  res.status(400).json({
    message: 'Incorrect email or password, please try again',
    image: 'https://static.wikia.nocookie.net/ytmnd-fads/images/f/f4/Ah_Ah_Ah_you_din%E2%80%99t_say_the_magic_word.gif/revision/latest/scale-to-width-down/180?cb=20230324114521',
  });
  return;
}

    // Verify the posted password with the password stored in the database
    const validPassword = await userData.checkPassword(req.body.password);

    if (!validPassword) {
      res
        .status(400)
        .json({ message: 'Incorrect email or password, please try again' });
      return;
    }

    // Create session variables based on the logged in user
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;

      res.json({ user: userData, message: 'You are now logged in!' });
    });

  } catch (error) {
    res.status(400).json(error);
  }
});

router.post('/register', async (req, res) => {
  try {
    // Find the user who matches the posted e-mail address
    const userData = await User.findOne({ where: { email: req.body.email } });

// find a way to add the jurrasic guy for failed log in attempts

    if (userData) {
      res.status(400).json({ message: 'user already exists' });
      return;
    }
  User.create({
    email: req.body.email,
    password: req.body.password
  }).then(userData=>{
    req.session.save(() => {
      req.session.user_id = userData.id;
      req.session.logged_in = true;
      res.json({ user: userData, message: 'You are now logged in!' });
    });
  })

  } catch (error) {
    res.status(400).json(error);
  }
});


// user logout
router.post('/logout', (req, res) => {
  if (req.session.logged_in) {
    // Remove the session variables
    req.session.destroy(() => {
      res.status(204).end( 'Bye, Bye, Bye');
    });
  } else {
    res.status(404).end();
  }
});

// delete user

router.delete('/:id', async (req, res) => {
  try {
    const userData = await User.destroy({
      where: {
        id: req.params.id,
        user_id: req.session.user_id,
      },
    });
console.log(userData)
    if (!userData) {
      res.status(404).json({ message: 'No users found with this id!' });
      return;
    }

    res.status(200).json(userData);
  } catch (err) {
    res.status(500).json(err);
  }
});

router.delete('/:id', (req, res, next) => {
  // delete one product by its `id` value
  const { id } = req.params
  try {
    Product.destroy(
      {where : {id: id}}
    )
    res.status(200).json({message: 'deleted'})
  } catch (error) {
    return next(error)
  }
});
module.exports = router;