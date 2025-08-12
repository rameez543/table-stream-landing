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

  const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
      {
        "@type": "Question",
        "name": "What file sizes can TableStream.io handle?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TableStream.io can handle CSV files up to 4GB+ with millions of rows. All processing happens in your browser using DuckDB WebAssembly for maximum performance."
        }
      },
      {
        "@type": "Question",
        "name": "Is my data uploaded to any servers?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "No, your data never leaves your browser. TableStream.io processes everything client-side using WebAssembly, ensuring complete privacy and security of your sensitive data."
        }
      },
      {
        "@type": "Question",
        "name": "What export formats are supported?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "TableStream.io supports exporting to CSV, JSON, and Excel formats. You can export filtered results or the entire dataset."
        }
      },
      {
        "@type": "Question",
        "name": "Can I use SQL queries with TableStream.io?",
        "acceptedAnswer": {
          "@type": "Answer",
          "text": "Yes, TableStream.io is powered by DuckDB WebAssembly, allowing you to run SQL queries directly on your CSV data for advanced filtering and analysis."
        }
      }
    ]
  };

  const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
      {
        "@type": "ListItem",
        "position": 1,
        "name": "Home",
        "item": "https://tablestream.io"
      },
      {
        "@type": "ListItem", 
        "position": 2,
        "name": "CSV Analysis Tool",
        "item": "https://tablestream.io"
      }
    ]
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
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(faqSchema) }}
      />
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(breadcrumbSchema) }}
      />
    </>
  );
}