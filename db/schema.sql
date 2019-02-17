drop database if exists burgers_db;
create database burgers_db;
use burgers_db;
create table burgers(
    id integer auto_increment,
    burger_name varchar(30),
    devoured boolean default false,
    primary key(id)
);