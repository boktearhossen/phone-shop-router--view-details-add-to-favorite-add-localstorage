import { useEffect, useState } from "react";
import { useLoaderData, useParams } from "react-router-dom";
import PhoneCard from "./PhoneCard";


const Phone = () => {
    const phones = useLoaderData()
    // const x = useParams()
    // const id = .id  ->or
    const {id}  = useParams()


    const [phone, setPhone] = useState({})
    useEffect(() => {
        const findPhone = phones.find(phone => phone.id === id)
        setPhone(findPhone)
        // console.log(findPhone);

    },[id, phones])


    return (
        <div>
            <PhoneCard phone={phone}></PhoneCard>
        </div>
    );
};

export default Phone;