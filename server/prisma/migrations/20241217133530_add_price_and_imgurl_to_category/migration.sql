/*
  Warnings:

  - Added the required column `img_url` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `category` table without a default value. This is not possible if the table is not empty.
  - Added the required column `updatedAt` to the `category` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` ADD COLUMN `createdAt` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    ADD COLUMN `img_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL,
    ADD COLUMN `updatedAt` DATETIME(3) NOT NULL;
