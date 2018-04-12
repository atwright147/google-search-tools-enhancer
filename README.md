# Google Search Tools Enhancer Chrome Extension

This extension is currently very simple. It simply adds two new items to the search tools menu in Google Search results, "Last 3 months" and "Last 6 months".

## Dev build for Chrome

Point Chrome at the `build` folder

```sh
npm install
npm run dev
```

## Production build

```sh
npm install
npm run build
```

## Todo

- Explore using [Mutation Summary](https://github.com/rafaelw/mutation-summary) to detect when page has finished rendering rather than use a `setTimeout()`

Created by Andy Wright
