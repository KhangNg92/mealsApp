# Meals App

- A MERN stack (Mongodb, Express, React-Native, Node.js) all written in typescript with redux-saga and react-navigation 5.x, redux-toolkit implements.

### Clone the repo

```
git clone https://github.com/KhangNg92/mealsApp.git
```

### Get server and client running

#### Install Packages

```
npm i
```

#### Get Backend running

- Attach your MongoDB Url into `server/config/dev.ts`

```
export const DB = <Your DB URL>;
```

```
ts-node server/server
```

### Get React-Native running

#### Set up localhost properly

- Unlike React.js, React-Native can't run directly with `localhost` so we have to config the right port by running

```
ipconfig getifaddr en0 | pbcopy
```

- This will copy your IP address into your clipboard. Next we have to paste that into the `utils/api.ts`. Remember to include `http://` and `/5000` before and after your IP address.

```
export const API = 'http://<Paste the IP Address here>/5000'
```

```
cd ios
pod install
```

```
npm run ios
```

Now you have all set up. Enjoy :)
