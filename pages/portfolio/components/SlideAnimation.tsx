import { ReactNode, useEffect, useRef, useState } from "react";

type Props = {
    content: ReactNode;
    animationClass: string;
};

export default function SlideAnimation(props: Props) {

    const elementRef = useRef<any>();

    const [animationClass, setAnimationClass] = useState('');

    useEffect(() => {
        setAnimationClass(props.animationClass)
        // create an intersection observer to detect when the element is in view
        const observer = new IntersectionObserver((entries) => {
            entries.forEach((entry) => {
                // check if the element is in view
                if (entry.isIntersecting) {
                    // add the "in-view" class to the element to trigger the animation
                    entry.target.classList.add('in-view');
                }
            });
        }, { rootMargin: '0px 0px -150px 0px' });
        // get the child elements of the container
        const elements = elementRef.current.children;

        // start observing the child elements
        for (const element of elements) {
            observer.observe(element);
        }
    }, [elementRef]);


    return (

        <div ref={elementRef}>
            <div className={`${animationClass}`} >
                {props.content}
            </div>
        </div>
    )
}
