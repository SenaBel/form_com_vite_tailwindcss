import { IUser } from "../../Interfaces";

const API_URL = "https://jsonplaceholder.typicode.com/posts";

class FormService {
  async addForm(data: IUser) {
    if (!data) return;
    console.log("data no service", data);
    try {
      const response = await fetch(API_URL, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(data),
      });

      if (!response.ok) {
        ("");
        throw new Error(`Erro: ${response.status}`);
      }
      e;
      const result = await response.json();
      return result;
    } catch (error) {
      console.error("Erro ao enviar o formulário:", error);
      throw error;
    }
  }
}

export default new FormService();
