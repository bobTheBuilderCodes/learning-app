
import { useSession } from "next-auth/react";


const useLoggedInUserInfo = () => {
  const session = useSession();
  const accessToken = session.data?.user.accessToken;
  const userRole = session.data?.user.userRole;
  const loggedInUser = session.data?.user.loggedInUser;

  return { accessToken, userRole, loggedInUser };
};

export default useLoggedInUserInfo;
