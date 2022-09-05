import {
  Dispatch,
  InputHTMLAttributes,
  ReactNode,
  SetStateAction,
} from "react";
import { UseFormRegister } from "react-hook-form";

export interface IContactProviderData {
  contactList: IContact[];
  newContact?: IContact;
  name: string;
  email: string;
  subject: string;
  message: string;
  createNewContact: (contact: IContact) => void;
  setName: Dispatch<SetStateAction<string>>;
  setEmail: Dispatch<SetStateAction<string>>;
  setSubject: Dispatch<SetStateAction<string>>;
  setMessage: Dispatch<SetStateAction<string>>;
}

export interface IContact {
  name: string;
  email: string;
  subject: string;
  message: string;
}

export interface IContactProviderProps {
  children: ReactNode;
}

export interface InputProps extends InputHTMLAttributes<HTMLInputElement> {
  label?: string;
  error: any;
  name: keyof IContact;
}
