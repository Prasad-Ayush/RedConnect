import React from "react";

const About = () => {
  return (
    <div className="px-44 pb-10 dark:text-white-900 dark:bg-gray-900">
      {/* Using dark:bg-gray-900 for a slightly dark background */}
      <p className="text-4xl font-bold text-left underline mt-4 dark:text-white-900">
        About RedConnect
      </p>
      <br />
      <p className="text-xl dark:text-white-900">
        RedConnect works as a platform for users to register as blood to either
        request/donate blood and blood banks to manage their stocks by managing
        the pending donations and request along with scheduling blood camps and
        managing them. The system will authenticate the user/bank using their
        username(mobile) and password to further perform other actions.
      </p>
      <br />
      <p className="text-xl dark:text-white-900">
        It includes managing and tracking blood donations, connecting donors
        with recipients, and providing real-time information on blood shortages
        and needs. The platform will include both a user-facing interface and a
        blood bank’s interface for managing the data.
      </p>

      <p className="text-4xl font-bold text-left underline mt-4 mb-3 dark:text-white-900">
        What Happens to Donated Blood?
      </p>
      <div className="text-2xl text-left dark:text-white-900">
        Your blood journeys through many steps and tests that ensure our blood
        supply is as safe as possible and helps as many people as possible.
      </div>

      <p className="text-2xl font-bold text-left mt-4 mb-2 dark:text-white-900">
        1) Step One - DONATION
      </p>
      <div className="text-xl text-left dark:text-white-900">
        You arrive for your blood donation appointment. Health history and mini
        physical are completed. For a whole blood donation, about 1 pint of
        blood is collected; several small test tubes of blood are also collected
        for testing. Your donation, test tubes, and your donor record are labeled
        with an identical bar code label. Your donation is kept on ice before
        being taken to a Red Cross center for processing; the test tubes go to
        the lab.
      </div>

      <p className="text-2xl font-bold text-left mt-4 mb-2 dark:text-white-900">
        2) Step Two : PROCESSING
      </p>
      <div className="text-xl text-left dark:text-white-900">
        At our processing center, information about your donation is scanned
        into a computer database. Most whole blood donations are spun in
        centrifuges to separate it into transfusable components: red cells,
        platelets, and plasma. Plasma may be processed into components such as
        cryoprecipitate, which helps control the risk of bleeding by helping
        blood to clot. Red cells and platelets are leuko-reduced, which means
        your white cells are removed in order to reduce the possibility of the
        recipient having a reaction to the transfusion. Each component is
        packaged as a “unit,” a standardized amount that doctors will use when
        transfusing a patient.
      </div>

      <p className="text-2xl font-bold text-left mt-4 mb-2 dark:text-white-900">
        3) Step Three : TESTING
      </p>
      <div className="text-xl text-left dark:text-white-900">
        In parallel with Step 2, your test tubes arrive at a testing laboratory.
        A dozen tests are performed, to establish the blood type and test for
        infectious diseases. Test results are transferred electronically to the
        processing center within 24 hours. If a test result is positive, your
        donation will be discarded and you will be notified (our test results
        are confidential and are only shared with the donor, except as may be
        required by law).
      </div>

      <p className="text-2xl font-bold text-left mt-4 mb-2 dark:text-white-900">
        4) Step Four : STORAGE
      </p>
      <div className="text-xl text-left dark:text-white-900">
        When test results are received, units suitable for transfusion are
        labeled and stored. Red cells are stored in refrigerators at 6ºC for up
        to 42 days. Platelets are stored at room temperature in agitators for up
        to five days. Plasma and cryo are frozen and stored in freezers for up
        to one year.
      </div>

      <p className="text-2xl font-bold text-left mt-4 mb-2 dark:text-white-900">
        5) Step Five : DISTRIBUTION
      </p>
      <div className="text-xl text-left dark:text-white-900">
        Blood is available to be shipped to hospitals 24 hours a day, 7 days a
        week. Hospitals typically keep some blood units on their shelves, but
        may call for more at any time, such as in case of large-scale
        emergencies.
      </div>

      <p className="text-2xl font-bold text-left mt-4 mb-2 dark:text-white-900">
        6) Step Six : TRANSFUSION
      </p>
      <div className="text-xl text-left dark:text-white-900">
        An ill or injured patient arrives at a hospital or treatment center.
        Physicians determine whether the patient requires a transfusion and, if
        so, which type. Blood transfusions are given to patients in a wide range
        of circumstances, including serious injuries (such as in a car crash),
        surgeries, childbirth, anemia, blood disorders, cancer treatments, and
        many others. A patient suffering from an iron deficiency or anemia may
        receive red blood cells to increase their hemoglobin and iron levels,
        improving the amount of oxygen in the body. Patients who are unable to
        make enough platelets, due to illness or chemotherapy, may receive
        platelet transfusions to stay healthy. Plasma transfusions are used for
        patients with liver failure, severe infections, and serious burns.
        <div>
          <br />
        </div>
      </div>
    </div>
  );
};

export default About;
