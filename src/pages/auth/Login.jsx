import { Button } from '@material-tailwind/react';
import { signInWithEmailAndPassword } from 'firebase/auth';
import { onValue, ref } from 'firebase/database';
import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import InputComponent from '../../components/ui/InputGroup/InputComponent';
import AuthContext from '../../context/AuthContext';
import { auth, db } from '../../services/firebase/firebaseServise';
const initFormValue = {
  email: '',
  password: '',
};

const Login = ({ to, toText, heading }) => {
  const [formValue, setFormValue] = useState({ ...initFormValue });
  const { setCurrentUser, setLoading, loading } = useContext(AuthContext);
  const navigate = useNavigate();
  const { email, password } = formValue;
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      setLoading(true);
      const signinUser = await signInWithEmailAndPassword(
        auth,
        email,
        password
      );
      setCurrentUser(signinUser.user);

      const userRef = ref(db, `users/${signinUser.user.uid}`);
      onValue(userRef, (snapshot) => {
        const userData = snapshot.val();

        if (userData.role === 'customer') {
          navigate('/shop');
        } else if (userData.role === 'artisan') {
          navigate('/dashboard/artisan/profile');
        } else if (userData.role === 'admin') {
          navigate('/dashboard/admin');
        } else {
          navigate('/auth/login');
        }

        setLoading(false);
      });
    } catch (err) {
      console.error(err);
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          {heading}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Email */}
          <InputComponent
            htmlFor={'email'}
            name={'email'}
            text={'Email'}
            placeholder={'john@gmail.com'}
            value={email}
            onChange={handleChange}
          />

          {/* Password */}
          <InputComponent
            htmlFor={'password'}
            name={'password'}
            text={'Password'}
            placeholder={'*****'}
            type="password"
            value={password}
            onChange={handleChange}
          />

          {/* Submit */}
          <Button
            type="submit"
            className="rounded-full w-full font-semibold cursor-pointer bg-zinc-900 text-white"
          >
            {loading ? 'Login...' : 'Log in'}
          </Button>
          <p className="text-black">
            I don't have an account{' '}
            <NavLink to={to} className={'text-blue-400 underline'}>
              {toText}
            </NavLink>{' '}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
