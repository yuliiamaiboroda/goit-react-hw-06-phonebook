import {Label, Input} from "./Filter.styled"
import { setFilter } from "redux/filterSlice/filterSlice";
import { useDispatch } from "react-redux";

export default function Filter (){
  const dispatch = useDispatch()
   const onChangeInput = (e) => {
        const value = e.currentTarget.value.toLowerCase();
        dispatch(setFilter(value));
      }
    return ( <Label>
        Find contacts by name
        <Input
        type="text"
        name="Filter"
        onChange={onChangeInput}
        />
        </Label>)
    
}
