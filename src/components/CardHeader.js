export default function CardHeader (props) {
  return <div className={'mb-4'}>
    <h1 className={'text-2xl font-bold mb-2'}>{props.title}</h1>
    {props.description && <p>{props.description}</p>}
  </div>
}