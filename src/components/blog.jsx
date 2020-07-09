import React, { Component } from 'react'

export default class Blog extends Component {
  render() {
    return (
      <div>
        <section className="colorlib-blog" data-section="blog">
			<div className="colorlib-narrow-content">
				<div className="row">
					<div className="col-md-6 col-md-offset-3 col-md-pull-3 animate-box" data-animate-effect="fadeInLeft">
					<span className="heading-meta">Read</span>
					<h2 className="colorlib-heading">Recent Blog</h2>
					</div>
				</div>
				<div className="row">
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-1.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>Sep 20, 2019 </small> | <small> Artificial Intelligence </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="https://medium.com/datadriveninvestor/artist-vs-computer-8fe2b7745160">Can We Distinguish Between Computer and Human Art?</a></h3>
							<p>Computers can create art. But it’s a taste of what is to come.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInRight">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-2.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>Feb 27, 2019 </small> | <small> Artificial Intelligence </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="https://medium.com/datadriveninvestor/machine-man-41ed3e06c715">Machine-Man</a></h3>
							<p>Not long ago when computers first made their grand entry into our lives.</p>
						</div>
					</div>
					</div>
					<div className="col-md-4 col-sm-6 animate-box" data-animate-effect="fadeInLeft">
					<div className="blog-entry">
						<a href="blog.html" className="blog-img"><img src="images/blog-3.jpg" className="img-responsive" alt="HTML5 Bootstrap Template by colorlib.com" /></a>
						<div className="desc">
							<span><small>Feb 27, 2019 </small> | <small> Life </small> | <small> <i className="icon-bubble3" /> 4</small></span>
							<h3><a href="https://medium.com/@shubhamdhyani1992/potter-head-9ee08b81e2b1"></a>Potter Head</h3>
							<p>Back when I was in school during the 2000–2010 decade, I was really mad about Harry Potter.</p>
						</div>
					</div>
					</div>
				</div>
				<div className="row">
					<div className="col-md-12 animate-box">
					<p><a href="#" className="btn btn-primary btn-lg btn-load-more">Load more <i className="icon-reload" /></a></p>
					</div>
				</div>
			</div>
			</section>
      </div>
    )
  }
}
