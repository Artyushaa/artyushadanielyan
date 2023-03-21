const Item = ({ content }: any) => {
  return (
    <select className="contacts-container__item">
      <option>{content}</option>
    </select>
  )
}

export default Item