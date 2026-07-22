import Link from "next/link";

export default function NotFound() {

  return (
    <main
      style={{
        minHeight:
          "70vh",

        display:
          "flex",

        alignItems:
          "center",

        justifyContent:
          "center",

        textAlign:
          "center",

        padding:
          "40px",
      }}
    >

      <div>

        <p>
          404
        </p>

        <h1>
          Page Not Found
        </h1>

        <p>
          The page you're looking
          for doesn't exist or
          may have been moved.
        </p>

        <Link
          href="/"
        >
          Return Home
        </Link>

      </div>

    </main>
  );
}