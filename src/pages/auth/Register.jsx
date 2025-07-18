import { Button } from '@material-tailwind/react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useContext, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import InputComponent from '../../components/ui/InputGroup/InputComponent';
import AuthContext from '../../context/AuthContext';
import { auth, db } from '../../services/firebase/firebaseServise';
const initFormValue = {
  name: '',
  email: '',
  password: '',
  profileImg: '',
};
const Register = ({ to, toText, heading }) => {
  const [formValue, setFormValue] = useState({ ...initFormValue });
  const { loading, setLoading, setCurrentUser } = useContext(AuthContext);
  const navigate = useNavigate();
  const { name, email, password, profileImg } = formValue;

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormValue((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const createdUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const userInfo = createdUser.user;
    await updateProfile(userInfo, { displayName: name });
    setCurrentUser(userInfo);
    await set(ref(db, `users/${userInfo.uid}`), {
      role: 'customer',
      profileImg,
      email,
      name,
    });
    navigate('/home');
    setFormValue({ ...initFormValue });
    setLoading(false);
  };
  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          {heading}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {/* Name */}
          <InputComponent
            htmlFor={'name'}
            name={'name'}
            text={'Name'}
            placeholder={'Sohan Mondal'}
            value={name}
            onChange={handleChange}
          />
          {/* Email */}
          <InputComponent
            htmlFor={'email'}
            name={'email'}
            text={'Email'}
            placeholder={'john@gmail.com'}
            value={email}
            onChange={handleChange}
            type="email"
          />

          {/* Password */}
          <InputComponent
            htmlFor={'password'}
            name={'password'}
            text={'Password'}
            placeholder={'*****'}
            value={password}
            onChange={handleChange}
            type="password"
          />
          <InputComponent
            htmlFor={'profileImg'}
            name={'profileImg'}
            text={'Profile Image'}
            placeholder={'https://image.com'}
            value={profileImg}
            onChange={handleChange}
          />

          {/* Submit */}
          <Button
            type="submit"
            className="rounded-full w-full font-semibold cursor-pointer bg-zinc-900 text-white"
          >
            {loading ? 'Creating...' : 'Sign Up'}
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

export default Register;
