# Documentation

`canvas-cli` documentation is organized by the [Diátaxis](https://diataxis.fr/) framework: tutorials teach, how-to guides solve, reference describes, explanation clarifies. Start where your goal is.

New to the CLI? Begin with [Getting started](/canvas-cli/docs/tutorials/getting-started).

## Tutorials — learning-oriented

- **[Getting started](/canvas-cli/docs/tutorials/getting-started)** — install, authenticate, and make your first queries in five minutes.

## How-to guides — task-oriented

For students:

- **[Check what's due](/canvas-cli/docs/how-to/check-what-is-due)** — todo feed, buckets, due-date filters.
- **[Submit an assignment](/canvas-cli/docs/how-to/submit-an-assignment)** — text, file, or URL, with a preview first.
- **[Download course files](/canvas-cli/docs/how-to/download-course-files)** — one file or the whole course, with manifests.
- **[Message your instructor](/canvas-cli/docs/how-to/message-your-instructor)** — inbox send and reply from the terminal.
- **[Log in with a session cookie](/canvas-cli/docs/how-to/log-in-with-a-session-cookie)** — for schools that disable access tokens.

For teaching teams:

- **[Collect student submissions](/canvas-cli/docs/how-to/collect-student-submissions)** — bulk download with a manifest.
- **[Enter grades](/canvas-cli/docs/how-to/enter-grades)** — single scores, comments, and CSV import behind safety gates.

## Reference — information-oriented

- **[Command Reference](/canvas-cli/docs/command-spec)** — every command, flag, and environment variable.
- **[JSON Contract](/canvas-cli/docs/json-contract)** — the `--json` envelope schema and exit codes.
- **[Authentication & Configuration](/canvas-cli/docs/auth)** — config file, profiles, precedence, token and cookie details.
- **[Raw API](/canvas-cli/docs/raw-api)** — the `canvas api` escape hatch for untyped endpoints.
- **[API Surface](/canvas-cli/docs/api-surface)** — Canvas endpoints the CLI exercises.

## Explanation — understanding-oriented

- **[Safety Model](/canvas-cli/docs/safety-model)** — `--dry-run`, `--confirm`, `--read-only`, and the audit log.
- **[Architecture](/canvas-cli/docs/architecture)** — codebase structure and design decisions.
- **[Architecture Decision Records](https://github.com/thedavidweng/canvas-cli/blob/main/docs/adr)** — why things are the way they are.

## Project

- **[Contributing](/canvas-cli/CONTRIBUTING)** — development setup and guidelines.
- **[Security](/canvas-cli/SECURITY)** — reporting vulnerabilities.

All command examples in the tutorials and how-to guides were captured from real runs of the CLI; where an output is environment-specific (request IDs, timing), the article says so.
