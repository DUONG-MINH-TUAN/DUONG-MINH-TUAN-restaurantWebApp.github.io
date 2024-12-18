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