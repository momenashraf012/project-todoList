import Button from "../components/ui/Button";
import Input from "../components/ui/Input";

const Login = () => {
  return (
    <div className="  max-w-md mx-auto">
      <h1 className="mb-4 text-3xl font-semibold text-center">
        Login to get access!
      </h1>
      <div className="space-y-3">
        <Input />
        <Input />
        <Button fullWidth>Login</Button>
      </div>
    </div>
  );
};

export default Login;
