"use client";
import Image from "next/image";
import { useState } from "react";
import Swal from "sweetalert2";

export default function Home() {
  const [email, setEmail] = useState("");
  const [option1, setoprtion1] = useState("");
  const [option2, setoption2] = useState("");
  const [option3, setoprtion3] = useState("");
  const [option4, setoprtion4] = useState("");
  const [option5, setoprtion5] = useState("");
  const [option6, setoprtion6] = useState("");
  const [option7, setoprtion7] = useState("");
  const [option8, setoprtion8] = useState("");
  const [gift, setGift] = useState("");

  const [click, setClick] = useState("");
  const [loading, setloading] = useState(true);




  const handleSubmit = async (e: { preventDefault: () => void; }) => {
    e.preventDefault();

    try {

      setloading(false)
      const response = await fetch(
        "https://v1.nocodeapi.com/ajayveer/google_sheets/PnowqtRzWBWzAzlX?tabId=Sheet1",
        {
          method: "POST",
          headers: {
            "Content-type": "application/json",
          },
          body: JSON.stringify([
            [
              email,
              option1 ? "Yes" : "No",
              option2 ? "Yes" : "No",
              option3 ? "Yes" : "No",
              option4 ? "Yes" : "No",
              option5 ? "Yes" : "No",
              option6 ? "Yes" : "No",
              option7 ? "Yes" : "No",
              option8 ? "Yes" : "No",
              new Date().toLocaleString(),
            ],
          ]),
        }
      );

      const allOption = [option1,
        option2,
        option3,
        option4,
        option5,
        option6,
        option7,
        option8]

      const countYes = allOption.filter(option => option != "").length;
      const countNo = allOption.filter(option => option === "No").length;


      if (countYes >= 7) {
        Swal.fire({
          title: 'Hurray, thanks for your response! ',
          text: `Your score is ${countYes} out of 8!! You are a Blended Champ! Keep Up the Good Work in 2024. Take Every Chance to Encourage Your Teammates to Participate in the Blended Behaviours.`,
          icon: 'success', 
          confirmButtonText: 'Okay',
        });
      }
      else if (countYes > 4) {
        Swal.fire({
          title: 'Hurray, thanks for your response! ',
          
          text: ` Your score is ${countYes} out of 8!! You are a Blended Proficient! You are Doing Good with Scope for Improvement in 2024. So, Take Some Resolutions & Become a Blended Expert with the Right Behaviours.`,
          icon: 'success', 
          confirmButtonText: 'Okay',
        });
      } else if (countYes <= 4) {
        Swal.fire({
          title: 'Hurray, thanks for your response! ',
          text: `Your score is ${countYes} out of 8!!  You are a Blended Newbie! Commit to the Blended Behaviours in 2024 & Take Your Work Experience to the Next Level with our Tenets.`,
          icon: 'success', 
          confirmButtonText: 'Okay',
        });

      }
      setGift("Thank you! Click here to avail your gift.")
      setClick("/image/gif.gif");



      setloading(true); 
      setEmail("");

    } catch (error) {
      console.error("Error submitting data:", error);
      setloading(false);
    }
  };




  return (
    <>
      <div className="bg-gradient-to-r from-red-300 to-orange-100 flex flex-col items-center justify-center h-auto py-20">
        <h1 className="text-[2rem] py-2 font-semibold"> Future of Work</h1>
        <form
        action="/"
          id="myForm"
          onSubmit={handleSubmit}
          className="bg-white p-8 rounded shadow-md md:w-[50%] "
        >
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"A"}
              name="option1"
              className="mr-2"
              onChange={(e) => {
                setoprtion1(e.target.value);
              }}
            />
            I am a connection champ - stirring up 1:1 conversations like a pro. 
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"B"}
              name="option2"
              onChange={(e) => {
                setoption2(e.target.value);
              }}
              className="mr-2"
            />
            I am a cheer captain - sprinkling words of appreciation like confetti. 
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"C"}
              name="option3"
              onChange={(e) => {
                setoprtion3(e.target.value);
              }}
              className="mr-2"
            />
            I am a work wizard - devotedly seeing tasks from start to finish.
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"D"}
              name="option4"
              onChange={(e) => {
                setoprtion4(e.target.value);
              }}
              className="mr-2"
            />
            I am a team player - working towards the teams overall success.
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"E"}
              name="option5"
              onChange={(e) => {
                setoprtion5(e.target.value);
              }}
              className="mr-2"
            />
            I am a communication chef - blending sync & async tools for best impact.
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"C"}
              name="option6"
              onChange={(e) => {
                setoprtion6(e.target.value);
              }}
              className="mr-2"
            />
            I am a document ninja - building a knowledge repository for stakeholders.
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"D"}
              name="option7"
              onChange={(e) => {
                setoprtion7(e.target.value);
              }}
              className="mr-2"
            />
            I am a camera chief - making all meetings humane and inclusive.
          </label>
          <label className="block mb-4">
            <input
              type="checkbox"
              value={"E"}
              name="option8"
              onChange={(e) => {
                setoprtion8(e.target.value);
              }}
              className="mr-2"
            />
            I am a lifetime learner - using the right tools & resources to upskill myself.
          </label>
          <label className="block mb-4">
            <span className="block mb-1">Email:</span>
            <input
              type="email"
              name="email"
              placeholder="Email Address"
              className="w-full p-2 border border-gray-300 rounded"
              onChange={(e) => {
                setEmail(e.target.value);
              }}
              required
            />
          </label>
          <input
            type="submit"
            
            value={loading ? "Submit " : "Loading..."}
            onSubmit={handleSubmit}
            className="bg-green-500 text-white p-2 w-full rounded cursor-pointer"
          />
         {/* <h1 className="pt-3">{click}</h1> */}
         <img  className="flex justify-center mx-auto cursor-pointer" src={click} />
<h1 className="pt-4 flex justify-center capitalize text-orange-500 font-bold">{gift}</h1>

        </form>
      </div>
    </>
  );
}
