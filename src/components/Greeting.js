function foramtName(user) {
  return user.firstName + ' ' + user.lastName;
}

const user  = {
  firstName: 'Lewis',
  lastName: 'Hamilton'
};

function Greeting() {
  return <h1>Hello,{foramtName(user)}!</h1>
}

export default Greeting;
