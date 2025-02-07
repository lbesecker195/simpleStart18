var express = require('express');
var router = express.Router();

function largestPrimeFactor(n) {
	var i = 2;
	while(i <= n) {
		if (n%i == 0) {
			n/=i;
		} else {
			i++;
		}
	}
	return i
}

/* GET home page. */
router.get('/:n', function(req, res, next) {
	ret = largestPrimeFactor(req.params.n)

  res.json({
  	ans: ret
  })
});

module.exports = router;
