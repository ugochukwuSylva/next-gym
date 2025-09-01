import { FcGoogle } from "react-icons/fc";
import { signInAction } from "../_lib/actions";
import { useTransition } from "react";
import Spinner from "./Spinner";

function SignInButton() {
  const [isPending, startTransition] = useTransition();

  function handleSignIn() {
    startTransition(() => signInAction());
  }

  if (isPending) return <Spinner status="signing in" />;

  return (
    <form action={handleSignIn}>
      <button className="flex justify-between items-center text-xl gap-6  p-4 rounded-sm bg-stone-200  border border-transparent hover:border-4 hover:border-blue-600 transition-all duration-100">
        <FcGoogle size={32} />
        <span>Sign in with Google</span>
      </button>
    </form>
  );
}

export default SignInButton;
