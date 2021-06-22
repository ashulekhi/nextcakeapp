import axios from "axios";
import router from "next/router";
export default function Signup(props) {
  var user = {};
  var register = () => {
    console.log(
      ">>>>>>>>>>>>>",
      process.env.NEXT_PUBLIC_API_BASE_URL + "/register"
    );
    axios({
      method: "post",
      url: process.env.NEXT_PUBLIC_API_BASE_URL + "/register",
      data: user,
    }).then(
      (response) => {
        console.log("response from signup api", response);
        router.push("/login", { state: response.data.token });
      },
      (error) => {
        console.log("error from signup api", error);
      }
    );
  };
  return (
    <>
      <input
        onChange={(e) => {
          user.name = e.target.value;
        }}
        className="form-control"
        placeholder="Name"
      />
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
      <button className="btn btn-primary" onClick={register}>
        Register
      </button>
    </>
  );
}

// export async function getStaticProps(){

//     console.log("Page generated at each request not only one time " , process.env)
//     return {
//         props:{
//            base_url:process.env.BASE_URL
//         }
//     }
// }
