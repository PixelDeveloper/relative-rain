import React from 'react';
import { bindActionCreators } from 'redux';
import { connect } from 'react-redux';
import { request, add } from '../../modules/equipment';
import EquipmentForm from './equipmentInput';
import {EquipmentCategoryDropDown}  from '../inputcomponents/dropdown'

const defaultSubCategoryId = 3;

class EquipmentComponent extends React.Component {

  componentWillMount() {
    this.props.request(0);
  }

  componentWillReceiveProps() {
    if (this.props.addingEquipment) {
      this.props.request(this.props.equipmentCategoryTypeId);
    }
  }

  submit = values => {
    console.log(values);

    // TODO: need proper validation for the drop down lists. Feck.
    if(!this.props.equipmentCategoryTypeId) {
      return false;
    }

    if(!values.equipmentType){
      return false;
    }

    values.equipmentCategoryTypeId = this.props.equipmentCategoryTypeId;
    this.props.add(values);
  };

  submitSelection = values => {
    console.log(values);
    this.props.request(values.dropdownSelect.typeId);
  };

  render() {
    return (
      <div>
        <div>
          <span className="equipmentTitle">Equipment -> </span>
          <div className="equipmentCategories">
            <EquipmentCategoryDropDown
              onChange={this.submitSelection}
              items={this.props.equipmentCategories}
              placeholder="Category"
            />
          </div>
        </div>
        <div className="equipmentInputContainer">
          <div className="equipmentForm">
            <EquipmentForm
              onSubmit={this.submit}
              items={this.props.equipmentTypes}
              placeholder={
                this.props.equipmentTypes.length == 0
                  ? 'Choose category above'
                  : 'Type'
              }
            />
          </div>
          <div className="equipmentInventory">
            <Equipment {...this.props} />
          </div>
          
        </div>
      </div>
    );
  }
}

const Equipment = props => (
  <div>
    <RenderEquipmentTable {...props} />
  </div>
);

const RenderEquipmentTable = props => (
  <table className="table">
    <thead>
      <tr>
        <th>Name</th>
        <th>Category</th>
      </tr>
    </thead>
    <tbody>
      {props.equipments.map(equipment => (
        <tr key={equipment.id}>
          <td>{equipment.name}</td>
          <td>{equipment.equipmentType.name}</td>
        </tr>
      ))}
    </tbody>
  </table>
);

const mapStateToProps = state => ({
  isGettingEquipment: state.equipments.isGettingEquipment,
  equipments: state.equipments.equipments,
  addingEquipment: state.equipments.addingEquipment,
  equipmentTypes: state.equipments.equipmentTypes,
  equipmentCategoryTypeId: state.equipments.equipmentCategoryTypeId,
  equipmentCategories: state.equipments.equipmentCategories,
  invalidText: ""
});

const mapDispatchToProps = dispatch =>
  bindActionCreators(
    {
      request,
      add
    },
    dispatch
  );

export default connect(mapStateToProps, mapDispatchToProps)(EquipmentComponent);
