import React, { useEffect } from "react";
import { auth } from "../utils/firebase";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { addUser, removeUser } from "../utils/userSlice";
import { SUPPORTED_LANGUAGES, logo } from "../utils/constants";
import { toggleGptSearchView } from "../utils/gptSlice";
import { changeLanguage } from "../utils/configSlice";

const Header = () => {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const user = useSelector((store) => store.user);
  const showGptSearch = useSelector((store) => store.gpt.showGptSearch);

  const handleSignOut = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        navigate("/error");
      });
  };
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        // User is signed in, see docs for a list of available properties
        // https://firebase.google.com/docs/reference/js/auth.user
        const { email, uid, displayName, photoURL } = user;
        dispatch(
          addUser({
            email: email,
            uid: uid,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });

    //unsubscribe when component unmounts
    return () => unsubscribe();
  }, []);

  const handleGptSearchClick = () => {
    //Toggle GPT Search
    dispatch(toggleGptSearchView());
  };

  const handleLanguageChange = (e) => {
    dispatch(changeLanguage(e.target.value));
  };
  return (
    <div className="absolute w-screen px-8 py-6 bg-gradient-to-b from-black z-10 flex justify-between">
      <img className="w-44" src={logo} alt="logo" />
      {user && (
        <div className="flex p-2 m-2">
          {showGptSearch && (
            <select
              className="p-2 m-2 bg-transparent hover:bg-gray-950 text-white"
              onChange={handleLanguageChange}
            >
              {SUPPORTED_LANGUAGES.map((language) => (
                <option
                  className="text-white bg-gray-900"
                  key={language.identifier}
                  value={language.identifier}
                >
                  {language.name}
                </option>
              ))}
            </select>
          )}
          <button
            className="px-2 my-2 m-10 bg-opacity-50 hover:bg-gray-950 text-white rounded-lg"
            onClick={handleGptSearchClick}
          >
            {showGptSearch ? "Homepage" : "GPT Search"}
          </button>
          <img
            className="w-12 h-12"
            alt="usericon"
            // src="https://occ-0-4995-2186.1.nflxso.net/dnm/api/v6/K6hjPJd6cR6FpVELC5Pd6ovHRSk/AAAABYRFxAWVrKCK9D6k09JulRmTVhxugke34M7wLusyTHt0RvbvCG9vm-LB4vThezTJ8ugZYSEozv070OBw7Tfi9ICj_luecvA.png?r=d3e"
            src={user?.photoURL}
          />
          <button className="font-bold text-white px-4" onClick={handleSignOut}>
            Sign Out
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
