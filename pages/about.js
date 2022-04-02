import { Button, Divider, Form, FormButton, Header, Input, List, TextArea } from "semantic-ui-react";
import Head from "next/head";
import { useEffect } from 'react'
import { useRouter } from 'next/router'
import Helmet from "react-helmet";

export default function About({ imageUrl }) {
    const router = useRouter()

    const getParamFromUrl = (url, param) => {
        const arr = url && param && url.match(new RegExp(`[&?]{1}${param}=([^&#]*)`))
        return (arr && decodeURIComponent(arr[1])) || null
    }

    useEffect(() => {
        // add image meta
        // const meta = document.createElement('meta')
        // meta.name = 'twitter:image'
        // meta.content = imageUrl
        // document.getElementsByTagName('head')[0].appendChild(meta)

        // redirect
        window.location.href = 'https://www.naver.com'
    }, [])

    return (
        // <div>pages 폴더 아래에 생성하면, 별다른 설정없이 라우팅된다.</div>;
        <>
            <Helmet>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:title" content="useEffect metatag test"/>
                <meta name="twitter:description"
                content="test 04.01 18:10"/>
                <meta name="twitter:image" content={ getParamFromUrl(router.asPath, 'img') }/>
            </Helmet>
            <div>
                <Header as="h3" style={{ paddingTop: 40 }} color="teal">
                    회사 소개
                </Header>
                <Divider />
                <List>
                    <List.Item>
                        <List.Icon name='users' />
                        <List.Content>Semantic UI</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='marker' />
                        <List.Content>New York, NY</List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='mail' />
                        <List.Content>
                            <a href='mailto:jack@semantic-ui.com'>jack@semantic-ui.com</a>
                        </List.Content>
                    </List.Item>
                    <List.Item>
                        <List.Icon name='linkify' />
                        <List.Content>
                            <a href='http://www.semantic-ui.com'>semantic-ui.com</a>
                        </List.Content>
                    </List.Item>
                </List>
                <Header as="h3" style={{ paddingTop: 40 }} color="teal">
                    문의 사항
                </Header>
                <Divider />
                <Form>
                    <Form.Field
                        id='form-input-control-title'
                        control={Input}
                        label='제목'
                        placeholder='제목을 입력하세요.'
                    />
                    <Form.Field
                        id='form-textarea-control-content'
                        control={TextArea}
                        label='내용'
                        placeholder='내용을 입력하세요'
                    />
                    <Form.Field
                        id='form-button-control-submit'
                        control={FormButton}
                        content='보내기'
                        color='green'
                    />
                </Form>
                <Divider />
            </div>
        </>
    )
}

About.getInitialProps = () => {
  return { imageUrl: process.env.logoPath };
};