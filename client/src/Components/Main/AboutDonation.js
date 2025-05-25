import React from "react";
import g1 from "../../assets/donation/g1.jpg";
import g2 from "../../assets/donation/g2.jpg";
import g3 from "../../assets/donation/g3.jpg";
import g4 from "../../assets/donation/g4.jpg";

const AboutDonation = () => {
  const data = [
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
    <section className="grid place-items-center dark:text-white-900">
      <div className="container">
        <div className="text-center">
          <br />
          <h2 className="text-3xl font-bold">Donation Process</h2>
          <code>
            The donation process from the time you arrive center until the time
            you leave
          </code>
          <br />
          <br />
        </div>
        <div className="grid grid-cols-4 place-items-center">
          {data.map((e, i) => (
            <div className="border-metal shadow-md rounded-lg overflow-hidden max-w-[90%] select-none">
              <img src={e.img} draggable={false} width="100%" alt="" />
              <div className="m-4">
                <h1 className="font-bold text-lg text-midnight">
                  {i + 1} - {e.title}
                </h1>
                <p className="text-justify">
                  {e.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutDonation;
