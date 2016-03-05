var React = require('react');
var ReactDOM = require('react-dom');

var ShowList = React.createClass({
  render: function(){
    var listItems = this.props.names.map(function(friend){
      return <li> {friend} </li>;
    });
    return (
      <div>
        <h3> Friends </h3>
        <ul>
          {listItems}
        </ul>
      </div>
    )
  }
});

var FriendsContainer = React.createClass({
  render: function(){
    var nameba = 'Tyler McGinnis'
    var friends = ['Ean Platter', 'Murphy Randall', 'Merrick Christensen']
    return (
      <div>
        <h3> Name: {nameba} </h3>
        <ShowList names={friends} />
      </div>
    )
  }
});

ReactDOM.render(<FriendsContainer/>, document.getElementById('app'));
