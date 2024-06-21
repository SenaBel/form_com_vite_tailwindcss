import { InputField } from "../../Components";
import { IFieldConfig, IFormData } from "../../Interfaces";
import useForm from "./useForm";

interface IFormProps {
  fields: IFieldConfig[];
  onSubmit: (formData: IFormData) => void;
  submitLabel?: string;
}

export const Form = ({
  fields,
  onSubmit,
  submitLabel = "Submit",
}: IFormProps) => {
  const { formData, errors, handleChange, handleSubmit } = useForm(
    fields,
    onSubmit
  );

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      {fields.map((field) => (
        <div key={field.id}>
          <InputField
            key={field.id}
            type={field.type}
            label={field.label}
            placeholder={field.placeholder}
            value={formData[field.id]}
            onChange={(value) => handleChange(field.id, value)}
            isRequired={field.isRequired}
            error={errors[field.id]}
          />
        </div>
      ))}

      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-800 font-medium text-sm py-2 px-4 rounded-lg text-white"
      >
        {submitLabel}
      </button>
    </form>
  );
};
