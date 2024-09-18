import {useContext, useEffect} from "react";
import { ItemContext } from "../App";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";
import CardLink from "../components/CardLink";

export default function Where () {
  const { currentItem, items, setItems, setCurrentItem } = useContext(ItemContext);

  useEffect(() => {
    setItems([
      ...items.filter(i => i.id !== currentItem.id),
      currentItem
    ]);
  }, [ currentItem ]);

  return <div className={'page-width flex-grow h-full w-full gap-4'}>
    <PageHeader
      title={`Item ${currentItem.id}: Where did you purchase your item?`}
    />

    <Card
      large
      title={'Tell us where you purchased this item'}
    >
      <div className={'flex flex-col gap-4'}>
        <CardLink
          link={'/overview'}
          title={'Bought an item through the Blank Expression online store'}
          description={'Choose this  option if you purchased the item you want to trade-in through the Blank Expression online store. You will be able to trade-in your item directly from your account.'}
        />
        <CardLink
          disabled
          link={'#'}
          title={'Bought a Blank Expression item another way'}
          description={'Choose this  option if you purchased the item you want to trade-in from a Blank Expression store or another stockist.'}
        />
      </div>
    </Card>
  </div>
}