import { IUser, IValidateForm } from "../Interfaces";

export const ValidateForm = (data: IUser) => {
  const errors: IValidateForm = {};

  if (!data.name) {
    errors["name"] = "O nome é obrigatório.";
  }

  if (!data.email) {
    errors["email"] = "O email é obrigatório.";
  }

  if (!data.agree) {
    errors["agree"] = "Você precisa concordar com os termos";
  }

  return errors;
};
