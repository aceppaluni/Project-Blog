const validateContactForm = (values) => {
    const errors = {};

    if(!values.name) { 
        errors.name = 'Required'
    } else if (values.name.length > 15) {
        errors.name = 'Cannot exceed 15 characters'
    } else if (values.name.length < 2) {
        errors.name = 'Must be more then 2 characters'
    }

    // const reg = /^\d+$/
    // if(!reg.test(values.phoneNum)) {
    //     errors.phoneNum = 'Not a valid number'
    // }
    
    if(!values.email) {
        errors.email = 'Must contain @ symbol'
    }

    return errors
}
export default validateContactForm