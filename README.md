# headx

> A document head manager for React

[![NPM](https://img.shields.io/npm/v/headx.svg)](https://www.npmjs.com/package/headx) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

## Install

```bash
npm install --save headx
```

## Usage

```jsx
import React from 'react'

import Headx from 'headx'

const App = () => {
  return (
    <div>
      <Headx 
        title="Headx - Document Head Manager ⚓" 
        meta={[{name: 'description', content: 'Document Head Manager ⚓'}, 
        {name: 'author', content: 'theritikchoure'}]}
        httpEquiv={[{name: 'refresh', content: '30'}]}
        links={[{name: 'stylesheet', content: 'styles.css'}]}
      />
    </div>
  )
}

export default App
```

## License

MIT © [theritikchoure](https://github.com/theritikchoure)
