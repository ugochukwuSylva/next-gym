import { FcGoogle } from "react-icons/fc";
import { signInAction } from "../_lib/actions";

function SignInButton() {
  return (
    <form action={signInAction}>
      <button className="flex justify-between items-center text-xl gap-6  p-4 rounded-sm bg-stone-200  border border-transparent hover:border-4 hover:border-blue-600 ">
        <FcGoogle size={32} />
        <span>Sign in with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
