import {Container, Row, Col} from "reactstrap";
import ListKufar_prod from "../appListKufar_prod/ListKufar_prod";
import axios from "axios";
import {useEffect, useState} from "react";
import ModalKufar_prod from "../appModalKufar_prod/ModalKufar_prod";
import {API_URL} from "../../index";

const Home = () => {
    const [kufar_prods, setKufar_prod] = useState([])

    useEffect(()=>{
        getKufar_prod()
    },[])

    const getKufar_prod = (data)=>{
        axios.get(API_URL).then(data => setKufar_prod(data.data))
    }

    const resetState = () => {
        getKufar_prod();
    };

    return (
        <Container style={{marginTop: "20px"}}>
            <Row>
                <Col>
                    <ListKufar_prod  kufar_prods={kufar_prods} resetState={resetState} newKufar_prod={false}/>
                </Col>
            </Row>
            <Row>
                <Col>
                    <ModalKufar_prod
                    create={true}
                    resetState={resetState}
                    newKufar_prod={true}/>
                </Col>
            </Row>
        </Container>
    )
}

export default Home;