export default function WebsiteSchema() {
  const schema = {
    "@context": "https://schema.org",

    "@type": "WebSite",

    name: "Godwin Chinkwe",

    url: "https://yourdomain.com",

    description:
      "Personal portfolio website of Godwin Chinkwe, a full-stack developer.",
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html: JSON.stringify(schema),
      }}
    />
  );
}
