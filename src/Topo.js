export default function Topo(props) {

    return (
        <div className="topo">
			<div className="titulos">
				<h1>{props.empresa}</h1>
				<p className="subtitulo">{props.subtitulo}</p>
			</div>
		</div>
    )
}