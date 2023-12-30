
CREATE TYPE stage AS ENUM ('assigned', 'in_progress', 'code_review', 'testing', 'done');

CREATE TABLE Users (
    id int8 PRIMARY KEY,
    name varchar(32),
    password varchar(32),
    team_id int8
);

CREATE TABLE Teams (
    id int8 PRIMARY KEY,
    name varchar(32),
    invite_code varchar(32),
    owner_id int8 REFERENCES Users
);

CREATE TABLE Tasks (
    id int8 PRIMARY KEY,
    title varchar(32),
    desciption varchar(1024),
    status stage,
    team_id int8 REFERENCES Teams,
    user_id int8 REFERENCES Users
);

ALTER TABLE Users
ADD CONSTRAINT users_team_id_fkey
FOREIGN KEY (team_id)
REFERENCES Teams;



INSERT INTO Users
VALUES (1, 'user', 'user', NULL);

INSERT INTO Users
VALUES (2, 'Anna', '482e3022', NULL);