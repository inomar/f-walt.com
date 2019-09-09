import Input from '../atoms/Input';
import TextArea from '../atoms/TextArea';
import Check from '../atoms/Check';
import FormError from '../atoms/FormError';

export default ({label, inputType, formType, required}) => {
  return (
    <div className="field">
      {
        ["text", "email"].includes(inputType)&& <Input label={label} inputType={inputType} formType={formType} required={required} /> 
      }
      {
        inputType === "textarea" && <TextArea label={label} required={required} />
      }
      {
        inputType === "checkbox" && <Check label={label} required={required} />
      }
      {
        required && <FormError label={label} required={required} />
      }
    </div>
  )
}