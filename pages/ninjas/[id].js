/* The file route is named with [] to mean it is chageable field */
/* To create different routes for each of the Ids used and their respective html files, in build */
/* The function is asynchronous as nextjs needs to get all of the data shown on the list for it to generate different routes */
/* We await the data since it is asyncronous in nature */
export const getStaticPaths = async () => {
  const res = await fetch("https://jsonplaceholder.typicode.com/users");
  const data = await res.json();

  const paths = data.map((ninja) => {
    return {
      params: { id: ninja.id.toString() },
    };
  });
  //we return paths which are an array [] of many objects {}, {} and each object has different parameters and within the params, we are looking for id.
  //paths: [{}, {}, { params: { id: }}]
  return {
    paths,
    fallback: false, //incase there doesn't exist id, it gives 404
  };
};

/* Nextjs runs this getStaticProps function the number of times required to generate all ids */
export const getStaticProps = async (context) => {
  const id = context.params.id;
  const res = await fetch("https://jsonplaceholder.typicode.com/users/" + id);
  const data = await res.json();
  return {
    props: { ninja: data },
  };
};
const Details = ({ ninja }) => {
  return (
    <div>
      <h1>{ninja.name}</h1>
      <p>{ninja.email}</p>
      <p>{ninja.website}</p>
      <p>{ninja.address.city}</p>
    </div>
  );
};

export default Details;
