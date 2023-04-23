import {useEffect, useState} from "react";

export function useIsDesktop() {

    const [isDesktop, setDesktop] = useState();

    useEffect(() => {
        if (window.innerWidth > 1080) {
            setDesktop(true)
        } else {
            setDesktop(false)
        }

        function upDateMedia() {
            if (window.innerWidth > 1080) {
                setDesktop(true)
            } else {
                setDesktop(false)
            }
        }

        window.addEventListener('resize', upDateMedia);
        return () => window.removeEventListener('resize', upDateMedia);
    }, [])


    return {isDesktop}
}