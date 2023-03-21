import Item from "./ContactsItem"

const Contacts = () => {
  return (
    <div className="contacts-container">
      <Item content='+374 (11) 53 88 88' />
      <Item content='Курс валют' />
      <Item content='Русский . AMD' />
    </div>
  )
}



export default Contacts