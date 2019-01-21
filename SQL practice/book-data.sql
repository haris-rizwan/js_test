CREATE TABLE books 
	(
		book_id INT NOT NULL AUTO_INCREMENT,
		title VARCHAR(100),
		author_fname VARCHAR(100),
		author_lname VARCHAR(100),
		released_year INT,
		stock_quantity INT,
		pages INT,
		PRIMARY KEY(book_id)
	);

INSERT INTO books (title, author_fname, author_lname, released_year, stock_quantity, pages)
VALUES
('The Namesake', 'Jhumpa', 'Lahiri', 2003, 32, 291),
('Norse Mythology', 'Neil', 'Gaiman',2016, 43, 304),
('American Gods', 'Neil', 'Gaiman', 2001, 12, 465),
('Interpreter of Maladies', 'Jhumpa', 'Lahiri', 1996, 97, 198),
('A Hologram for the King: A Novel', 'Dave', 'Eggers', 2012, 154, 352),
('The Circle', 'Dave', 'Eggers', 2013, 26, 504),
('The Amazing Adventures of Kavalier & Clay', 'Michael', 'Chabon', 2000, 68, 634),
('Just Kids', 'Patti', 'Smith', 2010, 55, 304),
('A Heartbreaking Work of Staggering Genius', 'Dave', 'Eggers', 2001, 104, 437),
('Coraline', 'Neil', 'Gaiman', 2003, 100, 208),
('What We Talk About When We Talk About Love: Stories', 'Raymond', 'Carver', 1981, 23, 176),
("Where I'm Calling From: Selected Stories", 'Raymond', 'Carver', 1989, 12, 526),
('White Noise', 'Don', 'DeLillo', 1985, 49, 320),
('Cannery Row', 'John', 'Steinbeck', 1945, 95, 181),
('Oblivion: Stories', 'David', 'Foster Wallace', 2004, 172, 329),
('Consider the Lobster', 'David', 'Foster Wallace', 2005, 92, 343);


select * from books;




use book_shop;


select author_fname,author_lname from books;



select  concat(author_fname,' ',author_lname) as full_name from books;

Select author_lname, char_length(author_lname )as length from books;

Select upper(author_lname ) from books;

select upper(reverse("hello"));


select concat(title,' ','was released in',' ',released_year) as blurb from books;


INSERT INTO books
    (title, author_fname, author_lname, released_year, stock_quantity, pages)
    VALUES ('10% Happier', 'Dan', 'Harris', 2014, 29, 256), 
           ('fake_book', 'Freida', 'Harris', 2001, 287, 428),
           ('Lincoln In The Bardo', 'George', 'Saunders', 2017, 1000, 367);
           
           
select title from books;




select distinct author_lname from books;

select concat(author_fname, ' ',author_lname) from books; 

select distinct concat(author_fname, ' ',author_lname) from books; 

SELECT author_lname FROM books ORDER BY author_lname;

SELECT author_lname FROM books ORDER BY author_lname DESC;


select title , released_year from books order by released_year desc limit 5;


select title , author_fname from books where author_fname like '%da%';

select title , author_fname from books where author_fname like 'da%';

select title from books where title like '%stories%';

select title ,pages from books order by pages  Desc limit 1;


select concat(title,' - ',released_year) as Summary from books order by released_year desc limit 3;


select title, author_lname from books where author_lname like'% %';



select title , author_lname from books Group by author_lname;

select author_lname, count(*) as Number_Of_Books from books Group by author_lname;

select min(pages),title from books;

select max(pages) from books;

select * from books where pages=(select max(pages) from books);

select * from books;

select sum(stock_quantity) as number_of_books from books;

select  released_year,count(released_year)as Books_released from books group by released_year;

select count(distinct title) from books;

Select concat(author_fname," ",author_lname) as author from books where pages = (select max(pages) from books);



select author_lname,author_fname, avg(released_year) from books group by author_lname,author_fname;

select released_year , count(distinct title) as Books , avg(pages)as average_pages from books group by released_year ;


create table people (
name varchar (50),
birthdate Date,
birthtime time,
birthdt  datetime);

desc people;

Insert into people (name, birthdate,birthtime,birthdt) values ('haris','1990-01-01','12:24:12','1990-01-01 12:24:12');


select * from people;

select curdate();

select title,pages from books where pages < 300;

select title , released_year from books where released_year>2000;

select * from books where author_lname='Eggers' AND released_year >2000;

select * from books;

select title , released_year from books where released_year Between 2000 and 2015;

select title , released_year from books where released_year not Between 2000 and 2015;

select title,author_lname from books where author_lname in ('Harris','foster wallace');

select title,author_lname from books where released_year  not in (2004,2005,2006);



Select title , released_year,

		Case
        When released_year >= 2000 then 'Modern Literature'
        else '20th century links'
        end as Genere
        from books;
        
        
Select title , released_year,
	case
    when stock_quantity between 0 and 50 then '*'
    when stock_quantity between 51 and 100 then '**'
    else '***'
    end as Stock
    from books;
    


select 10!= 10;

select  15 >14 && 99-5 <= 94;

select title , released_year from books where released_year < 1980;

select title , author_lname from books where author_lname in ('eggers','chabon');

select title , author_lname from books where author_lname in ('lahiri') && released_year >2000;

select title,pages from books where pages>=100 && pages <= 200;

select title,author_lname from books where author_lname like 's%' || author_lname like 'C%';



    Select title , author_lname,
	case
    when author_lname = 'smith' then 'Memoir'
    when author_lname in ('Carver','Foster wallace') then 'Shot stories'
    else 'Novel'
    end as TYPE
    from books;
        
        
select title , author_lname,
	case
    When count(title)>1 then count(title)
    else count(title)
    end as Stock
 from books Group by author_lname;
 
 Select title, author_lname, count(title)
 FROM books
 GROUP BY author_lname;
 
 select title , author_lname,
	case
    When  count(title)>1 then CONCAT( cast(count(title) as char(50)),' Books')
    else CONCAT( cast(count(title) as char(50)), ' Book')
    end as Stock
 from books Group by author_lname;
 
 
  
 select title , author_lname,
	case
    When  count(*)>1 then CONCAT( count(*),' Books')
    else CONCAT( count(*), ' Book')
    end as Stock
 from books Group by author_lname;
 
 
 SELECT author_fname, author_lname,
    CASE 
        WHEN COUNT(*) = 1 THEN '1 book'
        ELSE CONCAT(COUNT(*), ' books')
    END AS COUNT
FROM books 
GROUP BY author_lname, author_fname;

        
        
