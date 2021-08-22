import { Header } from "semantic-ui-react"
import Gnb from "./Gnb"

export default function Top() {
    return (
        <div>
            <div style={{ display: "flex", paddingTop: 20}}>
                <div style={{ flex: "250px 0 0" }}>
                    <img
                        src={process.env.logoPath}
                        alt="logo"
                        style={{ display: "block", width: 300}}
                    />
                </div>
                {/* <Header as="h1">Yahoo!</Header> */}
            </div>
            <Gnb />
        </div>
    );
}
