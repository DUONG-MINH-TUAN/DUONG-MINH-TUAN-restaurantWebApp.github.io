const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();
const {findUserById} = require('./User.model');

const promoteUserToAdmin  = async(userId) =>{
    try {
        const user = await findUserById(userId);
        const newAdmin = await prisma.admins.create({
            data:{
                user_id : user.id,
            }
        });
        return newAdmin;
    } catch (error) {
        console.log("Errors in promote user to admin in user.model: ",error);
        throw error;
    } finally{
        await prisma.$disconnect();
    }
}



const findAdminById = async (id) =>{
    try {
        // Truy vấn bảng userinfor để kiểm tra email
        const admin = await prisma.admins.findUnique({
            where: {
                user_id: id, // Tìm kiếm theo email
            },
        });
        return admin;
    } catch (error) {
        
        console.error("Error in finding admin by id: ", error);
        throw error;
    } finally {
        // Đảm bảo đóng kết nối Prisma Client sau khi sử dụng
        await prisma.$disconnect();
    }
}

const getAllAdmins = async() => {
    try{
        const admins = await prisma.admins.findMany();
        console.log("Admins in get all admins: ",admins);
        return admins;
    }catch(error){
        console.log("Errors in get all admins: ",error);
        throw error;
    } finally{
        await prisma.$disconnect();
    }
}
module.exports = {promoteUserToAdmin,findAdminById,getAllAdmins,};