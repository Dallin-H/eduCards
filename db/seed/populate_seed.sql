insert into users ( first_name, last_name, email, password, is_premium)
values ('Dallin', 'Hyde', 'dallinhyde@gmail.com', 'hyde', true),
        ('Stephanie', 'Aranda', 'stephanieA@gmail.com', 'aranda', false);

insert into decks (title, description, img_url, created_by)
values ('Algebra', 'Beginners terms to Algebra', 'https://magoosh.com/ged/files/2017/03/shutterstock_521153674.jpg', 1),
        ('Javascript', 'Array Methods', 'https://cdn4.vectorstock.com/i/1000x1000/02/18/man-with-question-mark-flat-icon-pictogram-vector-4920218.jpg', 2);

insert into cards (question, img_url, in_deck)
values ('What is the definition of MEDIAN?', null, 1),
        ('What is the outcome of this code?', 'https://cdn-images-1.medium.com/max/1600/1*4YWAhyJYbdFDYtJTr57G0Q.png', 2);

insert into answers (answer_text, is_correct, in_card)
values ('denoting or relating to a value or quantity lying at the midpoint of a frequency distribution of observed values or quantities, such that there is an equal probability of falling above or below it.', true, 1),
        ('wrong answer', false, 1),
        ('wrong answer', false, 1),
        ('wrong answer', false, 1),
        ('// strawberries', true, 2),
        ('wrong answer', false, 2),
        ('wrong answer', false, 2),
        ('wrong answer', false, 2);