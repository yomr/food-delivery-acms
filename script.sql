drop database food_portal;

create database food_portal;
use food_portal;

create table Customer (user_id varchar(20) not null,firstname varchar(20) not null, lastname Varchar(20) not null, email varchar(50) not null, pwd varchar(32) not null, contact bigint(10) not null, address varchar(50) not null, city varchar(30) not null,Primary key(user_id));

create table Restaurant (user_id varchar(20) not null,name varchar(30) not null, email Varchar(50) not null, pwd varchar(32) not null, open_time time not null, close_time time not null, VegNonVeg varchar(20), rating int(1) default 0, gst_no varchar(32) not null, rest_type char(32) not null, address varchar(50) not null, city varchar(30) not null, Primary key(user_id));

create table DeliveryBoy (user_id varchar(20) not null,firstname varchar(20) not null, lastname Varchar(20) not null, email varchar(50) not null, pwd varchar(32) not null, contact bigint(10) not null, status varchar(20) default 'Available', rating int(1) default 0, vehicle_no varchar(20) not null, licence_no varchar(20) not null, Primary key(user_id));
create table Menu (res_id varchar(20) not null,item_id integer not null, itemname Varchar(20) not null, itemcategory varchar(7) not null, itemprice integer not null, Primary key(res_id,item_id), foreign key(res_id) references Restaurant(user_id));

create table Order_Details (order_id int primary key auto_increment, res_id varchar(20) not null, dboy_id varchar(20), order_status varchar(20),cust_id varchar(20),amount int(8) not null, foreign key(res_id) references Restaurant(user_id),foreign key(cust_id) references Customer(user_id),foreign key(dboy_id) references DeliveryBoy(user_id));

create table Feedback(order_id int not null, res_review varchar(100) not null, dboy_review varchar(100), res_rating int(1) ,dboy_rating int(1),foreign key(order_id) references Order_Details(order_id) );

