import {Formik, Form, ErrorMessage, Field} from 'formik'
import {Button, Label, Col, FormGroup} from 'reactstrap';
import validateContactForm from '../utils/validateContactForm'



const ContactForm = () => {
    function handelSubmit (values, {resetForm}) {
        console.log('form values:',values);
        console.log('JSON format:', JSON.stringify(values))
        resetForm()
    }

    return (
        <Formik initialValues={{
            name: '',
            email: '',
            feedback: ''
        }} onSubmit={handelSubmit} validate={validateContactForm}>
            <Form>
                <FormGroup>
                    <Label htmlFor='name'>Name:</Label>
                    <Col>
                        <Field name="name" className="form-control"></Field>
                    </Col>
                    <ErrorMessage name="name">{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor='email'>Email:</Label>
                    <Col>
                        <Field name="email" className="form-control"></Field>
                    </Col>
                    <ErrorMessage name="email">{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
                </FormGroup>

                <FormGroup>
                    <Label htmlFor='feedback'>Your Feedback: </Label>
                    <Col>
                        <Field name="feedback" as="textarea" rows="12" className="form-control"></Field>
                    </Col>
                    <ErrorMessage name="feedback">{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
                </FormGroup>

                <FormGroup>
                    <Col>
                        <Button type='submit' >Submit</Button>
                    </Col>
                </FormGroup>
            </Form>
        </Formik>
    )
}

export default ContactForm

// Below code from before 

// const ContactForm = () => {
//     const handelSubmit = (values, {resetForm}) => {
//         console.log('form values:',values);
//         console.log('JSON format:', JSON.stringify(values))
//         resetForm()
//     }

//     return (
//         <Formik 
//             initialValues={{
//                 firstName: '',
//                 lastName: '',
//                 phoneNum: '',
//                 email: '',
//                 agree: false, 
//                 contactType: 'By Phone', 
//                 feedback: ''
//             }}
//             onClick={handelSubmit}
//             validate={validateContactForm}>
//             <Form>
//                 <FormGroup row>
//                     <Label htmlFor='firstName' md='2'>First Name</Label>
//                     <Col>
//                         <Field name='firstName' placeholder='First Name' className='form-control'></Field>
//                     </Col>
//                     <ErrorMessage name="firstName">{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
//                 </FormGroup>

//                 <FormGroup row>
//                     <Label htmlFor='lastName' md='2'>Last Name</Label>
//                     <Col>
//                         <Field name='lastName' placeholder='Last Name' className='form-control'></Field>
//                     </Col>
//                     <ErrorMessage name='lastName'>{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
//                 </FormGroup>

//                 <FormGroup row>
//                     <Label htmlFor='phoneNum' md='2'>Phone Number</Label>
//                     <Col>
//                         <Field name='phoneNum' placeholder='Phone Number' className='form-control'></Field>
//                     </Col>
//                     <ErrorMessage name='phoneNum'>{(msg) => <p className='text-danger'>{msg}</p>}</ErrorMessage>
//                 </FormGroup>

//                 <FormGroup row>
//                     <Label htmlFor='email' md='2'>Email</Label>
//                     <Col>
//                         <Field name='email' placeholder='Email Address' className='form-control'></Field>
//                     </Col>
//                     <ErrorMessage name='email'>{(msg) => <p className='text-danger'>{msg}</p> }</ErrorMessage>
//                 </FormGroup>

//                 <FormGroup row>
//                     <Label check md={{size: 4, offset: 2}}>
//                         <Field name='agree' type='checkbox' className='form-check-input'></Field>{' '}
//                         May we contact you?
//                     </Label>
//                     <Col md='4'>
//                         <Field as='select' className='form-control' name="contactType">
//                             <option>By Phone</option>
//                             <option>By email</option>
//                         </Field>
//                     </Col>
//                 </FormGroup>

//                 <FormGroup row>
//                     <Label htmlFor='feedback' md='2'>Your Feedback</Label>
//                     <Col md='10'> 
//                         <Field as='textarea' className='form-control' placeholder='Please send us your feedback' name='feedback' rows='12'></Field>
//                     </Col>
//                 </FormGroup>

//                 <FormGroup row>
//                     <Col md={{size: 10, offset: 2}}>
//                         <Button type='submit' color='primary'>Send Feedback</Button>
//                     </Col>
//                 </FormGroup>
//             </Form>
//         </Formik>
//     )
// }
// export default ContactForm