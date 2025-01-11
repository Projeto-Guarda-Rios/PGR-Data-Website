import PropTypes from "prop-types";
import './App.css';

function Header(props) {
    return (
        <div className="header">
            <img src="https://data.guarda-rios.pt/PGR_Logo.png" alt="Projeto Guarda Rios - Logo" className="pgr-logo" />
            <div className="header-title">{props.headerTitle}</div>
        </div>
    );
}

Header.propTypes = {
    headerTitle: PropTypes.string.isRequired
}

Header.defaultProps = {
    headerTitle: "Gráficos",
}

export default Header;
