const homelist = (req,res) => {
    res.render('index', {title: 'Home'});
};
const locationInfo = (req,res) => {
    res.render('index', {title: 'LocationInfo'});
};
const addReview = (req,res) => {
    res.render('index', {title: 'AddReview'});
};
module.exports = {
    homelist,
    locationInfo,
    addReview
};