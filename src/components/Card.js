import CardHeader from "./CardHeader";

export default function Card (props) {
  return <div className={'bg-gray-50 rounded p-4'}>
    <div className={props.large ? 'text-center' : ''}>
      {props.title || props.description ? <CardHeader {...props} /> : ''}
    </div>

    {props.children}
  </div>
}