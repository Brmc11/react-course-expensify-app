const user = {
	name: 'Benjamin R.S. McGrath', 
	age: 32,  
	location: 'Jacksonville, FL'
};

function getLocation(location) {
	if (location) {
		return <p>Location: { location }</p>; 
	}
}

const template2 = (
	<div>
		<h1>Name: { user.name ? user.name : 'Anonymous' }</h1>
		{ (user.age && user.age >= 18) && <p>Age: { user.age }</p>}
		{ getLocation(user.location)}
	</div>
);