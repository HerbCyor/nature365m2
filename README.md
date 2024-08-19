# Nature365 (Natureza365)
Sesc Senai LAB365 - FuturoDEV Nature

Projeto Avaliativo Modulo 1

autor: Herbert Martins Cardozo

## Sobre
O Nature365 (antigo OpenNature) é uma plataforma web para o registro de áreas de interesse de amantes do meio ambiente. Usuários podem cadastrar informações sobre pontos de interesse como áreas naturais, trilhas, parques ecológicos e reservas ambientais. 

A plataforma permite o cadastramento de novos usuários. Usuários podem cadastrar, editar e deletar pontos de interesse, assim como visualizar informações do local.

## Motivação

É extramente comum encontrarmos pessoas dependentes da tecnologia no seu dia a dia. Estamos conectador com a internet praticamente 100% do nosso tempo, seja para trabalho ou lazer. Esse contato excessivo com a tecnologia pode, por muitas vezes, nos levar a problemas de saúde, tanto física quanto mental. Sabe-se que o contato com a natureza trás benecificios para a nossa saúde, ao mesmo tempo que passar um tempo desconectado da tecnologia pode promover uma conexão maior com a natureza à nossa volta. Porém, mesmo com a motivação de buscar um lugar para aprecisar a paisagem, muitas pessoas podem não ter o conhecimento do melhor lugar perto delas, assim como não saber onde procurar por informações pertinentes às suas vontades e necessidades. Para isso o Open Nature busca oferecer uma plataforma de registro e busca de locais da natureza perto da pessoa, contendo informações importantes sobre os mesmos, para que as pessoas tenham um acesso mais fácil e assim, poderem cuidar melhor de sua saúde.

## Objetivo
O objetivo deste projeto é entregar um MPV (minimum viable product) da aplicação FrontEnd, com as funcionalidades de cadastro e login de usuário, visualização, adição, edição e remoção de locais da natureza por parte dos usuários.


## Configuração do Ambiente

### Bibliotecas utilizadas
- React
- axios 
- json-server 
- yup
- react hook form
- bootstrap
- vite

### Primeiros passos
- ```git clone https://github.com/HerbCyor/nature365m2.git``` 
- ```npm install```
 
### Inicializando o servidor
- ```vite dev```
- ```npx json-server database.json```

### Testando a aplicação

## Informações do Applicativo

### Usuário básico de testes
- email: teste@teste.com
- senha: teste

### Rotas
- /login  [ POST ]
- /usuario [ POST ]
- /local [ GET, POST ]
- /local/local_id [ GET, POST, PUT, DELETE ]
- /local/local_id/maps [ GET ]
- /docs [ GET ]

### Modelos
- ### User
    modelo de usuario
    - nome completo
    - sexo
    - cpf
    - data de nascimento
    - e-mail
    - senha

- ### PointOfInterest
    modelo de ponto de interesse/área natural
    - nome
    - descrição

- ### UserAddress
    modelo de endereço de usuários
    - rua
    - numero
    - complemento
    - bairro
    - cidade
    - estado
    - país
    - cep
    - userId
- ### PointOfInterestAddress
    modelo de endereço de Pontos de Interesse
    - rua
    - numero
    - complemento
    - bairro
    - cidade
    - estado
    - país
    - cep
    - pointOfInterestId
- ### PointOfInterestGeolocation
    modelo de geolocalização de Pontos de Interesse
    - latitude
    - longitude
    - pointOfInterestAddressId



## Melhorias Futuras
- multiplas escolhas para sexo
- validação cpf na database
- database com cidades do brasil
- integração com rotas para fácil acesso pelas pessoas
- favoritos
- maior abrangência de informações sobre os locais
- comentários e avaliações
- visual inovador
- melhor responsividade
- integração com mapa e coordenadas geográficas
