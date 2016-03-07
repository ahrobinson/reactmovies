/*
Focused
Independent
Resusable
Small
Testable
*/
var React = require('react');
var ReactDOM = require('react-dom');

var userData = {
  name: "Alon",
  username: "ahrobinson",
  img: "https://media.licdn.com/mpr/mpr/shrinknp_200_200/AAEAAQAAAAAAAAa4AAAAJDJkYTcwNWJmLTFlYTktNDFkYS04NjQ1LTA1ZDM0YjY5MjE1OA.jpg"
};

var ProfileName = React.createClass({
  render: function () {
    return (
      <div> Name: {this.props.name} </div>
    )
  }
});

var ProfileImg = React.createClass({
  render: function () {
    return (
      <img src={this.props.img} style={{height: 100, width: 100}} />
    )
  }
});

var Link = React.createClass({
  changeUrl: function () {
    window.location.replace(this.props.href)
  },
  render: function () {
    return (
      <span style={{color: 'blue', cursor: 'pointer'}}
      onClick={this.changeUrl}>
        {this.props.children}
      </span>
    )
  }
});

var ProfileLink = React.createClass({
  render: function () {
    return (
      <div>
        <Link href={'https://github.com/' + this.props.username}>
          {this.props.username}
        </Link>
      </div>
    )
  }
});

var Avatar = React.createClass({
  render: function () {
    return (
      <div>
        <ProfileName name={this.props.user.name} />
        <ProfileLink username={this.props.user.username} />
        <ProfileImg img={this.props.user.img} />
      </div>
    )
  }
});

ReactDOM.render(<Avatar user={userData} />, document.getElementById('app'));
