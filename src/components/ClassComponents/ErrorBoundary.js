import React from 'react';
import { connect } from 'react-redux';

import { setErrors } from '../../store/actions/errorActions';

class ErrorBoundary extends React.Component {
    componentDidCatch(error, info) {
        this.props.setErrors(error);
    }
    render() {
        const {
            hasError,
            error: { message },
        } = this.props.errors;
        if (hasError) {
            return <h1>{message}</h1>;
        }
        return this.props.children;
    }
}

const mapStateToProps = state => ({
    errors: state.errors,
});

export default connect(mapStateToProps, { setErrors })(ErrorBoundary);
