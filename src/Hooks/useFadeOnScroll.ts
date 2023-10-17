import { RefObject, useEffect } from 'react';

function useFadeOnScroll( target: RefObject<HTMLElement>, classStyle: string) {
  useEffect(() => {    
    function callback(entrys :IntersectionObserverEntry[]) {
      entrys.forEach(entry => {
        if (entry.isIntersecting) {
          entry.target.classList.add(classStyle);
        }else{
          entry.target.classList.remove(classStyle);
        }
      });
    }

    const options = {
      root: null,
      rootMargin: "0px",
      threshold: 0.3
    };

    const observer = new IntersectionObserver(callback, options);

    if (target && target.current) {
        observer.observe(target.current);
    }

    return () => {
        if (target && target.current) {
            
            observer.unobserve(target.current);
        }
      };

  }, [target, classStyle]);
}

export default useFadeOnScroll;