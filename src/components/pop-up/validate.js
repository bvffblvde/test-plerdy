export function validateForm(values) {
    const errors = {};
    if (!values.name) {
        errors.name = 'The field is not filled';
    }
    if (!values.phoneNumber) {
        errors.phoneNumber = 'The field is not filled';
    } else if (values.phoneNumber.length !== 11) {
        errors.phoneNumber = 'Please enter a correct number';
    }
    return errors;
}