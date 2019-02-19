insert into users(first_name, last_name, email, password)
values(${first_name}, ${last_name}, ${email}, ${password})
returning user_id, first_name, last_name, email;