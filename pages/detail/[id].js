import axios from "axios";
import Item from '../../src/component/Item';
import Head from 'next/head';
import { useRouter } from 'next/router';
import { Loader } from "semantic-ui-react";

// Static ver

const Post = ({ item, name }) => {
    const router = useRouter();

    console.log(router.isFallback);

    if (router.isFallback) {
        return (
            <div style={{padding: "100px 0"}}>
                <Loader active inline="centered">
                    Loading
                </Loader>
            </div>
        );
    }

    return (
        <>
            {item && (
                <>
                    <Head>
                        <meta name="description" content={item.description} />
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

export async function getStaticPaths() {
    // 모든 파일(최신)을 정적 생성 할 수 있도록 설정하기 위해, api를 통해 전체 아이템리스트를 불러온다. 
    const apiUrl = process.env.apiUrl;
    const res = await axios.get(apiUrl);
    const data = res.data;

    return {
        // paths: [
        //     { params: { id: '740' } },
        //     { params: { id: '730' } },
        //     { params: { id: '729' } }
        // ],

        // id를 지정하여 넣지 않고, 요청한 id에 대해 모두 정적생성을 하도록 한다. 
        // 위와 같은 형태(배열)이어야 하므로 map 함수를 사용하였다.
        paths : data.map(item => ({
            params : {
                id: item.id.toString(),
            }
        })),
        fallback: true
    }
}

export async function getStaticProps(context) {
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