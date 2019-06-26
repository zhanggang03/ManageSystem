import React, {Component, lazy} from 'react';
import {Modal} from 'antd';

class ShowModal extends Component {
    handleSubmit = () => {
        this.setState({loading: true});
        setTimeout(() => {
            this.setState({loading: false, visible: false});
        }, 3000);
    };

    handleCancel = () => {
        this.setState({visible: false});
    };

    state = {
        title: '',
        loading: false,
        visible: false,
        pageProps: {
            handleCancel: this.handleCancel,
            handleSubmit: this.handleSubmit,
        },
    };

    openModal = (title, visible, pageProps) => {
        this.setState({
            title: title,
            visible: visible,
            pageProps: {...this.state.pageProps, ...pageProps},
        });
    };

    render() {
        return (
            <div>
                <Modal
                    destroyOnClose="true"
                    visible={this.state.visible}
                    title={this.state.title}
                    onOk={this.handleSubmit}
                    onCancel={this.handleCancel}
                    footer={[]}
                >
                    {React.Children.map(this.props.children, child => {
                        return React.cloneElement(child, {
                            ...this.state.pageProps,
                        });
                    })}
                </Modal>
            </div>
        );
    }
}

export default ShowModal;
