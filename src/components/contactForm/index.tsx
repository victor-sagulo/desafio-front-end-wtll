import { useContacts } from "../../providers/contactsProvider";
import Input from "../input";
import * as yup from "yup";
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import { IContact } from "../../@types";

const schema = yup.object().shape({
  name: yup
    .string()
    .max(30, "Seu nome deve conter um máximo de 30 caracteres")
    .required("Campo obrigatório"),
  subject: yup
    .string()
    .max(50, "Seu assunto deve conter um máximo de 50 caracteres")
    .required("Campo obrigatório"),
  email: yup
    .string()
    .email("O email deve seguir o seguinte formato email@email.com")
    .max(20, "Seu email deve conter um máximo de 20 caracteres")
    .required("Campo obrigatório"),
  message: yup
    .string()
    .max(200, "Sua mensagem deve conter um máximo de 200 caracteres")
    .required("Campo obrigatório"),
});

const ContactForm = () => {
  const { createNewContact } = useContacts();

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<IContact>({ resolver: yupResolver(schema) });

  return (
    <form onSubmit={handleSubmit(createNewContact)}>
      <Input
        placeholder="Nome"
        type="text"
        error={errors.name?.message}
        {...register("name")}
      />
      <Input
        placeholder="Email"
        type="text"
        error={errors.email?.message}
        {...register("email")}
      />
      <Input
        placeholder="Assunto"
        type="text"
        error={errors.subject?.message}
        {...register("subject")}
      />
      <Input
        placeholder="Mensagem"
        type="text"
        error={errors.message?.message}
        {...register("message")}
      />
      <button type="submit">Enviar</button>
    </form>
  );
};

export default ContactForm;
