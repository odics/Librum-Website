"use client";

import {
  Button,
  Modal,
  ModalContent,
  ModalHeader,
  ModalOverlay,
  ModalCloseButton,
  useDisclosure,
  FormControl,
  FormLabel,
  Input,
  ModalBody,
  ModalFooter,
  Center,
  Heading,
  Text,
  Box,
  Flex,
  useToast,
  Image,
  InputGroup,
  InputRightElement,
} from "@chakra-ui/react";

import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai";

import { BeatLoader } from "react-spinners";

import { useRouter, usePathname } from "next/navigation";

import { useRef, useState, useEffect } from "react";

import {
  useQuery,
  useMutation,
  useQueryClient,
  QueryClient,
  QueryClientProvider,
} from "@tanstack/react-query";

import Logo from "./Logo";

import { updateLoggedIn, updateUser } from "../../features/user/userSlice";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux/";

import {
  fetchUserInfo,
  userLogin,
  userRegistration,
  getVerifiedStatus,
} from "../../utils/apiFunctions";

import { useCookies } from "react-cookie";

const LoginButton = (props) => {
  // Set this to true after user confirms email to trigger login modal
  const [isEmailConfirmed, setIsEmailConfirmed] = useState();

  useEffect(() => {
    if (isEmailConfirmed === true) {
      console.log("User confirmed email");
    } else if (isEmailConfirmed === false) {
      console.log("Email not confirmed");
    }
  }, [isEmailConfirmed]);

  const path = usePathname();

  // Cookie bullshit to work around the fact that the authentication for the website is being handled by an external API.
  // We are using react-cookies to set a cookie containing the JWT received from the external API. Then, the existence of
  // this cookie is checked by the middleware function (defined in middleware.js). If JWT does not exist in cookies, then
  // the user is redirected back to home if they try to access the /profile page.
  const [cookies, setCookie, removeCookie] = useCookies(["user"]);

  // Notifications for successful login or errors
  const toast = useToast();

  // Page redirection
  const router = useRouter();

  // User auth state
  const [token, setToken] = useState(null);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [showPassword, setShowPassword] = useState(false);

  // User register state
  const [registerEmail, setRegisterEmail] = useState("");
  const [registerPassword, setRegisterPassword] = useState("");
  const [registerFirstName, setRegisterFirstName] = useState("");
  const [registerLastName, setRegisterLastName] = useState("");

  // Modal state for login modal
  const {
    isOpen: isOpenLogin,
    onOpen: onOpenLogin,
    onClose: onCloseLogin,
  } = useDisclosure();

  // Modal state for register modal
  const {
    isOpen: isOpenRegister,
    onOpen: onOpenRegister,
    onClose: onCloseRegister,
  } = useDisclosure();

  // Modal state for email confirmation modal
  const {
    isOpen: isOpenConfirmEmail,
    onOpen: onOpenConfirmEmail,
    onClose: onCloseConfirmEmail,
  } = useDisclosure();

  const initialRef = useRef(null);

  // User auth state setters
  const handleEmail = (event) => setEmail(event.target.value);
  const handlePassword = (event) => setPassword(event.target.value);
  const handleShowPassword = () => setShowPassword(!showPassword);

  // Redux functions for storing user info after login
  const dispatch = useDispatch();

  const setUser = (token) => {
    fetchUserInfo(token).then((result) => {
      dispatch(updateUser(result));
    });
  };

  // User registration state setters
  const handleRegFName = (event) => setRegisterFirstName(event.target.value);
  const handleRegLName = (event) => setRegisterLastName(event.target.value);
  const handleRegEmail = (event) => setRegisterEmail(event.target.value);
  const handleRegPass = (event) => setRegisterPassword(event.target.value);

  // API handling - Login
  const queryClient = useQueryClient();

  // This function sets a cookie with the token, which is then checked by the middleware on subsequent requests
  const setCookieHandler = (data) => {
    setCookie("token", data, {
      path: "/",
    });
  };

  const login = useMutation({
    mutationFn: userLogin,
    onSuccess: (data) => {
      queryClient.invalidateQueries({ queryKey: ["login"] });
      if (data.code === 1) {
        toast({
          title: "Uh oh...",
          description: "You've entered the wrong email or password.",
          status: "error",
          duration: 9000,
          isClosable: true,
        });
      } else {
        toast({
          title: "Welcome!",
          description: "You have been logged in. Enjoy.",
          status: "success",
          duration: 9000,
          isClosable: true,
        });
        setToken(data);
        setUser(data);
        setCookieHandler(data);
        dispatch(updateLoggedIn(true));
        onCloseLogin();
        router.push("/profile");
      }
    },
  });

  // Fires every time token state is changed, lets Navbar know whether or not to display Profile link
  useEffect(() => {
    setToken(localStorage.getItem("token"));
    if (token) {
      dispatch(updateLoggedIn(true));
    } else {
      dispatch(updateLoggedIn(false));
    }
  }, [token, dispatch]);

  const handleLogin = (userInfo) => {
    login.mutate(userInfo);
  };

  // API handling - Register
  const register = useMutation({
    mutationFn: userRegistration,
    onSuccess: () => {
      queryClient.invalidateQueries({ queryKey: ["register"] });
    },
  });

  // Logout function
  const logOut = () => {
    localStorage.removeItem("token");
    setToken(null);
    removeCookie("token");
    dispatch(updateUser({}));
    dispatch(updateLoggedIn(false));
    router.push("/");
  };

  // Register modal logic
  const registerAccount = () => {
    onCloseLogin();
    onOpenRegister();
  };

  let emailConfirmationInterval;

  const listenForEmailConfirmation = () => {
    emailConfirmationInterval = setInterval(() => {
      confirmEmail(registerEmail);
    }, 4000);
  };

  const confirmEmail = async (email) => {
    const result = await getVerifiedStatus(email);
    if (result == true) {
      clearInterval(emailConfirmationInterval);
      onCloseConfirmEmail();
      onOpenLogin();
    }
  };

  const handleRegister = (data) => {
    register.mutate(data);
    // toast({
    //   title: "Account Created.",
    //   description:
    //     "We've created an account for you and have sent a verification link to your email. Please verify your account.",
    //   status: "success",
    //   duration: 9000,
    //   isClosable: true,
    //   colorScheme: "purple",
    // });
    // localStorage.setItem("isVerified", "false");
    onCloseRegister();
    setIsEmailConfirmed(false);
    onOpenConfirmEmail();
    listenForEmailConfirmation();
  };

  return (
    <>
      <Button onClick={token ? logOut : onOpenLogin} variant="loginButton">
        {token ? "LOGOUT" : "LOGIN"}
      </Button>
      {/* Login Modal */}
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpenLogin}
        onClose={onCloseLogin}
        variant="defaultVariant"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader> </ModalHeader>
          <ModalCloseButton />
          <ModalBody>
            <Center>
              <Box textAlign="center" mb="1rem">
                <Heading size="sm" pb=".5rem">
                  Welcome back!
                </Heading>
                <Text fontSize="sm">Log into your account</Text>
              </Box>
            </Center>
            <FormControl>
              <FormLabel fontSize="sm" textColor="text-default">
                Email
              </FormLabel>
              <Input
                value={email}
                onChange={handleEmail}
                ref={initialRef}
                placeholder="Enter Your Email"
                fontSize="sm"
                variant="defaultVariant"
              />
            </FormControl>

            <FormControl mt={4}>
              <FormLabel fontSize="sm" textColor="text-default">
                Password
              </FormLabel>
              <InputGroup>
                <Input
                  value={password}
                  onChange={handlePassword}
                  placeholder="Enter Your Password"
                  fontSize="sm"
                  variant="defaultVariant"
                  type={showPassword ? "text" : "password"}
                />
                <InputRightElement width="4.5rem">
                  <Button
                    h="1.75rem"
                    size="sm"
                    onClick={handleShowPassword}
                    variant="ghost"
                  >
                    {showPassword ? (
                      <AiOutlineEyeInvisible />
                    ) : (
                      <AiOutlineEye />
                    )}
                  </Button>
                </InputRightElement>
              </InputGroup>
            </FormControl>
          </ModalBody>

          <ModalFooter>
            <Box width="100%" textAlign="center" pb=".7rem">
              <Button
                onClick={() => {
                  handleLogin({ Email: email, Password: password });
                }}
                variant="primary"
                width="100%"
                mb="1rem"
              >
                {login.isLoading ? <BeatLoader /> : "Log In"}
              </Button>
              <Button
                variant="secondary"
                width="100%"
                onClick={() => {
                  registerAccount();
                }}
              >
                Register
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Register Modal */}
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpenRegister}
        onClose={onCloseRegister}
        variant="defaultVariant"
      >
        <ModalOverlay />
        <ModalContent>
          <ModalHeader background="bg-default"> </ModalHeader>
          <ModalCloseButton />
          <ModalBody background="bg-default">
            <Center>
              <Flex direction="column">
                <Box textAlign="center" mb="1rem">
                  <Heading size="md" pb=".5rem">
                    Welcome to Librum
                  </Heading>
                  <Text fontSize="xs">
                    Your credentials are only used to authenticate you. Your
                    credentials will be stored in a secure database.
                  </Text>
                </Box>
                <Flex gap="1rem" mb="1rem">
                  <FormControl>
                    <FormLabel fontSize="xs" textColor="text-default">
                      First Name
                    </FormLabel>
                    <Input
                      fontSize="xs"
                      value={registerFirstName}
                      onChange={handleRegFName}
                      variant="defaultVariant"
                    />
                  </FormControl>
                  <FormControl>
                    <FormLabel fontSize="xs" textColor="text-default">
                      Last Name
                    </FormLabel>
                    <Input
                      fontSize="xs"
                      value={registerLastName}
                      onChange={handleRegLName}
                      variant="defaultVariant"
                    />
                  </FormControl>
                </Flex>
                <Box>
                  <FormControl>
                    <FormLabel fontSize="xs" textColor="text-default">
                      Email
                    </FormLabel>
                    <Input
                      fontSize="xs"
                      value={registerEmail}
                      onChange={handleRegEmail}
                      variant="defaultVariant"
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel fontSize="xs" textColor="text-default">
                      Password
                    </FormLabel>
                    <Input
                      fontSize="xs"
                      value={registerPassword}
                      onChange={handleRegPass}
                      variant="defaultVariant"
                    />
                  </FormControl>
                  <FormControl mt={4}>
                    <FormLabel fontSize="xs" textColor="text-default">
                      Confirm password
                    </FormLabel>
                    <Input fontSize="xs" variant="defaultVariant" />
                  </FormControl>
                </Box>
              </Flex>
            </Center>
          </ModalBody>

          <ModalFooter background="bg-default">
            <Box width="100%" textAlign="center">
              <Button
                onClick={() => {
                  handleRegister({
                    FirstName: registerFirstName,
                    LastName: registerLastName,
                    Email: registerEmail,
                    Password: registerPassword,
                  });
                }}
                variant="primary"
                width="100%"
                mb="1rem"
              >
                {register.isLoading ? <BeatLoader /> : "Let's Get Started"}
              </Button>
            </Box>
          </ModalFooter>
        </ModalContent>
      </Modal>
      {/* Confirm Email Modal */}
      <Modal
        isCentered
        initialFocusRef={initialRef}
        isOpen={isOpenConfirmEmail}
        onClose={onCloseConfirmEmail}
      >
        <ModalOverlay />
        <ModalContent>
          <ModalBody background="bg-default" borderRadius="2px">
            <Flex direction="column" align="center" gap="1rem">
              <Heading size="md">Email confirmation required</Heading>
              <Text>
                We&apos;ve created an account for you and have sent a
                verification link to your email. This window will automatically
                close and you will be logged in after confirming your email.
              </Text>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default LoginButton;
