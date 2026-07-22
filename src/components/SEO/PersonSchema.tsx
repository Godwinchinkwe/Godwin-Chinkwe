export default function PersonSchema() {

  const schema = {
    "@context":
      "https://schema.org",

    "@type":
      "Person",

    name:
      "Godwin Chinkwe",

    url:
      "https://yourdomain.com",

    jobTitle:
      "Full-Stack Developer",

    description:
      "Full-stack developer specializing in modern web applications and scalable backend systems.",

    sameAs: [
      "https://github.com/yourusername",
      "https://www.linkedin.com/in/yourusername",
    ],
  };

  return (
    <script
      type="application/ld+json"
      dangerouslySetInnerHTML={{
        __html:
          JSON.stringify(
            schema
          ),
      }}
    />
  );
}