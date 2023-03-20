import { Formik } from 'formik';
import * as yup from 'yup';
import '../../../TodoForm.css';

const TodoListForm = ({ addHandler }) => {

    const validationShema = yup.object().shape({
        firstName: yup.string().typeError('Должен быть строкой!').required('Обязательно'),
        lastName: yup.string().typeError('Должен быть строкой!').required('Обязательно')
    })
    return (
        <Formik
            initialValues={{
                firstName: '',
                lastName: '',
            }}
            validateOnBlur
            onSubmit={async (value) => {
                addHandler({ firstName: value.firstName, lastName: value.lastName })
                value.firstName = ''
                value.lastName = ''
                console.log(value);
            }}
            validationSchema={validationShema}
        >
            {({ values, errors, touched, handleChange, handleBlur, isValid, dirty, handleSubmit }) => (
                <div className='TodoForm__container'>
                    <input
                        className='a'
                        type="text"
                        value={values.firstName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name={'firstName'}
                        placeholder="First Name"
                    />
                    <br />
                    {touched.firstName && errors.firstName && <p className='TodoForm__errors'>{errors.firstName}</p>}
                    <input
                        type="text"
                        value={values.lastName}
                        onChange={handleChange}
                        onBlur={handleBlur}
                        name={'lastName'}
                        placeholder="Last Name"
                    />
                    {touched.lastName && errors.lastName && <p className='TodoForm__errors'>{errors.lastName}</p>}
                    <br />
                    <button
                        disabled={!isValid && !dirty}
                        onClick={handleSubmit}
                        type={'button'}
                    >Add</button>
                </div>
            )}
        </Formik>
    )
}

export default TodoListForm
