const checkMillionDollarIdea = (req, res, next) => {
  const { numWeeks, weeklyRevenue } = req.body;
  const totalValue = Number(numWeeks) * Number(weeklyRevenue);
  if (!numWeeks || !weeklyRevenue || isNaN(totalValue) || totalValue < 1000000) {
    res.status(400).send();
  } else {
    next();
  }
};

// Leave this exports assignment so that the function can be used elsewhere

module.exports = checkMillionDollarIdea;

/**
 * Custom Middleware
 * You will create a custom middleware function checkMillionDollarIdea that will come in handy
 * in some /api/ideas routes. Write this function in the server/checkMillionDollarIdea.js file.
 * This function will make sure that any new or updated ideas are still
 * worth at least one million dollars! The total value of an idea is the
 * product of its numWeeks and weeklyRevenue properties.
 */
