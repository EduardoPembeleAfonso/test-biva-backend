export const IsvalidEmail = (email: string) => {
    return /^[\w+.]+@\w+\.\w{2,}(?:\.\w{2})?$/.test(email);
  };