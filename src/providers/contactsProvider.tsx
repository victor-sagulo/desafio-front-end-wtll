import { createContext, useCallback, useContext, useState } from "react";
import { toast } from "react-toastify";
import {
  IContactProviderData,
  IContact,
  IContactProviderProps,
} from "../@types";

const ContactContext = createContext<IContactProviderData>(
  {} as IContactProviderData
);

const useContacts = () => {
  const context = useContext(ContactContext);

  return context;
};

const ContactProvider = ({ children }: IContactProviderProps) => {
  const [contactList, setContactList] = useState<IContact[]>([]);
  const [name, setName] = useState<string>("");
  const [email, setEmail] = useState("");
  const [subject, setSubject] = useState("");
  const [message, setMessage] = useState("");

  const createNewContact = (contact: IContact) => {
    setContactList([...contactList, contact]);

    toast.success("Fomulário submetido com sucesso!", {
      position: "top-right",
      autoClose: 5000,
      hideProgressBar: false,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true,
      progress: undefined,
    });
  };
  return (
    <ContactContext.Provider
      value={{
        contactList,
        createNewContact,
        name,
        email,
        subject,
        message,
        setName,
        setEmail,
        setMessage,
        setSubject,
      }}
    >
      {children}
    </ContactContext.Provider>
  );
};

export { ContactProvider, useContacts };
