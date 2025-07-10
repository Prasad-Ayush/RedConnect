import React, { useState, useEffect } from "react";
import axios from "../Api";

const Camps = () => {
    const [data, setData] = useState([]);
    useEffect(() => {
        axios.get("/camps").then((res) => {
            setData(res.data);
        }).catch((err) => {
            alert("Something went wrong")
        });
    }, []);

    return (
        <div className="mt-5 ml-5">
            <table className='rounded-md text-center'>
                <thead>
                    <th className='border p-4 px-4  dark:text-white-900'>Date</th>
                    <th className='border p-4 px-4  dark:text-white-900'>Camp Name</th>
                    <th className='border p-4 px-4  dark:text-white-900'>Address</th>
                    <th className='border p-4 px-4  dark:text-white-900'>State</th>
                    <th className='border p-4 px-4  dark:text-white-900'>District</th>
                    <th className='border p-4 px-4  dark:text-white-900'>Organizer</th>
                    <th className='border p-4 px-4  dark:text-white-900'>Contact</th>
                    <th className='border p-4 px-4  dark:text-white-900'>Time</th>
                </thead>
                <tbody>
                    {data.map((e, i) =>
                        <tr key={e._id}>
                            <td className='border p-3  dark:text-white-900'>{new Date(e.date).toLocaleDateString('en-GB')}</td>
                            <td className='border p-3  dark:text-white-900'>{e.name}</td>
                            <td className='border p-3  dark:text-white-900'>{e.address}</td>
                            <td className='border p-3  dark:text-white-900'>{e.state}</td>
                            <td className='border p-3  dark:text-white-900'>{e.district}</td>
                            <td className='border p-3  dark:text-white-900'>{e.organizer}</td>
                            <td className='border p-3  dark:text-white-900'>{e.contact}</td>
                            <td className='border p-3  dark:text-white-900'><code>{e.startTime + "-" + e.endTime}</code></td>
                        </tr>
                    )}
                </tbody>
            </table>
        </div>
    )
}

export default Camps;