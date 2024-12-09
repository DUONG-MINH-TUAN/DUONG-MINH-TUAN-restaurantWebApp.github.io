
CREATE DATABASE DiskManagementDB;
USE DiskManagementDB;

-- Step 2: Create the Category table
CREATE TABLE Category (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL
);

-- Step 3: Create the Disk table which references Category
CREATE TABLE Disk (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,   -- Name of the disk item
    Type VARCHAR(50),             -- Type of disk (e.g., Music, Movie)
    Cost DECIMAL(10, 2),          -- Cost of the disk item
    Category_ID INT,              -- Foreign key referring to Category
    FOREIGN KEY (Category_ID) REFERENCES Category(ID) ON DELETE SET NULL
);

-- Step 4: Create the TableInfo table (representing tables or reservations)
CREATE TABLE TableInfo (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Name VARCHAR(100) NOT NULL,   -- Name of the table or reservation
    StartAt DATETIME,             -- Start time for reservation or use
    EndAt DATETIME,               -- End time for reservation or use
    Total DECIMAL(10, 2)          -- Total amount associated with the table
);

-- Step 5: Create the Payment table
CREATE TABLE Payment (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Type VARCHAR(50) NOT NULL,    -- Payment type (e.g., Cash, Card)
    Time DATETIME NOT NULL,       -- Payment time
    Amount DECIMAL(10, 2)         -- Amount paid
);

-- Step 6: Create the Cart table which references TableInfo and Disk
CREATE TABLE Cart (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Table_ID INT NOT NULL,        -- Foreign key referring to TableInfo
    Disk_ID INT NOT NULL,         -- Foreign key referring to Disk
    Quantity INT NOT NULL,        -- Quantity of the disk added to the cart
    FOREIGN KEY (Table_ID) REFERENCES TableInfo(ID) ON DELETE CASCADE,
    FOREIGN KEY (Disk_ID) REFERENCES Disk(ID) ON DELETE CASCADE
);

-- Step 7: Create the Disk_Item table which references Disk
CREATE TABLE Disk_Item (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    Disk_ID INT NOT NULL,         -- Foreign key referring to Disk
    Relationship VARCHAR(100),    -- Relationship (e.g., Item type)
    Comment TEXT,                 -- Additional comments
    FOREIGN KEY (Disk_ID) REFERENCES Disk(ID) ON DELETE CASCADE
);

-- Step 8: Create the Promotion table
CREATE TABLE Promotion (
    ID INT PRIMARY KEY AUTO_INCREMENT,
    StartDate DATE NOT NULL,      -- Start date of the promotion
    Due_Date DATE NOT NULL,       -- End date of the promotion
    Rate DECIMAL(5, 2) NOT NULL   -- Discount rate or promotion percentage
);

-- Step 9: Create the Category_Promotion table (relationship between Category and Promotion)
CREATE TABLE Category_Promotion (
    Promotion_ID INT NOT NULL,    -- Foreign key referring to Promotion
    Category_ID INT NOT NULL,     -- Foreign key referring to Category
    PRIMARY KEY (Promotion_ID, Category_ID),  -- Composite primary key
    FOREIGN KEY (Promotion_ID) REFERENCES Promotion(ID) ON DELETE CASCADE,
    FOREIGN KEY (Category_ID) REFERENCES Category(ID) ON DELETE CASCADE
);


create table userinfor(
id int AUTO_INCREMENT PRIMARY KEY,
name varchar(25) not null,
email varchar(100) unique not null,
password varchar(25) not null
)


CREATE TABLE admins (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,  
    role ENUM('admin', 'chef') DEFAULT 'admin',
	permissions JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES userinfor(id) ON DELETE CASCADE
);



CREATE TABLE chef (
    id INT AUTO_INCREMENT PRIMARY KEY,
    user_id INT,  
    role ENUM('admin', 'chef') DEFAULT 'chef',
	permissions JSON,
    created_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP,
    updated_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    FOREIGN KEY (user_id) REFERENCES userinfor(id) ON DELETE CASCADE
);

