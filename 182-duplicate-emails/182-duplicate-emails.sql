# Write your MySQL query statement below

select email from (select email, count(email) as number from Person group by email) as leTable where number > 1