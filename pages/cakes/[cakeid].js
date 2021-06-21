import axios from "axios";
import { useRouter } from "next/router";
import { useState, useEffect } from "react";

export default function ShowCake(props) {
  var router = useRouter();
  console.log(">>>>>>>>>>>>>>>>>>>>>>>>>>", router.query);

  var { cakeid } = router.query;
  // const { cakeDetails, setCakeDetails } = useState({});
  // useEffect(() => {
  //   axios({
  //     method: "get",
  //     url: "https://apifromashu.herokuapp.com/api/allcakes" + cakeid,
  //   }).then(
  //     (response) => {
  //       setCakeDetails(response.data.data);
  //     },
  //     (error) => {
  //       console.log("error");
  //     }
  //   );
  // }, [cakeid]);

  return (
    <>
      Here we will show the cake details selected by user which is {cakeid},
      rating: {props.cakeDetails?.ratings} description:
      {props.cakeDetails?.description}
    </>
  );
}

export async function getStaticPaths() {
  var paths = [];
  var result = await axios({
    method: "get",
    url: "https://apifromashu.herokuapp.com/api/allcakes",
  });
  // console.log(">>>>>>>>>>>>>>>>>all cakes from api", result.data.data);
  result.data.data.forEach((each) => {
    var pathobj = { params: { cakeid: each.cakeid.toString() } };
    paths.push(pathobj);
  });
  console.log(
    "paths allowed",
    paths,
    "=======================",
    typeof paths[0].params.cakeid
  );
  return {
    // paths: [{ params: { cakeid: "abc" } }],
    paths: paths,
    fallback: false,
  };
}

export async function getStaticProps(context) {
  // console.log('context: ', context);

  // get the param from url
  var cakeid = context.params.cakeid;
  // get related data from api
  var response = await axios({
    method: "get",
    url: "https://apifromashu.herokuapp.com/api/cake/" + cakeid,
  });
  // pass data to props
  return {
    props: {
      cakeDetails: response.data.data || [],
    },
  };
}
