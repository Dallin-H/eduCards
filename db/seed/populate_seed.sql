insert into users ( first_name, last_name, email, password, is_premium)
values ('Dallin', 'Hyde', 'dallinhyde@gmail.com', 'hyde', t),
        ('Stephanie', 'Aranda', 'stephanieA@gmail.com', 'aranda', f);

insert into decks (title, description, img_url, created_by)
values ('Algebra', 'Beginners terms to Algebra', 'https://magoosh.com/ged/files/2017/03/shutterstock_521153674.jpg', 1),
        ('Javascript', 'Array Methods', 'https://cdn4.vectorstock.com/i/1000x1000/02/18/man-with-question-mark-flat-icon-pictogram-vector-4920218.jpg', 2);

insert into cards (question, img_url, in_deck)
values ('What is the definition of MEDIAN?', null, 1),
        ('What is the outcome of this code?', 'https://cdn-images-1.medium.com/max/1600/1*4YWAhyJYbdFDYtJTr57G0Q.png' 2);