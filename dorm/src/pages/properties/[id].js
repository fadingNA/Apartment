import {useRouter} from "next/router";

export default function Property(){
    const router = useRouter();
    const {id} = router.query;
    return <p>Product: {id}</p>
}