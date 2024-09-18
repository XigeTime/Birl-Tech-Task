import Image from "../components/Image";
import Card from "../components/Card";
import PageHeader from "../components/PageHeader";
import {useContext} from "react";
import {ItemContext} from "../App";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faPencil, faPlusSquare, faTrash} from "@fortawesome/free-solid-svg-icons";
import {useNavigate} from "react-router-dom";

export default function Overview () {
  const { items, setCurrentItem } = useContext(ItemContext);
  const navigate = useNavigate();

  return <div className={'page-width flex-grow h-full w-full'}>
    <PageHeader
      title={`Trade-in Overview`}
    />

    <div className={'grid grid-cols-2 gap-4'}>
      <Card
        title={'Your Trade-In Items'}
      >
        <div className={'flex gap-4 flex-col'}>
          {items.map((item,key) => <TradeItem key={key} {...item} />)}

          <div
            className={'flex items-center justify-center gap-4 p-4 cursor-pointer border rounded'}
            onClick={() => {
              setCurrentItem({
                id: items.length + 2
              });
              navigate('/item-type');
            }}
          >
            <FontAwesomeIcon icon={faPlusSquare} /> Add another item
          </div>
        </div>
      </Card>

      <Card
        title={'Complete your trade-in'}
        description={'This is the same as the current flow'}
      />
    </div>
  </div>
}

function TradeItem (props) {
  const { setCurrentItem, setItems, items } = useContext(ItemContext);
  const navigate = useNavigate();

  return <div className={'flex gap-4 p-4 border rounded relative'}>
    <div>
      <Image className={"p-8 aspect-square"} />
    </div>

    <div className={'flex-grow'}>
      <div>
        <strong>Category</strong>: {props.category}
      </div>
      <div>
        <strong>Brand</strong>: Blank Expression
      </div>
      <div>
        <strong>Condition</strong>: {props.condition}
      </div>
      <div>
        <strong>Purchased</strong>: Blank Expression Online Store
      </div>
    </div>
    <div className={'flex gap-4 absolute right-4'}>
      <button className={'text-blue-400'} onClick={() => {
        setCurrentItem(items.find(i => i.id === props.id));
        navigate('/item-type');
      }}>
        <FontAwesomeIcon icon={faPencil} />
      </button>
      <button className={'text-red-400'} onClick={() => {
        setItems(items.filter(i => i.id !== props.id));
      }}>
        <FontAwesomeIcon icon={faTrash} />
      </button>
    </div>
  </div>
}