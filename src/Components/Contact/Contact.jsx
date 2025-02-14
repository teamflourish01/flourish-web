// import React, { useState } from "react";
// import "./Contact.css";
// import YellowWhiteBtn from "../YellowWhiteBtn/YellowWhiteBtn";
// import { toast, ToastContainer } from "react-toastify";

// const Contact = () => {
//   const [formData, setFormData] = useState({
//     name: "",
//     contactNumber: "",
//     message: "",
//     email: "",
//     city: "",
//     companyName: "",
//   });

//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);
//   let url = process.env.REACT_APP_DEV_URL;

//   const handleSubmit = async (e) => {
//     debugger;
//     e.preventDefault(); 
    
//     console.log("Entered Details:", formData); 

//     try {
//       setLoading(true);
//       setError(null);

//       debugger;

//       const response = await fetch(`${url}/email/send-email`, {
//         method: "POST",
//         headers: {
//           "Content-Type": "application/json",
//         },
//         body: JSON.stringify(formData),
//       });

//       if (!response.ok) {
//         throw new Error(`Error: ${response.statusText}`);
//       }

//       const res = await response.json();
//       toast.success('Thank you for connecting with Us! We will get back to you soon.', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//       setFormData({
//         name: "",
//         phone: "",
//         message: "",
//         email: "",
//         city: "",
//         company: "",
//       });
//     } catch (error) {
//       console.error("Error submitting form:", error);

//       setError(error.message);
//       toast.error('Something went wrong. Please try again later.', {
//         position: "top-right",
//         autoClose: 5000,
//         hideProgressBar: false,
//         closeOnClick: true,
//         pauseOnHover: true,
//         draggable: true,
//         progress: undefined,
//       });
//     } finally {
//       setLoading(false);
//     }
//   };

//   const handleChange = (e) => {
//     setFormData({
//       ...formData,
//       [e.target.name]: e.target.value,
//     });
//   };

//   return (
//     <>
//       <div className="contact-us">
//       <ToastContainer
//           position="top-right"
//           autoClose={5000}
//           hideProgressBar={false}
//           newestOnTop={false}
//           closeOnClick
//           rtl={false}
//           pauseOnFocusLoss
//           draggable
//           pauseOnHover
//           theme="light"
//         />
//         <div className="contact-us-container">
//           <p className="something">See something you like? Get in touch</p>
//           <p className="enter-your">
//             Enter your details below and what you have on your mind. We’ll get
//             back to you soon.
//           </p>
//           <div className="contact-box">
//             <form className="form-container" onSubmit={handleSubmit}>
//               <input
//                 type="text"
//                 name="name"
//                 placeholder="Name"
//                 className="full-width input"
//                 value={formData.name}
//                 onChange={handleChange}
//               />
//               <div className="half-width-container">
//                 <input
//                   type="text"
//                   name="contactNumber"
//                   placeholder="Mobile Number"
//                   className="input"
//                   value={formData.contactNumber}
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="email"
//                   name="email"
//                   placeholder="Email"
//                   className="input"
//                   value={formData.email}
//                   onChange={handleChange}
//                 />
//               </div>
//               <div className="half-width-container">
//                 <input
//                   type="text"
//                   name="companyName"
//                   placeholder="Company Name"
//                   className="input"
//                   value={formData.companyName}
//                   onChange={handleChange}
//                 />
//                 <input
//                   type="text"
//                   name="city"
//                   placeholder="City"
//                   className="input"
//                   value={formData.city}
//                   onChange={handleChange}
//                 />
//               </div>
//               <textarea
//                 name="message"
//                 placeholder="Message"
//                 className="full-width textarea"
//                 value={formData.message}
//                 onChange={handleChange}
//               ></textarea>
//               <div className="ybtn">
//                 <YellowWhiteBtn btnName="Submit" type="submit" />
//               </div>
//             </form>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// };

// export default Contact;
import React, { useState } from "react";
import "./Contact.css";
import YellowWhiteBtn from "../YellowWhiteBtn/YellowWhiteBtn";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const Contact = () => {
  const [formData, setFormData] = useState({
    name: "",
    contactNumber: "",
    message: "",
    email: "",
    city: "",
    companyName: "",
  });

  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);
  let url = process.env.REACT_APP_DEV_URL;

  const handleSubmit = async (e) => {
    e.preventDefault();

    setLoading(true); // Show loader
    setError(null);

    try {
      const response = await fetch(`${url}/email/send-email`, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(formData),
      });

      if (!response.ok) {
        throw new Error(`Error: ${response.statusText}`);
      }

      toast.success("Thank you for connecting with Us! We will get back to you soon.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });

      setFormData({
        name: "",
        contactNumber: "",
        message: "",
        email: "",
        city: "",
        companyName: "",
      });

    } catch (error) {
      console.error("Error submitting form:", error);
      setError(error.message);

      toast.error("Something went wrong. Please try again later.", {
        position: "top-right",
        autoClose: 5000,
        hideProgressBar: false,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true,
      });
    } finally {
      setTimeout(() => {
        setLoading(false); // Hide loader after a short delay
      }, 1000);
    }
  };

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <>
      {loading && (
        <div className="overlay">
          <div className="loader"></div>
        </div>
      )}

      <div className={`contact-us ${loading ? "blurred" : ""}`}>
           <ToastContainer
           position="top-right"
           autoClose={5000}
           hideProgressBar={false}
           newestOnTop={false}
           closeOnClick
           rtl={false}
           pauseOnFocusLoss
           draggable
           pauseOnHover
           theme="light"
         />
        <div className="contact-us-container">
          <p className="something">See something you like? Get in touch</p>
          <p className="enter-your">
            Enter your details below and what you have on your mind. We’ll get back to you soon.
          </p>
          <div className="contact-box">
            <form className="form-container" onSubmit={handleSubmit}>
              <input
                type="text"
                name="name"
                placeholder="Name"
                className="full-width input"
                value={formData.name}
                onChange={handleChange}
                required
              />
              <div className="half-width-container">
                <input
                  type="text"
                  name="contactNumber"
                  placeholder="Mobile Number"
                  className="input"
                  value={formData.contactNumber}
                  onChange={handleChange}
                  required
                />
                <input
                  type="email"
                  name="email"
                  placeholder="Email"
                  className="input"
                  value={formData.email}
                  onChange={handleChange}
                  required
                />
              </div>
              <div className="half-width-container">
                <input
                  type="text"
                  name="companyName"
                  placeholder="Company Name"
                  className="input"
                  value={formData.companyName}
                  onChange={handleChange}
                />
                <input
                  type="text"
                  name="city"
                  placeholder="City"
                  className="input"
                  value={formData.city}
                  onChange={handleChange}
                />
              </div>
              <textarea
                name="message"
                placeholder="Message"
                className="full-width textarea"
                value={formData.message}
                onChange={handleChange}
                required
              ></textarea>
              <div className="ybtn">
                <YellowWhiteBtn btnName="Submit" type="submit" />
              </div>
            </form>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
