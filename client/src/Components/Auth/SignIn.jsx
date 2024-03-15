import { Dialog, Transition } from "@headlessui/react";
import { Fragment, useState } from "react";
import { FcGoogle } from "react-icons/fc";

// redux
import { useDispatch } from "react-redux";
import { signIn } from "../../Redux/Reducers/Auth/auth.action";

function Signin({ isOpen, setIsOpen }) {
  // State to manage user input data
  const [userData, setUserData] = useState({
    email: "",
    password: "",
  });

  //init dispatch
  const dispatch = useDispatch();

  // Function to handle changes in input fields
  const handleChange = (e) => {
    setUserData((prev) => ({ ...prev, [e.target.id]: e.target.value }));
  };

  // Function to close the sign-in modal
  const closeModal = () => {
    setIsOpen(false);
  };

  //submit option
  const submit = () => {
    dispatch(signIn(userData));
    setUserData({ email: "", password: "" });
    closeModal();
  };

  // Function to initiate Google sign-in process
  const googleSignIn = () =>
    (window.location.href = "http://localhost:4000/auth/google");

  return (
    <>
      {/* Transition and Dialog components for modal animation */}
      <Transition appear show={isOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-10 overflow-y-auto"
          onClose={closeModal}
          style={{ backgroundColor: "rgba(0, 0, 0, 0.53)" }}
        >
          <div className="min-h-screen px-4 text-center">
            {/* Overlay to dim background */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0"
              enterTo="opacity-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
            >
              <Dialog.Overlay className="fixed inset-0" />
            </Transition.Child>

            {/* This element is to trick the browser into centering the modal contents */}
            <span
              className="inline-block h-screen align-middle"
              aria-hidden="true"
            >
              &#8203;
            </span>

            {/* Dialog content */}
            <Transition.Child
              as={Fragment}
              enter="ease-out duration-300"
              enterFrom="opacity-0 scale-95"
              enterTo="opacity-100 scale-100"
              leave="ease-in duration-200"
              leaveFrom="opacity-100 scale-100"
              leaveTo="opacity-0 scale-95"
            >
              <div className="inline-block w-full max-w-md p-6 my-8 overflow-hidden text-left align-middle transition-all transform bg-white shadow-xl rounded-2xl">
                {/* Dialog title */}
                <Dialog.Title
                  as="h3"
                  className="text-lg font-medium leading-6 text-gray-900"
                ></Dialog.Title>

                {/* Form for sign-in */}
                <div className="flex flex-col w-full gap-3 mt-2">
                  {/* Sign in with Google button */}
                  <button
                    className="flex items-center justify-center w-full gap-2 py-2 text-gray-700 bg-white border border-gray-400 rounded-lg hover:bg-gray-100"
                    onClick={googleSignIn}
                  >
                    Sign In With Google <FcGoogle />
                  </button>

                  {/* Sign-in form */}
                  <form className="flex flex-col gap-2">
                    {/* Email input field */}
                    <div className="flex flex-col w-full gap-2">
                      <label htmlFor="email">Email</label>
                      <input
                        type="text"
                        id="email"
                        value={userData.email}
                        onChange={handleChange}
                        placeholder="user@email.com"
                        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:border-zomato-400"
                      />
                    </div>

                    {/* Password input field */}
                    <div className="flex flex-col w-full gap-2 mb-3">
                      <label htmlFor="password">Password</label>
                      <input
                        type="password"
                        id="password"
                        value={userData.password}
                        onChange={handleChange}
                        placeholder="**********"
                        className="w-full px-3 py-2 border border-gray-400 rounded-lg focus:border-zomato-400"
                      />
                    </div>

                    {/* Sign-in button */}
                    <div
                      className="w-full py-2 text-center text-white rounded-lg bg-zomato-400"
                      onClick={submit}
                    >
                      Sign In
                    </div>
                  </form>
                </div>
              </div>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition>
    </>
  );
}

export default Signin;
