
import Layout from "../src/layout/Layout";
import SignUpForm from "../src/components/SignUpForm";

const Index = () => {
  return (
    <Layout pageTitle={"Home"}>
      <section id="signin" className="">
        <div className="container py-[150px]">

          <div className="text-center">
            <h3
              className="fn__maintitle mb-3"
              data-text="Sign Up"
              data-align="center"
            >
              Sign Up
            </h3>
            <p>Create a new account to get started.</p>
          
          </div>

          <SignUpForm />
        </div>
      </section>
     
    </Layout>
  );
};
export default Index;
