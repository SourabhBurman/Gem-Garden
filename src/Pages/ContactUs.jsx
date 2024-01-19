import React, { useState } from 'react';
import '../contact.css';
import { useForm } from 'react-hook-form';
import { useToast } from '@chakra-ui/react';



export const ContactUs = () => {

  const toast = useToast();
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm();
  const [disabled, setDisabled] = useState(false);
  const [alertInfo, setAlertInfo] = useState({
    display: false,
    message: '',
    type: '',
  });

  // Shows alert message for form submission feedback
  const toggleAlert = (message, type) => {
    setAlertInfo({ display: true, message, type });

    // Hide alert after 5 seconds
    setTimeout(() => {
      setAlertInfo({ display: false, message: '', type: '' });
    }, 5000);
  };
   
  
  // Function called on submit that uses emailjs to send email of valid contact form
  const onSubmit = async (data) => {
    // Destrcture data object
    const { name, email, subject, message } = data;
    try {
      // Disable form while processing submission
      setDisabled(true);
      //  alert("Successful");
      

      // Display success alert
      toggleAlert('Form submission was successful!', 'success');
    } catch (e) {
      console.error(e);
      // Display error alert
      toggleAlert('Uh oh. Something went wrong.', 'danger');
    } finally {
      // Re-enable form submission
      setDisabled(false);
      // Reset contact form fields after submission
      reset();
    }
  };





  return (
    <div>
      <h1 className='head'>Contact Us</h1>
      <p className='para'>if you've got any questions, please fill out the short form below , we promise to get back to you in lightening speed. </p>
      <div className='ContactForm'>
        {/* <h1>Hello</h1> */}
        <div className='container'>
          <div className='row'>
            <div className='col-12 text-center'>
              <div className='contactForm'>
                <form
                  id='contact-form'
                  onSubmit={handleSubmit(onSubmit)}
                  noValidate
                >
                  {/* Row 1 of form */}
                  <div className='row formRow'>
                    <div className='col-6'>
                      <input
                        type='text'
                        name='name'
                        {...register('name', {
                          required: {
                            value: true,
                            message: 'Please enter your name',
                          },
                          maxLength: {
                            value: 30,
                            message: 'Please use 30 characters or less',
                          },
                        })}
                        className='form-control formInput'
                        placeholder='Name'
                      ></input>
                      <br />
                      {errors.name && (
                        <span className='errorMessage'>
                          {errors.name.message}
                        </span>
                      )}
                    </div>
                    <div className='col-6'>
                      <input
                        type='email'
                        name='email'
                        {...register('email', {
                          required: true,
                          pattern:
                            /^[a-zA-Z0-9.!#$%&’*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/,
                        })}
                        className='form-control formInput'
                        placeholder='Email address'
                      ></input>
                      <br />
                      {errors.email && (
                        <span className='errorMessage'>
                          Please enter a valid email address
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 2 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <input
                        type='text'
                        name='subject'
                        {...register('subject', {
                          required: {
                            value: true,
                            message: 'Please enter a subject',
                          },
                          maxLength: {
                            value: 75,
                            message: 'Subject cannot exceed 75 characters',
                          },
                        })}
                        className='form-control formInput sub'
                        placeholder='Title'
                      ></input>
                      <br />
                      {errors.subject && (
                        <span className='errorMessage'>
                          {errors.subject.message}
                        </span>
                      )}
                    </div>
                  </div>
                  {/* Row 3 of form */}
                  <div className='row formRow'>
                    <div className='col'>
                      <textarea
                        rows={3}
                        name='message'
                        {...register('message', {
                          required: true,
                        })}
                        className='form-control formInput message'
                        placeholder='Message'
                      ></textarea>
                      <br />
                      {errors.message && (
                        <span className='errorMessage'>
                          Please enter a message
                        </span>
                      )}
                    </div>
                  </div>

                  <button
                    className='submit-btn btn btn-primary'
                    disabled={disabled}
                    type='submit'
                  >
                    Submit
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>  
  );
}
