// export const UserForm = () => {
//   return (
//     <div>
//       <h1>Send</h1>
//       <form>
//         <label for="name">
//           Name * :
//           <input
//             type="text"
//             name="name"
//             placeholder="Your Name..."
//             pattern="^(?! )[^0-9]+$"
//             title="Name may contain only letters, apostrophe, dash and spaces."
//             required
//             autofocus
//           />
//         </label>
//         <label for="email">
//           Email * :
//           <input
//             type="email"
//             name="email"
//             placeholder="Your Email ..."
//             pattern="^[^\s]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
//             title="Email may contain letters, numbers, an apostrophe, and must be followed by '@' domain name '.' domain suffix."
//           />
//         </label>
//         <label for="tel">
//           Phone number * :
//           <input
//             type="tel"
//             name="tel"
//             placeholder="Your Contact Number +XXXXXXX..."
//             pattern="^\+\d{7,}$"
//             title="Phone number must be digits and can contain spaces, dashes, parentheses and can start with +"
//             required
//           />
//         </label>
//         <label for="message">
//           Message:
//           <textarea
//             name="message"
//             rows="8"
//             placeholder="Enter you message here..."
//           ></textarea>
//         </label>
//       </form>
//     </div>
//   );
// };
