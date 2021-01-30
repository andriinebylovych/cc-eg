#! /usr/bin/env node
console.table(
    [
        `docs(changelog): update changelog to beta.5`,
        `fix(release): need to depend on latest rxjs and zone.js

The version in our package.json gets copied to the one we publish, and users need the latest of these.`,
        `refactor(router): fix several typos in router spec (#40626) …

Fix a couple typos in router tests.

PR Close #40626
`
    ]
);