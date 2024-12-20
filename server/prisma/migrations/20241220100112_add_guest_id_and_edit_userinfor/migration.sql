-- AlterTable
ALTER TABLE `cart` ADD COLUMN `Guest_ID` VARCHAR(191) NULL,
    MODIFY `User_ID` INTEGER NULL;

-- CreateIndex
CREATE INDEX `Guest_ID` ON `cart`(`Guest_ID`);
