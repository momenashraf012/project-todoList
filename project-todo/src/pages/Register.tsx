
import Input from '../components/ui/Input'
import Button from '../components/ui/Button'

const Register = () => {
  return (
    <div className="  max-w-md mx-auto">
      <h1 className="mb-4 text-3xl font-semibold text-center">
        Register to get access!
      </h1>
      <div className="space-y-3">
        <Input />
        <Input />
        <Input />
        <Button fullWidth>Login</Button>
      </div>
    </div>
  )
}

export default Register
