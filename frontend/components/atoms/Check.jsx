export default ({label, inputType, formType, required}) => {
  return (
    <label className="checkbox">
      <input type="checkbox" name={label} data-formrun-required={required} required={required} /> {label}
    </label>
  )
}
