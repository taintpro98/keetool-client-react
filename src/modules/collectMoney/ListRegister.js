import React from 'react';
import ItemRegister from './ItemRegister';
import * as helper from '../../helpers/helper';
import PropTypes from 'prop-types';

class ListRegister extends React.Component {
    constructor(props, context) {
        super(props, context);
    }

    render() {
        return (
            <div className="table-responsive">
                <table className="table">
                    <thead className="text-rose">
                    <tr>
                        <th/>
                        <th>Lớp</th>
                        <th>Thời gian đăng kí</th>
                        <th>Mã học viên</th>
                        <th>Tổng số tiền nộp</th>
                        <th>Đã nhận thẻ</th>
                        <th>Chú thích</th>
                        <th>Ngày nộp</th>
                        <th/>
                    </tr>
                    </thead>
                    <tbody>
                    {this.props.registers.map((register) => {
                        return (
                            <ItemRegister
                                register={register}
                                updateMoney={this.props.updateMoney}
                                nextCode={helper.isClassWait(register.class_name) ? this.props.nextCode : this.props.nextWaitingCode}
                            />
                        );
                    })}

                    </tbody>
                </table>
            </div>
        );
    }
}

ListRegister.propTypes = {
    nextCode: PropTypes.string.isRequired,
    nextWaitingCode: PropTypes.number.isRequired,
    registers: PropTypes.array.isRequired,
    updateMoney: PropTypes.func.isRequired,
};


export default ListRegister;
