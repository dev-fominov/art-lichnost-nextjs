import {useEffect} from "react";

export function clickOutside(ref: any, onClickOutside: any) {
    // eslint-disable-next-line react-hooks/rules-of-hooks
    useEffect(() => {
        function handleClickOutside(event: any) {
            if (ref.current && !ref.current.contains(event.target)) {
                onClickOutside();
            }
        }
        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, [ref, onClickOutside]);
}