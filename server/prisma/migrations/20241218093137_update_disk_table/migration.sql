/*
  Warnings:

  - You are about to drop the column `createdAt` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `img_url` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `price` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `updatedAt` on the `category` table. All the data in the column will be lost.
  - You are about to drop the column `Cost` on the `disk` table. All the data in the column will be lost.
  - You are about to drop the column `Type` on the `disk` table. All the data in the column will be lost.
  - Added the required column `img_url` to the `disk` table without a default value. This is not possible if the table is not empty.
  - Added the required column `price` to the `disk` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE `category` DROP COLUMN `createdAt`,
    DROP COLUMN `img_url`,
    DROP COLUMN `price`,
    DROP COLUMN `updatedAt`;

-- AlterTable
ALTER TABLE `disk` DROP COLUMN `Cost`,
    DROP COLUMN `Type`,
    ADD COLUMN `img_url` VARCHAR(191) NOT NULL,
    ADD COLUMN `price` DOUBLE NOT NULL;
