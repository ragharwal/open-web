import React from "react";
import ParticlesBg from "particles-bg";
import CarouselIndex from "./CarouselIndex";

// let config = {
//   type: "circle",
//   color: "#a0cc3a",
//   radius: [5, 100],
// };

const ContainerHome = () => {
  return (
    <div>
      <CarouselIndex />
      <ParticlesBg color="#a0cc3a" type="colors" bg={true} />
    </div>
  );
};

export default ContainerHome;
