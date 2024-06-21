import { FormEvent, useState } from "react";
import { IUser } from "../../Interfaces";
import FormService from "../../Services/Form/FormService";
import { ValidateForm } from "../../Utils/ValidateForm";

function useForm() {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [agree, setAgree] = useState(false);

  const [errors, setErrors] = useState<IUser | null>(null);

  const [response, setResponse] = useState<IUser | null>(null);

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();

    setErrors(null);

    const data: IUser = {
      name,
      email,
      agree,
    };

    const validateErrors = ValidateForm(data);

    if (Object.keys(validateErrors).length > 0) {
      setErrors(validateErrors);
      return;
    }

    console.log("Tudo ok", data);

    if (data) {
      FormService.addForm(data)
        .then((result) => {
          setName("");
          setEmail("");
          setAgree(false);
          console.log("Dados enviados com sucesso", result);
          setResponse(result);
        })
        .catch((error) => {
          setName("");
          setEmail("");
          setAgree(false);
          console.log("houve um erro", error);
        });
    }
  };
  return {
    errors,
    response,
    name,
    setName,
    email,
    setEmail,
    agree,
    setAgree,
    handleSubmit,
  };
}

export default useForm;
