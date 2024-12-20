const { getAllDishes,getDishesByCategory, deleteDishes,createDish,findDishByIds} = require("../Models/Dish.model") ;
const jwt =require('jsonwebtoken');
require('dotenv').config();
const SECRET_KEY = process.env.SECRET_KEY;

exports.getAllDishesInfor = async(req,res) =>{
    try {
        const dishes = await getAllDishes();
        if(!dishes){
            console.log("There is no dishes");
            return;
        }
        return res.status(200).json({dishes: dishes});
    } catch (error) {
        console.log("Error in getting all dishes in service: ", error.message);

    }
}

exports.getDishesBasedCategory = async(req,res) => {
    try {
        const categoryId = req.body.categoryId;
        // console.log("category id in backend services: ",categoryId);
        const dishes = await getDishesByCategory(categoryId);
        if(!dishes){
            console.log("There is no dishes in the given category");
            return;
        }
        return res.status(200).json({dishes: dishes});
    } catch (error) {
        console.log("Error in getting dishes with the given category in service: ", error.message);

    }
}



exports.deleteDishesIds = async(req,res) =>{
    try {
        const dishIds = req.body;
       if(!dishIds){
            return res.status(403).json({success:false,message: "There is no selected dishes"});
       }
        const authHeader = req.headers["authorization"];
            if(!authHeader){
              console.log("Error in deleting the dishes in services: there is no auth header");
        
            }
            const accessToken = authHeader && authHeader.split(" ")[1];
            if (!accessToken) {
              console.log("Error in deleting the dishes in services: there is no access token");
              return res.status(401).json({message: "No token provided"});
            }
            
            //verify the access token expiration
            jwt.verify(accessToken, SECRET_KEY, (err, user) => {
              if (err) {
                return res.status(403).json({message: "Invalid access token"});
              }
            });
        
            const payload = jwt.decode(accessToken);
            // check role
            if (!payload.role || payload.role!=="admin"){
              return res.status(403).json({message: "Not authorized as admin"});
            }
            const resultMessage = await deleteDishes(dishIds);
            if(!resultMessage.success){
                return res.status(403).json({success:resultMessage.success,message: resultMessage.message});
            }else {
                return res.status(200).json({success:resultMessage.success,message: resultMessage.message});
            }
    } catch (error) {
        console.error('Error deleting dishes in service:', error);
        return { message: 'An error occurred while deleting dishes in service.' };
    }
}


exports.addDish = async(req,res) => {
    try {
        const dish =req.body;
        console.log("dish in add dish in service",dish);
        const authHeader = req.headers["authorization"];
        if(!authHeader){
          console.log("Error in executing get all admins in dish.services: there is no auth header");
    
        }
        const accessToken = authHeader && authHeader.split(" ")[1];
        if (!accessToken) {
          console.log("Error in executing get all admins in dish.services: there is no access token");
          return res.status(401).json({message: "No token provided"});
        }
        
        // Sử dụng async/await để verify token
            const user = await new Promise((resolve, reject) => {
              jwt.verify(accessToken, SECRET_KEY, (err, decodedUser) => {
                if (err) {
                  reject({ status: 403, message: "Invalid access token" });
                } else {
                  resolve(decodedUser);
                }
              });
            });
    
        const payload = jwt.decode(accessToken);
        // check role
        if (!payload.role || payload.role!=="admin"){
          return res.status(403).json({success:false,message: "Not authorized as admin"});
        }
        const newDish = await createDish(dish);
        if (!newDish){
          return res.status(404).json({success: false, message: "Cannot create new dish in service"});
      }
      return res.status(200).json({success: true,message: "Create new dish successfully!!!"});
      } catch (error) {
        console.error('Error in creating new dish in service:', error);
        return res.status(500).json({ message: 'An error occurred while creating new dish in service.' });
      }
}


exports.findDishesArrayByIds = async(req,res) => {
  try {
    const orderIds = req.body;
    if(!orderIds) {
      console.log("There is no order ids input in dish service");
      return res.status(200).json({ 
        success: false, 
        message: "There is no order ids input in dish service"});
    
    }
    const dishes = await findDishByIds(orderIds);
    if(!dishes){
      console.log("There is no dishes response in dish service in findDishesArrayByIds");
      return res.status(200).json({ 
        success: false, 
        message: "There is no dishes response in dish service in findDishesArrayByIds"});
    }
    return res.status(200).json({dishes: dishes, success: true, message: "Find dishes by ids successfully!!!"});
  } catch (error) {
      console.log("Error in find dishes by ids in service: ", error);
  }
} 