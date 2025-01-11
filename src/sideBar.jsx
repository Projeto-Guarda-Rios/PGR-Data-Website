import PropTypes from "prop-types";
import './App.css';

function SideBar(props) {
    return (
        <div className="side-bar">
            <div className={props.currentPage == 0 ? "side-bar-element-selected" : "side-bar-element"} onClick={() => props.updatePageFunc(0)}>Gráfico Geral</div>
            <div className={props.currentPage == 1 ? "side-bar-element-selected" : "side-bar-element"} onClick={() => props.updatePageFunc(1)}>Gráfico Ribeira da Granja</div>
            <div className={props.currentPage == 2 ? "side-bar-element-selected" : "side-bar-element"} onClick={() => props.updatePageFunc(2)}>Gráfico Rio Douro</div>
            <div className={props.currentPage == 3 ? "side-bar-element-selected" : "side-bar-element"} onClick={() => props.updatePageFunc(3)}>Gráfico Rio Tejo</div>
        </div>
    );
}

SideBar.propTypes = {
    currentPage: PropTypes.number.isRequired,
    updatePageFunc: PropTypes.func.isRequired
}

SideBar.defaultProps = {
    currentPage: -1
}

export default SideBar;
