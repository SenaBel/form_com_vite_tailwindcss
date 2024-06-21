import { IFieldConfig, IFormData, IValidateForm } from "../Interfaces";

export const ValidateForm = (
  data: IFormData,
  fields: IFieldConfig[]
): IValidateForm => {
  const errors: IValidateForm = {};

  console.log("field", fields);

  fields.forEach((field) => {
    if (field.isRequired && !data[field.id]) {
      errors[field.id] = `O campo ${field.label} é obrigatório.`;
    }
  });

  return errors;
};
