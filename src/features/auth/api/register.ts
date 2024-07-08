import { ApplicationError } from "@/core/errors";
import { Either, failure, success } from "@/lib/result";
import {
  AuthErrorCodes,
  UserCredential,
  createUserWithEmailAndPassword,
  getAuth,
} from "firebase/auth";
import { doc, setDoc } from "firebase/firestore";
import { getFirestore } from "firebase/firestore";
import { User } from "../types";

type RegisterWithEmailAndPasswordResult = Either<
  CreateUserSuccess,
  EmailJaCadastrado | AuthError
>;

type CreateUserSuccess = {
  user: User;
};

export class EmailJaCadastrado {
  public email: string;

  constructor(email: string) {
    this.email = `O email ${email} já foi cadastrado.`;
  }
}

export class AuthError implements ApplicationError {
  message: string;
  error?: any;
  constructor(error: string) {
    this.message = "Um erro inesperado de autentificação ocorreu";
    this.error = error;
  }
}

export async function registerWithEmailAndPassword(
  email: string,
  senha: string,
): Promise<RegisterWithEmailAndPasswordResult> {
  let credential: UserCredential;

  try {
    let auth = getAuth()
    credential = await createUserWithEmailAndPassword(auth, email, senha);
  } catch (error: any) {
    if (error.code === AuthErrorCodes.EMAIL_EXISTS) {
      return failure(new EmailJaCadastrado(email));
    }

    return failure(new AuthError(error));
  }

  // coloca ele na collection Users
  const db = getFirestore();
  const newUser: User = {
    uid: credential.user.uid,
    email,
    senha,
    artigos: [],
    nome: "",
    preferencias: {
      bio: "",
      usarBulletPoints: false,
      conteudo: "",
      categorias: [],
    },
    ehPrimeiraVez: true,
  };
  await setDoc(doc(db, "users", newUser.uid), newUser);

  return success({ user: newUser });
}
