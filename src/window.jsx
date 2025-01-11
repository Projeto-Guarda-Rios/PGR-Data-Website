import PropTypes from "prop-types";
import HomePage from "./Pages/homePage.jsx";
import GraficoGeral from "./Pages/graficoGeral.jsx";
import GraficoGranja from "./Pages/graficoGranja.jsx";
import GraficoDouro from "./Pages/graficoDouro.jsx";
import GraficoTejo from "./Pages/graficoTejo.jsx";

function Window(props) {
    if (props.currentPage === 0) {
        return (
            <HomePage />
        );
    } else if (props.currentPage === 1) {
        return (
            <GraficoGeral />
        );
    } else if (props.currentPage === 2) {
        return (
            <GraficoGranja />
        );
    } else if (props.currentPage === 3) {
        return (
            <GraficoDouro />
        );
    } else if (props.currentPage === 4) {
        return (
            <GraficoTejo />
        );
    }
}

Window.propTypes = {
    currentPage: PropTypes.number.isRequired
}

Window.defaultProps = {
    currentPage: -1
}

export default Window;
