import Label from './Label';

export default ({label, required}) => (
  <>
    <Label label={label} />
    <div className="control">
      <textarea className="textarea" name={label} data-formrun-required={required} required={required} />
    </div>
  </>
)