import { Label, Input, Button } from "./Phonebook.styled";
import { addContact } from "redux/contactsSlice/contactsSlice";
import {  useDispatch } from "react-redux";
import { nanoid } from 'nanoid';

export default function Phonebook (){
const dispatch = useDispatch();


const SubmitForm = event =>{ 
        event.preventDefault();
        const name = event.currentTarget.elements.name.value;
        const number = event.currentTarget.elements.number.value;
        dispatch(addContact({name, number, id: nanoid()}));
        event.currentTarget.reset();
      }

return ( <form onSubmit={SubmitForm}> 
       <Label>
        Name
            <Input
            type="text"
            name="name"
            placeholder="Name"
            pattern="^[a-zA-Zа-яА-Я]+(([' -][a-zA-Zа-яА-Я ])?[a-zA-Zа-яА-Я]*)*$"
            title="Name may contain only letters, apostrophe, dash and spaces. For example Adrian, Jacob Mercer, Charles de Batz de Castelmore d'Artagnan"
            required
            />
        </Label> 
        <Label>
        Number
            <Input
            type="tel"
            name="number"
            placeholder="Telephone"
            pattern="\+?\d{1,4}?[-.\s]?\(?\d{1,3}?\)?[-.\s]?\d{1,4}[-.\s]?\d{1,4}[-.\s]?\d{1,9}"
            title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
            required
            />
        </Label> 
        <Button type="submit" >Add to contact</Button>
</form>)
     
    }
