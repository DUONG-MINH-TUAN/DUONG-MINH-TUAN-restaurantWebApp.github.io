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
        console.error("Error in finding email: ", error);
        throw error;
    } finally {
        // Đảm bảo đóng kết nối Prisma Client sau khi sử dụng
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



module.exports = {findUserByEmail,createUser,};
