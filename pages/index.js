import axios from "axios";
import Carousel from "../components/Carousel";
import Cake from "./Cake";

export default function Home(props) {
  return (
    <>
      <Carousel />
      <div className="row">
        {props.data?.map((each, index) => {
          return <Cake data={each} key={index} />;
        })}
      </div>
    </>
  );
}

export async function getStaticProps() {
  var response = await axios({
    method: "get",
    url: process.env.BASE_URL + "/allcakes",
  });

  console.log(
    ">>>>>>>>>>>>>>>>11111111111111111111111111111111>>>>>>>>>>>>>>>>>>>>>>>>>",
    response
  );

  return {
    props: {
      data: response.data.data || [],
    },
  };
}
