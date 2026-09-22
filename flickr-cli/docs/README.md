# Documentation Map

flickr-cli's documentation follows the [Diátaxis](https://diataxis.fr/) taxonomy:

| Quadrant | Question it answers | Pages |
|----------|---------------------|-------|
| **Tutorials** | "Walk me through my first session." | [Your first library session](/flickr-cli/docs/tutorials/first-library) |
| **How-to guides** | "How do I do this specific thing?" | [Back up your library](/flickr-cli/docs/how-to/back-up-your-library), [Upload without duplicates](/flickr-cli/docs/how-to/upload-without-duplicates), [Organize albums](/flickr-cli/docs/how-to/organize-albums), [Automate with JSON](/flickr-cli/docs/how-to/automate-with-json), [Call any API method](/flickr-cli/docs/how-to/call-any-api-method), [Migrate from Piwigo](/flickr-cli/docs/how-to/migrate-from-piwigo) |
| **Reference** | "What are the exact flags/codes?" | [Command Reference](/flickr-cli/COMMANDS), [JSON Schema](/flickr-cli/JSON_SCHEMA) |
| **Explanation** | "Why is it designed this way?" | [Safety gates](/flickr-cli/docs/explanation/safety-gates), [Architecture](/flickr-cli/docs/explanation/architecture) |

Design decisions behind the architecture live in [`adr/`](https://github.com/thedavidweng/flickr-cli/blob/main/docs/adr).

## Example conventions

Every command shown in a guide follows the same rhythm: **scenario → command → output → next step**.

Output blocks come in two kinds, and every block is one of them:

- **Captured** — verbatim from a real run of the binary. Each carries an HTML
  comment naming the exact command that produced it.
  Request IDs and durations vary per run; everything else is what you will see.
- **Illustrative** — marked with a visible *Illustrative* note. The shape
  (field names, table columns, message wording) matches the renderer source;
  only the values are examples. Used when showing the output requires a
  populated Flickr account or a network call.

When you change commands, flags, or output in code, update the affected pages
in the same change (see [AGENTS.md](/flickr-cli/AGENTS)), and re-capture any block
your change alters rather than hand-editing it.
