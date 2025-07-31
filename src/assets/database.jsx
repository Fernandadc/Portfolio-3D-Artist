import React from "react";

const work = {
  workOne: 0,
  workTwo: 1,
  workThree: 2,
  workFour: 3,
  workFive: 4,
  workSix: 5,
  workSeven: 6,
  workEight: 7,
};
// Database seguindo padrão SQL com index de acesso para cada item
const db = {
  works: [
    {
      name: "Work name 1",
      description:
        "Work description",
      image: "/src/assets/images/tempimg.png",
      alt:"project 1",
    },
    {
      name: "Work name 2",
      description:
        "Work description",
      image: "/src/assets/images/tempimg2.png",
      alt:"project 2",
    },
    {
      name: "Work name 3",
      description:
        "Work description",
      image: "/src/assets/images/tempimg3.png",
      alt:"project 3",
    },
    {
      name: "Work name 4",
      description:
        "Work description",
      image: "/src/assets/images/download.jpeg",
      alt:"project 4",
    },
    {
      name: "Work name 5",
      description:
        "Work description",
      image: "/src/assets/images/download.jpeg",
      alt:"project 5",
    },
    {
      name: "Work name 6",
      description:
        "Work description",
      image: "/src/assets/images/download.jpeg",
      alt:"project 6",
    },
    {
      name: "Work name 7",
      description:
        "Work description",
      image: "/src/assets/images/download.jpeg",
      alt:"project 7",
    },
    {
      name: "Work name 8",
      description:
        "Work description",
      image: "/src/assets/images/download.jpeg",
      alt:"project 8",
    },
    
  ],
};

export default db;
export { work };
