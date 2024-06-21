import { useState } from "react";
import { IFieldConfig, IFormData } from "../../Interfaces";
import { ValidateForm } from "../../Utils/ValidateForm";

interface IUseForm {
  formData: IFormData;
  errors: { [key: string]: string };
  response: IFormData | null;
  handleChange: (id: string, value: string | boolean) => void;
  handleSubmit: (e: React.FormEvent<HTMLFormElement>) => void;
}

const useForm = (
  fields: IFieldConfig[],
  onSubmit: (formData: IFormData) => void
): IUseForm => {
  const initialFormData: IFormData = {};
  fields.forEach((field) => {
    initialFormData[field.id] = field.initialValue;
  });

  const [formData, setFormData] = useState<IFormData>(initialFormData);
  const [errors, setErrors] = useState<{ [key: string]: string }>({});
  const [response, setResponse] = useState<IFormData | null>(null);

  const handleChange = (id: string, value: string | boolean) => {
    setFormData((prevFormData) => ({
      ...prevFormData,
      [id]: value,
    }));
  };

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    onSubmit(formData);
    const validateErrors = ValidateForm(formData, fields);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    } else {
      setErrors({});
    }

    onSubmit(formData);
  };

  return {
    formData,
    errors,
    response,
    handleChange,
    handleSubmit,
  };
};

export default useForm;
