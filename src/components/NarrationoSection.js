// // NarrationSection.jsx
// import React, { useRef, useEffect } from 'react';

// const NarrationSection = ({ id, text, children }) => {
//   const sectionRef = useRef(null);

//   // We will use this ref in the parent component's observer
//   return (
//     <section ref={sectionRef} id={id} data-narration={text}>
//       {children}
//     </section>
//   );
// };

// export default NarrationSection;