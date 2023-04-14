import Link from "next/link";
import styles from "@/styles/Ninjas.module.css";

/* This code only runs at buildtime, shouln't be used or things expected to be in the browser */
export const getStaticProps = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  //Convert the raw data into json format
  const data = await res.json();
  //return the data in prop format and name it ninjas or anything else
  return {
    props: { ninjas: data },
  };
};

//everything above is done in the buildtime and will not be seen in browser
/* declare Ninjas and destructure the props named ninjas so it can be used in the website*/
const Ninjas = ({ ninjas }) => {
  return (
    <div>
      <h1>All Ninjas</h1>
      {ninjas.map((ninja) => (
        <Link href={"/ninjas/" + ninja.id} key={ninja.id}>
          <text className={styles.single}>
            <h3>{ninja.name}</h3>
          </text>
        </Link>
      ))}
    </div>
  );
};

export default Ninjas;
