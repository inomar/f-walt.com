export default ({label}) => (
  <span className="help is-danger" data-formrun-show-if-error={label}>
    The {label} you entered is incorrect.
  </span>
)