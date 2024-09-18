import { useContext } from "react";
import { ItemContext } from "../App";
import PageHeader from "../components/PageHeader";
import Card from "../components/Card";
import { useNavigate } from "react-router-dom";

export default function Condition () {
  const navigate = useNavigate();
  const { currentItem, setCurrentItem } = useContext(ItemContext);

  return <div className={'page-width flex-grow h-full w-full gap-4'}>
    <PageHeader
      title={`Item ${currentItem.id}: Your item condition`}
    />

    <Card
      large
      title={'This step is the same as the video example'}
      description={'Use the button below to apply a "Good" condition to the item'}
    >
      <div className={'flex justify-center my-4'}>
        <button
          onClick={() => {
            setCurrentItem({
              ...currentItem,
              condition: "Good"
            });
            navigate('/where');
          }}
          className={'button button--primary button--large'}
        >
          My item is in good condition
        </button>
      </div>
    </Card>
  </div>
}