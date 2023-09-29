import PhoneCart from "./PhoneCart";
import {PropTypes} from 'prop-types'

const Phones = ({phones}) => {
    
    return (
        <div className="mt-7">
             <h1 className="text-3xl font-bold text-center"> All categoris phones</h1>
             <div className="grid grid-cols-3 gap-10 mt-10">
             {
                phones?.map(phone => <PhoneCart key={phone.id} phone={phone}></PhoneCart>)
             }
             </div>
        </div>
    );
};


export default Phones;