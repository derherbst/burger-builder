import React, { Component } from 'react';

import Aux from '../../../hoc/Aux/Aux';
import Backdrop from '../Backdrop/Backdrop';

import classes from './Modal.scss';

class Modal extends Component {

    shouldComponentUpdate(nextProps, nextState) {
        console.log(nextProps.show !== this.props.show);
        console.log(nextProps.children !== this.props.children);
        return nextProps.show !== this.props.show || nextProps.children !== this.props.children;
    }

    componentDidUpdate(prevProps, prevState, snapshot) {
        console.log(prevProps);
        console.log(this.props);
    }

    render() {
        const { show, modalClosed, children } = this.props;

        return (
            <Aux>
                <Backdrop show={ show } clicked={modalClosed} />
                <div
                    className={ classes.Modal }
                    style={{
                        transform: show ? 'translateY(0)' : 'translateY(-100vh)',
                        opacity: show ? '1' : '0'
                    }}
                >
                    { children }
                </div>
            </Aux>
        );
    }
}

export default Modal;

// const Modal = (props) => {
//     return (
//         <Aux>
//             <Backdrop show={ props.show } clicked={ props.modalClosed } />
//             <div
//                 className={ classes.Modal }
//                 style={{
//                     transform: props.show ? 'translateY(0)' : 'translateY(-100vh)',
//                     opacity: props.show ? '1' : '0'
//                 }}
//             >
//                 { props.children }
//             </div>
//         </Aux>
//     );
// };
//
// const shouldComponentUpdate = (prevProps, nextProps) => {
//     return prevProps.show !== nextProps.show;
// };
//
// export default React.memo(Modal, shouldComponentUpdate);