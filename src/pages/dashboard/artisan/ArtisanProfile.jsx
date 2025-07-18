import { useContext } from 'react';
import { CiLocationOn } from 'react-icons/ci';
import { MdPhone } from 'react-icons/md';
import AuthContext from '../../../context/AuthContext';
import skills from '../../../utils/skills';
const ArtisanProfile = () => {
  const { currentUser, userDetails } = useContext(AuthContext);
  return (
    <div className="min-h-screen bg-gray-100 py-10 px-4">
      <div className="max-w-4xl mx-auto bg-white rounded-2xl shadow-md p-8">
        {/* Header */}
        <div className="flex flex-col md:flex-row items-center gap-8 mb-10">
          {/* Profile Picture */}
          <div className="w-40 h-40 rounded-full overflow-hidden border-4 border-blue-500 shadow-lg">
            <img
              src={userDetails.profileImg}
              alt="Profile"
              className="w-full h-full object-cover"
            />
          </div>

          {/* Basic Info */}
          <div className="flex-1">
            <h2 className="text-3xl font-bold text-zinc-800 flex items-center justify-between">
              {currentUser.displayName}
            </h2>
            <p className="text-zinc-600 mt-1">
              <MdPhone /> {userDetails.phoneNumber}
            </p>
            <p className="text-zinc-600">
              <CiLocationOn /> {userDetails.address}, Bangladesh
            </p>
          </div>
        </div>

        {/* Divider */}
        <div className="border-b border-zinc-200 mb-6"></div>

        {/* About & Bio */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <div>
            <h3 className="text-xl font-semibold text-zinc-700 mb-2">Bio</h3>
            <p className="text-zinc-600">
              Passionate artisan with 5+ years of experience in wood crafting
              and furniture design.
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-700 mb-2">About</h3>
            <p className="text-zinc-600">
              I love turning raw materials into beautiful and useful creations.
              Customer satisfaction is my top priority.
            </p>
          </div>
        </div>

        {/* Work Details */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div>
            <h3 className="text-xl font-semibold text-zinc-700 mb-2">
              {skills[userDetails.workSkillVal].name}
            </h3>
            <p className="text-zinc-600">
              {
                skills[userDetails.workSkillVal].subSkills[
                  userDetails.subWorkSkill
                ]
              }
            </p>
          </div>
          <div>
            <h3 className="text-xl font-semibold text-zinc-700 mb-2">{}</h3>
            <p className="text-zinc-600">Furniture Design</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ArtisanProfile;
