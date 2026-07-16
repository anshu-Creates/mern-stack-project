import React from "react";
import Header from "../Header";
import Reviewcard from "./Reviewcard";

const Reviews = () => {
  return (
    <div className="px-5 py-10">
      <Header h1="CUSTOMER" h2="REVIEWS" />
      <div>
        <Reviewcard
          dp="/src/assets/r1.png"
          name="Manish Rawat"
          msg="The service was not only fast and efficient, but also very affordable.I was expecting a huge bill, but the technician surprised me with a reasonable price."
          addr="Hiranandani(Meadows), Thane"
        />
        <Reviewcard
          dp="/src/assets/r2.png"
          name="Natarajan M S"
          msg="I truly recommend Balaji to anyone in need of any repair services. They truly deliver on their promise of fast, reliable and affordable service."
          addr="Majiwada, Thane"
        />
        <Reviewcard
          dp="/src/assets/r3.png"
          name="Yashika Aretiya"
          msg="Service is excellent and its on time. It's very nice. He arrived promptly, diagnosed the issue quickly and had my AC up and running in no time."
          addr="Mulund, Thane"
        />
        <Reviewcard
          dp="/src/assets/r4.png"
          name="Amit Mishra"
          msg="Value for money, nice service and on time service provider. I have used Balaji Services twice now and both time's they provide excellent services. Technician is very knowledgeable and friendly."
          addr="Vasantvihar, Thane"
        />

        <Reviewcard
          dp="/src/assets/r5.png"
          name="Ganesh Taur"
          msg="I was impressed with the fast response time from Balaji Services. The service was prompt, professionals and affordable. I highly recommend Balaji Services"
          addr="Kolsheth, Thane"
        />
      </div>
    </div>
  );
};

export default Reviews;
