import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



function NoAnimationExample() {
    return (
        <Tabs
            defaultActiveKey="home"
            transition={false}
            id="noanim-tab-example"
            className="mb-3"
        >
            <Tab eventKey="home" title="Overview">
                <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse varius enim in eros elementum tristique. Duis cursus, mi quis viverra ornare, eros dolor interdum nulla, ut commodo diam libero vitae erat.
                    <br /> <br /> Aenean faucibus nibh et justo cursus id rutrum lorem imperdiet. Nunc ut sem vitae risus tristique posuere.
                </p>
            </Tab>
            <Tab eventKey="profile" title="Impact">
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis doloremque nulla repudiandae cupiditate, deleniti, ab eius minima architecto vel, c!</p>
            </Tab>
            <Tab eventKey="contact" title="What You Get" >
                <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Praesentium facilis doloremque nulla repudiandae cupiditate, deleniti, ab eius minima architecto vel, cum nihil op</p>
            </Tab>
        </Tabs>
    );
}

export default NoAnimationExample;