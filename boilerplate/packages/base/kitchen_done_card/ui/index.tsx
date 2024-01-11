import { StyleTypes } from '@zocom/types';
import './styles.scss';
import { Button, ButtonType } from '@zocom/button';

export const KitchenDoneCard = () => {

    const handleClick = () => {
        console.log("clicked!");
    };

    return (
        <>
            <section className='kitchen-done-card'>
                <h1 className='kitchen-done-card__title'>#4kjwsdf234k</h1>
                <section className='kitchen-done-card__info'>
                    <section className='kitchen-done-card__items'>
                        <p>Karlstad</p>
                        <p className='kitchen-done-card__dots'></p>
                        <p>3 st</p>
                        <p>27 sek</p>
                    </section>
                    <section className='kitchen-done-card__total'>
                        <hr className='kitchen-done-card__line' />
                        <p>129 sek</p>
                    </section>
                </section>

                <section className='kitchen-done-card__time'>
                    <p>tillagningstid 4:21</p>
                </section>

                <Button type={ButtonType.STRETCH} style={StyleTypes.DEFAULT} onClick={handleClick}>
                    SERVERAD
                </Button>
            </section>
        </>
    );
};
