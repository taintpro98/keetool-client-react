/**
 * Created by phanmduong on 10/7/17.
 */
import React from 'react';
import {connect} from 'react-redux';
import {bindActionCreators} from 'redux';
import * as shiftRegisterActions from './shiftRegisterActions';
import Select from '../../components/common/Select';
import Loading from '../../components/common/Loading';
import ShiftRegistersWeek from './ShiftRegistersWeek';

class ShiftRegistersContainer extends React.Component {
    constructor(props, context) {
        super(props, context);
        this.state = {
            selectGenId: 0,
            selectBaseId: 0,
            gens: [],
            bases: [],
            currentWeek: 0
        };
        this.onChangeGen = this.onChangeGen.bind(this);
        this.onChangeBase = this.onChangeBase.bind(this);
        this.changeCurrentWeek = this.changeCurrentWeek.bind(this);
    }

    componentWillMount() {
        this.props.shiftRegisterActions.loadGensAndBasesData();
    }

    componentWillReceiveProps(nextProps) {
        if (nextProps.isLoadingGensBases !== this.props.isLoadingGensBases && !nextProps.isLoadingGensBases) {
            this.setState({
                gens: this.getGens(nextProps.gens),
                selectGenId: nextProps.currentGen.id,
                bases: this.getBases(nextProps.bases),
            });
            this.props.shiftRegisterActions.loadShiftRegisters(nextProps.bases[0].id, nextProps.currentGen.id);
        }
        if (nextProps.isLoadingGensBases !== this.props.isLoadingGensBases && !nextProps.isLoadingGensBases) {
            this.setState({
                currentWeek: 0
            });
        }
    }

    getGens(gens) {
        return gens.map(function (gen) {
            return {
                key: gen.id,
                value: 'Khóa ' + gen.name
            };
        });
    }

    getBases(bases) {
        let baseData = bases.map(function (base) {
            return {
                key: base.id,
                value: base.name
            };
        });
        this.setState({selectBaseId: bases[0].id});
        return baseData;
    }

    onChangeGen(value) {
        this.setState({selectGenId: value});
        this.loadDashboard(value, this.state.selectBaseId);
    }

    onChangeBase(value) {
        this.setState({selectBaseId: value});
        this.loadDashboard(this.state.selectGenId, value);
    }

    changeCurrentWeek(by) {
        if (this.state.currentWeek + by >= 0 && this.state.currentWeek + by < this.props.shiftRegisters.length) {
            this.setState({currentWeek: this.state.currentWeek + by});
        }
    }


    render() {
        return (
            <div>
                {this.props.isLoadingGensBases ? <Loading/> :
                    (
                        <div>
                            <div className="row">
                                <div className="col-sm-3 col-xs-5">
                                    <Select
                                        defaultMessage={'Chọn khóa học'}
                                        options={this.state.gens}
                                        disableRound
                                        value={this.state.selectGenId}
                                        onChange={this.onChangeGen}
                                    />
                                </div>
                                <div className="col-sm-3 col-xs-5">
                                    <Select
                                        defaultMessage={'Chọn cơ sở'}
                                        options={this.state.bases}
                                        disableRound
                                        value={this.state.selectBaseId}
                                        onChange={this.onChangeBase}
                                    />
                                </div>
                            </div>
                            {this.props.isLoading ? <Loading/> :
                                <ShiftRegistersWeek
                                    currentWeek={this.state.currentWeek}
                                    shiftRegisters={this.props.shiftRegisters}
                                    changeCurrentWeek={this.changeCurrentWeek}
                                />
                            }
                        </div>
                    )
                }
            </div>
        );
    }
}

function

mapStateToProps(state) {
    return {
        isLoadingGensBases: state.shiftRegisters.isLoadingGensBases,
        isLoading: state.shiftRegisters.isLoading,
        shiftRegisters: state.shiftRegisters.shiftRegisters,
        bases: state.shiftRegisters.bases,
        gens: state.shiftRegisters.gens,
        currentGen: state.shiftRegisters.currentGen,
    };
}

function

mapDispatchToProps(dispatch) {
    return {
        shiftRegisterActions: bindActionCreators(shiftRegisterActions, dispatch)
    };
}

export default connect(mapStateToProps, mapDispatchToProps)(ShiftRegistersContainer);
