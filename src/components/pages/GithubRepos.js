import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import { connect } from 'react-redux';
import { bindActionsCreators } from 'redux';
import { fetchRepos } from  '../../actions/github-actions';

class GithubRepos extends Component{
  constructor(props){
    super(props);

    this.props.fetchRepos();
    //Props from React-Router
    //console.log(this.props);
  }

  render(){
    return (
      <div className="github_repos">
        This is a list of Github Repos
        <br/>
        {this.props.github.isFetching && "loading..."}
        {
          this.props.github.items.length > 0 &&
          <div>You have {this.props.github.items.length} repos</div>
        }
        {
          this.props.github.error != null &&
          <div>
            {this.props.github.error}
          </div>
        }
        <br />
      </div>
    )
  }
}

const mapStateToProps = (state) => ({
    github: state.github
});


const mapDispatchToProps = {
  fetchRepos,
};

export default connect(mapStateToProps, mapDispatchToProps)(GithubRepos);