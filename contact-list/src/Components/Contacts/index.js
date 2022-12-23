import {useState, useEffect} from 'react'
import "./styles.css"
import List from './List'
import Form from './Form'

function Contacts() {
    const [contacts, setContacts] = useState([
        {
            fullname: "Umut",
            phone_number: "123123"
        },
        {
            fullname: "Ali",
            phone_number: "45645"
        },
        {
            fullname: "Said",
            phone_number: "7897989"
        }
    ]);

    useEffect(()=>{
        console.log(contacts)
    }, [contacts])
  return (
    <div id="container">
      <List contacts={contacts} />
      <Form addContact = {setContacts} contacts={contacts}/>
    </div>
  )
}

export default Contacts
