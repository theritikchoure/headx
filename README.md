# Headx

> It is a React Package to automatically modify the main html file (like index.html) to add the provided SEO meta tags and more. For example you can use it to add on the build time the following meta tags: title, description, open graph, twitter, icons and more.

[![NPM](https://img.shields.io/npm/v/headx.svg)](https://www.npmjs.com/package/headx) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com) ![Unpacked Size](https://img.shields.io/badge/Unpacked%20Size-17.4%20kB-blue)
[![Twitter Follow](https://img.shields.io/twitter/follow/theritikchourestyle.svg?style=social&label=Follow%20%40theritikchoure)](https://twitter.com/theritikchoure)

## Table of Contents
1. [Install](#install)
2. [Usage](#usage)
3. [Default SEO Configuration](#default-seo-configuration)
4. [Features](#features)
    - [Supports](#supports)
    - [No Duplicacy](#no-duplicacy)
    - [Fast & Light](#fast--light)
5. [Additional Information](#additional-information)
6. [License](#license)

## Install

```bash
npm install --save headx
```

## Usage

Then you need to import `headx` as `Headx`. This will render out the tags in the `<head>` for SEO. At a bare minimum, you should add a title and description.

**Example with just title and description:**

```jsx
import Headx from 'headx'

const Page = () => (
  <>
    <Headx
      title='Headx - Document Head Manager ⚓'
      meta={[{ name: 'description', content: 'Document Head Manager ⚓' }]}
    />

    <p>Simple Usage</p>
  </>
)

export default Page
```

But `Headx` gives you many more options that you can add inside the head tag. See below for a more detail example of a page.

**Typical page example:**

```jsx
import React from 'react'

import Headx from 'headx'

const App = () => {
  return (
    <div>
      <Headx
        title='Headx - Document Head Manager ⚓'
        meta={[
          { name: 'description', content: 'Document Head Manager ⚓' },
          { name: 'author', content: 'theritikchoure' }
        ]}
        httpEquiv={[{ name: 'refresh', content: '30' }]}
        links={[{ name: 'stylesheet', content: 'styles.css' }]}
        og={[
          { name: 'type', content: 'website' },
          { name: 'url', content: 'http://example.com' }
        ]}
        twitter={[
          { name: 'type', content: 'website' },
          { name: 'url', content: 'http://example.com' }
        ]}
      />
    </div>
  )
}

export default App
```

### Default SEO Configuration

`Headx` enables you to set some default SEO properties that will appear on all pages without needing to include anything on them. You can also override these on a page by page basis if needed.

To achieve this, Within your `Layout` or `Header` file you will need to import `headx` and pass it props.

Here is a typical example:

```jsx
import React from 'react'

import Headx from 'headx'

const App = () => {
  return (
    <div>
      <Headx
        og={[
          { name: 'type', content: 'website' },
          { name: 'url', content: 'http://example.com' }
        ]}
        twitter={[
          { name: 'type', content: 'website' },
          { name: 'url', content: 'http://example.com' }
        ]}
      />
    </div>
  )
}

export default App
```

**Note:** To work properly default seo configuration, `Headx` should be placed in `Layout` or `Navbar` file.

From now on all of your pages will have the defaults above applied.

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
