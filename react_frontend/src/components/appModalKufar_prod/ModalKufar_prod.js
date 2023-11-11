import {Fragment, useState} from "react";
import {Button, Modal, ModalHeader, ModalBody} from "reactstrap";
import Kufar_prodForm from "../appKufar_prodForm/Kufar_prodForm";

const ModalKufar_prod = (props) => {
    const [visible, setVisible] = useState(false)
    var button = <Button onClick={() => toggle()}>Редактировать</Button>;

    const toggle = () => {
        setVisible(!visible)
    }

    if (props.create) {
        button = (
            <Button
                color="primary"
                className="float-right"
                onClick={() => toggle()}
                style={{minWidth: "200px"}}>
                Добавить продажу
            </Button>
        )
    }
    return (
        <Fragment>
            {button}
            <Modal isOpen={visible} toggle={toggle}>
                <ModalHeader
                    style={{justifyContent: "center"}}>{props.create ? "Добавить товар" : "Редактировать товар"}</ModalHeader>
                <ModalBody>
                    <Kufar_prodForm
                        kufar_prod={props.kufar_prod ? props.kufar_prod : []}
                        resetState={props.resetState}
                        toggle={toggle}
                        newKufar_prod={props.newKufar_prod}
                    />
                </ModalBody>
            </Modal>
        </Fragment>
    )
}
export default ModalKufar_prod;