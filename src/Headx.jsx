import React, { useEffect } from 'react';

const Headx = (props) => {
    useEffect(() => {
        const { title, meta, httpEquiv, links, og, twitter } = props;

        // Function to remove existing meta tags with the same name
        const removeExistingMetaTags = (tagName) => {
            const existingMetaTags = document.head.querySelectorAll(`meta[name="${tagName}"]`);
            existingMetaTags.forEach((tag) => {
                tag.remove();
            });
        };

        // Error handling: Check if document.head exists before modifying it
        if (document.head) {

            // Set the document title if 'title' prop is provided
            if (title) {
                document.title = title;
            }

            // Add <meta> tags from the 'meta' prop
            if (meta) {
                meta.forEach((metaItem) => {
                    removeExistingMetaTags(metaItem.name);
                    const metaTag = document.createElement('meta');
                    metaTag.name = metaItem.name;
                    metaTag.content = metaItem.content;
                    document.head.appendChild(metaTag);
                });
            }

            // Add <meta> tags with 'httpEquiv' from the prop
            if (httpEquiv) {
                httpEquiv.forEach((httpEquivItem) => {
                    const httpEquivTag = document.createElement('meta');
                    httpEquivTag.httpEquiv = httpEquivItem.name;
                    httpEquivTag.content = httpEquivItem.content;
                    document.head.appendChild(httpEquivTag);
                });
            }

            // Add <link> tags from the 'links' prop
            if (links) {
                links.forEach((linkItem) => {
                    const linkTag = document.createElement('link');
                    linkTag.rel = linkItem.name;
                    linkTag.href = linkItem.content;
                    document.head.appendChild(linkTag);
                });
            }

            // Add Open Graph (OG) <meta> tags from the 'og' prop
            if (og) {
                og.forEach((ogItem) => {
                    const ogTag = document.createElement('meta');
                    ogTag.setAttribute('property', `og:${ogItem.name}`);
                    ogTag.content = ogItem.content;
                    document.head.appendChild(ogTag);
                });
            }

            // Add Twitter <meta> tags from the 'twitter' prop
            if (twitter) {
                twitter.forEach((twitterItem) => {
                    const twitterTag = document.createElement('meta');
                    twitterTag.setAttribute('property', `twitter:${twitterItem.name}`);
                    twitterTag.content = twitterItem.content;
                    document.head.appendChild(twitterTag);
                });
            }
        } else {
            console.error("document.head doesn't exist; unable to add tags.");
        }
    }, [props]);

    // This component doesn't render any visible elements
    return null;
};

export default Headx;
