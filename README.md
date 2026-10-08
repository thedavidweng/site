# site

Landing pages and documentation for CLI projects. Built with VitePress.

Published at **https://thedavidweng.github.io/site/**

## Projects

| Project | Description |
|---------|-------------|
| [canvas-cli](https://github.com/thedavidweng/canvas-cli) | Canvas LMS CLI |
| [zenodo-cli](https://github.com/thedavidweng/zenodo-cli) | Zenodo/InvenioRDM CLI |
| [monarchmoney-cli](https://github.com/thedavidweng/monarchmoney-cli) | Monarch Money CLI |
| [flickr-cli](https://github.com/thedavidweng/flickr-cli) | Flickr CLI |
| [qualtrics-cli](https://github.com/thedavidweng/qualtrics-cli) | Qualtrics XM & Offline Survey Compiler CLI |
| [money](https://github.com/thedavidweng/money) | Personal finance backend — [docs on unified site](https://thedavidweng.github.io/site/money/) (Astro landing at [thedavidweng.github.io/money](https://thedavidweng.github.io/money/) still active during migration) |

The hub also links to desktop apps with their own landing pages: [OpenKara](https://openkara.blahaj.uk/), [Sukiru](https://sukiru.blahaj.uk/), [Apple Say](https://apple-say.blahaj.uk/), [SDF Flash GUI](https://sdf-flash-gui.blahaj.uk/), [tg-drive](https://tg-drive.blahaj.uk/), [Vapourfly](https://vapourfly.blahaj.uk/), and [OpenLoop](https://openloop.blahaj.uk/). [DeckPad](https://deckpad.blahaj.uk/) is a Decky Loader plugin that turns a Steam Deck into a Bluetooth controller. [ADP Shifts](https://adp-shifts.blahaj.uk/) is a browser extension that copies an ADP Workforce Now schedule into Google Calendar.

## Development

Requires [pnpm](https://pnpm.io/) 10+.

```bash
pnpm install
pnpm dev
```

## Sync documentation

Documentation is synced from each CLI repository's `docs/` directory (not hand-written). Re-run after upstream doc changes. tg-drive is not synced: its site is [thedavidweng.github.io/tg-drive](https://tg-drive.blahaj.uk/), and its guides stay in that repository.

```bash
# Clone or update CLI repos (example)
mkdir -p /tmp/cli-docs-sync
for repo in canvas-cli zenodo-cli monarchmoney-cli flickr-cli qualtrics-cli money; do
  gh repo clone thedavidweng/$repo /tmp/cli-docs-sync/$repo -- --depth=1
done

pnpm sync-docs -- --source=/tmp/cli-docs-sync
```

Or with a custom source path:

```bash
node scripts/sync-docs.mjs --source=/path/to/parent/containing/repos
```

## Build

```bash
pnpm build:agent-files   # regenerate money llms.txt / agent.json
pnpm build
pnpm preview
```

## License

MIT
