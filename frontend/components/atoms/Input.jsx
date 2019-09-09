import Label from './Label';

export default ({label, inputType, formType, required}) => {
  return (
    <>
      <Label label={label} />
      <div className="control">
        <input className="input" name={label} type={inputType} dataFormrunType={formType} dataFormrunRequired={required} required={required} />
      </div>
    </>
  )
}
