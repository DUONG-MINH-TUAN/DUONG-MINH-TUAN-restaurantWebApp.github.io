const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();


// find a user through their email
async function findUserByEmail(email) {
    try {
        // Truy vấn bảng userinfor để kiểm tra email
        const user = await prisma.userinfor.findUnique({
            where: {
                email: email, // Tìm kiếm theo email
            },
        });
        return user;
    } catch (error) {
        // console.error("Error in finding email: ", error);
        console.error("Error in finding user by email: ", error);
        throw error;
    } finally {
        // Đảm bảo đóng kết nối Prisma Client sau khi sử dụng
        await prisma.$disconnect();
    }
}



const findUserById = async (id) =>{
    try {
        // Truy vấn bảng userinfor để kiểm tra email
        const user = await prisma.userinfor.findUnique({
            where: {
                id: id, // Tìm kiếm theo email
            },
        });
        return user;
    } catch (error) {
        
        console.error("Error in finding user by id: ", error);
        throw error;
    } finally {
        // Đảm bảo đóng kết nối Prisma Client sau khi sử dụng
        await prisma.$disconnect();
    }
}
//
const getAllUser = async() => {
    try{
        const users = await prisma.userinfor.findMany();
        console.log("Users in get all users: ",users);
        return users;
    }catch(error){
        console.log("Errors in get all users: ",error);
        throw error;
    } finally{
        await prisma.$disconnect();
    }
}


async function createUser(email,password) {
    try {
        // split the username from the email
        const name = email.split('@')[0];

        const user = await prisma.userinfor.create({
            data:{
                name : name,
                email: email,
                password:password 
            }
        });
        return user;
    } catch (error) {
        console.error('Error creating user:', error);
        return;
    }   finally {
        // ensure disconnecting Prisma Client after using
        await prisma.$disconnect();
    }
}


const deleteUser = async (userIds) => {
    try {
        const result = await prisma.userinfor.deleteMany({
            where: {
                id: {
                    in: userIds,
                }
            }
        });
         // Kiểm tra xem có bao nhiêu người dùng bị xóa
        if (result.count > 0) {
            return { success: true, message: `${result.count} users deleted successfully.` };
        } else {
            return { success: false, message: 'No users found with the provided IDs.' };
        }
    } catch (error) {
        console.error('Error deleting users:', error);
         return { success: false, message: 'An error occurred while deleting users.' };
  }
}

module.exports = {findUserByEmail,createUser,getAllUser,deleteUser,findUserById,};
