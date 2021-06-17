export default function Cart(props) {
  return (
    <>
      <h1>{props.name}'s cart page</h1>
    </>
  );
}

export async function getStaticProps() {
  console.log("server side! alert() won't work!", process.env);
  return {
    props: {
      name: "will",
    },
  };
}
