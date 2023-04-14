import Link from "next/link";
import { useEffect } from "react";
import { useRouter } from "next/router";

const NotFound = () => {
  const router = useRouter();

  useEffect(() => {
    setTimeout(() => {
      // router.go(-1)
      router.push("/");
    }, 3000);
  }, [router]);
  return (
    <div className="not-found">
      <h1>Oooops...</h1>
      <h2>This page doesn't exist :0 </h2>
      <p>
        Go back to the{" "}
        <Link href="/">
          <text>Homepage</text>
        </Link>
      </p>
    </div>
  );
};

export default NotFound;
