import Link from "next/link";
const SignUpButton = () => {
  return (
    <Link href="/signup">
      <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded">
        Sign up
      </button>
    </Link>
  );
};
export default SignUpButton;
