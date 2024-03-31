# BGS Dashboard

Full-stack app utilizing Next.js to display BGS information for an in-game faction.

## How it works

The script [server/fetch.js](./server/fetch.js) will fetch and parse a query to the [EliteBGS API](https://elitebgs.app/). This result gets stored in [server/archive.json](./server/archive.json), which keeps a 30-day record of data information.

This data is then imported and processed in a variety of webpages, which are processed and rendered server-side by Next.js (see [src/app/page.tsx](./src/app/page.tsx) for example).