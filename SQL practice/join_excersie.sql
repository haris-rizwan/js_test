create schema school;


use school;

create table Students
(
		id int not null auto_increment primary key,
        f_name varchar(100)
        );
        
        
create table papers
(
	title varchar(150),
    grade int,
    student_id int,
	foreign key(student_id) references students(id)
    on delete cascade
    );
    
show tables;

INSERT INTO students (f_name) VALUES 
('Caleb'), ('Samantha'), ('Raj'), ('Carlos'), ('Lisa');

INSERT INTO papers (student_id, title, grade ) VALUES
(1, 'My First Book Report', 60),
(1, 'My Second Book Report', 75),
(2, 'Russian Lit Through The Ages', 94),
(2, 'De Montaigne and The Art of The Essay', 98),
(4, 'Borges and Magical Realism', 89);


select * from students;

select * from papers;

select f_name ,papers.title ,papers.grade from students 
right join papers
on students.id = papers.student_id
order by grade DESC; 

select f_name ,papers.title ,papers.grade from students 
left join papers
on students.id = papers.student_id
order by id;

select f_name ,ifnull(papers.title,'Missing papers/late papers') ,ifnull(papers.grade,0) from students 
left join papers
on students.id = papers.student_id
order by id;

select f_name ,ifnull(avg(papers.grade),0) as average from students 
left join papers
on students.id = papers.student_id
group by id
order by average desc;

select f_name ,ifnull(avg(papers.grade),0) as average,
case
 when avg(papers.grade)>=70 then 'Paased'
 else 'fail'
 end as Passing_status
from students 
left join papers
on students.id = papers.student_id
group by id
order by average desc;

