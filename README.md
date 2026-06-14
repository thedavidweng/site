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
| [money](https://github.com/thedavidweng/money) | Personal finance backend |

## Development

Requires [pnpm](https://pnpm.io/) 10+.

```bash
pnpm install
pnpm dev
```

## Sync documentation

Documentation is synced from each CLI repository's `docs/` directory (not hand-written). Re-run after upstream doc changes:

```bash
# Clone or update CLI repos (example)
mkdir -p /tmp/cli-docs-sync
for repo in canvas-cli zenodo-cli monarchmoney-cli flickr-cli money; do
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
pnpm build
pnpm preview
```

## License

MIT
