import React from "react";
import { withTranslation } from 'react-i18next';

class ErrorBoundary extends React.Component {
    constructor(props) {
        super(props);
        this.state = {hasError: false};
    }

    static getDerivedStateFromError(error) {
        return {hasError: true};
    }

    render() {

        if (this.state.hasError) {
            // Можно отрендерить запасной UI произвольного вида
            return <h1>{this.props.t('Error.Timeout')}</h1>;
        }
        return this.props.children;
    }
}

export default withTranslation()(ErrorBoundary)
