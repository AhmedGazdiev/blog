export const clickDropDown = (toogleRef, contentRef) => {
   document.addEventListener("mousedown", (e) => {
      if (toogleRef.current && toogleRef.current.contains(e.target)) {
         contentRef.current.classList.toggle("active");
         toogleRef.current.classList.toggle("active");
      } else {
         if (contentRef.current && !contentRef.current.contains(e.target)) {
            contentRef.current.classList.remove("active");
            toogleRef.current.classList.remove("active");
         }
      }
   });
};

export const closeDropDown = (toogleRef, contentRef) => {
   contentRef.current.classList.remove("active");
   toogleRef.current.classList.remove("active");
};