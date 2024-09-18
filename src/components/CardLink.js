import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from '@fortawesome/free-solid-svg-icons'
import {Link} from "react-router-dom";


export default function CardLink (props) {
  return <Link to={props.link}>
    <div className={`${props.disabled ? 'opacity-50 cursor-not-allowed' : ''}bg-white p-4 rounded border`}>
    <span className={'font-bold underline mb-2 flex items-center gap-2'}>
      {props.title}
      <FontAwesomeIcon icon={faArrowRight} className={'w-2.5'} />
    </span>
      <p className={'text-sm text-gray-500'}>{props.description}</p>
    </div>
  </Link>
}