import './Login.css'

const Login = () => {
	return (
		<div className='loginCOntainer'>

			<form className="loginForm">
				
				{/* <PageHeader
					head="Start your journey"
					text="Gain access to your Profile, Resources and Test."
				/> */}
				<div className="loginEmailWrap">
					<input
						className='emailInput'
						type="text"
						placeholder="Enter email address"
						label="Email address"
						name="email"
						value="values.email"
						onChange={()=>{}}
						// errorText={touched.email ? errors.email : ""}
					/>
				</div>
				<div className="loginPasswordWrap">
					<input
						className='passwordInput'
						// type={showPassword ? "text" : "password"}
						placeholder="Enter password"
						label="Password"
						name="password"
						icon={
							<eyeIcon
								onClick={() => {
									// setShowPassword(!showPassword);
								}}
							/>
						}
						value="values.password"
						onChange={()=>{}}
						// errorText={touched.password ? errors.password : ""}
					/>
				</div>

				<div className="loginButtonWrapper">
					<button
						// buttonName={loading ? "" : "Start journey"}
						main="fill"
						type="submit"
						loading="loading"
					/>
				</div>
			</form>
		</div>
	);
};
export default Login;
