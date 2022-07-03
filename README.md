# headx

> It is a React Package to automatically modify the main html file (like index.html) to add the provided SEO meta tags and more. For example you can use it to add on the build time the following meta tags: title, description, open graph, twitter, icons and more.

[![NPM](https://img.shields.io/npm/v/headx.svg)](https://www.npmjs.com/package/headx) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save headx
```

## Usage

```jsx

import React from 'react'

import Headx from 'test'

const App = () => {
  return (
    <div>
      <Headx 
        title="Headx - Document Head Manager ⚓" 
        meta={[{name: 'description', content: 'Document Head Manager ⚓'}, {name: 'author', content: 'theritikchoure'}]}
        httpEquiv={[{name: 'refresh', content: '30'}]}
        links={[{name: 'stylesheet', content: 'styles.css'}]}
        og={[{name: 'type', content: 'website'}, {name: 'url', content: 'http://example.com'}]}
        twitter={[{name: 'type', content: 'website'}, {name: 'url', content: 'http://example.com'}]}
      />
    </div>
  )
}

export default App

```

## Features

### Supports
Supports all valid head tags: title, base, meta, link, script, noscript, and style tags

### No Duplicacy
Duplicate head changes are preserved when specified in the same component

### Fast & Light
It is a simple, fast and lightweight package for react

## Additional information

This package creates the tags in the html file before the closing head tag.

## License

This package is licensed under the MIT license © [theritikchoure](https://github.com/theritikchoure)
