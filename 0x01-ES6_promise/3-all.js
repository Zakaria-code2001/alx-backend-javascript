import { uploadPhoto, createUser } from './utils';

const handleProfileSignup = () => Promise.all([createUser(), uploadPhoto()])
  .then(([user, photo]) => {
    console.log(`${photo.body} ${user.firstName} ${user.lastName}`);
  })
  .catch(() => console.log('Signup system offline'));

export default handleProfileSignup;
