import Link from "next/link";

const SignUpForm = () => {
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

                <div className="mt-5">
                    <label for="" className="block mb-2">Confirm Password <span className="text-[red]">*</span></label>
                    <input id="name" className="my-[10px]" type="text" placeholder="Enter Password" />
                    <p class="text-xs italic">Confirm your password. Make sure it’s at least 8 characters.</p>
                </div>
                
                <div className="w-100 mt-5 mb-5">
                    <a
                    id="send_message"
                    href="#"
                    className="metaportal_fn_button full"
                    >
                    <span>Sign Up</span>
                    </a>
                </div>
                <p className="text-center">Already have an account? <a href="/signin" className="text-[blue]">Sign In</a></p>
            </form>
            </div>
  );
};
export default SignUpForm;
