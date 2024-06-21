export interface IFieldConfig {
  id: string;
  type: "text" | "email" | "password" | "checkbox";
  label: string;
  placeholder?: string;
  initialValue: string | boolean;
  isRequired: boolean;
}
