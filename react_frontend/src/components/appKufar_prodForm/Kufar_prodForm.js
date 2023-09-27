import {useEffect, useState} from "react";
import {Button, Form, FormGroup, Input, Label} from "reactstrap";
import axios from "axios";
import {API_URL} from "../../index";

const Kufar_prodForm = (props) => {
    const [kufar_prod, setKufar_prod] = useState({})

    const onChange = (e) => {
        const newState = kufar_prod
        if (e.target.name === "file") {
            newState[e.target.name] = e.target.files[0]
        } else newState[e.target.name] = e.target.value
        setKufar_prod(newState)
    }

    useEffect(() => {
        if (!props.newKufar_prod) {
            setKufar_prod(kufar_prod => props.kufar_prod)
        }
        // eslint-disable-next-line
    }, [props.kufar_prod])

    const defaultIfEmpty = value => {
        return value === "" ? "" : value;
    }

    const submitDataEdit = async (e) => {
        e.preventDefault();
        const result = await axios.put(API_URL + kufar_prod.pk, kufar_prod, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(() => {
                props.resetState()
                props.toggle()
            })
    }
    const submitDataAdd = async (e) => {
        e.preventDefault();
        const data = {
            name: kufar_prod['name'],
            email: kufar_prod['email'],
            prod_description: kufar_prod['prod_description'],
            phone: kufar_prod['phone'],
            pub_date: kufar_prod['pub_date'],
            // photo: "/",
            // file: kufar_prod['file']
        }
        // eslint-disable-next-line
        const result = await axios.post(API_URL, data, {headers: {'Content-Type': 'multipart/form-data'}})
            .then(() => {
                props.resetState()
                props.toggle()
            })
    }
    return (
        <Form onSubmit={props.newKufar_prod ? submitDataAdd : submitDataEdit}>
            <FormGroup>
                <Label for="name">Name:</Label>
                <Input
                    type="text"
                    name="name"
                    onChange={onChange}
                    defaultValue={defaultIfEmpty(kufar_prod.name)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="email">Email</Label>
                <Input
                    type="email"
                    name="email"
                    onChange={onChange}
                    defaultValue={defaultIfEmpty(kufar_prod.email)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="prod_description"> Prod_description:</Label>
                <Input
                    type="text"
                    name="prod_description"
                    onChange={onChange}
                    defaultValue={defaultIfEmpty(kufar_prod.prod_description)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="phone">Phone:</Label>
                <Input
                    type="text"
                    name="phone"
                    onChange={onChange}
                    defaultValue={defaultIfEmpty(kufar_prod.phone)}
                />
            </FormGroup>
            <FormGroup>
                <Label for="pub_date">Public date:</Label>
                <Input
                    type="text"
                    name="pub_date"
                    onChange={onChange}
                    defaultValue={defaultIfEmpty(kufar_prod.pub_date)}
                />
            </FormGroup>
            {/*<FormGroup>*/}
            {/*    <Label for="photo">Photo:</Label>*/}
            {/*    <Input*/}
            {/*        type="file"*/}
            {/*        name="file"*/}
            {/*        onChange={onChange}*/}
            {/*        accept='image/*'*/}
            {/*    />*/}
            {/*</FormGroup>*/}
            <div style={{display: "flex", justifyContent: "space-between"}}>
                <Button>Send</Button> <Button onClick={props.toggle}>Cancel</Button>
            </div>
        </Form>
    )
}

export default Kufar_prodForm;

