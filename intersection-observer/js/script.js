"use strict";
{
  const targets = document.querySelectorAll("img");

  function callback(entries, obs) {
    console.log(entries);

    entries.forEach((entry) => {
      if (!entry.isIntersecting) {
        return;
      }
      entry.target.classList.add("appear");
      obs.unobserve(entry.target);
    });

    // if (!entries[0].isIntersecting) {
    //   return;
    // }
    // entries[0].target.classList.add("appear");
    // if (entries[0].isIntersecting) {
    //   target.classList.add("appear");
    // } else {
    //   target.classList.remove("appear");
    // }
    // obs.unobserve(entries[0].target);
  }

  const options = {
    threshold: 0.2,
    // rootMargin: "0px 0px -100px",
  };

  const observer = new IntersectionObserver(callback, options);

  targets.forEach((target) => {
    observer.observe(target);
  });
}

// https://www.webcreatorbox.com/tech/intersection-observer
