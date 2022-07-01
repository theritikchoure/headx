import React from 'react'

const Headx = (props) => {

  const tags = (props) => {
    const { title, meta } = props

    if(title) {
        document.title = props.title
    }

    if(meta.description) {
        const metaRobots = document.createElement('meta');
        metaRobots.name = 'description';
        metaRobots.content = meta.description;
        document.head.appendChild(metaRobots);
    }
    
    if(meta.author) {
        const metaRobots = document.createElement('meta');
        metaRobots.name = 'author';
        metaRobots.content = meta.author;
        document.head.appendChild(metaRobots);
    }
    
    if(meta.refresh) {
        const metaRobots = document.createElement('meta');
        metaRobots.httpEquiv = 'refresh';
        metaRobots.content = meta.refresh;
        document.head.appendChild(metaRobots);
    }
    
  }

  return (
    <React.Fragment>{tags(props)}</React.Fragment>
  )
}

export default Headx