# Music Verse Demo

A mobile-first 360° music discovery prototype built with Three.js and Vite.

## Core interaction

- Drag to look around the music space.
- Enable motion control on supported mobile browsers.
- Hold the center reticle over a cover for 1.05 seconds.
- Travel into the selected song world with an audio crossfade.
- Discover a newly generated ring of related songs.
- Return through the listening history.

## Run locally

```bash
pnpm install
pnpm dev
```

Open the local URL shown in the terminal. For motion control on a physical phone, serve the page through HTTPS or a secure local-network tunnel.

## Prototype data

Album artwork and chart metadata are sourced from CoverBox's Apple Music charts page. Apple preview URLs provide short audio samples. Related-song ranking is intentionally simulated in this prototype using genre affinity and deterministic variety; it is not a production recommendation model.

## Production considerations

- Replace static chart data with a licensed catalog and recommendation API.
- Proxy audio and metadata through an application backend with caching.
- Add analytics for focus, abandoned dwell, completed travel, and session depth.
- Validate motion controls across iOS Safari and Android Chrome on physical devices.
