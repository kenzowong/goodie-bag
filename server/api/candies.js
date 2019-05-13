const router = require('express').Router();
const candy = require('../db/models/Candy');


router.get('/candies', async (req, res, next) => {
    try {
      const candies = await candy.findAll();
      res.send(candies);
    } catch (error) {
      console.log(error);
    }
  });


module.exports = router;
