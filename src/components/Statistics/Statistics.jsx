import css from "./Statistics.module.css"
import PropTypes from "prop-types"
import getRandomColor from "../../utils/getRandomColor"

export default function Statistics({ title, stats }) {
	return (
		<section className={css.statistics}>
			{title && <h2 className={css.title}>Upload stats</h2>}
			<ul className={css.statList}>
				{stats.map((data) => (
					<li key={data.id} className={css.item} style={{ backgroundColor: getRandomColor() }}>
						<span>{data.label}</span>
						<span className={css.percentage}>{data.percentage}%</span>
					</li>
				))}
			</ul>
		</section>
	)
}

Statistics.propTypes = {
	stats: PropTypes.arrayOf(
		PropTypes.shape({
			id: PropTypes.string.isRequired,
			label: PropTypes.string.isRequired,
			percentage: PropTypes.number.isRequired,
		}).isRequired
	).isRequired,
	title: PropTypes.string,
}
