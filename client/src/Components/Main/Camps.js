import React, { useState, useEffect } from 'react'
import data from "../../assets/data.json";
import axios from "../Api";

const Camps = () => {

    const [state, setState] = useState(0);
    const [district, setDistrict] = useState(0);
    const [date, setDate] = useState(new Date().toISOString().split("T")[0]);
    const [filtered, setFiltered] = useState([]);

    useEffect(() => {
        axios.get(`/camps/allCamps/${data.states[state].state}/${data.states[state].districts[district]}/${date}`).then((r) => setFiltered(r.data)).catch((e) => alert("Something went wrong"));
    }, [state, district, date])

    return (
        <div className='px-7'>
            <table cellPadding={7}>
                <tr>
                    <td>
                        <label for="state" className="font-semibold  leading-8 dark:text-white-900">State:<font color="red">*</font></label>
                        <select name="state" id="state" onChange={(e) => { setState(e.target.value); setDistrict(0); }} className="w-full p-3 text-md border border-silver rounded">
                            {
                                data.states.map((e, i) => <option value={i} selected={state === i}>{e.state}</option>)
                            }
                        </select>
                    </td>
                    <td>
                        <label for="district" className="font-semibold  leading-8 dark:text-white-900">District:<font color="red">*</font></label>
                        <select name="district" id="district" onChange={(e) => { setDistrict(e.target.value); }} className="w-full p-3 text-md border border-silver rounded">
                            {
                                data.states[state].districts.map((e, i) => <option value={i} selected={district === i}>{e}</option>)
                            }
                        </select>
                    </td>
                    <td>
                        <label for="date" className="font-semibold  leading-8 dark:text-white-900">Date:<font color="red">*</font></label>
                        <input type="date" id ="date" value={date} className="w-full p-3 text-md border border-silver rounded"
                            min={new Date().toISOString().split("T")[0]}
                            onChange={(e) => setDate(e.target.value)}
                        />
                    </td>
                </tr>
            </table>
            <br />
            <table className='w-full text-center'>
                <thead>
                    <th className="p-3 text-md border border-silver rounded dark:text-white-900">Date</th>
                    <th className="p-3 text-md border border-silver rounded dark:text-white-900">Camp Name</th>
                    <th className="p-3 text-md border border-silver rounded dark:text-white-900">Address</th>
                    <th className="p-3 text-md border border-silver rounded dark:text-white-900">State</th>
                    <th className="p-3 text-md border border-silver rounded dark:text-white-900">District</th>
                    <th className="p-3 text-md border border-silver rounded dark:text-white-900">Contact</th>
                    <th className="p-3 text-md border border-silver rounded dark:text-white-900">Conducted By</th>
                    <th className="p-3 text-md border border-silver rounded dark:text-white-900">Organized By</th>
                    <th className="p-3 text-md border border-silver rounded dark:text-white-900">Time</th>
                </thead>
                <tbody>
                    {
                        filtered.map((e) =>
                            <tr>
                                <td className="p-3 text-md border border-silver rounded dark:text-white-900">{new Date(e.date).toLocaleDateString('en-GB')}</td>
                                <td className="p-3 text-md border border-silver rounded dark:text-white-900">{e.name}</td>
                                <td className="p-3 text-md border border-silver rounded dark:text-white-900">{e.address}</td>
                                <td className="p-3 text-md border border-silver rounded dark:text-white-900">{e.state}</td>
                                <td className="p-3 text-md border border-silver rounded dark:text-white-900">{e.district}</td>
                                <td className="p-3 text-md border border-silver rounded dark:text-white-900">{e.contact}</td>
                                <td className="p-3 text-md border border-silver rounded dark:text-white-900">{e.bankId.name}</td>
                                <td className="p-3 text-md border border-silver rounded dark:text-white-900">{e.organizer}</td>
                                <td className="p-3 text-md border border-silver rounded dark:text-white-900"><code>{e.startTime}-{e.endTime}</code></td>
                            </tr>
                        )
                    }
                </tbody>
            </table>
        </div>
    )
}

export default Camps