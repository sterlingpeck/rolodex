-- DROP TABLE IF EXISTS contact_card;
-- DROP TABLE IF EXISTS users;

-- CREATE TABLE contact_card (
--   id INTEGER PRIMARY KEY AUTO_INCREMENT,
--   firstname VARCHAR(255) NOT NULL,
--   lastname VARCHAR(255) NOT NULL,
--   email VARCHAR(255) NOT NULL,
--   phone VARCHAR(255) NOT NULL
--   -- created_at DATETIME NOT NULL,
--   -- updated_at DATETIME NOT NULL
-- --   CONSTRAINT fk_dep FOREIGN KEY (dep_id) REFERENCES departments(id) ON DELETE SET NULL
-- );

-- CREATE TABLE users (
--     id INTEGER PRIMARY KEY AUTO_INCREMENT,
--     username VARCHAR(50) NOT NULL,
--     password VARCHAR(50) NOT NULL,
-- -- CONSTRAINT fk_dep FOREIGN KEY (dep_id) REFERENCES departments(id) ON DELETE SET NULL
-- );