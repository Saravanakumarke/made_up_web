import React, { useState } from 'react'
import styles from './style.module.css'
import axios from 'axios'


export default function Address({parentCallback}) {

    const[id,setId] = useState(1);
    const[data,setData] = useState([]);

const adddata = (idd) =>
{
    console.log(id)
    axios.get(`https://jsonplaceholder.typicode.com/posts/${idd}`)
    .then((getData) =>
    {
        console.log(getData.data.title);

            setData(oldArray => [...oldArray, getData.data.title])
        
  
        console.log(data)
    })
    setId(id+1);
    console.log(parentCallback)
    parentCallback(id);
}

const Editdata = ( val, index) =>
{
    console.log(val,index)

}
    return (
        <div>
           <div className={styles.formContainer}>
            <div className={styles.formHeading}>Address</div>
            <div className={styles.buttonWrapper} onClick={() =>adddata(id)}>
                    <button className={styles.button} >ADD NEW ADDRESS</button>
            </div>
            {data.map((x,i) =>
        {
            return(
                <div className = {styles.add_data}>
                <li>{x}</li>
                <button className = {styles.editbtn} onClick = {() =>Editdata(x,i)}>Edit</button>
                </div>
            )})}
           </div>
        </div>
    )
}
