create table livros(
    id int(11) not null auto_increment,
    titulo varchar(255) default null,
    descricao text,
    autor varchar(255) default null,
    preco decimal(10,2) default null,
    primary key (id)
)

insert into livros (titulo, descricao, autor, preco)
values ('Livro NodeJS', 'Livro legal sobre nodejs', 'Fulano', 100);
insert into livros (titulo, descricao, autor, preco)
values ('Biblia do Java', 'Livro velho sobre ajava', 'Beltrano', 399.99);
insert into livros (titulo, descricao, autor, preco)
values ('Livro de Receitas', 'Receitas da Vovó', 'Fulano', 1.99);
