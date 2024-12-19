const express = require('express');
const router = express.Router();
const {login, signup,logout, deleteUserIds,getAllUsers,} = require('../services/User.services');
const {promoteAdmin,promoteAdminReal,getAllAdmins} = require('../services/Admin.services');
const {getAllDishesInfor,getDishesBasedCategory,deleteDishesIds,addDish} = require('../services/Dish.services');
const {reloadAccessToken} = require('../services/Auth.services');

router.post('/login', login);
router.post('/signup', signup);

router.post('/logout', logout);



//create access token again
router.get('/refresh',reloadAccessToken);



//protected route
//use token to take the username of user
router.get('/protected/promote-to-admin',promoteAdmin);

// use token to promote the user to admin real
router.post('/protected/promote-to-admin-real',promoteAdminReal);

// use token to delete the user
router.post('/protected/delete-users',deleteUserIds);

// use token to take all users
router.get('/protected/get-all-users',getAllUsers);


// use token to take all admins
router.get('/protected/get-all-admins',getAllAdmins);


// use token to get all dishes in menu
router.get('/get-all-dishes',getAllDishesInfor);

// use token to get all dishes in menu
router.post('/get-dishes-by-category',getDishesBasedCategory);

// use token to delete the dishes
router.post('/protected/delete-dishes',deleteDishesIds);


// use token to insert the dish
router.post('/protected/add-new-dish',addDish);
module.exports = router;