// export default function id() {
//     return <div>/view/ 뒤에 어떤 URL을 넣어도 이동</div>;
// }

import axios from "axios";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";
import { Loader } from "semantic-ui-react";
import Item from '../../src/component/Item';
import Head from 'next/head';

// 1. Router Ver (when refresh, error occured)

// const Post = ({}) => {
//     const router = useRouter();
//     const { id } = router.query;

//     const [item, setItem] = useState({});
//     const [isLoading, setIsLoading] = useState(true);

//     const API_URL = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;

//     function getData() {
//         axios.get(API_URL).then((res) => {
//             console.log(res.data);
//             setItem(res.data);
//             setIsLoading(false);
//         });
//     }

//     useEffect(() => {
//         if (id && id > 0) {
//             getData();
//         }
//     }, []);

//     return (
//         <>
//             {isLoading ? (
//                 <div style={{ padding: "300px 0" }}>
//                     <Loader inline="centered" active>
//                         Loading
//                     </Loader>
//                 </div>
//             ) : (
//                 <Item item={item} />
//             )}
//         </>
//     );
// }

// 2. Server-side Rendering Ver

const Post = ({ item, name }) => {
    return (
        <>
            {item && (
                <>
                    <Head>
                        <meta name="description" content={item.description}/>
                        <title>{item.name}</title>
                    </Head>
                    {name} 환경 입니다.
                    <Item item={item} />
                </>
            )}
        </>
    );
};

export default Post;

export async function getServerSideProps(context) {
    const id = context.params.id;
    const apiUrl = `http://makeup-api.herokuapp.com/api/v1/products/${id}.json`;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        props: {
            item: data,
            name: process.env.name
        },
    };
}