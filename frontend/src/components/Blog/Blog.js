import "./Blog.css";
import BlogBox from "./BlogBox";

function Blog() {
	return (
		<div className='blogSection container' id='blogs'>
			<div className='row'>
				<div className='col-12'>
					<h4 className='mainHeading'>Articles</h4>
				</div>
				<BlogBox
					tag1={"healthcare"}
					tag2={"heart"}
					tag3={"uia"}
					tag4={"hackathon"}
					title={"How to early detect your diabetes."}
					intro={
						"Self-care mobile application is needed which includes alerts for necessary investigation (HbA1c, fundoscopy, etc.) for the status of glycaemic control and early identification of DM complications."
					}
					readTime={3}
					date={"3rd March, 2021"}
					link={
						"https://dev.to/tusharjain0022/how-i-started-my-web-development-journey-2b8d"
					}
				/>
				<BlogBox
					tag1={"healthcare"}
					tag2={"heart"}
					tag3={"uia"}
					tag4={"hackathon"}
					title={"How to early detect your diabetes."}
					intro={
						"Self-care mobile application is needed which includes alerts for necessary investigation (HbA1c, fundoscopy, etc.) for the status of glycaemic control and early identification of DM complications."
					}
					readTime={3}
					date={"3rd March, 2021"}
					link={
						"https://dev.to/tusharjain0022/how-i-started-my-web-development-journey-2b8d"
					}
				/>
				
			</div>
		</div>
	);
}

export default Blog;
