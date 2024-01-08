import { useEffect, useState } from "react";
import { withAuth } from "../../components/withAuth";
import Tree from "rc-tree";
import "rc-tree/assets/index.css";
import { getData } from "../../utils/api";

const BrowsePage = () => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const fetchData = async () => {
			setData(await getData());
		};
		fetchData();
	}, [data]);

	return (
		<>
			<div>browsePage</div>
			{data && <Tree treeData={data} titleRender={(e) => e.name} />}
		</>
	);
};

export default withAuth(BrowsePage);
