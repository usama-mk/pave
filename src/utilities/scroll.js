export const scrollToTop = () => {
  window.scrollTo({ top: 0, behavior: "smooth" });
};

export const scrollInto=(id)=>{
  document.getElementById(`${id}`).scrollIntoView({
    behavior: 'smooth'
  });
}
