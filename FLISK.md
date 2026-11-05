# Run with Flisk (optional)

This fork adds [Flisk](https://flisk.sh) as one more way to start the app. The upstream flow (`npm install`, a local MongoDB, `npm start`) is unchanged, and no app code was touched.

Needs Node 24.18+ and Docker (for MongoDB only).

```bash
npm install
npx @flisk-sh/flisk up
```

This starts:

- `mongo`: `mongo:8.0` in Docker on `localhost:27017`, data in the Docker volume `hackathon_starter_mongo`.
- `web`: the app on <http://localhost:8080>, restarted by `node --watch` when you edit a file.

`flisk down` (or Ctrl+C) stops both; the volume is kept. API keys still come from `.env.example` or your own environment, exactly as upstream.

## End-to-end test

With the stack running (`flisk up` in one terminal), run in another:

```bash
npx playwright install chromium
npm run test:e2e:flisk
```

It signs up a new user in a browser, logs out, logs in again and checks the account page, so it fails if MongoDB is not reachable through the Flisk setup. It generates its own password for each run. Set `FLISK_E2E_URL` to test another address.
