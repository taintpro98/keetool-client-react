import React from 'react';
import ButtonGroupAction from '../../components/common/ButtonGroupAction';
import PropTypes from 'prop-types';

class ListSubscribersList extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead className="text-rose">
                    <tr>
                        <th>Tên</th>
                        <th>Số người đăng kí</th>
                        <th>Ngày tạo</th>
                        <th>Ngày cập nhật</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        this.props.subscribersList.map((subscribersListItem, index) => {
                            return (
                                <tr key={index}>
                                    <td>{subscribersListItem.name}</td>
                                    <td>{subscribersListItem.total_subscribers}</td>
                                    <td>{subscribersListItem.created_at}</td>
                                    <td>{subscribersListItem.updated_at}</td>
                                    <td><ButtonGroupAction
                                        delete={this.props.deleteSubscriberList}
                                        object={subscribersListItem.id}
                                        edit={() => this.props.openModal(subscribersListItem)}
                                    /></td>
                                </tr>
                            );
                        })
                    }
                    </tbody>
                </table>
            </div>
        );
    }
}

ListSubscribersList.propTypes = {
    subscribersList: PropTypes.array.isRequired,
    deleteSubscriberList: PropTypes.func.isRequired,
    openModal: PropTypes.func.isRequired,
};

export default ListSubscribersList;
