import axios from "axios";
import { useRouter } from "next/router";
let apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q=";

export default function Search(props) {
  //   console.log("props of search cakes", props);
  var router = useRouter();
  //   console.log("router ", router);
  //   console.log("searchresults ", props.searchresults);
  return (
    <>
      Search Page <h1>Showing Results for {router.query.q}</h1>
    </>
  );
}

export async function getServerSideProps(context) {
  console.log("query from context", context.query);
  var response = await axios({
    method: "get",
    url: apiurl + context.query.q,
  });
  return {
    props: {
      searchresults: response.data.data,
    },
  };
}

//In next js it is a limitation that we cant pre fetch the data in case of queries for that we may use srver side generation of pages

// receive the query
// hit the api with query
// display to user

// As per next js we have learnt data fetching in pre-rendering
// what types of pre rendering are there

// static generation of pages
// server side generation of pages

// data fetching is not possible in static generation pf pages in case of query
// static generation takes place at build time and at build time we can't figure out what query user may ask

// so ,we are going to use server side gneration of pages if want to otherwise normal react concepts

// import axios from "axios";
// import { useRouter } from "next/router";
// let apiurl = "https://apifromashu.herokuapp.com/api/searchcakes?q=";
// export default function Search() {
//   var router = useRouter();
//   return (
//     <>
//       Search Page
//       <h1>Showing results for {router.query.q}</h1>
//     </>
//   );
// }

// export function getServerSideProps(context) {
//   console.log("context: ", context);
//   var response = await axios({
//     method: "get",
//     url: apiurl + `${context.router.query.q}`,
//   });
//   return {
//     props: {
//       searchresults: response.data.data,
//     },
//   };
// }

// import axios from "axios";
// import { useRouter } from "next/router";
// import { useState, useEffect } from "react";

// export default function Search() {
//   const router = useRouter();
//   const [result, setResult] = useState([]);

//   useEffect(async () => {
//     let response = await axios({
//       method: "get",
//       url:
//         process.env.NEXT_PUBLIC_BASE_URL +
//         `/searchcakes?q=${router.query.cake}`,
//     });
//     setResult(response.data.data);
//   });

//   return (
//     <>
//       {result.length &&
//         result.map((cake) => {
//           return (
//             <div key={cake._id}>
//               <p>Name: {cake.name}</p>
//               <p>Description: {cake.description}</p>
//               <p>Price: {cake.price}</p>
//             </div>
//           );
//         })}
//     </>
//   );
// }
