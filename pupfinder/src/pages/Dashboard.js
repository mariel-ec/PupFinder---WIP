import TinderCard from "react-tinder-card";
import { useState } from "react";
import ChatContainer from "../components/ChatContainer";


const Dashboard = () => {
  const characters = [
    {
      name: "Lucky",
      url: "https://i.imgur.com/vjWuXdo.jpeg",
    },
    {
      name: "Patches",
      url: "https://i.imgur.com/vjWuXdo.jpeg",
    },
    {
      name: "Juneau",
      url: "https://i.imgur.com/vjWuXdo.jpeg",
    },
    {
      name: "Rocky",
      url: "https://i.imgur.com/vjWuXdo.jpeg",
    },
    {
      name: "Bruiser",
      url: "https://i.imgur.com/vjWuXdo.jpeg",
    },
  ];

  const [lastDirection, setLastDirection] = useState();

  const swiped = (direction, nameToDelete) => {
    console.log("removing: " + nameToDelete);
    setLastDirection(direction);
  };

  const outOfFrame = (name) => {
    console.log(name + " left the screen!");
  };

  return (
    <div className="dashboard">
      <ChatContainer />
      <div className="swipe-container">
        <div className="card-container">
          {characters.map((character) => (
            <TinderCard
              className="swipe"
              key={character.name}
              onSwipe={(dir) => swiped(dir, character.name)}
              onCardLeftScreen={() => outOfFrame(character.name)}
            >
              <div
                style={{ backgroundImage: "url(" + character.url + ")" }}
                className="card"
              >
                <h3>{character.name}</h3>
              </div>
            </TinderCard>
          ))}

          <div className="swipe-info">
            {lastDirection ? <p>You swiped {lastDirection}</p> : <p />}
          </div>
        </div>
      </div>
    </div>
  );
};

// const characters = [
//   {
//     name: "Richard Hendricks",
//     url:""
//   },
//   {
//     name: "Erlich Backman",
//     url:""
//   },
//   {
//     name: "Monica Hall",
//     url:""
//   },
//   {
//     name: "Jared Dunn",
//     url: ""
//   },
//   {
//     name: "Dinesh Chugtai",
//     url: ""
//   }
// ]

export default Dashboard;
