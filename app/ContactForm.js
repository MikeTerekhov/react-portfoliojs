// 'use client';

// // components/ContactForm.js
// import React, { useState, useRef, useEffect } from 'react';
// import emailjs from '@emailjs/browser';

// export default function ContactForm() {
//   const [showForm, setShowForm] = useState(false);
//   const form = useRef();

//   // Initialize EmailJS once when the component mounts
//   useEffect(() => {
//     emailjs.init('K28m1WFG6tD601fQs'); // Initialize EmailJS with your public key
//     console.log(emailjs);
//   }, []);

//   const toggleForm = () => {
//     setShowForm(!showForm);
//   };

//   const sendEmail = (e) => {
//     e.preventDefault();

//     emailjs
//     .sendForm("service_ckuvtbw", form.current, "template_n3j60va")
//       .then(
//         (result) => {
//           alert('Message sent successfully!');
//           toggleForm();
//           form.current.reset(); // Clear the form fields
//         },
//         (error) => {
//           alert('Failed to send message. Please try again later.');
//         }
//       );
//       console.log(form.current);
//   };

//   return (
//     <div>
//       {/* Contact Bubble */}
//       <div
//         onClick={toggleForm}
//         className="fixed bottom-10 right-10 p-4 bg-violet-400 text-white rounded-full cursor-pointer transition transform hover:scale-110"
//       >
//         Contact Me
//       </div>

//       {/* Contact Form Modal */}
//       {showForm && (
//         <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
//           <div className="bg-white p-6 rounded-lg w-80 relative">
//             <h2 className="text-2xl mb-4 text-center">Contact Me</h2>
//             <form ref={form} onSubmit={sendEmail}>
//               <label className="block mb-2">Name</label>
//               <input
//                 type="text"
//                 name="user_name"
//                 required
//                 className="border w-full p-2 mb-4 rounded"
//               />

//               <label className="block mb-2">Email</label>
//               <input
//                 type="email"
//                 name="user_email"
//                 required
//                 className="border w-full p-2 mb-4 rounded"
//               />

//               <label className="block mb-2">Message</label>
//               <textarea
//                 name="message"
//                 required
//                 className="border w-full p-2 mb-4 rounded"
//               ></textarea>

//               <button
//                 type="submit"
//                 className="w-full bg-violet-400 text-white py-2 rounded"
//               >
//                 Send Message
//               </button>
//             </form>
//             <button
//               onClick={toggleForm}
//               className="absolute top-4 right-4 text-gray-400"
//             >
//               ✕
//             </button>
//           </div>
//         </div>
//       )}
//     </div>
//   );
// }

'use client';

// components/ContactForm.js
import React, { useState, useRef, useEffect } from 'react';
import emailjs from '@emailjs/browser';

export default function ContactForm() {
  const [showForm, setShowForm] = useState(false);
  const form = useRef();

  useEffect(() => {
    emailjs.init('K28m1WFG6tD601fQs'); // Initialize EmailJS with your public key
  }, []);

  const toggleForm = () => {
    setShowForm(!showForm);
  };

  const sendEmail = (e) => {
    e.preventDefault();

    // Manually create the data object from form fields
    const formData = {
      user_name: form.current.user_name.value,
      user_email: form.current.user_email.value,
      message: form.current.message.value,
    };

    emailjs
      .send('service_ckuvtbw', 'template_n3j60va', formData, 'K28m1WFG6tD601fQs')
      .then(
        (result) => {
          alert('Message sent successfully!');
          toggleForm();
          form.current.reset(); // Clear the form fields
        },
        (error) => {
          console.error('Failed to send message:', error);
          alert('Failed to send message. Please try again later.');
        }
      );
  };

  return (
    <div>
      {/* Contact Bubble */}
      <div
        onClick={toggleForm}
        className="fixed bottom-10 right-10 p-4 bg-violet-400 text-white rounded-full cursor-pointer transition transform hover:scale-110 font-droidMono"
      >
        Contact Me
      </div>

      {/* Contact Form Modal */}
      {showForm && (
        <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white p-6 rounded-lg w-80 relative">
            <h2 className="text-2xl mb-4 text-center font-droidMono">Contact Me</h2>
            <form ref={form} onSubmit={sendEmail}>
              <label className="block mb-2 font-droidMono">Name</label>
              <input
                type="text"
                name="user_name"
                required
                className="border w-full p-2 mb-4 rounded"
              />

              <label className="block mb-2 font-droidMono">Email</label>
              <input
                type="email"
                name="user_email"
                required
                className="border w-full p-2 mb-4 rounded"
              />

              <label className="block mb-2 font-droidMono">Message</label>
              <textarea
                name="message"
                required
                className="border w-full p-2 mb-4 rounded"
              ></textarea>

              <button
                type="submit"
                className="w-full bg-violet-400 text-white py-2 rounded font-droidMono"
              >
                Send Message
              </button>
            </form>
            <button
              onClick={toggleForm}
              className="absolute top-4 right-4 text-gray-400"
            >
              ✕
            </button>
          </div>
        </div>
      )}
    </div>
  );
}
