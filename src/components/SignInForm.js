import Link from "next/link";

const SignInForm = () => {
  return (
        <div className="fn_cs_contact_form lg:w-[50%] sm:w-[100%] mx-auto">
            <form
                action="/"
                method="post"
                className="contact_form"
                id="contact_form"
                autoComplete="off"
            >

                <div className="mt-5">
                    <label for="" className="block mb-2">Email <span className="text-[red]">*</span></label>
                    <input id="email" className="my-[10px]" type="text" placeholder="Enter Email" />
                    <p class="text-xs italic">We’ll never share your email.</p>
                </div>

                <div className="mt-5">
                    <label for="" className="block mb-2">Password <span className="text-[red]">*</span></label>
                    <input id="name" className="my-[10px]" type="text" placeholder="Enter Password" />
                    <p class="text-xs italic">Enter a combination of at least six numbers, letters, and punctuation.</p>
                </div>
                    <Link href="#"><p className="text-right mt-3">Forgot Password?</p></Link>
                <div className="w-100 mt-5 mb-5">
                    <a
                    id="send_message"
                    href="#"
                    className="metaportal_fn_button full"
                    >
                    <span>Sign Up</span>
                    </a>
                </div>
                <p className="text-center">Don&apos;t have an account? <a href="/signup" className="text-[blue]">Sign Up</a></p>
            </form>
            </div>
  );
};
export default SignInForm;
