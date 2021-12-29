import Link from "next/link";

const errorPage = () => {
  return (
    <>
      This is Error Page
      <Link href="/">
        <button> Go to Home Page </button>
      </Link>
    </>
  );
};

export default errorPage;
