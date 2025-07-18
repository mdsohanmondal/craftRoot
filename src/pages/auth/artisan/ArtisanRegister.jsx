import { Button } from '@material-tailwind/react';
import { createUserWithEmailAndPassword, updateProfile } from 'firebase/auth';
import { ref, set } from 'firebase/database';
import { useContext, useEffect, useState } from 'react';
import { NavLink, useNavigate } from 'react-router';
import InputComponent from '../../../components/ui/InputGroup/InputComponent';
import SelectField from '../../../components/ui/selectGroup/SelectField';
import AuthContext from '../../../context/AuthContext';
import { auth, db } from '../../../services/firebase/firebaseServise';
import skills from '../../../utils/skills';

const initFormValue = {
  name: '',
  email: '',
  password: '',
  address: '',
  workSkillVal: '',
  subWorkSkill: '',
  phoneNumber: '',
  profileImg: '',
};

const ArtisanRegister = ({ to, toText, heading }) => {
  const [formValue, setFormValue] = useState({ ...initFormValue });
  const [workSkill, setWorkSkill] = useState([]);
  const [subWorkSkills, setSubWorkSkills] = useState([]);
  const navigate = useNavigate();
  const { setCurrentUser, loading, setLoading } = useContext(AuthContext);

  const {
    name,
    email,
    password,
    address,
    workSkillVal,
    subWorkSkill,
    phoneNumber,
    profileImg,
  } = formValue;

  useEffect(() => {
    setWorkSkill(Object.keys(skills));
  }, []);

  // change handler
  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === 'workSkillVal') {
      const subWorkSkillsKey = skills[value]?.subSkills
        ? Object.keys(skills[value].subSkills)
        : [];
      setSubWorkSkills(subWorkSkillsKey);
      setFormValue((prev) => ({ ...prev, [name]: value, subWorkSkill: '' }));
    } else {
      setFormValue((prev) => ({ ...prev, [name]: value }));
    }
  };

  // submit handler
  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);
    const createUser = await createUserWithEmailAndPassword(
      auth,
      email,
      password
    );
    const newUserInf = createUser?.user;
    await updateProfile(newUserInf, { displayName: name });
    setCurrentUser(newUserInf);
    set(ref(db, `users/${newUserInf.uid}`), {
      address,
      workSkillVal,
      subWorkSkill,
      phoneNumber,
      profileImg,
      uid: newUserInf.uid,
      role: 'artisan',
      email,
      name,
    });
    navigate('/dashboard/artisan/profile');
    setLoading(false);
    setFormValue({ ...initFormValue });
  };

  ////////////////////////////////////////

  const inputFields = [
    {
      htmlFor: 'name',
      name: 'name',
      text: 'Full Name',
      placeholder: 'Full Name',
      type: 'text',
      value: name,
    },
    {
      htmlFor: 'email',
      name: 'email',
      text: 'Email',
      placeholder: 'Email',
      type: 'email',
      value: email,
    },
    {
      htmlFor: 'password',
      name: 'password',
      text: 'Password',
      placeholder: '*******',
      type: 'password',
      value: password,
    },
    {
      htmlFor: 'phoneNumber',
      name: 'phoneNumber',
      text: 'Phone Number',
      placeholder: '01234567890',
      type: 'number',
      value: phoneNumber,
    },
    {
      htmlFor: 'profileImg',
      name: 'profileImg',
      text: 'Image URL',
      placeholder: 'https://image.com',
      type: 'text',
      value: profileImg,
    },
    {
      htmlFor: 'address',
      name: 'address',
      text: 'Address',
      placeholder: 'Faridpur',
      type: 'textarea',
      value: address,
    },
  ];

  const workSkillOption = workSkill.map((item) => ({
    value: item,
    label: skills[item].name,
  }));

  const subWorkSkillsOption = subWorkSkills.map((item) => ({
    value: item,
    label: skills[workSkillVal]?.subSkills[item],
  }));

  return (
    <div className="min-h-screen flex items-center justify-center bg-gray-100 px-4">
      <div className="w-full max-w-md bg-white rounded-xl shadow-md p-8 space-y-6">
        <h1 className="text-2xl font-bold text-center text-blue-600">
          {heading}
        </h1>

        <form onSubmit={handleSubmit} className="space-y-5">
          {inputFields.map((item) => (
            <InputComponent
              key={item.name}
              htmlFor={item.name}
              name={item.name}
              text={item.text}
              placeholder={item.placeholder}
              type={item.type}
              value={item.value}
              onChange={handleChange}
            />
          ))}

          <div className="w-full flex items-center justify-center gap-3">
            <SelectField
              name="workSkillVal"
              value={workSkillVal}
              defaultOpt="Select work"
              options={workSkillOption}
              onChange={handleChange}
            />
            <SelectField
              name="subWorkSkill"
              value={subWorkSkill}
              defaultOpt="Select Sub Work"
              options={subWorkSkillsOption}
              onChange={handleChange}
            />
          </div>

          <Button
            type="submit"
            className="rounded-full w-full font-semibold cursor-pointer bg-zinc-900 text-white"
          >
            {loading ? 'Registering...' : 'Sign Up'}
          </Button>

          <p className="text-black">
            I have an account{' '}
            <NavLink to={to} className="text-blue-400 underline">
              {toText}
            </NavLink>
          </p>
        </form>
      </div>
    </div>
  );
};

export default ArtisanRegister;
