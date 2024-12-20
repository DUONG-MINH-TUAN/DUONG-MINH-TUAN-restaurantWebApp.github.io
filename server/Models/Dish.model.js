const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();



exports.getAllDishes = async() => {
    try{
        const dishes = await prisma.disk.findMany();
        console.log("Dishes in get all dishes: ",dishes);
        return dishes;
    }catch(error){
        console.log("Errors in get all dishes: ",error);
        throw error;
    } finally{
        await prisma.$disconnect();
    }
}


exports.getDishesByCategory = async(id) => {
    try{
        // console.log("category id in model",id);
       // Truy vấn bảng userinfor để kiểm tra email
       const dishes = await prisma.disk.findMany({
        where: {
            Category_ID: id, // Tìm kiếm theo email
        },
    });
    return dishes;
    }catch(error){
        console.log("Errors in get dishes by category: ",error);
        throw error;
    } finally{
        await prisma.$disconnect();
    }
}




exports.deleteDishes = async (dishIds) => {
    try {
        const result = await prisma.disk.deleteMany({
            where: {
                ID: {
                    in: dishIds,
                }
            }
        });
         // Kiểm tra xem có bao nhiêu dishes bị xóa
        if (result.count > 0) {
            return { success: true, message: `${result.count} dishes deleted successfully.` };
        } else {
            return { success: false, message: 'No dishes found with the provided IDs.' };
        }
    } catch (error) {
        console.error('Error deleting dishes:', error);
         return { success: false, message: 'An error occurred while deleting dishes.' };
  }
}


exports.createDish = async(dish) => {
    try {
        

        const newDish = await prisma.disk.create({
            data:{
                Name : dish.name,
                price: dish.price,
                Category_ID:dish.Category_ID 
            }
        });
        return newDish;
    } catch (error) {
        console.error('Error creating dish:', error);
        return;
    }   finally {
        // ensure disconnecting Prisma Client after using
        await prisma.$disconnect();
    }
}


exports.findDishByIds = async(orderIds) => {
    try {
        const idArray = orderIds.map((order) => order.id); // Extract 'id' values
        const dishes = await prisma.disk.findMany({
            where: {
                ID: {
                    in: idArray,
                }
            },
        });

        console.log("found dishes: ",dishes);
        return dishes;
    } catch (error) {
        
        console.error("Error in finding dishes by id: ", error);
        throw error;
    } finally {
        // Đảm bảo đóng kết nối Prisma Client sau khi sử dụng
        await prisma.$disconnect();
    }
}