import React from "react";
import { Fade } from "react-slideshow-image";
import "react-slideshow-image/dist/styles.css";
import "./styles.css";

const fadeImages = [
  "https://images.unsplash.com/photo-1509721434272-b79147e0e708?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://images.unsplash.com/photo-1506710507565-203b9f24669b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1536&q=80",
  "https://images.unsplash.com/photo-1536987333706-fc9adfb10d91?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1500&q=80",
  "https://thumbs.dreamstime.com/z/autumn-nature-landscape-colorful-forest-autumn-nature-landscape-colorful-forest-morning-sunlight-131400332.jpg",
  "https://wallpapercave.com/wp/wp2551972.jpg"
];

export default function App() {
  return (
    <div className="slide-container">
      <Fade>
        <div className="each-fade">
          <img src={fadeImages[0]} />
          <div class="centered">Image 1</div>
        </div>
        <div className="each-fade">
          <img src={fadeImages[1]} />
          <div class="centered">Image 2</div>
        </div>
        <div className="each-fade">
          <img src={fadeImages[2]} />
          <div class="centered">Image 3</div>
        </div>
        <div className="each-fade">
          <img src={fadeImages[3]} />
          <div class="centered">Image 4</div>
        </div>
        <div className="each-fade">
          <img src={fadeImages[4]} />
          <div class="centered">Image 5</div>
        </div>
      </Fade>
    </div>
  );
}
