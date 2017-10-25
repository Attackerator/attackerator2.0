import './_dashboard.scss';
import React from 'react';
import {connect} from 'react-redux';
import CharacterItem from '../character-item';
import { BrowserRouter as Router,Route,Link } from 'react-router-dom';
import * as charActions from '../../actions/character';
import { get_cookie } from '../../lib/helper';

class DashboardContainer extends React.Component {
  constructor(props){
    super(props);
  }

  componentWillMount() {
    let lastChar = get_cookie('characterId');
    this.props.getCharacterList()
      .then({
        if(lastChar){
          this.props.getCharacter(lastChar);
        }
      });
  }

  render(){
    return (
      <div className='dashboard-container'>
        <div>
          <span>Icon?</span>
        </div>
        <h2>I am a Dashboard</h2>
        <nav>
          <ul>
            <li>Profile</li>
            <li><Link to={'/login'} onClick={this.logOut}>Log Out</Link></li>
            <li><a id="newCharacter" href="#" onClick={this.toggleNew}>New Character</a></li>
            {
              this.props.list.map(character => {
                return(
                  <li key={character.characterId}>{character.name}</li>
                );
              })
            }
          </ul>
          </nav>
        <CharacterItem/>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  list: state.defaultStateReducer.characters
});
const mapDispatchToProps = (dispatch) => ({
  getCharacterList: () => dispatch(charActions.getCharacterListRequest()),
  getCharacter: (id) => dispatch(charActions.getCharacterRequest(id)),
  postCharacter: (id,character) => dispatch(charActions.postCharacterRequest(character)),
});

export default connect(mapStateToProps,mapDispatchToProps)(DashboardContainer);
