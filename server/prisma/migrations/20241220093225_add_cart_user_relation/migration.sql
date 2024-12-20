/*
  Warnings:

  - You are about to drop the column `Table_ID` on the `cart` table. All the data in the column will be lost.
  - Added the required column `User_ID` to the `cart` table without a default value. This is not possible if the table is not empty.

*/
-- DropForeignKey
ALTER TABLE `cart` DROP FOREIGN KEY `cart_ibfk_1`;

-- AlterTable
ALTER TABLE `cart` DROP COLUMN `Table_ID`,
    ADD COLUMN `Status` ENUM('PENDING', 'COOKING', 'COMPLETED') NOT NULL DEFAULT 'PENDING',
    ADD COLUMN `User_ID` INTEGER NOT NULL;

-- CreateIndex
CREATE INDEX `User_ID` ON `cart`(`User_ID`);

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`User_ID`) REFERENCES `userinfor`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
