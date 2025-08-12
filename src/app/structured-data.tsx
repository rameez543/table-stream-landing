export default function StructuredData() {
  const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "Organization",
    "name": "TableStream.io",
    "url": "https://tablestream.io",
    "description": "Powerful CSV analysis tool that runs entirely in your browser. Handle massive files up to 4GB with complete privacy.",
    "foundingDate": "2024",
    "sameAs": []
  };

  const webApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "WebApplication",
    "name": "TableStream.io",
    "description": "Analyze massive CSV files instantly in your browser. Handle 4GB+ files with millions of rows, advanced filtering, and complete privacy - no uploads required.",
    "url": "https://tablestream.io",
    "applicationCategory": "Data Analysis Tool",
    "operatingSystem": "Web Browser",
    "permissions": "No data upload required",
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD",
      "availability": "https://schema.org/InStock"
    },
    "featureList": [
      "4GB+ file support",
      "DuckDB WebAssembly engine", 
      "SQL-powered filtering",
      "100% client-side processing",
      "Advanced duplicate detection",
      "Multi-format export (CSV, JSON, Excel)",
      "Real-time search",
      "Multi-table support",
      "Dark/light theme"
    ]
  };

  const softwareApplicationSchema = {
    "@context": "https://schema.org",
    "@type": "SoftwareApplication",
    "name": "TableStream.io",
    "applicationCategory": "BusinessApplication",
    "operatingSystem": "Web Browser",
    "description": "Transform your CSV analysis workflow with the most powerful browser-based data viewer. Handle files up to 4GB, millions of rows, advanced filtering - all without uploading data.",
    "url": "https://tablestream.io",
    "author": {
      "@type": "Organization",
      "name": "TableStream.io"
    },
    "offers": {
      "@type": "Offer",
      "price": "0",
      "priceCurrency": "USD"
    },
    "aggregateRating": {
      "@type": "AggregateRating", 
      "ratingValue": "4.9",
      "ratingCount": "127"
    }
  };

  return (
    <>
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(webApplicationSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareApplicationSchema) }}
      />
    </>
  );
}