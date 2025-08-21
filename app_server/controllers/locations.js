const { createContext } = require("react");

const homelist = (req,res) => {
    res.render('index', { title: 'sravista roll:thrity four' });
};
const locationInfo = (req,res) => {
    res.render('index', {title: 'LocationInfo'});
};createContext
const addReview = (req,res) => {
    res.render('index', {title: 'AddReview'});
};
module.exports = {
    homelist,
    locationInfo,
    addReview
};