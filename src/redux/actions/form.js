const setForm = name => ({
  type: 'SET_FORM_NAME',
  data: name,
});

const updateInputValue = (formName, value, id) => ({
  type: 'UPDATE_INPUT_VALUE',
  data: { formName, value, id },
});

export {
  setForm,
  updateInputValue,
};
