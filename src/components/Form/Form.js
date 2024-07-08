
// import React, { useState } from 'react';

// const FormComponent = ({ onFormSubmit }) => {
//     const [formData, setFormData] = useState({
//         firstName: '',
//         lastName: '',
//         email: '',
//         password:''
//     });

//     const Input = (e) => {
//         const { name, value } = e.target;
//         setFormData({ ...formData, [name]: value });
//     };

//     const Submit = (e) => {
//         e.preventDefault();
//         onFormSubmit(formData); 
//         setFormData({ firstName: '', lastName: '', email: '',password:'' }); 
//     };

//     return (
//         <div className="container">
//             <form onSubmit={ Submit}>
//                 <div className="mb-3">
//                     <label htmlFor="firstName" className="form-label">First Name:</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="firstName"
//                         name="firstName"
//                         value={formData.firstName}
//                         onChange={Input}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="lastName" className="form-label">Last Name:</label>
//                     <input
//                         type="text"
//                         className="form-control"
//                         id="lastName"
//                         name="lastName"
//                         value={formData.lastName}
//                         onChange={Input}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="email" className="form-label">Email:</label>
//                     <input
//                         type="email"
//                         className="form-control"
//                         id="email"
//                         name="email"
//                         value={formData.email}
//                         onChange={Input}
//                         required
//                     />
//                 </div>
//                 <div className="mb-3">
//                     <label htmlFor="password" className="form-label">Password:</label>
//                     <input
//                         type="password"
//                         className="form-control"
//                         id="password"
//                         name="password"
//                         value={formData.password}
//                         onChange={Input}
//                         required
//                     />
//                 </div>
//                 <button type="submit" className="btn btn-primary">Submit</button>
                
//             </form>
//         </div>
//     );
// };

// export default FormComponent;


