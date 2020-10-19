create database msis;
USE msis;

DROP TABLE IF EXISTS Comments;
CREATE TABLE Comments (
    id int PRIMARY KEY AUTO_INCREMENT,
    commentText text not NULL
);

INSERT INTO Comments (commentText) VALUES
("I have something important to say"),
("I have no idea what is going on"),
("D&S is hard");

select * from Comments;
