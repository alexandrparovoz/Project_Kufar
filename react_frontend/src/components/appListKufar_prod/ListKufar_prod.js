import {Table} from "reactstrap";
import ModalKufar_prod from "../appModalKufar_prod/ModalKufar_prod";
import RemoveKufar_prod from "../appRemoveKufar_prod/RemoveKufar_prod";
import ModalPhoto from "../appPhotoModal/ModalPhoto";

const ListKufar_prod = (props) => {
    const {kufar_prods} = props
    return (
        <Table dark>
            <thead>
            <tr>
                <th>Name</th>
                <th>Email</th>
                <th>Prod_description</th>
                <th>Phone</th>
                <th>Pub_date</th>
                <th>Photo</th>
                <th></th>
            </tr>
            </thead>
            <tbody>
            {!kufar_prods || kufar_prods.length <= 0 ? (
                <tr>
                    <td colSpan="6" align="center">
                        <b>Пока ничего нет</b>
                    </td>
                </tr>
            ) : kufar_prods.map(kufar_prod => (
                    <tr key={kufar_prod.pk}>
                        <td>{kufar_prod.name}</td>
                        <td>{kufar_prod.email}</td>
                        <td>{kufar_prod.prod_description}</td>
                        <td>{kufar_prod.phone}</td>
                        <td>{kufar_prod.pub_date}</td>
                        {/*<td><ModalPhoto*/}
                        {/*    kufar_prod={kufar_prod}*/}
                        {/*/></td>*/}
                        <td>
                            <ModalKufar_prod
                                create={false}
                                kufar_prod={kufar_prod}
                                resetState={props.resetState}
                                newKufar_prod={props.newKufar_prod}
                            />
                            &nbsp;&nbsp;
                            <RemoveKufar_prod
                                pk={kufar_prod.pk}
                                resetState={props.resetState}
                            />
                        </td>
                    </tr>
                )
            )}
            </tbody>
        </Table>
    )
}

export default ListKufar_prod