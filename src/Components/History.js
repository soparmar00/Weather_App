import React, {useEffect} from 'react'
import { useSelector, useDispatch } from 'react-redux';
import { cityhistory } from '../Thunk/thunk';


const History = () => {

    const dispatch = useDispatch()
    const result = useSelector((state) => state.Users.fetchCityHistory)
    const name = useSelector((state) => state.Users.name)

    useEffect(() => {
        dispatch(cityhistory({name}))
    }, [dispatch])

    const resultFields = result.length > 0 ? Object.keys(result[0]) : [];

    return (
        <div>
        <center>
        <h1>City History</h1>
        <h5>
        {!result[0] ? (
        "History not avilable"):
        (
        <table>
        <tbody>
        <tr>
        <th>Time</th>
        <th>ID</th>
        <th>User Name</th>
        <td>Date</td>
        <td>City</td>
        <td>City Record</td>
        <td>__v</td>
        </tr>
            {result.map((record) => (
        <tr key={record.id}>
            {resultFields.map((field) => (
        <td key={`${record.id}-${field}`}>{record[field]}</td>
           ))}                       
        </tr>
            ))}
        </tbody>
        </table>
            )}
        </h5>
        </center>
        </div>
    )
}

export default History;