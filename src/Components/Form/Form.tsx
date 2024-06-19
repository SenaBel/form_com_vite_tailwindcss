import { FormEvent, useState } from "react";
import { IUser } from "../../Interfaces";
import FormService from "../../Services/Form/FormService";
import { ValidateForm } from "../../Utils/ValidateForm";

function Form() {
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

  return (
    <form className="flex flex-col gap-3" onSubmit={handleSubmit}>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="name">
          Nome:
        </label>
        <input
          type="text"
          placeholder="Digite o seu nome"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
        {errors?.name && (
          <small className="text-xs text-red-500 mt-1">{errors?.name}</small>
        )}
      </div>
      <div className="flex flex-col">
        <label className="text-sm" htmlFor="email">
          E-mail:
        </label>
        <input
          type="text"
          placeholder="Digite o seu e-mail"
          className="rounded-lg py-2 px-2 text-sm placeholder:text-sm placeholder:text-stone-400"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        {errors?.email && (
          <small className="text-xs text-red-500 mt-1">{errors?.email}</small>
        )}
      </div>
      <div className="flex flex-col">
        <a href="#" className="text-xs underline mb-2">
          Leia os termos
        </a>
        <div className="flex gap-2 items-center">
          <input
            type="checkbox"
            checked={agree}
            onChange={(e) => setAgree(e.target.checked)}
          />
          <label className="text-sm" htmlFor="agree">
            Concordo com os termos:
          </label>
        </div>
        {errors?.agree && (
          <small className="text-xs text-red-500 mt-1">{errors?.agree}</small>
        )}
      </div>
      <button
        type="submit"
        className="bg-slate-600 hover:bg-slate-500 font-medium text-sm py-2 px-4 rounded-lg text-white"
      >
        Cadastrar
      </button>

      {response && (
        <div className="mt-4 p-4 bg-gray-100 rounded-lg">
          <h3 className="text-sm font-medium">Resposta da API:</h3>
          <pre className="text-xs">{JSON.stringify(response, null, 2)}</pre>
        </div>
      )}
    </form>
  );
}

export default Form;
