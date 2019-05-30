## Description

Nestjs Example course from [Traversy Media Youtube channel](https://www.youtube.com/watch?v=wqhNoDE6pb4)

---

## Installation

Clone this repository and cd into it.

```bash
$ git clone https://github.com/Jarkkohei/nestjs-example.git
$ cd nextjs-example
```

Install the dependencies.

```bash
$ npm install
```
---

## MongoDB setup

Login to [MongoDB Cloud Atlas](https://www.mongodb.com/cloud/atlas).

Create a new MongoDB Cloud Atlas project and connect into it to get the connection string.

Create `config/keys.ts` folder and file to the `/src` folder of your Nest.js -project.

Copy and paste the connection string as a `mongoURI` into your Nest.js projects`/src/config/keys.ts` -file.

Replace the `<password>` -part of the mongoURI with the MongoDB Cloud Atlas project connection password.

```typescript
export default {
    mongoURI: '<YourMongoDBCloudAtlasConnectionStringHere>'
}
```
This file can be also used to store other sensitive configuration data.

---

## Running the app

```bash
# development
$ npm run start

# watch mode
$ npm run start:dev

# production mode
$ npm run start:prod
```

