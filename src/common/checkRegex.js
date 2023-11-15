var ID_REGEX = new RegExp("^[a-z0-9_-]{5,20}$");
var PW_REGEX = new RegExp("^[a-zA-Z0-9]{8,16}$");

export const checkRegex = (formData, inputId) => {
  let result;
  const value = formData[inputId];

  if (value.length === 0) {
    result = "required";
  } else {
    switch (inputId) {
      case "id":
        result = ID_REGEX.test(value) ? true : "invalidId";
        break;

      case "password":
        result = PW_REGEX.test(value) ? true : "invalidPw";
        break;

      case "passwordCheck":
        result = value === formData["password"] ? true : "invalidConfirmPw";
        break;
      default:
        return;
    }
  }

  return result;
};
