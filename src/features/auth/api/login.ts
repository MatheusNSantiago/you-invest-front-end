import { doc, getDoc, getFirestore } from "firebase/firestore";
import {
  UserCredential,
  getAuth,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { Either, failure, success } from "@/lib/result";
import { AuthError } from "./register";
import { User } from "../types";

type LoginWithEmailAndPasswordResult = Either<
  LoginWithEmailPasswordSuccess,
  EmailJaCadastrado | AuthError
>;

type LoginWithEmailPasswordSuccess = {
  user: User;
};

export class EmailJaCadastrado {
  public email: string;

  constructor(email: string) {
    this.email = `O email ${email} já foi cadastrado.`;
  }
}

export async function loginWithEmailAndPassword(
  email: string,
  senha: string,
): Promise<LoginWithEmailAndPasswordResult> {
  let credential: UserCredential;
  try {
    let auth = getAuth();
    credential = await signInWithEmailAndPassword(auth, email, senha);
  } catch (error: any) {
    // if (error.code === AuthErrorCodes.) {
    //   return failure(new EmailJaCadastrado(email));
    // }

    return failure(new AuthError(error));
  }

  // pegar o resto das informações do User
  const db = getFirestore();
  const docRef = doc(db, "users", credential.user.uid);
  const docSnap = await getDoc(docRef);

  const user = docSnap.data() as User;

  return success({ user });
}
