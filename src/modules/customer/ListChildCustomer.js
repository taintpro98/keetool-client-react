import React from 'react';
import PropTypes from 'prop-types';


class ListChildCustomer extends React.Component {
    constructor(props) {
        super(props);
    }

    render() {
        return (
            <div>
                <div className="row">
                    <div className="col-sm-12">
                        <table id="property-table" className="table dataTable" role="grid"
                               aria-describedby="property-table_info">
                            <thead>
                            <tr className="text-rose" role="row">
                                <th>Tên khách hàng</th>
                                <th>Số điện thoại</th>
                                <th>Địa chỉ</th>
                                <th> Ngày mua cuối</th>
                                <th>Tổng tiền hàng</th>
                                <th> Tiền trả hàng</th>
                                <th> Tiền nợ</th>
                                <th/>
                            </tr>
                            </thead>
                            <tbody>
                            {this.props.customersList && this.props.customersList.map(
                                (customer) => {
                                    return (
                                        <tr role="row" className="even" key={customer.id}>
                                            <td className="sorting_1">{customer.name}</td>
                                            <td>{customer.phone}</td>
                                            <td>{customer.address}</td>
                                            <td>{customer.last_order}</td>
                                            <td>{customer.total_money}</td>
                                            <td>{customer.total_paid_money}</td>
                                            <td>{customer.debt}</td>
                                            <td>
                                                <div className="btn-group-action">
                                                    <div style={{display: 'inline-block'}}>
                                                        <a data-toggle="tooltip" title type="button"
                                                           rel="tooltip"
                                                           data-original-title="Sửa"
                                                           onClick={() => this.props.openFormDataInEdit(customer)}
                                                        >
                                                            <i className="material-icons">edit</i>
                                                        </a>
                                                    </div>
                                                </div>
                                            </td>
                                        </tr>

                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>
            </div>
        );
    }
}

ListChildCustomer.propTypes = {
    customersList: PropTypes.array,
    openFormDataInEdit: PropTypes.func,
};


export default ListChildCustomer;