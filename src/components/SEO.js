import React from 'react';
import Helmet from 'react-helmet';

export default function SEO({title, description, thumbnail, url }) {
  return (
    <Helmet>
      
      <title>{title}</title>
      <meta name="description" content={description}></meta>
      <meta property="og:title" content={title} />
      <meta property="og:image" content={thumbnail} />
      <meta property="og:url" content={url} />
    </Helmet>    
  )
}
