import auth from './fbconfig';

export const createUserInFb = async (email, password) => {
  try {
    const user = await auth.createUserWithEmailAndPassword(email, password);

    console.log('User created!', user);
  } catch (error) {
    console.log(error);
  }
};

export const signInUserFb = async (email, password) => {
  try {
    const user = await auth.signInWithEmailAndPassword(email, password);

    console.log('Sign in successful', user);
  } catch (error) {
    console.log(error);
  }
};

export const verbAndParse = (verb, url, data) => {
  const initialFetch = fetch(url, {
    body: JSON.stringify(data),
    cache: 'no-cache',
    headers: {
      'content-type': 'application/json'
    },
    method: `${verb.toUpperCase()}`
  });
};