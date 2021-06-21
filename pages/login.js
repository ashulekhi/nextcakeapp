import styles from "./login.module.css";
import axios from "axios";
import router, { useRouter } from "next/router";

export default function Login() {
  // // api
  // let login = ()=>{
  //   useRouter.push("/")
  // }
  var user = {};
  var login = () => {
    axios({
      method: "post",
      url: process.env.NEXT_PUBLIC_API_BASE_URL + "/login",
      data: user,
    }).then(
      (response) => {
        console.log("response from login api", response);
        if (response.data.token) {
          router.push("/");
        }
      },
      (error) => {
        console.log("error from login api", error);
      }
    );
  };
  return (
    <>
      <input
        onChange={(e) => {
          user.email = e.target.value;
        }}
        className="form-control"
        placeholder="Email"
      />
      <input
        onChange={(e) => {
          user.password = e.target.value;
        }}
        className="form-control"
        type="password"
        placeholder="Password"
      />
      <button className="btn btn-primary" onClick={login}>
        Login
      </button>
    </>
  );
}
