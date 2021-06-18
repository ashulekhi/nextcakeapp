import Image from "next/image"
import Carousel1 from "../public/carousel1.jpg"
import Carousel2 from "../public/carousel2.png"

export default function Carousel(){
    return (
        <div id="carouselExampleControls" class="carousel slide" data-ride="carousel">
  <div class="carousel-inner">
    <div class="carousel-item active">
      <Image src={Carousel1}></Image>
    </div>
    <div class="carousel-item">
      <Image src={Carousel2}></Image>
    </div>
    <div class="carousel-item">
    <Image height="300" width="300" src="/carousel3.png"></Image>
     
    </div>
  </div>
  <a class="carousel-control-prev" href="#carouselExampleControls" role="button" data-slide="prev">
    <span class="carousel-control-prev-icon" aria-hidden="true"></span>
    <span class="sr-only">Previous</span>
  </a>
  <a class="carousel-control-next" href="#carouselExampleControls" role="button" data-slide="next">
    <span class="carousel-control-next-icon" aria-hidden="true"></span>
    <span class="sr-only">Next</span>
  </a>
</div>
    )
}