import React, { useState, useEffect, useContext } from "react";
import data from "../../assets/data.json";
import { useParams } from "react-router-dom";
import axios from "../Api";
import AuthContext from "../context/AuthContext";

const EditProfile = () => {
  const { handle } = useParams();
  const { getLoggedIn, user } = useContext(AuthContext);
  const [name, setName] = useState("");
  const [mail, setMail] = useState("");
  const [password, setPassword] = useState("");
  const [phone, setPhone] = useState("");
  const [state, setState] = useState(0);
  const [district, setDistrict] = useState(0);
  const [address, setAddress] = useState("");
  const [edit, setEdit] = useState(true);
  const [hospital, setHospital] = useState("");
  const [contactPerson, setContactPerson] = useState("");
  const [website, setWebsite] = useState("");
  const [category, setCategory] = useState("Private");

  useEffect(() => {
    setName(user.name);
    setHospital(user.hospital);
    setContactPerson(user.contactPerson);
    setCategory(user.category);
    setWebsite(user.website);
    setMail(user.email);
    setPhone(user.phone);
    data.states.forEach((e, i) => {
      if (e.state === user.state) {
        setState(i);
        setDistrict(e.districts.indexOf(user.district));
      }
    });
    setPassword("Lorem ipsum dolor sit amet consectetur adipisicing elit.");
    setAddress(user.address);
  }, []);

  const update = async () => {
    const formData = {
      name,
      email: mail,
      phone,
      state: data.states[state].state,
      district: data.states[state].districts[district],
      address,
      hospital,
      contactPerson,
      website,
      category,
    };

    try {
      await axios.put(`/bank`, formData);
      setEdit(!edit);
      await getLoggedIn();
      alert("Blood Bank updated successfully");
    } catch (error) {
      alert("Something went wrong");
    }
  };

  return (
    <div>
      <section className="flex justify-center items-center">
        <form className="space-y-2" onSubmit={(e) => { e.preventDefault(); update(); }}>
          <table className="w-full" cellPadding={15}>
            <tr>
              <td>
                <label className="font-semibold leading-8 dark:text-white-900">
                  Blood Bank Name:<font color="red">*</font>
                </label>
                <input className="w-full p-3 text-md border border-silver rounded" type="text" required disabled={edit} value={name} onChange={(e) => setName(e.target.value)} />
              </td>
              <td>
                <label className="font-semibold leading-8 dark:text-white-900">
                  Parent Hospital Name:<font color="red">*</font>
                </label>
                <input className="w-full p-3 text-md border border-silver rounded" type="text" required disabled={edit} value={hospital} onChange={(e) => setHospital(e.target.value)} />
              </td>
              <td>
                <label className="font-semibold leading-8 dark:text-white-900">Contact Person:</label>
                <input className="w-full p-3 text-md border border-silver rounded" type="text" value={contactPerson} disabled={edit} onChange={(e) => setContactPerson(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label className="font-semibold leading-8 dark:text-white-900">
                  Category:<font color="red">*</font>
                </label>
                <select name="category" value={category} disabled={edit} onChange={(e) => setCategory(e.target.value)} className="w-full p-3 text-md border border-silver rounded">
                  <option value="Private">Private</option>
                  <option value="Govt.">Govt.</option>
                  <option value="Red Cross">Red Cross</option>
                </select>
              </td>
              <td>
                <label className="font-semibold leading-8 dark:text-white-900">
                  Mobile:<font color="red">*</font>
                </label>
                <input className="w-full p-3 text-md border border-silver rounded" type="number" required disabled={edit} value={phone} onChange={(e) => setPhone(e.target.value)} />
              </td>
              <td>
                <label className="font-semibold leading-8 dark:text-white-900">
                  Password:<font color="red">*</font>
                </label>
                <input className="w-full p-3 text-md border border-silver rounded" type="password" required disabled value={password} onChange={(e) => setPassword(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label className="font-semibold leading-8 dark:text-white-900">Email:</label>
                <input className="w-full p-3 text-md border border-silver rounded" type="email" disabled={edit} value={mail} onChange={(e) => setMail(e.target.value)} />
              </td>
              <td>
                <label className="font-semibold leading-8 dark:text-white-900">Website:</label>
                <input className="w-full p-3 text-md border border-silver rounded" type="text" value={website} disabled={edit} onChange={(e) => setWebsite(e.target.value)} />
              </td>
            </tr>
            <tr>
              <td>
                <label className="font-semibold leading-8 dark:text-white-900">
                  State:<font color="red">*</font>
                </label>
                <select name="state" disabled={edit} onChange={(e) => { setState(e.target.value); setDistrict(0); }} className="w-full p-3 text-md border border-silver rounded">
                  {data.states.map((e, i) => (
                    <option value={i} selected={state === i}>{e.state}</option>
                  ))}
                </select>
              </td>
              <td>
                <label className="font-semibold leading-8 dark:text-white-900">
                  District:<font color="red">*</font>
                </label>
                <select name="district" disabled={edit} onChange={(e) => setDistrict(e.target.value)} className="w-full p-3 text-md border border-silver rounded">
                  {data.states[state].districts.map((e, i) => (
                    <option value={i} selected={district === i}>{e}</option>
                  ))}
                </select>
              </td>
            </tr>
            <tr>
              <td colSpan={3}>
                <label className="font-semibold leading-8 dark:text-white-900">Address:</label>
                <input className="w-full p-3 text-md border border-silver rounded" type="text" disabled={edit} value={address} onChange={(e) => setAddress(e.target.value)} />
              </td>
            </tr>
          </table>
          <button type="button" onClick={() => setEdit(!edit)} className="w-44 mt-8 px-7 py-2 bg-blood text-white hover:bg-gray-darkest text-white-900 rounded-full text-lg font-bold">
            {edit ? "Edit" : "Cancel"}
          </button>
          <button type="submit" className={`w-44 mt-8 px-7 py-2 bg-blood text-white hover:bg-gray-darkest text-white-900 rounded-full text-lg font-bold ${edit && "hidden"}`}>
            Save
          </button>
        </form>
      </section>
      <br />
      <br />
    </div>
  );
};

export default EditProfile;
