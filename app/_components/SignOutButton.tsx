import { HiOutlineLogin } from "react-icons/hi";
import { signOutAction } from "../_lib/actions";

function SignOutButton() {
  return (
    <form action={signOutAction}>
      <button className="flex ">
        <HiOutlineLogin />

        <span>Sign out</span>
      </button>
    </form>
  );
}

export default SignOutButton;
