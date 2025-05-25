import React from "react";
import bg from "../../assets/bg.webp";
import bg2 from "../../assets/bg2.jpg";
import donationFact from "../../assets/donationFact.webp";
import g1 from "../../assets/donation/g1.jpg";
import g2 from "../../assets/donation/g2.jpg";
import g3 from "../../assets/donation/g3.jpg";
import g4 from "../../assets/donation/g4.jpg";
const Home = () => {
  const temp = [
    { blood: "A+", donate: "A+ AB+", recieve: "A+ A- O+ O-" },
    { blood: "O+", donate: "O+ A+ B+ AB+", recieve: "O+ O-" },
    { blood: "B+", donate: "B+ AB+", recieve: "B+ B- O+ O-" },
    { blood: "AB+", donate: "AB+", recieve: "Everyone" },
    { blood: "A-", donate: "A+ A- AB+ AB-", recieve: "A- O-" },
    { blood: "O-", donate: "Everyone", recieve: "O-" },
    { blood: "B-", donate: "B+ B- AB+ AB-", recieve: "B- O-" },
    { blood: "AB-", donate: "AB+ AB-", recieve: "AB- A- B- O-" },
  ];
  const temp2 = [
    {
      title: "Registration",
      description:
        "We’ll sign you in and go over basic eligibility. You’ll be asked to show ID, such as your driver’s license. Your address needs to be complete and the place where you will receive your mail 8 weeks from donation.",
      img: g1,
    },
    {
      title: "Health History",
      description:
        "You’ll answer a few questions about your health history and places you’ve traveled, during a private and confidential interview. You’ll tell us about any prescription that may be in your system.",
      img: g2,
    },
    {
      title: "Your Donation",
      description:
        "We’ll cleanse an area on your arm and insert a brand new sterile needle for the blood draw. A whole blood donation takes about 8-10 minutes, during which you’ll be seated comfortably or lying down.",
      img: g3,
    },
    {
      title: "Refreshment and Recovery",
      description:
        "After donating blood, you’ll have a snack and something to drink in the refreshment area. You’ll leave after 10-15 minutes and continue your normal routine. Enjoy the feeling of accomplishment knowing you are helping to save lives.",
      img: g4,
    },
  ];

  return (
    <div className="dark:text-white-900">
      <img draggable={false} src={bg} alt="" />
      <div className="grid grid-cols-2 place-items-center mt-6 px-52">
        <div>
          <img draggable={false} src={bg2} width="100%" alt="" />
        </div>
        <div>
          <p className="text-center font-bold text-4xl text-gray-dark dark:text-white-900">
            Be the reason <br />
            for <br />
            someone's heartbeat
          </p>
        </div>
      </div>
      <h1 className="font-bold text-center text-blood my-4 text-lg underline">
        Learn About Donation
      </h1>
      <div className="flex px-20">
        <div>
          <img draggable={false} src={donationFact} width="90%" alt="" />
          <p className="text-center">
            <code>
              After donating blood, the body works to replenish the blood loss.
              This stimulates the production of new blood cells and in turn,
              helps in maintaining good health.
            </code>
          </p>
        </div>
        <div>
          <table className="w-max" cellPadding={5}>
            <tr>
              <td
                colSpan={3}
                className="border bg-blood text-white-900 text-center font-bold"
              >
                Compatible Blood Type Donors
              </td>
            </tr>
            <tr>
              <th className="border w-max text-lg">Blood Type</th>
              <th className="border w-max text-lg">Donate Blood To</th>
              <th className="border w-max text-lg">Receive Blood From</th>
            </tr>
            {temp.map((e) => {
              return (
                <tr>
                  <td className="border w-max text-lg">{e.blood}</td>
                  <td className="border w-max text-lg">{e.donate}</td>
                  <td className="border w-max text-lg">{e.recieve}</td>
                </tr>
              );
            })}
          </table>
        </div>
      </div>
      <p className="text-xl underline font-bold text-blood text-center mt-5 mb-5">
        Blood Donation Process
      </p>
      <div className="grid grid-cols-2 place-items-center">
        {temp2.map((e, i) => (
          <div className="border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none grid grid-cols-2">
            <div>
              <img src={e.img} draggable={false} width="100%" alt="" />
            </div>
            <div className="m-4">
              <h1 className="font-bold text-lg text-midnight dark:text-white-900">
                {i + 1} - {e.title}
              </h1>
              <p className="text-justify">{e.description}</p>
            </div>
          </div>
        ))}
      </div>
      <br />
      <div className="w-full bg-blood text-white-900 h-max text-sm text-center font-bold">
        <code>
          {" "}
          RedConnect © All Rights Reserved - {new Date().getFullYear()}{" "}
        </code>
      </div>
    </div>
  );
};

export default Home;