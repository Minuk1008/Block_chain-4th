USE homepage;

CREATE TABLE board(
    `idx` INT(11) NOT NULL PRIMARY KEY AUTO_INCREMENT, 
    `subject` VARCHAR(100) NOT NULL, 
    `content` TEXT NULL, 
    `name` VARCHAR(30) NOT NULL, 
    `date` TIMESTAMP default current_timestamp, 
    `like` INT(11) default 0 NOT NULL, 
    `hit` INT(11) default 0 NOT NULL
)CHARSET=utf8mb4 COLLATE=utf8mb4_general_ci;

-- SELECT * FROM board;
-- INSERT INTO board(필드1, 필드2...) VALUES(1,2...)
-- UPDATE board SET subject='asdf' WHERE idx=1
-- DELETE FROM board WHERE idx=1

INSERT INTO board(`idx`, `subject`, `content`, `name`) VALUES (1, "제목입니다.", "내용", "min wook");
INSERT INTO board(`subject`, `content`, `name`) VALUES ("제목입니다2.", "내용", "min wook");
INSERT INTO board(`subject`, `content`, `name`) VALUES ("제목입니다3.", "내용", "min wook");