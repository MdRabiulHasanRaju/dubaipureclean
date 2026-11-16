import { Helmet } from 'react-helmet-async';
import { SITE } from '../config';

export default function Seo({ title, description, path = '/', image, schema, noindex }) {
  const url = SITE.url + path;
  const full = title.includes(SITE.name) ? title : `${title} | ${SITE.name}`;
  const pic = image || `${SITE.url}/images/logo.png`;
  return (
    <Helmet>
      <title>{full}</title>
      <meta name="description" content={description} />
      <link rel="canonical" href={url} />
      <meta name="robots" content={noindex ? 'noindex,follow' : 'index,follow,max-image-preview:large'} />
      <meta property="og:type" content="website" />
      <meta property="og:site_name" content={SITE.name} />
      <meta property="og:title" content={full} />
      <meta property="og:description" content={description} />
      <meta property="og:url" content={url} />
      <meta property="og:image" content={pic} />
      <meta name="twitter:card" content="summary_large_image" />
      {schema && <script type="application/ld+json">{JSON.stringify(schema)}</script>}
    </Helmet>
  );
}
