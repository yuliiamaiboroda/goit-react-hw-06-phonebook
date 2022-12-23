import {Ul, Li, Span, Button} from "./Contacts.styled"
import { FaAddressCard } from "react-icons/fa";
import { deleteContact } from "redux/contactsSlice/contactsSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import Filter from "components/Filter/Filter";
import Notification from "components/Notification/Notification";

export default function Contacts () {
const dispatch = useDispatch();
const contacsList = useSelector(state=>state.contacts);
const filterByName = useSelector(state=>state.filter);

const filterContacts = ()=>{
    if(filterByName){return contacsList.filter(el=>el.name.toLowerCase().includes(filterByName))}
    else{return contacsList}
}
const handleDelete = e =>{
    const id= e.currentTarget.id;
    dispatch(deleteContact(id))
};



    return(<>  
     {contacsList.length===0?
        <Notification message="There is no contact yet"/>:(  <>  
      <Filter />
            <Ul>
                {filterContacts().map(el=>(
                    <Li key={el.id}>
                        <FaAddressCard/>
                        {el.name}: <Span>{el.number}</Span>
                    <Button type="button" id={el.id} onClick={handleDelete}>Delete</Button></Li>
                ))}
            </Ul>
        </>)}
            
        </>
        )

    
};
