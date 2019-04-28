drop database food_portal;

create database food_portal;
use food_portal;

create table Customer (user_id varchar(20) not null,firstname varchar(20) not null, lastname Varchar(20) not null, email varchar(50) not null, pwd varchar(32) not null, contact bigint(10) not null, address varchar(50) not null, city varchar(30) not null,Primary key(user_id));

create table Restaurant (user_id varchar(20) not null,name varchar(30) not null, email Varchar(50) not null, pwd varchar(32) not null, open_time time not null, close_time time not null, VegNonVeg varchar(100), rating int(1) default 0, gst_no varchar(32) not null, rest_type char(32) not null, address varchar(50) not null, city varchar(30) not null, Primary key(user_id));

create table DeliveryBoy (user_id varchar(20) not null,firstname varchar(20) not null, lastname Varchar(20) not null, email varchar(50) not null, pwd varchar(32) not null, contact bigint(10) not null, status varchar(20) default 'Available', rating int(1) default 0, vehicle_no varchar(20) not null, licence_no varchar(20) not null, Primary key(user_id));

create table Menu (res_id varchar(20) not null,item_id integer not null, itemname Varchar(20) not null, itemcategory varchar(7) not null, itemprice integer not null, Primary key(res_id,item_id), foreign key(res_id) references Restaurant(user_id));

create table Order_Details (order_id int primary key auto_increment, res_id varchar(20) not null, dboy_id varchar(20), order_status varchar(20),cust_id varchar(20),amount int(8) not null, foreign key(res_id) references Restaurant(user_id),foreign key(cust_id) references Customer(user_id),foreign key(dboy_id) references DeliveryBoy(user_id));

create table Feedback(order_id int not null, res_review varchar(100) not null, dboy_review varchar(100), res_rating int(1) ,dboy_rating int(1),foreign key(order_id) references Order_Details(order_id) );

create table cart (orderid int,itemname char(20), price int(10), quantity int (2),totalvalue int (10), foreign key(orderid) references Order_Details(order_id));

insert into restaurant values ('R3','Truffles','truffles@gmail.com','12345','10:00:00','22:00:00','Vegeterian',4,'GST2395','Multi Cuisine','Kormangla','Bangalore');
insert into restaurant values ('R10','Pizza Hut','pizzahut@gmail.com','12345','09:00:00','20:00:00','Non Vegeterian',5,'GST9395','Italian','Neeladri Nagar','Bangalore');
insert into restaurant values ('R1','Phunjabi','phunjabi@gmail.com','12345','10:00:00','22:00:00','Non Vegeterian',4,'GST2295','North Indian','Indiranagar','Bangalore');
insert into restaurant values ('R2','Moriz','moriz@gmail.com','12345','12:00:00','22:00:00','Non Vegeterian',3,'GST2375','Multi Cuisine','Neeladri Nagar','Bangalore');
insert into menu values ('R1',1,'Paneer Tikka','Veg',100);
insert into menu values ('R1',2,'Chicken Tikka','Non Veg',150);
insert into menu values ('R1',3,'Paneer Butter Masala','Veg',180);
insert into menu values ('R1',4,'Butter Naan','Veg',50);
insert into menu values ('R2',1,'Matar Paneer','Veg',180);
insert into menu values ('R2',2,'Chocolate Brownie','Veg',100);
insert into menu values ('R2',3,'Egg Hakka Noodles','Non Veg',150);
insert into menu values ('R10',5,'Margharita Pizza','Veg',150);
insert into menu values ('R10',1,'Farmhouse Pizza','Veg',200);
insert into menu values ('R10',2,'Chicken Tikka Pizza','Non Veg',250);
insert into menu values ('R10',3,'Peppy paneer Pizza','Veg',230);
insert into menu values ('R10',4,'Alfredo Pasta','Veg',150);
insert into menu values ('R3',1,'Alfredo Pasta','Veg',100);
insert into menu values ('R3',2,'Chicken Tikka','Non Veg',150);
insert into menu values ('R3',3,'Veg Burger','Veg',180);
insert into menu values ('R3',4,'Chocolate Truffle','Non Veg',90);
insert into DeliveryBoy values ('D3','Mahesh','P','mahesh@gmail.com',12345,9898976512,'Available',3,'KA2C7345','LN8712');
insert into DeliveryBoy values ('D2','Tarun','G','tarun@gmail.com',12345,7898976512,'Available',3,'KA2C0345','LN8012');


