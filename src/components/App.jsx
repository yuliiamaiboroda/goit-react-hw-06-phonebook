import Phonebook from "./Phonebook/Phonebook";
import Contacts from "./Contacts/Contacts";
import Section from "./Section/Section";
import { Provider } from "react-redux";
import { persistor, store } from "redux/store";
import { PersistGate } from 'redux-persist/integration/react'


export function  App (){

   return (
    <Provider store={store}>
      <PersistGate loading={null} persistor={persistor}>
    <Section title="Phonebook">
      <Phonebook/>
    </Section>
    <Section title="Contacts">
    <Contacts />
    </Section>
    </PersistGate>
    </Provider>
  )
};
