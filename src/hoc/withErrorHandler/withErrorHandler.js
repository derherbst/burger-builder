import React, { Component } from 'react';
import Modal from "../../components/UI/Modal/Modal";
import Aux from '../../hoc/Aux/Aux';

const withErrorHandler = ( Wrapped, axios ) => {
    return class extends Component {
        constructor(props) {
            super(props);
            this.requestInterceptor = axios.interceptors.request.use(req => {
                this.setState({error: null});
                return req;
            });
            this.responseInterceptor = axios.interceptors.response.use(res => res, error => {
                console.log(error);
                this.setState({error: error})
            });
        }

        state = {
            error: null,
        };

        componentWillUnmount() {
            console.log("conflict");
            console.log("after conf");
            axios.interceptors.request.eject(this.requestInterceptor);
            axios.interceptors.response.eject(this.responseInterceptor);
        }

        errorConfirmedHandler = () => {
            this.setState({error: null});
        };

        render() {
            return (
                <Aux>
                    <Modal
                        show={this.state.error}
                        modalClosed={this.errorConfirmedHandler}
                    >
                        { this.state.error && this.state.error.message }
                    </Modal>
                    <Wrapped {...this.props}/>
                </Aux>
            )
        }
    };
};

export default withErrorHandler;