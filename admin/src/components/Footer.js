import React from 'react'

export default function Footer() {
    return (
        <footer className="footer">
			<div className="container">
				<div className="row text-muted">
					<div className="text-center">
						<p className="mb-0">
                            &copy; {new Date().getFullYear()} SPNetwork
						</p>
					</div>
					
				</div>
			</div>
		</footer>
    )
}
