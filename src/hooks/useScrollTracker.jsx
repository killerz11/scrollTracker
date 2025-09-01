import {useState, useEffect} from "react";

const useScrollTracker = () => {
    const [scrollPosition, setScrollPosition] = useState({
        x: 0,
        y: 0
    })

    useEffect(() => {
        const handleScroll = () =>{
            setScrollPosition({
                x: window.scrollX,
                y: window.scrollY
            });
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    useEffect(() => {
        localStorage.setItem('scrollPosition', JSON.stringify(scrollPosition));
    }, [scrollPosition]);

    useEffect( () => {
        const savedPosition = localStorage.getItem('scrollPosition');
        if(savedPosition){
            const {x, y} = JSON.parse(savedPosition);
            window.scrollTo(x,y);
            setScrollPosition({x, y})
        }
    },[])

    return scrollPosition;

}

export default useScrollTracker

