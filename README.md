# RainFocus UI assessment

This project is a responsive UI implementation built with Next.js and React.

## Reviewing the prebuilt submission

The submission ZIP includes an `out` directory containing the prebuilt HTML,
CSS, JavaScript, fonts, and images. It does not need to be compiled again.

Serve `out` with any static file server and open the address it prints. For
example, with Node.js:

```bash
npx serve out
```

Or with Python:

```bash
python -m http.server 3000 --directory out
```

Then open [http://localhost:3000](http://localhost:3000).

> Opening `out/index.html` directly with a `file://` URL is not supported.
> Next.js client navigation and asset paths require a local HTTP server.

## Local development

Install the locked dependencies:

```bash
npm ci
```

Start the development server:

```bash
npm run dev
```

Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Creating the static build

```bash
npm run build
```

Next.js writes the complete static site to `out`. Include that directory when
creating the final submission ZIP. It is intentionally excluded from Git
because it is generated output.
