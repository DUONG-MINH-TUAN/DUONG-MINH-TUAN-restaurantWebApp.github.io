-- CreateTable
CREATE TABLE `cart` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Table_ID` INTEGER NOT NULL,
    `Disk_ID` INTEGER NOT NULL,
    `Quantity` INTEGER NOT NULL,

    INDEX `Disk_ID`(`Disk_ID`),
    INDEX `Table_ID`(`Table_ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(100) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `category_promotion` (
    `Promotion_ID` INTEGER NOT NULL,
    `Category_ID` INTEGER NOT NULL,

    INDEX `Category_ID`(`Category_ID`),
    PRIMARY KEY (`Promotion_ID`, `Category_ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `disk` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(100) NOT NULL,
    `Type` VARCHAR(50) NULL,
    `Cost` DECIMAL(10, 2) NULL,
    `Category_ID` INTEGER NULL,

    INDEX `Category_ID`(`Category_ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `disk_item` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Disk_ID` INTEGER NOT NULL,
    `Relationship` VARCHAR(100) NULL,
    `Comment` TEXT NULL,

    INDEX `Disk_ID`(`Disk_ID`),
    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `payment` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Type` VARCHAR(50) NOT NULL,
    `Time` DATETIME(0) NOT NULL,
    `Amount` DECIMAL(10, 2) NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `promotion` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `StartDate` DATE NOT NULL,
    `Due_Date` DATE NOT NULL,
    `Rate` DECIMAL(5, 2) NOT NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `tableinfo` (
    `ID` INTEGER NOT NULL AUTO_INCREMENT,
    `Name` VARCHAR(100) NOT NULL,
    `StartAt` DATETIME(0) NULL,
    `EndAt` DATETIME(0) NULL,
    `Total` DECIMAL(10, 2) NULL,

    PRIMARY KEY (`ID`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `userinfor` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(25) NOT NULL,
    `email` VARCHAR(100) NOT NULL,
    `password` VARCHAR(100) NOT NULL,

    UNIQUE INDEX `unique_email`(`email`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_ibfk_1` FOREIGN KEY (`Table_ID`) REFERENCES `tableinfo`(`ID`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `cart` ADD CONSTRAINT `cart_ibfk_2` FOREIGN KEY (`Disk_ID`) REFERENCES `disk`(`ID`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `category_promotion` ADD CONSTRAINT `category_promotion_ibfk_1` FOREIGN KEY (`Promotion_ID`) REFERENCES `promotion`(`ID`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `category_promotion` ADD CONSTRAINT `category_promotion_ibfk_2` FOREIGN KEY (`Category_ID`) REFERENCES `category`(`ID`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `disk` ADD CONSTRAINT `disk_ibfk_1` FOREIGN KEY (`Category_ID`) REFERENCES `category`(`ID`) ON DELETE SET NULL ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `disk_item` ADD CONSTRAINT `disk_item_ibfk_1` FOREIGN KEY (`Disk_ID`) REFERENCES `disk`(`ID`) ON DELETE CASCADE ON UPDATE NO ACTION;
