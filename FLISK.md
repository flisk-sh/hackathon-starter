# Run with Flisk (optional)

This fork adds [Flisk](https://flisk.sh) as one more way to start the app. The upstream flow (`npm install`, a local MongoDB, `npm start`) is unchanged, and no app code was touched.

Needs Node 24.18+ and Docker (for MongoDB only).

```bash
npm install
npx @flisk-sh/flisk up
```

This starts:

- `mongo`: `mongo:8` in Docker on `localhost:27017`, data in the Docker volume `hackathon_starter_mongo`.
- `web`: the app on <http://localhost:8080>, restarted by `node --watch` when you edit a file.

`flisk down` (or Ctrl+C) stops both; the volume is kept. API keys still come from `.env.example` or your own environment, exactly as upstream.
