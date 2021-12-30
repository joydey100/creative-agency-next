import { useRouter } from "next/router";
import { useSelector } from "react-redux";

export const WithProtected = (Component) => {
  return function WithProtected(props) {
    const auth = useSelector((state) => state.auth);
    const email = auth?.user?.email;
    const router = useRouter();

    if (!email) {
      router.replace("/login");
      return <h2 className="text-center mt-5 pt-5"> Loading... </h2>;
    }
    return <Component {...props} />;
  };
};
