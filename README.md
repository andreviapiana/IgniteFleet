<p align="center">
  <h1 align="center">IgniteFleet - React Native :rocket:</h1>
</p>

<p align="center" margin-top="25px" >
  <img alt="GitHub Language Count" src="https://img.shields.io/github/languages/count/andreviapiana/IgniteFleet" />

  <img alt="GitHub Top Language" src="https://img.shields.io/github/languages/top/andreviapiana/IgniteFleet" />
</p>


IgniteFleet é uma aplicação para gerenciar o uso de veículos de empresas.

___

## 💻 Sobre
A ideia deste projeto é fazer o gerenciamento de uso de veículos de uma empresa por meio do monitoramento via GPS com controle de Entrada e Saída.

Ao iniciar o uso, um Login com conta do Google será solicitado. Para poder utilizar um veículo o usuário deverá então registrar a saída dele no App informando a Placa e a Finalidade do uso. Após registrar a saída a localização do veículo será monitorada em tempo real pela aplicação utilizando o GPS do celular, e a rota será então exibida em um mapa que ficará armazenado no Histórico, incluindo o horário de saída e de chegada, coibindo usos indevidos dos veículos. Após terminar o uso o usuário deverá registrar a chegada do veículo.

Por "trás dos panos" o projeto faz uso de um Banco de Dados do MongoDB Atlas através do Realm. O projeto conta ainda com um salvamento de dados local, fazendo com que o seu uso seja possível mesmo sem conexão com a internet. Ao retomar uma conexão com a internet, todos os dados de utilização são enviados e sincronizados com o banco de Dados do MongoDB.

___

## 🎨 Layout
A imagem de Capa da aplicação é vista abaixo:

![Cover](https://github.com/andreviapiana/CoffeeDelivery-Mobile/assets/106932234/2b64cc01-be62-4242-8189-80e21c58135f)

___

## 🎨 Figma
Deseja ver todas as telas e composição do projeto? Acesse o Figma dele a seguir:
- [Figma](https://www.figma.com/file/U1IPPcypcNuo4oA5aML5o6/Ignite-Fleet-(Community)-(Copy)?type=design&node-id=47-2&mode=design)

___

## 🛠 Tecnologias

As seguintes tecnologias foram empregadas na criação deste projeto:

- [React Native](https://reactnative.dev/)
- [TypeScript](https://www.typescriptlang.org/)
- [Styled Components](https://styled-components.com/docs/basics)
- [ESLint](https://eslint.org/)
- [Async Storage](https://reactnative.dev/docs/asyncstorage)
- [NetInfo](https://docs.expo.dev/versions/latest/sdk/netinfo/)
- [React Navigation](https://reactnavigation.org/)
- [React Navigation Native Stack](https://reactnavigation.org/docs/native-stack-navigator/)
- [Expo Google Fonts](https://github.com/expo/google-fonts)
- [Realm](https://www.npmjs.com/package/@realm/react)
- [DayJS](https://www.npmjs.com/package/dayjs)
- [Expo Auth Session](https://docs.expo.dev/versions/latest/sdk/auth-session/)
- [Expo Crypto](https://docs.expo.dev/versions/latest/sdk/crypto/)
- [Expo Location](https://docs.expo.dev/versions/latest/sdk/location/)
- [Expo MapView](https://docs.expo.dev/versions/latest/sdk/map-view/)
- [Expo Task Manager](https://docs.expo.dev/versions/latest/sdk/task-manager/)

___

## 🚀 Como utilizar

Clone o projeto para o local desejado em seu computador.

```bash
$ git clone git@github.com:andreviapiana/IgniteFleet.git
```
___

#### 🚧 Executando a Aplicação
```bash

# Navegue até o diretório
$ cd IgniteFleet

# Instale as dependências necessárias
$ npm install

# Crie então um arquivo .env idêntico ao .env.example e insira nele as chaves/keys solicitadas no arquivo.
$ Atenção: Para esta etapa você precisa ter um Banco de Dados configurado no MongoDB e suas Keys do Google Cloud Platform

# Não tem as Chaves e mesmo assim deseja testar o App?
$ Me envie uma mensagem que eu forneço as chaves para que você possa testar.

# Agora faça o Prebuild
$ npx expo prebuild

# Agora Instale o App em seu celular(via cabo) ou emulador(esta etapa pode demorar).
$ npx expo run:android

# A aplicação então será exibida de forma 100% funcional diretamente em seu celular ou emulador.

```

___

Made with ❤️ by André Viapiana 👋🏽 [Get in Touch!](https://www.linkedin.com/in/andreviapiana/)

---
