import {Button} from "reactstrap";

const Header = () => {
    return (
        <div className="text-center">
            <Button
                color="primary"
                className="float-right"
                style={{minWidth: "200px"}}>
                Категории
            </Button>
            <button type="button" className="btn btn-outline-primary">Купить</button>

            <hr/>
            <h1>Что-то похожее на Куфар</h1>
        </div>)
}

export default Header;