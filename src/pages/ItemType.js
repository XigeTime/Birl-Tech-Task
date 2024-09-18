import {useContext, useEffect, useState} from "react";
import { ItemContext } from "../App";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import Image from "../components/Image";
import { useNavigate } from "react-router-dom";

export default function Home () {
  const navigate = useNavigate();
  const [ category, setCategory ] = useState();
  const { currentItem, setCurrentItem } = useContext(ItemContext);

  useEffect(() => {
    if (!currentItem) {
      setCurrentItem({
        id: 1
      });
    }
  }, [ currentItem ]);

  if (!currentItem)
    return null;

  return <div className={'page-width flex-grow h-full w-full gap-4'}>
    <PageHeader
      title={`Item ${currentItem.id}: What are you trading in?`}
    />

    <Card
      large
      title={'Choose your Blank Expression item category'}
      description={'Please use this portal to trade-in Blank Expression items only.'}
    >
      <div className={'flex gap-4 justify-center my-8'}>
        <CategoryCard
          credit={'Up to £15'}
          title={'Sweatshirts'}
          categoryId={'Sweatshirts'}
          onClick={() => setCategory('Sweatshirts')}
          active={category === 'Sweatshirts'}
        />
        <CategoryCard
          credit={'Up to £25'}
          title={'Hoodie'}
          categoryId={'Hoodie'}
          onClick={() => setCategory('Hoodie')}
          active={category === 'Hoodie'}
        />
        <CategoryCard
          credit={'Up to £15'}
          title={'Sweatpant'}
          categoryId={'Sweatpant'}
          onClick={() => setCategory('Sweatpant')}
          active={category === 'Sweatpant'}
        />
        <CategoryCard
          credit={'Up to £15'}
          title={'Tee Shirt'}
          categoryId={'Tee Shirt'}
          onClick={() => setCategory('Tee Shirt')}
          active={category === 'Tee Shirt'}
        />
      </div>

      <div className={'flex justify-center my-4'}>
        <button
          onClick={() => {
            setCurrentItem({
              ...currentItem,
              category: category
            });
            navigate('/condition');
          }}
          className={'button button--primary button--large'}
        >
          Trade-in item
        </button>
      </div>
    </Card>
  </div>
}

function CategoryCard (props) {
  return <div
    onClick={props.onClick}
    className={`flex flex-col cursor-pointer`}
  >
    <Image className={`p-20 border-l-2 border-r-2 border-t-2 rounded-b-none${props.active ? ' border-gray-700' : ' border-white'}`} />

    <div className={'bg-gray-700 uppercase text-white font-bold p-2 text-center rounded-b'}>
      {props.credit}
    </div>

    <p className={'text-center mt-2'}>{props.title}</p>
  </div>
}