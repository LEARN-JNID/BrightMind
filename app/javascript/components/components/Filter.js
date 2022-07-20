import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import _ from 'lodash';

class Filter extends Component {
  constructor(props) {
    super(props);

    this.state = {
      filters: [],
    };
  }


  filter(e){
    this.setState({filter: e.target.value})
  }

  filterChoice(e){
    this.setState({filterChoice: e.target.value})
  }


  render() {
    let filters = this.state.filters;
    // console.log(filters);
    // console.log('props: ', this.props);

    if(this.state.filter){
      filters = filters.filter( choice =>
      choice.table.name.toLowerCase()
      .includes(this.state.filter.toLowerCase()))
    }

    if(this.state.filterChoice){
      filters = filters.filter( choice =>
      choice.table.tags
      .includes(this.state.filterChoice))
    }

    return (
      <div>
        <select onChange={this.filterChoice.bind(this)} value={this.state.filterChoice}>
          <option value="Mood">Mood</option>
          <option value="Date">Date Time</option>
        </select>

        {/* <input type="text"
               placeholder="Search your mind"
               onChange={this.filter.bind(this)}
        /> */}
      <ul className="journal-list">
        {filters.map(choice => {
          return <li key={choice.table.id} className="col-xs-3">
            <div>
              <Link to={`/postindex/${choice.table.name}`} >
              {/* <img src=${choice.table.image.full}`} /> */}
              </Link>
              </div>
              <Link to={`/${choice.table.id}`} >
            <h3>{choice.table.key}</h3>
            <h4>{choice.table.title}</h4>
            </Link>
          </li>
        })}
      </ul>
      </div>
    );
  }
}

export default Filter;