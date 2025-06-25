import React, { useState } from 'react';

const SimpleForm: React.FC = () => {
  interface FormData {
    name: string;
    surname: string;
    email: string;
    phoneNumber: string;
    prefferedContact: string;
  }
  
  const [formData, setFormData] = useState<FormData>({
    name: '',
    surname: '',
    email: '',
    phoneNumber: '',
    prefferedContact: '',
  });

  const [submitMessage, setSubmitMessage] = useState<string | null>(null);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    }); //wrocic tu
    
    setSubmitMessage(null);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault(); //blocks refresh after submit (default behavior of form elements on submit event is to refresh the page)

    if(!(formData.name.trim() === '' || formData.surname.trim() === '' || formData.email.trim() === '' || formData.phoneNumber.trim() === '' || formData.prefferedContact.trim() === '')) {
      setSubmitMessage('Form submitted successfully!');
    } else {
      setSubmitMessage('Please fill in all fields.');
    }
  };

  return (
    <div>
      <h2>Simple Form (from component)</h2>

      {submitMessage && (
        <p>
          {submitMessage}
        </p>
      )}

      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="name">Name:</label>
          <input type="text" id="name" name="name" value={formData.name} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="surname">Surname:</label>
          <input type="text" id="surname" name="surname" value={formData.surname} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="email">Email:</label>
          <input type="email" id="email" name="email" value={formData.email} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="phoneNumber">Phone Number:</label>
          <input type="tel" id="phoneNumber" name="phoneNumber" value={formData.phoneNumber} onChange={handleChange} />
        </div>
        <div>
          <label htmlFor="prefferedContact">Preffered Contact:</label>
          <input type="text" id="prefferedContact" name="prefferedContact" value={formData.prefferedContact} onChange={handleChange} />
        </div>
        <button type="submit">
          Submit
        </button>
      </form>
    </div>
  );
};

export default SimpleForm;