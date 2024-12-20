const { PrismaClient } = require('@prisma/client');
const prisma = new PrismaClient();




exports.sendCart = async(guestId,selectedProducts) => {
    try {

        const cartData = selectedProducts.map((product) => ({
            Guest_ID: guestId,
            Disk_ID: product.ID,
            Quantity: product.quantity,
            Status: "PENDING",
          }));
          const cartItems = await prisma.cart.createMany({
            data: cartData,
          });
          return {
            success: true,
            message: `${cartItems.count} items added to the cart.`,
          };
        
      } catch (error) {
        console.error(error);
        return { success: false, message: "Failed to add items to cart." };
      }  finally {
            // ensure disconnecting Prisma Client after using
            await prisma.$disconnect();
        }
    
    
}


exports.getAllOrders = async() =>  {
    try{
        const orders = await prisma.cart.findMany();
        console.log("Orders in get all orders: ",orders);
        return orders;
    }catch(error){
        console.log("Errors in get all orders: ",error);
        throw error;
    } finally{
        await prisma.$disconnect();
    }
}