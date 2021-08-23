import React from 'react'
 import Router from './Router';

function App() {
	return(
	<>
	<Router />
	</>
	// const [name, setName] = useState();
	// const [email, setEmail] = useState();
	// const [profilePic, setProfilePic] = useState();
	// const [isLoggedIn, setIsLoggedIn] = useState(false);
	// const [cookies, setCookie, removeCookie] = useCookies(["SAPISID"]);
	
	// // function handleSetCookie() {
	// // 	setCookie("SAPISIDGOOGLE", { path: 'http://localhost:3000' });
	// //   }

	// function handleRemoveCookie() {
	// 	removeCookie("SAPISID", {path: '/', domain: 'accounts.google.com', domain: '.google.com', secure: true});
	//   }

	// const responseGoogle = async (response) => {
	// 	console.log(response);
	// 	const {
	// 		profileObj: { name, email, imageUrl },
	// 	} = response;
	// 	setName(name);
	// 	setEmail(email);
	// 	setProfilePic(imageUrl);
	// 	setIsLoggedIn(true);
	// 	const data = {
	// 		name: name,
	// 		email: email
	// 	}
	// 	// console.log(`${name} ${email} ${imageUrl} aqui`);
	// 	await axios.post('http://10.0.4.180:8276/googlestorage/save', data);
	// 	removeCookie("SAPISID", {path: '/', domain: 'accounts.google.com', domain: '.google.com'});
		
	// };
	// return (
	// 	<div className="container">
	// 		<CookiesProvider>

	// 		<GoogleLogin
	// 			clientId="39243479532-rd8s73o6e9s87ciqbi6pj65ogrfl70o5.apps.googleusercontent.com"
	// 			buttonText="Continuar com o Google"
	// 			onSuccess={responseGoogle}
	// 			onFailure={responseGoogle}
	// 			cookiePolicy={'single_host_origin'}
	// 			// render={renderProps => (
	// 			// 	<button onClick={renderProps.onClick} disabled={renderProps.disabled}>Continuar com o Google</button>
	// 			// )}
	// 			isSignedIn={true}
	// 		/>
	// 		{isLoggedIn ? (
	// 			<div style={{ textAlign: "center" }}>
	// 				<h1>User Information</h1>
	// 				<img className="profile" src={profilePic} alt="Profile" />
	// 				<p>Name: {name}</p>
	// 				<p>Email: {email}</p>
	// 			</div>
	// 		) : (
	// 			 ""
	// 			)}
	// 			{/* <button onClick={handleSetCookie}>Set Cookie</button> */}
	// 			{/* <button onClick={handleRemoveCookie}>Remove Cookie</button> */}
	// 		</CookiesProvider>
	// 	</div>
	);
}

// 39243479532-rd8s73o6e9s87ciqbi6pj65ogrfl70o5.apps.googleusercontent.com
// 6KhzBkcz-Qom9FVvhdJ9HVkk
export default App;
