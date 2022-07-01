import React from 'react'

const Headx = (props) => {

  const tags = (props) => {
    const { title, meta, httpEquiv, links } = props

    if(title) {
        document.title = props.title
    }

    if(meta) {
        meta.map((meta) => {
            const metaRobots = document.createElement('meta');
            metaRobots.name = meta.name;
            metaRobots.content = meta.content;
            document.head.appendChild(metaRobots);
        })
    }
    
    if(httpEquiv) {
        httpEquiv.map((http_equiv) => {
            const httpEquivTag = document.createElement('meta');
            httpEquivTag.httpEquiv = http_equiv.name;
            httpEquivTag.content = http_equiv.content;
            document.head.appendChild(httpEquivTag);
        })
    }

    if(links) {
        links.map((link) => {
            const linkTag = document.createElement('link');
            linkTag.rel = link.name;
            linkTag.href = link.content;
            document.head.appendChild(linkTag);
        })
    }
    
  }

  return (
    <React.Fragment>{tags(props)}</React.Fragment>
  )
}

export default Headx