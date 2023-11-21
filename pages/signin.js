
import Layout from "../src/layout/Layout";
import SignInForm from "../src/components/SignInForm";

const Index = () => {
  return (
    <Layout pageTitle={"Home"}>
      <section id="signin" className="">
        <div className="container py-[150px]">

          <div className="text-center">
            <h3
              className="fn__maintitle mb-3"
              data-text="Sign In"
              data-align="center"
            >
              Sign In
            </h3>
            <p>Sign in to your account to continue.</p>
          
          </div>

          <SignInForm />
        </div>
      </section>
     
    </Layout>
  );
};
export default Index;
