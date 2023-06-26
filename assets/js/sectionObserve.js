const allSection = document.querySelectorAll('.section');
// console.log(allSection);
const getSection = function(entries, observer){
  const [entry] = entries;
  // console.log(entry);
  if(!entry.isIntersecting) return;
  entry.target.classList.add(`show`);
}
const sectionObserver = new IntersectionObserver(
  getSection, {
    root : null,
    threshold: 0.15,
  }
)
allSection.forEach(function(section){
  sectionObserver.observe(section);
  section.classList.remove(`show`);
});