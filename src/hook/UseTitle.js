import { useEffect } from "react"

const useTitle = title =>{
    useEffect(() => {
        document.title = `${title} - Art Masters`;
    }, [title])
}

export default useTitle;