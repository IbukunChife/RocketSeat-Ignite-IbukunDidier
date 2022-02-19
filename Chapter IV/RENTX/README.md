# Cadastro de carro
---
**Requisitos Funcionais - RF**
[] Deve ser possível cadastrar um novo carro.
[] Deve ser possível listar todas as categorias

**Regras de Negócio - RN**
[] Não deve ser possível cadastrar um carro com uma placa existente.
[] Não deve ser possível alterar a placa de um carro cadastrado.
[] O carro deve ser cadastrado, por padrão, com disponibilidade.
[] O usuário responsável pelo cadastro deve ser um usuário administrador.


# Listagem de carro
---
**Requisitos Funcionais - RF**
[] Deve ser possível listar todos os carros disponíveis.
[] Deva ser possível listar todos os carros disponíveis pelo nome da categorias
[] Deva ser possível listar todos os carros disponíveis pelo nome da marca
[] Deva ser possível listar todos os carros disponíveis pelo nome da carro

**Regras de Negócio - RN**
[] O usuário não precisa estar logado no sistema.


# Cadastro de Especificação no carro
---
**Requisitos Funcionais - RF**
[] Deve ser possível cadastrar uma especificação para um carro.
[] Deve ser possível listar todas as especificações.
[] Deve ser possível listar todos os carros.

**Regras de Negócio - RN**
[] Não deve ser possível cadastrar uma especificação em um carro não cadastrado.
[] Não deve possível cadastrar uma especificação já existente para o mesmo carro.
[] O usuário responsável pelo cadastro deve ser um usuário administrador.


# Cadastro de IMagens do carro
---
**Requisitos Funcionais - RF**
[] Deve ser possível cadastrar a imagem do carro.
[] deve ser possível listar todos os carros.

**Requisitos Não Funcionais - RF**
[] Utilizar o  multer para upload dos arquivos

**Regras de Negócio - RN**
[] O usuário deve poder cadastrar mais de uma imagem para o mesmo carro.
[] O usuário responsável pelo cadastro deve ser um usuário administrador.


# Aluguel de carro
---

**Requisitos Funcionais - RF**
[] Deve ser possível cadastrar um aluguel.

**Regras de Negócio - RN**
[] O aluguel deve ter a duração minima de 24 horas.
[] Não deve ser possível cadastrar um novo aluguel caso já existe um aberto para o mesmo usuário.
[] Não deve ser possível cadastrar um novo aluguel caso já existe um aberto para o mesmo carro.