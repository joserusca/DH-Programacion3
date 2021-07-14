import React from 'react';
import Category from './Category';
import Card from './Card';

function PageContent(params) {
    return (
        <React.Fragment>

				{/* <!-- Begin Page Content --> */}
				<div className="container-fluid">

					{/* <!-- Page Heading --> */}
					<div className="d-sm-flex align-items-center justify-content-between mb-4">
						<h1 className="h3 mb-0 text-gray-800">App Dashboard</h1>
					</div>

					{/* <!-- Content Row --> */}
					<div className="row">

						<Card  titulo="Products in database" subtitulo="135" icono="fa-clipboard-list" color="primary"/>
						<Card  titulo="Amount in products" subtitulo="$546.456" icono="fa-dollar-sign" color="success"/>
						<Card  titulo="Users quantity" subtitulo="34" icono="fa-user-check" color="warning"/>
						
					</div>

					{/* <!-- Content Row --> */}
					<div className="row">
						{/* <!-- Last Product in DB --> */}
						<div className="col-lg-6 mb-4">
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Last product in Data Dase</h6>
								</div>
								<div className="card-body">
									<div className="text-center">
										<img className="img-fluid px-3 px-sm-4 mt-3 mb-4" style={{width: 25+"rem"}} src="/images/product_dummy.svg" alt=""/>
									</div>
									<p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Dolores, consequatur explicabo officia inventore libero veritatis iure voluptate reiciendis a magnam, vitae, aperiam voluptatum non corporis quae dolorem culpa exercitationem ratione?</p>
									<a target="_blank" rel="nofollow" href="/">View product detail</a>
								</div>
							</div>
						</div>

						{/* <!-- Categories in DB --> */}
						<div className="col-lg-6 mb-4">						
							<div className="card shadow mb-4">
								<div className="card-header py-3">
									<h6 className="m-0 font-weight-bold text-primary">Categories in Data Base</h6>
								</div>
								<div className="card-body">
									<div className="row">
										
										< Category />
										< Category />
										< Category />
										< Category />
										< Category />
										< Category />

									</div>
								</div>
							</div>
						</div>
					</div>
				</div>
				{/* <!-- /.container-fluid --> */}
		

		</React.Fragment>
    );
}


export default PageContent;