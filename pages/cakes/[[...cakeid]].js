import { useRouter } from "next/router";

export default function ShowCake() {
  var router = useRouter();
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>", router.query);
  var { cakeid } = router.query;
  return (
    <>Here we will show the cake details selected by user which is {cakeid}</>
  );
}

export async function getStaticPaths() {
  return {
    paths: [{ params: { cakeid: "abc" } }],
    fallback: false,
  };
}
