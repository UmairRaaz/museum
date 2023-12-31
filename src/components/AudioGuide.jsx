import React from "react";
import { HiOutlineBuildingLibrary } from "react-icons/hi2";
import AudioCards from "./AudioCards";
import { GiHeartWings } from "react-icons/gi";
import { IoBookSharp } from "react-icons/io5";
const AudioGuide = () => {
  return (
    <div id="guide" className="min-h-screen w-full mt-32">
      <h1 className="text-4xl font-extrabold mt-10">Audio Guide</h1>
      <div className="mt-10">
        <AudioCards
          image="/buildingUpdated.jpg"
          icon={<HiOutlineBuildingLibrary size={20} />}
          heading={"building"}
          text={"Acropolis of Athens"}
          desc={
            "The Acropolis has been traditionally considered a national and cultural symbol of Greece, but in 1995 a cultural heritage organisation filed a lawsuit in an attempt to have the whole monument classified."
          }
          year={"YEAR: 5 BC"}
          date={"TIME: 10 MIN"}
        />
        <AudioCards
          image="/bowl.jpg"
          icon={<GiHeartWings size={20} />}
          heading={"sculpture"}
          text={"Athenian Vase Painting"}
          desc={
            "In Greek pottery, simple shapes and design motifs convey formalised ideas of harmony and purity. Many mythological and religious symbols appear on pots, usually with particular emphasis on the heads, feet."
          }
          year={"YEAR: 530 BC"}
          date={"TIME: 22 MIN"}
        />
        <AudioCards
          image="/philophy.jpg"
          icon={<IoBookSharp size={20} />}
          heading={"philophy"}
          text={"Socrates: Life & Philosophy"}
          desc={
            "Socrates appeared as a character in a number of literary works, ranging from humorous satires, to tragedies and historical romances. The character most closely resembling the Socrates of ancient Athens."
          }
          year={"YEAR: 470–399 BC"}
          date={"TIME: 15 MIN"}
        />
      </div>
    </div>
  );
};

export default AudioGuide;
