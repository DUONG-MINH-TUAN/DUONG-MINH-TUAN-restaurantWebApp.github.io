const { getAllDishes,getDishesByCategory } = require("../Models/Dish.model") ;


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