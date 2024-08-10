import React from "react";
import "./Testimonials.css";
import p1 from "../../../assets/p1.jpg";
import p2 from "../../../assets/p2.jpg";
import p3 from "../../../assets/p3.jpg";
import p4 from "../../../assets/p4.jpg";

export default function Testimonials() {
  return (
    <div>
      <h2>Reviews</h2>
      <div className="main">
        <div className="testimonial">
          <div className="photo">
            <img className="t-img" src={p1} alt="" />
          </div>
          <div className="rating">
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star_half</span>
          </div>
          <div className="review">
            <p>Lorem ipsum dolor sit amet consectetur.</p>
          </div>
        </div>
        <div className="testimonial">
          <div className="photo"></div>
          <img className="t-img" src={p2} alt="" />
          <div className="rating">
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
          </div>
          <div className="review">
            <p>
              Lorem ipsum dolor sit amet consectetur, adipisicing elit.
              Voluptas!
            </p>
          </div>
        </div>
        <div className="testimonial">
          <div className="photo"></div>
          <img className="t-img" src={p3} alt="" />
          <div className="rating">
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
          </div>
          <div className="review">
            <p>Lorem ipsum dolor sit.</p>
          </div>
        </div>
        <div className="testimonial">
          <div className="photo"></div>
          <img className="t-img" src={p4} alt="" />
          <div className="rating">
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star</span>
            <span class="material-symbols-outlined">star_half</span>
          </div>
          <div className="review">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipisicing elit. Saepe
              libero deserunt nesciunt vel culpa. Officiis.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
