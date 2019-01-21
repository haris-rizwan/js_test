
create schema Store;

use store;


Create table Customers
( customer_ID int not Null auto_increment,
	First_Name varchar (100),
    Last_Name varchar(100),
    Email varchar(150),
    primary key(customer_ID));


Create table Orders
(		Order_ID int not null auto_increment primary key,
        Order_date Date,
        Amount decimal(8,2),
		customer_ID int,
        foreign key(customer_ID) references Customers(customer_ID)
        
        );





INSERT INTO customers (first_name, last_name, email) 
VALUES ('Boy', 'George', 'george@gmail.com'),
       ('George', 'Michael', 'gm@gmail.com'),
       ('David', 'Bowie', 'david@gmail.com'),
       ('Blue', 'Steele', 'blue@gmail.com'),
       ('Bette', 'Davis', 'bette@aol.com');
       
INSERT INTO orders (Order_date, Amount, customer_ID)
VALUES ('2016/02/10', 99.99, 1),
       ('2017/11/11', 35.50, 1),
       ('2014/12/12', 800.67, 2),
       ('2015/01/03', 12.50, 2),
       ('1999/04/11', 450.25, 5);

INSERT INTO orders (Order_date, Amount, customer_ID)
VALUES ('2016/02/10', 99.99, 54);

show tables;

select * from Orders;

-- cr0ss join not commonly used

select *from customers,orders;

-- Implicit inner join

select * from Customers , Orders where customers.customer_ID = orders.customer_ID;

select First_Name,Last_Name,amount,order_id from Customers , Orders where customers.customer_ID = orders.customer_ID;

-- explicit inner join

select * from customers
join orders
on customers.Customer_ID = orders.customer_ID;


-- left join >>>>>> selects everything from first table  and only common things from second table

Select  customers.customer_ID ,First_name, Last_name , amount from customers
left join orders 
on customers.customer_ID=orders.customer_ID;

Select  customers.customer_ID ,First_name, Last_name , amount from customers
left join orders 
on customers.customer_ID=orders.customer_ID
group by customer_ID;


Select  customers.customer_ID ,First_name, Last_name , sum(amount)  as total_spent from customers
left join orders 
on customers.customer_ID=orders.customer_ID
group by customer_ID ;


Select  customers.customer_ID ,First_name, Last_name , sum(amount)  as total_spent from customers
left join orders 
on customers.customer_ID=orders.customer_ID
group by customer_ID 
order by total_spent desc;


Select  customers.customer_ID ,First_name, Last_name , ifnull(sum(amount),0)  as total_spent from customers
left join orders 
on customers.customer_ID=orders.customer_ID
group by customer_ID 
order by total_spent desc;


-- right join is the opposite of left join.

-- foreign key is present how to delete when a parent is delete just add>>>>>> on delete cascade after references in child see below


Create table Orders
(		Order_ID int not null auto_increment primary key,
        Order_date Date,
        Amount decimal(8,2),
		customer_ID int,
        foreign key(customer_ID) 
        references Customers(customer_ID)
        on delete cascade
        
        );



