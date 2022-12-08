import React from "react";
import PopUp from "../../pop-up";
import {Card, LogoArea, LogoCompany, TextAbout, Title} from "./styles";
import {colors} from "../../theme/default/styles";
import SoftServeLogo from "../../icons/other-company-logo/softserve";
import SubaruLogo from "../../icons/other-company-logo/sybaru";

class Dashboard extends React.Component {
    render() {
        return (
            <div>
                <Card>
                    <Title>
                        How to do a Website Audit to Improve SEO & Conversions
                    </Title>
                    <TextAbout>
                        Usability auditing with the Plerdy tool is a comprehensive expert assessment of your website
                        based on a profound study of user behavior registered on it. Plerdy will provide you with
                        crucial data based on which you will be able to run an efficient usability audit of your
                        website, identify and fix SEO issues, and subsequently lead it to higher positions in search.
                    </TextAbout>
                    <TextAbout color={colors.sooGray} marginTop="10px">
                        Thus, you'll compile a list of flaws in your website interface, navigation, and conversion path
                        that can eventually affect its micro and macro conversion rates.
                    </TextAbout>
                    <PopUp isModalOpen={true}/>
                    <TextAbout textAlign="center">
                        Trusted by some of the world's largest enterprises
                    </TextAbout>
                    <LogoArea>
                        <LogoCompany src={require('../../icons/default-icons/softServeLogo.svg').default}  alt="soft-serve-logo"/>
                        <LogoCompany src={require('../../icons/default-icons/subaruLogo.svg').default}  alt="subaru-logo"/>
                        <LogoCompany src={require('../../icons/default-icons/anex-tour-logo.svg').default}  alt="anex-tour-logo"/>
                        <LogoCompany src={require('../../icons/default-icons/promLogo.svg').default}  alt="prom-logo"/>
                        <LogoCompany src={require('../../icons/default-icons/urkPostLogo.svg').default}  alt="ukr-post-logo"/>
                    </LogoArea>
                </Card>
            </div>
        );
    }
}

export default Dashboard;