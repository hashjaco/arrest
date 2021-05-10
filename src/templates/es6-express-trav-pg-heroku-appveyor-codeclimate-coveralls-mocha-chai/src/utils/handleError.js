export default (error) => {
  const { status, message } = error;
  if (status >= 400) {
    switch (status) {
    case 400:
      // do something when you send a bad request to the server
      throw new Error(
        `That was a horrible request, but give it another shot. I'm sure it'll work this time...${message}`
      );
    case 401:
      // do something when authentication goes wrong
      throw new Error(
        `Failed to authenticate. Keep it real, dood, and enter some real credentials without brute force: ${message}`
      );
    case 403:
      // do something when you're unauthorized to access a resource
      throw new Error(
        `Not authorized to access requested resource, you sneaky devil, you: ${message}`
      );
    case 500:
      // do something when your server exploded
      throw new Error(
        `An issue with the server occurred, which means it probably blew up. Sorry for the inconvenience: ${message}`
      );
    default:
      // handle other errors...there could be some you don't know about.
      throw new Error(
        `Something happened that's absolutely mind-bottling. You know like when your thoughts get all trapped, like in a bottle? ${message}`
      );
    }
  }
  return message; // Return the error message to be dispatched to redux store
};
