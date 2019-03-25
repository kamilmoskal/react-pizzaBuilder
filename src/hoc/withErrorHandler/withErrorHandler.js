import React, { Component } from 'react';
import Modal from '../../components/UI/Modal/Modal';

export default (WrappedComponent, axios) => {
  return class withErrorhandler extends Component {
        constructor(props){
            super(props);

            this.reqInteceptor = axios.interceptors.request.use(req => {
                this.setState({error: false});
                return req;
            });
            this.resInteceptor = axios.interceptors.response.use(res => res, error => {
                this.setState({error: true}, () => {
                    setTimeout(() => {
                        this.setState({error: false})
                    }, 2000);
                });
            });

            this.state = {
                error: false
            }
        }
        componentWillUnmount(){
            axios.interceptors.request.eject(this.reqInteceptor);
            axios.interceptors.response.eject(this.resInteceptor);
        }
        render(){
            return (
                <React.Fragment>
                    {this.state.error ? <Modal modalType="Error">Failed to connect to server. Try again later</Modal> : null}
                    <WrappedComponent {...this.props}/>
                </React.Fragment>
            )
        }
    } 
}