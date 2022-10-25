import { useState } from "react";
import { Link, useNavigate, useParams } from "react-router-dom";
import Post from "../mockdata/Post";
import Comment from "../mockdata/Comment";

const DetailPost = () => {
	const param = useParams();
	const navigate = useNavigate();
	const data = Post.find((post) => post.id === parseInt(param.id));

	const [comment, setComment] = useState("");

	const handleChangComment = (e) => {
		setComment(e.target.value);
	};

	const handlePostComment = () => {
		const newComment = {
			content: comment,
			id_blog: parseInt(param.id),
		};
		Comment.push(newComment);
		document.getElementById("myForm").reset();
		navigate(`/${param.id}`);
	};

	return (
		<div className="container my-5">
			<div
				style={{ maxWidth: "700px", top: "-80px", paddingTop: "100px" }}
				className="mx-auto text-secondary position-relative"
			>
				<div className="text-center mb-4">
					<img
						src="https://scontent.fsgn13-4.fna.fbcdn.net/v/t1.6435-1/65557800_2263400743973830_959032846775746560_n.jpg?stp=dst-jpg_p200x200&_nc_cat=107&ccb=1-7&_nc_sid=7206a8&_nc_ohc=K7HQMsbgbVUAX9kFv7n&_nc_ht=scontent.fsgn13-4.fna&oh=00_AT_ulDNd6JlDnp-Q6Gmx3Pe4g_uRIV-ImRlcva6Je4gnGg&oe=637D4BD8"
						alt=""
						style={{
							width: "120px",
							border: "5px solid #eee",
							backgroundColor: "white",
						}}
						className="rounded-circle mx-auto text-center"
					/>
					<div>
						<small>
							<Link href="#" className="text-primary">
								Page of{" "}
							</Link>
							<Link href="#" className="text-primary">
								Thế Anh
							</Link>
						</small>
					</div>
					<h1 className="text-center font-weight-bold text-dark">
						{data.title}
					</h1>
					<div>
						<small className="text-dark">
							{`Written by `}
							<Link href="#" className="text-primary">
								Trần Lưu Thế Anh
							</Link>
						</small>
					</div>
				</div>

				<p className="my-2">{data.description}</p>
				<br />
				<br />

				<blockquote
					className="text-primary p-3 font-italic"
					style={{ borderLeft: "4px solid black", lineHeight: 2 }}
				>
					Blog này được thực hiện bởi Trần Lưu Thế Anh. Lấy thông tin
					từ nguồn wikipedia
				</blockquote>

				<br />
				<Link
					to={`/edit/${parseInt(param.id)}`}
					className="btn btn-success"
				>
					Edit Post
				</Link>

				<div className="my-3">
					<small>
						<Link href="#" className="text-primary">
							#cntt
						</Link>
						,
						<Link href="#" className="text-primary">
							#ktdl
						</Link>
						,
						<Link href="#" className="text-primary">
							#react
						</Link>
						,
						<Link href="#" className="text-primary">
							#nodejs
						</Link>
						,
						<Link href="#" className="text-primary">
							#hbs
						</Link>
					</small>
				</div>

				<div className="my-4">
					<h2>Comment</h2>
					<p>-----------------------------------------</p>
					<ul>
						{Comment.map((com, index) => (
							<li key={index}>{com.content}</li>
						))}
					</ul>
					<div className="form-group">
						<form id="myForm">
							<input
								type="text"
								className="form-control"
								id="content"
								placeholder="Enter Comment"
								name="content"
								onChange={handleChangComment}
							/>
						</form>
					</div>
					<button
						className="btn btn-primary"
						style={{ marginTop: "8px" }}
						onClick={handlePostComment}
					>
						Send
					</button>
				</div>
			</div>
		</div>
	);
};

export default DetailPost;
