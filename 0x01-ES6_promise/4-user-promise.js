const signUpUser = (firstName, lastName) => {
  console.log(Promise.resolve({ firstName: `${firstName}`, lastName: `${lastName}` }));
};

export default signUpUser;
