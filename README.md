# Fake Data

This is a (very) simple app to get the `bloc-data` npm module working. A tour:

- `index.js` - just imports bloc-data
- `webpack.config.js` - run `webpack --config webpack.config.js`
- `out.js` - webpack's generated output
- `index.html` open this page in your browser to test the `out.js` file

## The Challenge

The goal is to give any app the ability to import and use our frontend data models, contained in the bloc-data npm package.

1. Clone the `bloc-data` repo: `git clone git@github.com:Bloc/bloc-data.git`
2. Add as a dependency in this repository in `package.json`:

```
...
'bloc-data': 'file:../bloc-data',
...
```

3. `npm install`
4. Figure out a way to get `import { Charge } from 'bloc-data';` functionality working in this fake-data repository (in `index.js`).

