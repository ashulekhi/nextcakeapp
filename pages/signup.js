export default function () {
  return <>Signup Page</>;
}

export async function getServerSideProps() {
  console.log("each request");
  return {
    props: {},
  };
}
