# nodejs-recap

A personal recap of Node.js "under the hood" concepts. This repo contains notes, small examples, and observations while learning how Node.js handles things like HTTP, modules, the event loop, and more.

## Notes

- Node.js uses the built-in `http` module to create HTTP APIs without requiring external frameworks.
- When using the native `http` module, you must manually:
  - Parse request bodies (e.g. collecting chunks of data)
  - Set headers like `Content-Type`
  - Handle routes and methods (`GET`, `POST`, etc.)
  - Handle errors and 404s
- `require()` is part of CommonJS, while `import` comes from ES modules (`"type": "module"` in `package.json`).
- Responses can contain different content types such as JSON (`application/json`) or HTML (`text/html`), depending on the `Content-Type` header.
