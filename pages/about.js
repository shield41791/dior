import { Button, Divider, Form, FormButton, Header, Input, List, TextArea } from "semantic-ui-react";
import Head from "next/head";

export default function About() {
    return (
        // <div>pages 폴더 아래에 생성하면, 별다른 설정없이 라우팅된다.</div>;
        <>
            <Head>
                <meta name="twitter:card" content="summary_large_image"/>
                <meta name="twitter:site" content="@nytimes"/>
                <meta name="twitter:creator" content="@SarahMaslinNir"/>
                <meta name="twitter:title" content="Parade of Fans for Houston’s Funeral"/>
                <meta name="twitter:description"
                content="NEWARK - The guest list and parade of limousines with celebrities emerging from them seemed more suited to a red carpet event in Hollywood or New York than than a gritty stretch of Sussex Avenue near the former site of the James M. Baxter Terrace public housing project here."/>
                <meta name="twitter:image"
                    content={ process.env.logoPath }/>
            </Head>
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