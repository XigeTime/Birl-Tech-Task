import Image from "../components/Image";
import Card from "../components/Card";
import CardLink from "../components/CardLink";

export default function Home () {
  return <div className={'page-width grid grid-cols-2 flex-grow h-full w-full gap-4'}>
    <Image />

    <Card
      title={'Welcome to Birl Trade-In'}
      description={'To begin your trade-in, please select the option below that applies to you.'}
    >
      <div className={'flex flex-col gap-4'}>
        <CardLink
          link={'/item-type'}
          title={'I have multiple Blank Expression items I’d like to trade-in'}
          description={'Choose this  option if you purchased multiple items you want to trade-in. You will be able to configure each item separately.'}
        />
        <CardLink
          link={'#'}
          title={'Bought an item through the Blank Expression online store'}
          description={'Choose this  option if you purchased the item you want to trade-in through the Blank Expression online store. You will be able to trade-in your item directly from your account.'}
        />
        <CardLink
          link={'#'}
          title={'Bought a Blank Expression item another way'}
          description={'Choose this  option if you purchased the item you want to trade-in from a Blank Expression store or another stockist.'}
        />
      </div>
    </Card>
  </div>
}