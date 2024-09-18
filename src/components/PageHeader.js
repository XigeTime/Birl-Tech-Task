export default function PageHeader (props) {
  return <div className={'page-width text-center'}>
    <h1 className={'text-3xl font-bold mt-4 mb-8'}>
      {props.title}
    </h1>
  </div>
}