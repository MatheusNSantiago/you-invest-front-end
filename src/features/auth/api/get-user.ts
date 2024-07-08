import { useUser } from "@/stores/user";

export const getUser = () => {
  const user = useUser()
  return user
};
