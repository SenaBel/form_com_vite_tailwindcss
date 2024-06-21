import { IFormData } from "../../Interfaces";
import FormService from "../../Services/Form/FormService";

function useHome() {
  const handleFormSubmit = (formData: IFormData) => {
    FormService.addForm(formData)
      .then((result) => {
        console.log("Dados enviados com sucesso (Home)", result);
      })
      .catch((error) => {
        console.log("Houve um erro (Home)", error);
      });
  };

  const formFields = [
    {
      id: "name",
      type: "text" as const,
      label: "Nome",
      placeholder: "Digite o seu nome",
      initialValue: "",
      isRequired: true,
    },
    {
      id: "email",
      type: "text" as const,
      label: "E-mail",
      placeholder: "Digite o seu e-mail",
      initialValue: "",
      isRequired: true,
    },

    {
      id: "agree",
      type: "checkbox" as const,
      label: "Concordo com os termos",
      initialValue: false,
      isRequired: true,
    },
  ];
  return {
    handleFormSubmit,
    formFields,
  };
}

export default useHome;
