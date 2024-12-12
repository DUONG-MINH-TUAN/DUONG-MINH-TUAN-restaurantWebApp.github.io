-- CreateTable
CREATE TABLE `admins` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `role` ENUM('admin', 'chef') NULL DEFAULT 'admin',
    `permissions` JSON NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    UNIQUE INDEX `admins_user_id_key`(`user_id`),
    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `chef` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `user_id` INTEGER NULL,
    `role` ENUM('admin', 'chef') NULL DEFAULT 'chef',
    `permissions` JSON NULL,
    `created_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),
    `updated_at` TIMESTAMP(0) NULL DEFAULT CURRENT_TIMESTAMP(0),

    INDEX `user_id`(`user_id`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `admins` ADD CONSTRAINT `admins_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `userinfor`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;

-- AddForeignKey
ALTER TABLE `chef` ADD CONSTRAINT `chef_ibfk_1` FOREIGN KEY (`user_id`) REFERENCES `userinfor`(`id`) ON DELETE CASCADE ON UPDATE NO ACTION;
