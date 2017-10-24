import './_attack-item.scss';

import React from 'react';

export default class AttackItem extends React.Component {
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div className="attackItem">
        <button className="roll">Roll</button>
        <h3>{this.props.attack.name}</h3>
        <div className="hideMe">
          <ul>
          <ul>
            <li>{this.props.attack.description}</li>
            <li>Damage: {this.props.attack.diceCount}d{this.props.attack.diceType} + {this.props.attack.damageBonus}</li>
            <li>Damage Type: {this.props.attack.damageType}</li>
            <li>Hit Bonus: {this.props.attack.toHitBonus}</li>
            <li>{this.props.attack.stat}</li>
          </ul>
          </ul>
          <button className="edit">edit</button>
          <button className="delete">delete</button>
        </div>
      </div>
    );
  }
}
