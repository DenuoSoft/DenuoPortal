const Radiobutton = ({ label, value, checked, onChange }) => {
  <label className="flex items-center">
    <input
      type="radio"
      value={value}
      checked={checked}
      onChange={onChange}
      className="mr-2 cursor-pointer"
    />
    {label}
  </label>
}

export default Radiobutton;
