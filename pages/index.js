import Link from "next/link";
import Navbar from "../comps/Navbar";
import Footer from "../comps/Footer";
export default function Home() {
	return (
		<div className=''>
			<h1>Homepage</h1>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
				hic? Obcaecati rem necessitatibus omnis cupiditate.
			</p>
			<p>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequuntur,
				hic? Obcaecati rem necessitatibus omnis cupiditate.
			</p>
			<Link href='/ninjas'>See Ninja Listing</Link>
		</div>
	);
}
