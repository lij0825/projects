import { Breadcrumb, Card } from "react-bootstrap";
import LayoutComponent from "../layouts/layoutComponent";
import ButtonComponent from "../components/buttoncomponent";
import InputGroupComponent from "../components/inputgroupcomponent";


const mainStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
    width: "100%",
    height: "100%",
}

const cardStyle = {
    display: "flex",
    flexDirection: "column",
    alignItems: "center",
    justifyContent: "center",
    width: "60%",
    padding: "30px",
    background: "rgba(154, 140, 152, 0.8)",
    borderRadius: "50px",
}

const profile = {
    display: "flex",
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "flex-start",
    width: "100%",
    padding: "25px 0",
}

const thumbStyle = {
    background: "#C4C4C4",
    width: "100px",
    height: "100px",
    borderRadius: "50%"
}

const nameStyle = {
    width: "100px",
    color: "white"
}

const changeBox = {
    alignItems: "center",
    display: "flex",
    flexDirection: "row",
    width: "100%",
    padding: "10px 0",
}

const buttonwrapper = {
    display: "flex",
    flexDirection: "row",
    justifyContent: "center",
    width: "100%",
    padding: "50px"
}

const labelStyle = {
    width: "200px",
    color: "white",
    padding: "0 0px 0 0"
}

function Modifyinformationpage() {
    return (
        <LayoutComponent>
            <div style={mainStyle}>
                <Card style={cardStyle}>
                    <div style={profile}>
                        <div style={thumbStyle} />
                        <div style={changeBox}>
                            <ButtonComponent btn_text="프로필 사진변경" />
                        </div>
                    </div>
                    <div style={changeBox}>
                        <div style={nameStyle}>이름</div>
                        <InputGroupComponent />
                        <ButtonComponent btn_text="중복확인" />
                    </div>
                    <div>
                    <ButtonComponent btn_text="비밀번호 변경" btn_link="/pwdchange"/>
                    </div>
                    <br/>
                    <div>
                    <ButtonComponent btn_text="이메일 인증" btn_link="/email"/>
                    </div>
                    <div style={buttonwrapper}>
                        <ButtonComponent btn_text="뒤로가기" btn_link="/user"/>
                        <ButtonComponent btn_text="확인" btn_link="/user"/>
                    </div>
                </Card>
            </div >
        </LayoutComponent >
    );
}

export default Modifyinformationpage;