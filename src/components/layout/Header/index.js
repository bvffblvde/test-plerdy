import React from "react";
import Logo from "../../icons/logo";
import {Header} from "./styles";
import Sandwich from "../../icons/sandwich";

class HeaderComponent extends React.Component {
    render() {
        return (
            <Header>
                <Logo/>
                <Sandwich/>
            </Header>
        );
    }
}

export default HeaderComponent;