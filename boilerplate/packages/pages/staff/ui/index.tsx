import './style.scss';
import { KitchenOngoingCard } from '@zocom/kitchen_ongoing_card';
import { KitchenDoneCard } from '@zocom/kitchen_done_card';
import { Header } from '@zocom/header';

export const StaffOrders = () => {
  return (
    <section className='staff'>
      <Header />
      <section className='staff__container'>
        <section className='staff__ongoing'>
          <h2 className='staff__heading'>ongoing <hr className='staff__line'></hr></h2>
          <KitchenOngoingCard />
        </section>
        
        <section className='staff__done'>
          <h2 className='staff__heading'>done <hr className='staff__line'></hr></h2>
          <KitchenDoneCard />
        </section>
      </section>
    </section>
  );
};
