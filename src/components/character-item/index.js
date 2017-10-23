import React from 'react';
import { connect } from 'react-redux';
import AttackContainer from '../attack-container';
import SaveContainer from '../save-container';
import SpellContainer from '../spell-container';
import SkillContainer from '../skill-container';

class CharacterItem extends React.Component {
  constructor(props){
    super(props);

    this.state = {
      tab: 'attacks'
    };
  }

  render(){
    return(
      <div className="charcter">
        {
          this.state.tab === 'attacks' ?
            <AttackContainer/> :
            this.state.tab === 'saves' ?
              <SaveContainer/> :
              this.state.tab === 'spells' ?
                <SpellContainter/> :
                <SkillContainer/>
        }
      </div>
    );
  }
}

const mapStateToProps = state => ({
  //character: state.currentCharacter
});
const mapDispatchToProps = () => ({});

export default connect(mapStateToProps,mapDispatchToProps)(CharacterItem);