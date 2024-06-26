import signUpUser from './4-user-promise';
import uploadPhoto from './5-photo-reject';

const handleProfileSignup = (firstName, lastName, fileName) => Promise.all([
  signUpUser(firstName, lastName),
  uploadPhoto(fileName),
])
  .then(([userResult, photoResult]) => [
    { status: 'fulfilled', value: userResult },
    { status: 'fulfilled', value: photoResult },
  ])
  .catch((error) => [
    { status: 'rejected', value: error.message },
    { status: 'rejected', value: error.message },
  ]);

export default handleProfileSignup;
