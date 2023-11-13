const validateUserLogin = (values) => {
    const errors = {}

    if(!values.username) {
        errors.username = 'required'
    }

    if(values.username.length < 6) {
        errors.username = 'must be more then 6 characters'
    } else if(values.username.length > 15) {
        errors.username = 'must be less then or equal to 15 characters'
    }

    if(!values.password) {
        errors.password = 'required'
    }
    if(values.password.length <= 8) {
        errors.password = 'must be at least 8 or more characters'
    }

    return errors
}

export default validateUserLogin